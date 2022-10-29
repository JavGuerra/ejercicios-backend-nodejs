# Back end MongoDB

Backend para consulta a la BBDD 'Concesionario' en MongoDB usando Mongoose, populate y paginate.

Por Javier Guerra, octubre 2022.

## Errores devueltos (response_code)
0. OK. La consulta se ha realizado satisfactoriamente.
1. No ha habido coincidencias en la consulta. Resultado vacío.
2. Faltan uno o varios parámetros para realizar la consulta.

## Rutas

### Fabricantes

__Todos los fabricantes__:  
http://localhost:3000/manufacturers/

__Un único fabricante por su `cif`__:   
http://localhost:3000/manufacturers/{cif}

### Productos

__Todos los productos__:  
http://localhost:3000/products/

__Filtrado de productos__:  
http://localhost:3000/search?modelo={name}&color{color}&precio={price}&marca={manufacturer}  
// TODO El filtrado por `marca` no funciona con populate


