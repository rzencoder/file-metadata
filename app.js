//requirements
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/', upload.single('file'), function(req, res){
   return res.json(req.file);
});

app.listen(process.env.PORT || 3000, function() {
  console.log('app is now listening');
});
