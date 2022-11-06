# Back end MongoDB

Backend para consulta a la BBDD 'Concesionario' en MongoDB usando Mongoose, populate y paginate.

Por Javier Guerra, octubre 2022.

## Errores devueltos (response_code)
0. OK. La consulta se ha realizado satisfactoriamente.
1. No ha habido coincidencias en la consulta. Resultado vacío.

## Rutas

### Fabricantes

__Todos los fabricantes__:  
http://localhost:3000/manufacturers/

__Un único fabricante por su `name`__:   
http://localhost:3000/manufacturers/{name}

### Productos

__Todos los productos__:  
http://localhost:3000/products/

__Filtrado de productos__:  
http://localhost:3000/products?model={model}&color{color}&price={price}&brand={brand}

Aplican los parámetros por defecto: &page={page}&limit={limit}&sortprice={sortprice}
