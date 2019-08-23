var express = require('express');

var companyRoutes = require('./companyRoutes');
var router = express.Router();

//test Route
router.use('/company', companyRoutes);

module.exports = router;