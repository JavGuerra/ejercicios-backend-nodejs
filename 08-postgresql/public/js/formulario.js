const url     = `http://localhost:3000/`;
const form    = document.formulario;
const borrar  = $('#borrar' );
const enviar  = $('#enviar' );
const estatus = $('#estatus');
const resulta = $('#resulta');
const listado = $('#listado');
const marca   = $('#marca'  );

borrar.onclick = limpia;
enviar.onclick = e => procesaForm(e);

procesaConsulta('manufacters', (data) => ponManufacters(data));
procesaConsulta('products'   , (data) => ponProducts(data));

function limpia() {
  estatus.textContent = '';
  listado.textContent = '';
  muestraEl(estatus, false);
  muestraEl(resulta, false);
  procesaConsulta('products', (data) => ponProducts(data));
}

function procesaForm(e) {
  inactivaBtn(enviar, true);
  limpia();
  if (form.checkValidity()) {
    e.preventDefault();
    if (form.modelo || form.color || form.precio || form.marca) {
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
        params += une(params) + 'marca=' + form.marca.value;
      }

      if (params.length) 
        procesaConsulta('search' + params, (data) => ponProducts(data));
    }
  }
  inactivaBtn(enviar, false);
}

function procesaConsulta(ruta, callback) {
  const consulta = (data) => {
    ponEstatus(data.response_code);
    if (!data.response_code) callback(data.result);
    else inactivaBtn(enviar, false);
  }
  console.log(url + ruta);
  consultaAPI(url + ruta, consulta); 
}

function ponProducts(resultados) {
  muestraEl(resulta, true);
  for (const resultado of resultados) {
    const tr = creaEl(listado, 'tr');
    for (const valor of Object.values(resultado)) {
      creaEl(tr, 'td', valor);
    }
  }
  inactivaBtn(enviar, false);
}

function ponManufacters(resultados) {
  for (const resultado of resultados) {
    const tr = creaEl(listado, 'tr');
    creaEl(marca, 'option', resultado.name, 'value', resultado.cif);
  }
  inactivaBtn(enviar, false);
}