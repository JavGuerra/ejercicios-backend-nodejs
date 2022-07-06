const config = require('./config');
const express = require('express');
const app = express();
const router = express.Router();

// Ruta estática para servir varios ficheros
app.use(express.static(__dirname + '/public'));

// app.get('/', site.index);

// Middleware sin ruta de acceso
var ruta = (req, res, next) => {
  console.log('Ruta: ' + req.url);
  next();
};
// Carga del Middleware que se ejecutará cada vez que se recibe una solicitud a partir de ahora.
app.use(ruta);

// Servir un fichero tras petición get (requiere ruta completa __dirname)
app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/test.html');
});


app.use('/home', router);

router.use('/info', (req, res) => {
  res.send('Llegamos a la home');
});

router.use('/contacto', (req, res, next) => {
  res.send('Página de contacto');
});



app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error 500: Algo salió mal.');
});

app.use(function(req, res, next) {
  res.status(404).send('Error 404: No encontrado.');
});

app.listen(config.PORT);
console.log(`Express iniciado en el puerto ${config.PORT}.`);