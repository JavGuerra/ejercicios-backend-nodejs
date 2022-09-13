# Ejercicio MySQL

# Instrucciones de uso

* Tras descargar, renombrar el fichero `.env.example` a `.env` y rellenar.
* Para lanzar el script de desarrollo en Windows, usar: `npm run devWin`.
* Se han hecho cambios en el fichero `create.js` que requiere ejecutarlo.
  Concretamente se ha cambiado `addres` por `address` en la constante
  `queryCreateProductsTable`, y se han comentado las lineas de `client.end()`
  y `client.connect()`. Ver «A tener en cuenta» más abajo.

## Características

* Al pasar sobre el nombre del fabricante, en cada línea del listado, se muestra
  un recuadro flotante con la información de ese fabricante.
* Los botones se activan o desactivan en función de si los campos del formulario
  tienen contenido o no.
* El diseño del cliente es adaptable (_responsive_).
* La consola de node.js muestra las rutas consultadas y las consultas SQL.

## A tener en cuenta

No se implementa el cierre de la conexión a la BBDD ya que si se usa
`client.end()` con cada conexión, no se pueden realizar conexiones múltiples.
Se emplea en su lugar un `pool` de conexiones. Ver `connection.js`. 

# Enunciado

Mediante un formulario que contiene las campos `modelo`, `color`, `precio` y
`marca`, listar el contenido de la tabla `products` en función del contenido
de estos campos. Mostrar información del fabricante en cada producto. 

## Cambios sobre el ejercicio anterior

Debemos replicar el funcionamiento de nuestra aplicación `concesionario`
sustituyendo la base de datos PostgreSQL por MySQL.

Deberemos adaptar nuestro servidor de Node a la nueva base de datos (editar
servicios, editar conexión, editar script para crear tabla y cualquier
funcionalidad perteneciente a esto).

Os proporcionamos el script create.js para crear las tablas.