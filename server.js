const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Endpoint to serve a random location from locations.json
app.get('/locations', (req, res) => {
    fs.readFile('locations.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading locations.json:", err);
            res.status(500).send("Unable to load locations.");
            return;
        }
        const locations = JSON.parse(data);
        const randomIndex = Math.floor(Math.random() * locations.length);
        res.json(locations[randomIndex]);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
