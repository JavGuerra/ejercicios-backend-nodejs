const url     = `http://localhost:3000/`;
const form    = document.formulario;
const borrar  = $('#borrar' );
const enviar  = $('#enviar' );
const estatus = $('#estatus');
const resulta = $('#resulta');
const listado = $('#listado');
const marca   = $('#marca'  );

borrar.onclick = resetea;
enviar.onclick = e => procesaForm(e);
form.modelo.onchange = estadoEnviar;
form.color.onchange  = estadoEnviar;
form.precio.onchange = estadoEnviar;
form.marca.onchange  = estadoEnviar;

resetea();

/**
 * Si el formulario está vacío, limpia la página y lista todos los productos.
 */
function resetea() {
  inactivaBtn(enviar, true);
  inactivaBtn(borrar, true);
  limpia();
  procesaConsulta('manufacters', (data) => ponManufacters(data));
  procesaConsulta('products'   , (data) => ponProducts(data));
}

/**
 * Limpia la zona de estatus y el listado de productos y oculta ambas zonas.
 */
function limpia() {
  estatus.textContent = '';
  listado.textContent = '';
  muestraEl(estatus, false);
  muestraEl(resulta, false);
}

/**
 * Activa o desactiva los botones si el formulario tiene contenido o no.
 */
function estadoEnviar() {
  inactivaBtn(enviar, !estadoFormulario());
  inactivaBtn(borrar, !estadoFormulario());
}

/**
 * Comprueba si el formulario tiene contenido.
 * @returns Boolean
 */
function estadoFormulario() {
  return (
    form.modelo.value || form.color.value ||
    form.precio.value || form.marca.value
  ) ? true : false;
}

/**
 * Prepara y lanza la consulta a BBDD en función del contenido del formulario.
 * @param {event} e
 */
function procesaForm(e) {
  inactivaBtn(enviar, true);
  if (form.checkValidity()) {
    e.preventDefault();
    if (estadoFormulario()) {
      limpia();
      let params = '';
      if (form.modelo.value.trim()) {
        params += une(params)
          + 'modelo=' + form.modelo.value.trim().toUpperCase();
      }
      if (form.color.value.trim()) {
        params += une(params)
          + 'color=' + form.color.value.trim().toLowerCase();
      }
      if (form.precio.value) {
        params += une(params) + 'precio=' + form.precio.value;
      }
      if (form.marca.value) {
        // TODO params += une(params) + 'marca=' + form.marca.value;
        params += form.marca.value;
      }

      if (params.length) {
        procesaConsulta('products/' + params, (data) => ponProducts(data));
      } else {
        procesaConsulta('products', (data) => ponProducts(data));
      }
    }
  }
  inactivaBtn(enviar, false);
}

/**
 * Hace la consulta a la ruta indicada, lanza la función callback y pone Status.
 * @param {String} ruta 
 * @param {Function} callback 
 */
function procesaConsulta(ruta, callback) {
  const consulta = (data) => {
    ponEstatus(data.response_code);
    if (!data.response_code) callback(data.result);
  }
  consultaAPI(url + ruta, consulta); 
}

/**
 * Muestra el código de estado indicado tras la consulta.
 * @param {String} codigo 
 */
function ponEstatus(codigo) {
  estatus.style.display = 'block';
  estatus.textContent = 'Estatus: ' + ((codigo) ? 'Sin coincidencias.' : 'OK.');
}

/**
 * Crea los 'option' del select con los nombres de los fabricantes obtenidos.
 * @param {Array} resultados 
 */
function ponManufacters(resultados) {
  /* Nota:
   * Si se tiene la certeza de que los datos no cambiarán, podría almacenarse
   * la lista de fabricantes 'resultados' en una variable, para usarla cuando
   * se listan los productos, evitando así consultas redundantes a la API.
   */
  for (const resultado of resultados) {
    creaEl(marca, 'option', resultado.name, 'value', resultado.cif);
  }
}

/**
 * Lista los productos en la tabla e incluye info de cada 
 * @param {Array} resultados 
 */
function ponProducts(resultados) {
  muestraEl(resulta, true);
  for (const resultado of resultados) {

    // Consulta la API mediante la ruta y una función callback para
    // obtener los datos del fabricante por cada fila de la tabla.
    consultaAPI(
      url + 'manufacters/' + resultado.manufacter_cif,
      (data) => {
        let fabricante = resultado.manufacter_cif;
        let dfn = resultado.manufacter_cif;

        // Obtiene datos para mostrar en la columna 'Fabricante' de cada fila.
        if (!data.response_code) {
          fabricante = data.result[0].name;
          dfn = fabricante + ' • CIF: ' + dfn + ' • ' + data.result[0].address;
        }

        // Crea la fila y llena las columnas con los datos de cada producto.
        const tr = creaEl(listado, 'tr');
        for (const valor of Object.values(resultado)) {
          if (resultado.manufacter_cif == valor) {
              const td = creaEl(tr, 'td');
              const el = creaEl(td, 'dfn', fabricante, 'data-title', dfn);
              el.classList.add("dfn");
          } else {
            creaEl(tr, 'td', valor);
          }
        }
        
      } // end callback
    ); // end consultaAPI

  } // end for resultado
}