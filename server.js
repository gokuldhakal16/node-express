const express = require('express');
const path = require('path');

// Init App
const app = express()

// PORT
const port = 3000

// Load View Engine

// Home Route
app.get('/',(req, res) =>
    res.send("Hello world form Node.js & Express project")
)

// Start Server
app.listen(port, () =>
    console.log("Connected on port " + port)
)