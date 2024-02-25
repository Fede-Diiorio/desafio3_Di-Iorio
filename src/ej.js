const express = require('express');
const app = express();

app.get('/bienvenida', (req, res) => {
    res.send('<h1 style=\'color: blue\'>¡Bienvenidos en Azul!</h1>')
});

app.get('/usuario', (req, res) => {
    res.json({
        nombre: 'Fede',
        aprellido: 'Diyo',
        edad: 28,
        correo: 'correo@correo'
    });
});

app.listen(8080, () => {
    console.log('Sever más que listo');
})
