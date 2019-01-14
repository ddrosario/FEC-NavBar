const db = require('../database/models.js');
const random = require('mongoose-simple-random');

const controller = {
  fetch: (req, res) => {
    db.search
      .findRandom(req.query, {}, { limit: 10 }, (err, results) => {
        if (err) {
          console.log('sent a 404', err);
          res.status(404).send(err);
        } else {
          console.log('sent a 200');
          res.status(200).send(results);
        }
      })
      .limit(10);
    console.log('here is the req in controller', req.query);
  },
  fetchAds: (req, res) => {
    db.photo.find(req.query, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  post: (req, res) => {
    let search = db.search;
    new search(req.body).save((err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  }
};

module.exports = controller;
