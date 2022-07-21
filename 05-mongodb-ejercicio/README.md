# Ejercicio MongoDB

Por Javier Guerra
2022-07-21

## Instrucciones de uso

Tras instalar, renombrar el fichero .env.example a .env y completar las
variables globales.

Incluir en la ruta en ./services/DB.js el usuario y contraseña si es necesario.

Para lanzar el script en desarrollo en Windows usar: npm run dev

Para lanzar el script en desarrollo en Linux usar: npm run devLinux

# Características

El fichero index.js abre la conexión a la BBDD y esta permanece abierta durante
toda la sesión. Cada ruta hace uso de la misma conexión abierta a la BBDD.

Los ficheros en ./routes son ejecutados mediante su respectiva URL.
(ver listado de rutas en index.js)

Los resultados se muestran por consola.

La aplicación y la conexión a la BBDD se cierra con la ruta '/exit'.