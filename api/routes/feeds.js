var express = require('express');
var mongoose = require('mongoose');
var FeedParser = require('feedparser');
var Promise = require("bluebird");
var request = require('request');
var extend = require('extend');
var stats = require("simple-statistics");
var url = require ("url")

var Feed = require('../models/Feed');
var Episode = require('../models/Episode');

var router = express.Router();

router.get('/', function (req, res, next) {
    var param = req.query.param;

    if(param) {
        Promise.props({
            title: Feed.searchByAttr('title', param),
            url: Feed.searchByAttr('url', param),
            description: Feed.searchByAttr('description', param)
        }).then(function(result) {
            res.json(result);
        });
    } else {
        Feed.find()
            .exec(function (err, feeds) {
                res.json(feeds);
            });
    }
});

router.get('/listening', function (req, res, next) {
    var usr = req.user[0];
    if(usr) {
        Feed.find({
            '_id': { $in: usr.feeds }
        }, function(err, feeds) {
            if(!err) {
                res.json(feeds)
            }
        });
    } else {
        res.json([]);
    }
});

router.get('/all', function (req, res, next) {
    Feed.find({})
        .sort({pub_date: 1})
        .limit(20)
        .exec(function(err, feeds) {
            if(!err) {
                res.json(feeds);
            }
        });
});

router.get('/autocomplete', function(req, res, next) {
    Feed.autocomplete(req.query.param)
        .then(function(feeds) {
            res.json(feeds);
        });
});

router.post('/', function (req, res, next) {
    var feedUrl = req.body.feedUrl,
        user = req.user[0];

    if(!feedUrl) {
        res.json({err: "feedUrl is required option"});
        return;
    }

    findOrCreateFeed(feedUrl)
        .then(function(feed) {return user.initFeeds(feed);})
        .then(function(feed) {
            return new Promise(function(resolve, reject) {
                Promise.props({
                    feed: feed.promiseSave(),
                    user: user.promiseSave()
                }).then(function(result) {
                    resolve(result);
                }).catch(function(err) {
                    reject(err);
                });
            });
        })
        .then(function (result) {
            res.json({
                user: result.user,
                feed: result.feed
            });
        });
});

function findOrCreateFeed(feedUrl) {
    return new Promise(function (resolve, reject) {
        Feed.findOne({url: feedUrl}, function (err, feed) {
            if (err) {
                reject(err)
            }
            if (feed) {
                resolve(feed);
            } else {
                getFeed(feedUrl)
                    .then(parseFeed)
                    .then(saveEpisodes)
                    .then(createFeed)
                    .then(function (feed) {
                        resolve(feed);
                    });
            }
        });
    });
}

function getFeed(feedUrl) {
    return new Promise(function (resolve, reject) {
        var r = request({
            uri: feedUrl,
            headers: {
                accepts: "application/xml"
            }
        });
        resolve(r);
    });
}

function parseFeed(feedRequest) {
    return new Promise(function (resolve, reject) {
        var feedParser = new FeedParser(),
            feed;

        feedRequest.pipe(feedParser);

        feedParser.on('error', function (err) {
            reject(new Error(err));
        });
        feedParser.on('readable', function () {
            var stream = this,
                item;
            if (!feed) {
                feed = extend(true, {feedUrl: feedRequest.uri, items: []}, this.meta);
            }

            while (item = stream.read()) {
                feed.items.push(item)
            }
        });
        feedParser.on('end', function () {
            resolve(feed);
        });
    });
}

function saveEpisodes(feedObj) {
    return new Promise(function (resolve, reject) {
        var items = feedObj.items,
            promises = [];

        for (var i = 0; i < items.length; i++) {
            promises.push(saveEpisode(items[i]));
        }
        Promise.all(promises).then(function (episodes) {
            feedObj.episodes = [];
            for (var i = 0; i < episodes.length; i++) {
                feedObj.episodes.push(episodes[i]._id);
            }
            resolve(feedObj);
        }).catch(function (reason) {
            reject(new Error(reason));
        });
    });
}

function saveEpisode(episodeObj) {
    return new Promise(function (resolve, reject) {
        Episode.findOrCreate({url: episodeObj.link}, function (err, episode, created) {
            if (err) {
                reject(err);
            }
            episode.title = episodeObj.title;
            episode.description = episodeObj.description;
            episode.summary = episodeObj.summary;
            episode.date = episodeObj.date;
            episode.pub_date = episodeObj.pubDate;
            episode.author = episodeObj.author;
            episode.comments_url = episodeObj.comments;
            episode.source = episodeObj.source;
            episode.image = episodeObj.image;
            episode.save(function(err) {
                if(err) {
                    reject(err);
                }
                resolve(episode);
            });


        });
    });
}

function createFeed(feedObj) {
    var feed = new Feed({
        title: feedObj.title,
        description: feedObj.description,
        date: feedObj.date,
        pub_date: feedObj.pubdate,
        image: feedObj.image,
        copyright: feedObj.copyright,
        episodes: feedObj.episodes,
        last_update: Date.now()
    });
    feed.url.addToSet(feedObj.link);
    feed.url.addToSet(feedObj.xmlurl);
    feed.url.addToSet(feedObj.feedUrl.href);

    return feed;
}

module.exports = router;