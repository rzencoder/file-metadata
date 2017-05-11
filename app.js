//requirements
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log('app is now listening');
});
