//crear web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(bodyParser.json());
//crear servidor
const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
    });

app.post('/api/endpoint', (req, res) => {
    const { data } = req.body;
    axios.post('http://localhost:4000/api/endpoint', { data })
    .then(response => {
    res.send(response.data);
    })
    .catch(error => {
    res.send
    (error);
    }
    );
    });

app.put('/api/endpoint', (req, res) => {
    const { data } = req.body;
    axios.put('http://localhost:4000/api/endpoint', { data })
    .then(response => {
    res.send(response.data);
    })
    .catch(error => {
    res.send(error);
    });
    });

app.delete('/api/endpoint', (req, res) => {
    axios.delete('http://localhost:4000/api/endpoint')
    .then(response => {
    res.send(response.data);
    })
    .catch(error => {
    res.send(error);
    });
    });

app.get('/api/endpoint', (req, res) => {
    axios.get('http://localhost:4000/api/endpoint')
    .then(response => {
    res.send(response.data);
    })
    .catch(error => {
    res.send(error);
    });
    }
    );

app.listen(3000, () => {
    console.log('Server running on port 3000');
    });









