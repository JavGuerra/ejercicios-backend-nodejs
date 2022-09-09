const elZona   = $('#zona');
let   spins    = 0;
let   haySpins = 0;

function $(el) { return document.querySelector(el); };

function creaEl(padre, el, contenido = null, atributo = null, valor = '') {
  let nuevoEl = document.createElement(el);
  if (contenido) nuevoEl.innerHTML = contenido;
  if (atributo) nuevoEl.setAttribute(atributo, valor);
  return padre.appendChild(nuevoEl);
}

function muestraEl(element, status) {
  element.style.display = status ? 'initial' : 'none';
}

function inactivaBtn(boton, estatus) {
  boton.disabled = estatus;
  boton.setAttribute('aria-disabled', estatus);
}

function ponEstatus(codigo) {
  estatus.style.display = 'block';
  estatus.textContent = 'Estatus: ' + ((codigo) ? 'Sin coincidencias.' : 'OK.');
}

function une(params) { return (params.length) ? '&' : '?'; }

function consultaAPI(ruta, callback) {
  ponSpin(true);
  fetch(ruta)
    .then(respuesta => {
      if (!respuesta.ok) throw Error(respuesta.statusText);
      return respuesta.json();
    })
    .then(data => callback(data))
    .catch(err => {
      console.error(err);
      alert(err);
      inactivaBtn(enviar, false);
    })
    .finally(ponSpin(false));
}

function ponSpin(estatus) {
  estatus ? spins++ : spins--;
  if (estatus && !haySpins) {
    haySpins = setInterval(compruebaSpin, 300);
    elZona.showModal();
  }
}

function compruebaSpin() {
  if (!spins) {
    clearInterval(haySpins);
    areSpins = 0;
    elZona.close();
  }
}