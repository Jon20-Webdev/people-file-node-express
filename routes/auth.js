const express = require('express');
const auth = express.Router();

auth.post(('/'), (req, res) => {
    const {name} = req.body;
    console.log(name);
    if (name) {
        return res.status(200).send(`<h3 style="font-family: sans-serif;" >Welcome ${name}</h3>`)
    } else {
        return res.sendStatus(401)
    }
});

module.exports = auth;