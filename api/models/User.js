var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var passport = require('passport');
var Promise = require("bluebird");

var User;
var UserSchema = new mongoose.Schema({
    id: {type: String, index: {unique: true}},
    provider: String,
    provider_id: String,
    access_token: String,
    display_name: String,
    first_name: String,
    last_name: String,
    emails: [String],
    photos: [String],
    feeds: [{
        _id: {type: mongoose.Schema.Types.ObjectId, ref: 'Feed'},
        title: String,
        episode_status: [{  // Remains empty until user starts listening.
            _id: {type: mongoose.Schema.Types.ObjectId, ref: 'Feed'},
            title: String,
            completed: Boolean,
            listened: Number
        }]
    }]
});
UserSchema.methods.initFeeds = function(feed) {
    var i, found = false;
    for(i=0; i<this.feeds.length; i++) {
        if(this.feeds._id === feed._id) {
            found = true;
            break;
        }
    }

    if(!found) {
        this.feeds.addToSet({
            _id: feed._id,
            title: feed.title
        });
    }

    return feed;
};

UserSchema.methods.promiseSave = function() {
    var self = this;
    return new Promise(function(resolve, reject) {
        self.save(function(err) {
            if(err) {reject(err);}
            resolve(self);
        });
    });
};

UserSchema.plugin(findOrCreate);
User = mongoose.model('User', UserSchema);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.find({id:id}, function (err, user) {
        done(err, user);
    });
});

module.exports = User;