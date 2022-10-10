const elZona   = $('#zona');
let   spins    = 0;
let   haySpins = 0;


/**
 * Obtiene el elemento HTML solicitado.
 * @param {String} el 
 * @returns Element
 */
function $(el) { return document.querySelector(el); }


/**
 * Crea un elemento HTML nuevo dentro del padre, con un contenido dado,
 * y con el atributo y valor del atributo que se indique.
 * @param {Element} padre 
 * @param {String} el 
 * @param {String} contenido opcional
 * @param {String} atributo opcional
 * @param {String} valor opcional
 * @returns 
 */
function creaEl(padre, el, contenido = null, atributo = null, valor = '') {
  let nuevoEl = document.createElement(el);
  if (contenido) nuevoEl.innerHTML = contenido;
  if (atributo) nuevoEl.setAttribute(atributo, valor);
  return padre.appendChild(nuevoEl);
}


/**
 * Muestra u oculta un elemento HTML según el estado indicado.
 * @param {Element} element 
 * @param {Boolean} status 
 */
function muestraEl(element, status) {
  element.style.display = status ? 'initial' : 'none';
}


/**
 * Activa o desactiva un botón según el estado indicado.
 * @param {Element} boton 
 * @param {Boolean} estatus 
 */
function inactivaBtn(boton, estatus) {
  boton.disabled = estatus;
  boton.setAttribute('aria-disabled', estatus);
}


/**
 * Devuelve un símbolo u otro si params está vacío o no.
 * @param {String} params 
 * @returns 
 */
function une(params) { return (params.length) ? '&' : '?'; }


/**
 * Hace una consulta a la API indicada en la ruta y ejecuta el callback.
 * @param {String} ruta 
 * @param {Function} callback 
 */
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


/**
 * Activa el spin e incrementa el número de spins en función del número
 * de veces que la función es llamada. Una por cada petición a la API.
 * @param {Boolean} estatus 
 */
function ponSpin(estatus) {
  estatus ? spins++ : spins--;
  if (estatus && !haySpins) {
    haySpins = setInterval(compruebaSpin, 300);
    elZona.showModal();
  }
}


/**
 * Comprueba si el valor de spin esta a cero para desactivar el spin.
 */
function compruebaSpin() {
  if (!spins) {
    clearInterval(haySpins);
    haySpins = 0;
    elZona.close();
  }
}
