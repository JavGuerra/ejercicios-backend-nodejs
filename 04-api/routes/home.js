const express = require('express');
const router = express.Router();

router.get('/contacto', (req, res, next) => {
    console.log('Estamos en la página de contacto');
    next();
});

router.get('/info', (req, res) => {
    res.send('Página de info');
});

router.get('/error', (req, res, next) => {
    console.log('Página de error');
    next(new Error('¡Ups! Algo salió mal.'));
});

module.exports = router;