const express = require('express');
const router = express.Router();

// Imports
const db = require('./mockDB.json');
const { exactSearch, partialSearch } = require('./utils');


// Route for /search
router.post('/search', async(req, res) => {
    const { searchText, partial } = req.body;
    let results = []
    if (!searchText) {
        return res.status(400).send({
            message: 'searchText required in payload'
        })
    }
    // if (searchText === '') {
    //     return res.status(200).send(db.objects);
    // }
    const names = searchText.toLowerCase().split(' ');
    try {
        if (partial) {
            results = await partialSearch(
                db.objects,
                names,
                partial
            );
        } else {
            results = await exactSearch(
                db.objects,
                names,
                partial
            );
        }
        return res.status(200).send(results);
    } catch(err) {
        return res.status(429).send(results)
    }
})

module.exports = router;