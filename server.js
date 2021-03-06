const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//serves html page
app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('/getData/:domain', (req, res) =>{
  //todo: create api endpoint for getting domain Data.
});

//reads the .env file
dotenv.config();

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})