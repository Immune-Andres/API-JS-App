const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const apiKey = 'your_openweather_api_key'; // No debe estar hardcoded

// Vulnerabilidad de falta de validación
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send("City is required");
    }
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Error fetching weather data");
    }
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
