const express = require('express');
const router  = express.Router();
const CompanyController = require('../controller/company');

router.post('/add', [
    CompanyController.add
]);

router.get('/getAll', [
    CompanyController.get
]);

router.post('/delete', [
    CompanyController.delete
]);

router.put('/update', [
    CompanyController.update
]);

module.exports = router;