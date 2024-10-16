const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/fetch" method="POST">
            API endpoint: <input name="url">
            <input type="submit">
        </form>
    `);
});

app.post('/fetch', async (req, res) => {
    const apiUrl = req.body.url;
    const response = await fetch(apiUrl);  // Vulnerable a SSRF
    const data = await response.text();
    res.send(data);  // Vulnerable a XSS
});

app.listen(3000, () => console.log('Server running on port 3000'));
