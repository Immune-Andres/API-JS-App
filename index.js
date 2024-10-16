const express = require('express');
const axios = require('axios');
const app = express();

// Vulnerabilidad XSS
app.get('/greet', (req, res) => {
    const name = req.query.name;

    // Vulnerabilidad: Reflejar entrada del usuario sin sanitizar
    res.send(`<h1>Hola, ${name}</h1>`);
});

// Vulnerabilidad SSRF
app.get('/fetch', async (req, res) => {
    const url = req.query.url;

    try {
        // Vulnerabilidad: La entrada del usuario no está validada
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error en la solicitud');
    }
});

// Vulnerabilidad: Inyección de Código (Code Injection)
app.get('/calculate', (req, res) => {
    const formula = req.query.formula;

    // Evaluación directa de la entrada del usuario, lo que permite inyección de código
    const result = eval(formula);

    res.send(`Resultado: ${result}`);
});

// Vulnerabilidad: Inyección de cabeceras HTTP (HTTP Header Injection)
app.get('/redirect', (req, res) => {
    const url = req.query.url;

    // Manipulación directa de las cabeceras HTTP
    res.setHeader('Location', url);
    res.status(302).send('Redireccionando...');
});

// Vulnerabilidad: Almacenamiento inseguro de datos en localStorage
app.get('/login', (req, res) => {
    // Almacena un token de autenticación en localStorage sin protección
    const script = `
        <script>
            localStorage.setItem('authToken', '12345-SECRET-TOKEN');
            alert('Login successful, token stored in localStorage!');
        </script>
    `;
    res.send(script);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
