# Ejercicio PostgreSQL

# Enunciado

Mediante un formulario que contiene las campos `modelo`, `color`, `precio` y
`marca`, listar el contenido de la tabla `products` en función del contenido
de estos campos. Mostrar información del fabricante en cada producto. 

## Cambios sobre le ejercicio anterior

Debemos replicar el funcionamiento de nuestra aplicación `concesionario`
sustituyendo la base de datos MongoDB por PostgreSQL.

Deberemos adaptar nuestro servidor de Node a la nueva base de datos (editar
servicios, editar conexión, editar script para crear tabla, borrar esquemas de
mongo y cualquier funcionalidad perteneciente a esto).

Os proporcionamos el script create.js para crear las tablas.

## Indicaciones

Al pasar sobre el nombre del fabricante en cada línea del listado, se muestra
un recuadro flotante con la información de ese fabrocante.

Los botones se activan o desactivan en función de si los campos del formulario
tienen contenido o no.

## A tener en cuenta

No se implementa el cierre de la conexión a la BBDD ya que si se usa
`client.end()` con cada conexión, no se pueden realizar conexiones múltiples.
Se emplea en su lugar un `pool` de conexiones. Ver `connection.js`. 