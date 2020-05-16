const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var recentDays = 5;

var schema = {
  "type": "array",
  "minItems": 3,
  "maxItems": 5,
  "items": {
	  "type": "object",
	  "properties": {
	    "name": {
	      "type": "string",
	      "faker": "name.findName"
	    },
	    "date": {
	      "type": "string",
	      "faker": "date.recent"
	    },
	    "rank" : {
	      "type": "integer", 
	       "minimum": 7,
  		   "maximum": 10
	    },
	    "age" : {
	    	"type": "integer",
 			 "minimum": 7,
 			 "maximum": 30,
 			 "multipleOf": 7,
  			"exclusiveMinimum": true
	    }
	  },
	  "required": [
	    "name",
	    "age", 
	    "date",
	    "rank"
	   ]
	  }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
  	   console.log(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('users', 
	  	{  users:  sample });
  });

  
});

module.exports = router;
