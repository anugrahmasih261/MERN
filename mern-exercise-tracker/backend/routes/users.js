const router = require('express').Router();
let User = require('../models/user.model');   //remember here we put models file name not schema name user.model is file name


//here find() is a promise which will return data from schema users in json form so we written res.json(users)
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;