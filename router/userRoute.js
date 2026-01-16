// ...existing code...
const express = require('express');
const router = express.Router();
const User = require('../model/user');

const {Short,Redirect,show,deleteUrl} = require('../controller/route');



router.post('/', Short);
router.get('/:shortId', Redirect);
router.get('/', show);
router.delete('/:id', deleteUrl);
module.exports = router;
