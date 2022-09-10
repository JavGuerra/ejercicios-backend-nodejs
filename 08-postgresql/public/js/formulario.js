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

procesaConsulta('manufacters', (data) => ponManufacters(data));
procesaConsulta('products'   , (data) => ponProducts(data));

function limpia() {
  estatus.textContent = '';
  listado.textContent = '';
  muestraEl(estatus, false);
  muestraEl(resulta, false);
}

function resetea() {
  if (form.modelo.value || form.color.value ||
      form.precio.value || form.marca.value) {
    limpia();
    procesaConsulta('products', (data) => ponProducts(data));
  }
}

function procesaForm(e) {
  inactivaBtn(enviar, true);
  if (form.checkValidity()) {
    e.preventDefault();
    if (form.modelo.value || form.color.value ||
        form.precio.value || form.marca.value) {
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
        // params += une(params) + 'marca=' + form.marca.value;
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

function ponEstatus(codigo) {
  estatus.style.display = 'block';
  estatus.textContent = 'Estatus: ' + ((codigo) ? 'Sin coincidencias.' : 'OK.');
}

function procesaConsulta(ruta, callback) {
  const consulta = (data) => {
    ponEstatus(data.response_code);
    if (!data.response_code) callback(data.result);
    else inactivaBtn(enviar, false);
  }
  consultaAPI(url + ruta, consulta); 
}

function ponManufacters(resultados) {
  for (const resultado of resultados) {
    creaEl(marca, 'option', resultado.name, 'value', resultado.cif);
  }
  inactivaBtn(enviar, false);
}

function ponProducts(resultados) {
  muestraEl(resulta, true);
  for (const resultado of resultados) {
    // Consulta la API mediante la ruta y una función callback
    // para obtener los datos del fabricante por cada fila de la tabla.
    consultaAPI(
      url + 'manufacters/' + resultado.manufacter_cif,
      (data) => {
        let fabricante = resultado.manufacter_cif;
        let dfn = resultado.manufacter_cif;
        // Obtiene datos para mostrar en la columna 'Fabricante' de cada fila.
        if (!data.response_code) {
          fabricante = data.result[0].name;
          dfn = fabricante + ' • CIF: ' + dfn + ' • ' + data.result[0].addres;
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
      }
    );
  }
  inactivaBtn(enviar, false);
}