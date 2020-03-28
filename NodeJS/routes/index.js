const mongoose = require('../database');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());

// Adding user schema

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
});

// Adding schema to model

const User = mongoose.model('User', userSchema);

// Loading mainpage

router.get('/', (req, res) =>{
    res.sendFile('homepage.html',{ root: __dirname });
});

// Retrieve user

router.get('/data', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

// Add User 

router.post('/addUser', async (req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    const result = await user.save();
    res.status(201).end('Created!');
});

// Update User 

router.put('/updateUser', async (req, res) => {
    const user = await User.findById(req.body.id);
    if(!user) return;

    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;

    const result = await user.save();
    res.status(200).end('User Updated!');
});

// Delete User 

router.delete('/deleteUser', async (req, res) => {
    const user = await User.findByIdAndDelete(req.body.id);
    if(!user) res.status(500).end('Internal Server Error');
    res.status(200).end('User Deleted!');
});

module.exports = router;