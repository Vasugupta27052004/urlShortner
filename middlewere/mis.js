const express = require('express');
const app = express();
const mid= app.use(express.urlencoded({extended:true}));
module.exports = mid;