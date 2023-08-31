/**
 * Ejercicio 1
 * Convierte un número binario en su equivalente decimal.
 * @param {string} num - El número binario que se desea convertir.
 * @returns {number} El equivalente decimal del número binario.
 */
function BinarioADecimal(num) {
  // Aquí va la lógica para convertir el número binario a decimal.
  let decimal = 0

  for(let i = 0; i < num.length; i++) {
    decimal+= Math.pow(2, num.length-(i+1))*num[i]
  }
  return decimal
}

/**
 * Ejercicio 2
 * Convierte un número decimal en su equivalente binario.
 * @param {number} num - El número decimal que se desea convertir.
 * @returns {string} El equivalente binario del número decimal.
 */
function DecimalABinario(num) {
  // Aquí va la lógica para convertir el número decimal a binario.
  let binary = ""

  while(num){
    binary = num %2 + binary
    num = Math.floor(num/2)
  }
  
  return binary
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}