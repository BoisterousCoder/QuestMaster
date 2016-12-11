var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //render the main menu
    res.render('mainMenu', {
        title: 'Quest Master'
    });
});

router.get('/joinPublic', function(req, res) {
    //render the game
    res.render('game', {
        isHosting: false,
        isPublicGame: true
    });
});

router.get('/joinPrivate', function(req, res) {
    //render the game
    res.render('game', {
        isHosting: false,
        isPublicGame: false
    });
});

router.get('/createPrivate', function(req, res) {
    //render the game
    res.render('game', {
        isHosting: true,
        isPublicGame: false
    });
});

router.get('/game2', function(req, res) {
    //render the game
    res.render('babylon');
});
module.exports = router;