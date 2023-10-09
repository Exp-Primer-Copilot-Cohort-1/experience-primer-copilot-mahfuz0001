// Create web server
var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var multer = require('multer');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(req, res){
	var sql = 'SELECT * FROM comments';
	db.query(sql, function(err, result){
		if(err) throw err;
		res.render('comments', {result: result});
	});
});
