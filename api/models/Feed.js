var Promise = require("bluebird");
var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var findOrCreate = require('mongoose-findorcreate');

var Feed;

var FeedSchema = new mongoose.Schema({
    title: {type:String, es_indexed:true, es_boost: 2.0, es_analyzer: 'feed_analyzer'},
    description: {type:String, es_indexed:true, es_analyzer: 'feed_analyzer'},
    url: [{type:String, es_indexed:true}],
    date: {type:Date, es_indexed:false},
    pub_date: {type:Date, es_indexed:false},
    image: {type:Object, es_indexed:false},
    copyright: {type:String, es_indexed:false},
    episodes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Episode', es_indexed:false}],
    last_update: {type: Date, default: 0, es_indexed:false},
    update_statistics : {type:Object, es_indexed:false} //{mean: Number, standard_deviation: Number, min: Number, max : Number}
});

FeedSchema.methods.promiseSave = function() {
    var self = this;
    return new Promise(function(resolve, reject) {
        self.save(function(err) {
            if(err) {reject(err);}
            resolve(self);
        });
    });
};

FeedSchema.statics.searchByAttr = function(attr, value) {
    var self = this;
    return new Promise(function(resolve, reject) {
        var query = {fuzzy: {}};
        query.fuzzy[attr] = value;

        self.search(query, function(err, results) {
            if(err) {
                reject(err);
            }
            resolve(results);
        });
    });
};

FeedSchema.statics.autocomplete = function(typed) {
    var self = this;
    return new Promise(function(resolve, reject) {
        var query = {
            "match": {
                "title": typed
            }
        };

        self.search(query, function(err, feeds) {
            if(err) {reject(err);}
            resolve(feeds);
        });
    });
};

FeedSchema.plugin(findOrCreate);
FeedSchema.plugin(mongoosastic)

Feed = mongoose.model('Feed', FeedSchema);

module.exports = Feed;