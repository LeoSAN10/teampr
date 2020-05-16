const express = require('express');
const router = express.Router();

const util = require('util')
const chance = require('chance')
const faker = require('faker')
 

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', 
	  	{ company:  'Moorise', 
	  	  year: 2020,
	  	  version: "0.0.1"
	  	});

  
});

module.exports = router;
