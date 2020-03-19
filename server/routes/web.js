const express = require('express');
const router = express.Router();
const auth = require('./route-config').auth;
const Controller = require('./route-config').Controller;

router.route('/').get(Controller.Home.index);
router.route('/add').post(auth, Controller.Home.add);
router.route('/delete/:id').delete(auth, Controller.Home.delete);

module.exports = router;