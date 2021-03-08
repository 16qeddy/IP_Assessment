const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//reads the .env file for environment variables
dotenv.config();

//serves html page
app.use('/', express.static(path.join(__dirname, 'dist')));

//takes in a domain and requests data from WHOISAPI and returns the response in a JSON format
//domain param can be one of the following: domain, IPv4, IPv6, or email
app.get('/getdata/:domain', (req, res) =>{
  let url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.API_KEY}&domainName=${req.params.domain}&outputFormat=JSON`
  axios.get(url)
  .then((data)=>{
    res.send(data.data);
  })
  .catch(err =>{
    console.log(err);
    res.send(`there was an error ${API_KEY}`);
  });
});


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})