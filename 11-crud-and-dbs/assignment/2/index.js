var express = require('express')
// var dict = require('pokedex.json')
//handlebars start
var bodyParser = require ('body-parser')
var exphbs = require('express-handlebars')
var mongoose = require('mongoose')
var Entry = require ('./models/entry.js')

//connect mongodatabase. URL will point to database created
mongose.connect('mongodb://localhost:27017/guestbook')

//express setup
var app = express()


app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())

app.get ('/', function (req, res) {
	//second can be name whatever. Find is a call back function which will return 'guests'
	Entry.find({}, function(err, guests))
  res.render('home', {name: 'Felipe', guests: guest} )
})

//create new entry
app.post ('/' function(req, res) {
	var currentEntry = new Entry({
		content: req.body.content,
		name: req.body.name
	})
	currentEntry.save()
	
	Entry.find({}, function(err, guests))
   res.render('home', {name: 'Felipe', guests: guest} ))
})
	
})

app.listen(3000, function () {
  console.log('pokedex ok');
})
//express setup end

//connect handlebars to express:

