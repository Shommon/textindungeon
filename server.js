const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

// Serve the static files
app.use(express.static(path.join(__dirname, '/html/styles')));


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(path.join(__dirname, 'index.html'))
});