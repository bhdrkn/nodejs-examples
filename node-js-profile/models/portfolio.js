/**
 * Created by bhdrkn on 06.11.2013.
 */

var mongoose = require('mongoose');

var portfolioSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    profile: {
        name: String,
        job: String,
        description: String,
        facebook: String,
        twitter: String,
        google: String,
        pinterest: String,
        stumbleupon: String,
        dribbble: String,
        picture: String,
        thumbnail: String
    },
    skills: [
        {
            shortcode: String,
            fullname: String,
            value: {type: Number, min: 0, max: 100},
            color: String
        }
    ],
    works: [
        {
            title: String,
            thumbnail: String,
            image: String
        }
    ],
    resume: {
        description: String,
        file: String,
        size: String
    }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
