const controller = require('./controller.js');
const router = require('express').Router();

router
  .route('/searches')
  .get((req, res) => {
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
router
  .route('/brands')
  .get((req, res) => {
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
router
  .route('/')
  .get((req, res) => {
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
router
  .route('/ads')
  .get((req, res) => {
    controller.fetchAds(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
module.exports = router;
