# Back end MongoDB

Consulta la BBDD 'Concesionario' en MongoDB usando Mongoose y populate.

## Rutas

### Fabricantes

__Todos los fabricantes__:
localhost:3000/manufacturers/

__Un único fabricante por su `cif`__: 
localhost:3000/manufacturers/<cif>
B60258512

### Productos

__Todos los productos__:
localhost:3000/products/

__Todos los productos de un fabricante por su `manufacturer`__: 
localhost:3000/products/<manufacturer>  
// TODO No funciona con populate

__Filtrado de productos__:
localhost:3000/search?modelo=<modelo>&color<color>&precio=<precio>&marca=<marca>  
// TODO El filtrado por `marca` no funciona con populate
