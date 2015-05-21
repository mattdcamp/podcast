var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var Episode;
var EpisodeSchema = new mongoose.Schema({
    title: String,
    description: String,
    summary: String,
    date: Date,
    pub_date: Date,
    author: String,
    url: {type: String, index: {unique: true}},
    comments_url: String,
    source: {url: String, title: String},
    image: {url: String, title: String}
});
EpisodeSchema.plugin(findOrCreate);
Episode = mongoose.model('Episode', EpisodeSchema);

module.exports = Episode;