// --------------------------------------------------------------------------------------------------   ~ Clousures

/**
 * Ejercicio 1
 * La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
 * un valor numérico que empieza en 1 e incrementa con cada invocación.
 * @returns {function} Una función contador que incrementa el valor con cada invocación.
 */
function counter() {
  // Aquí va la lógica que retorna una función contador que incrementa el valor con cada invocación.
  let newCounter = 0

  return function(){
    newCounter++
    return newCounter
  };
}

/**
 * Ejercicio 2
 * La función cacheFunction debe retornar una función que actúe como una memoria caché para el callback 
 * que recibe por parámetro (cb). Almacena los resultados de las invocaciones previas para evitar recalculos.
 * @param {function} cb - El callback que se invoca.
 * @returns {function} Una función con memoria caché para el callback.
 */
function cacheFunction(cb) {
  // Aquí va la lógica que retorna una función con memoria caché para el callback.
  
}

// --------------------------------------------------------------------------------------------------   ~ Bind

var instructor = {
  nombre: 'Franco',
  edad: 25,
}

var alumno = {
  nombre: 'Juan',
  curso: 'FullStack',
}

/**
 * Ejercicio 3
 * Usando el método bind(), se crean funciones para obtener el nombre del instructor y del alumno.
 */
function getNombre() {
  return this.nombre;
}

let getNombreInstructor = getNombre.bind()
let getNombreAlumno = getNombre.bind()

/**
 * Ejercicio 4
 * Usando bind, se crean funciones que retornan una cadena con el delimitador especificado.
 */
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind()
let textoGuiones = crearCadena.bind()
let textoUnderscore = crearCadena.bind()


module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
}
