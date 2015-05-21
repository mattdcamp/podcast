var express = require('express');
var router = express.Router();

var passport = require('passport');
var GoogleStrategy = require('passport-google-openidconnect').Strategy;
var User = require('../../models/User');

passport.use(new GoogleStrategy({
        callbackURL: 'http://localhost:3000/login/google/return',
        clientID: '855822036543-n1541kqrcg59o5qoc959n20hj0r7eme8.apps.googleusercontent.com',
        clientSecret: 'f2dlMziBV16HWnuSukBMcK0z'
    },
    function(iss, sub, profile, accessToken, refreshToken, done) {
        var name = profile.name,
            firstName = (name && name.givenName) ? name.givenName : '',
            lastName = (name && name.familyName ) ? name.familyName  : '',
            emails = [],
            photos = [],
            id = 'google' + profile.id;

            emails.push(profile._json.email);
            photos.push(profile._json.picture);

            User.findOrCreate({id: id}, function(err, user, created) {
                if(err) {
                    console.log('Error find/create.', err);
                    done(err, user);
                    return;
                }

                if(created) {
                    console.log('Created', user);
                }

                user.access_token = profile.access_token;
                user.provider = 'google';
                user.provider_id = profile.id;
                user.display_name = profile.display_name;
                user.first_name = firstName;
                user.last_name = lastName;
                user.emails = emails;
                user.photos = photos;
                user.save();

                done(err, user);
            });
    })
);

router.get('/', passport.authenticate('google-openidconnect', { scope: ['email', 'profile'] }));

router.get('/return', passport.authenticate('google-openidconnect', {successRedirect: '/', failureRedirect: '/login' }));



module.exports = router;