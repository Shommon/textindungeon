const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Set the static file directories
// const publicDirectory = path.join(__dirname, 'html');

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    // console.log((__dirname + '/index.html'))
});


