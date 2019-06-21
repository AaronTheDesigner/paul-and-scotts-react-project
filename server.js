const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/getprice', (req, res) => {
    axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD')
        .then(response => {
            res.json(response.data)
        })
        .catch(err => {
            console.log(err)
        })
})

port = 5000


app.listen(port, () => console.log(`App listening on Port ${ port }`))