/**
 * Ejercicio 1
 * Convierte un número binario en su equivalente decimal.
 * @param {string} num - El número binario que se desea convertir.
 * @returns {number} El equivalente decimal del número binario.
 */
function BinarioADecimal(num) {
  // Aquí va la lógica para convertir el número binario a decimal.
  let decimal = 0
  let base = 1
  
  for (let i = num.length - 1; i >= 0; i--) {
    const bit = parseInt(num[i])
    if (bit === 1) {
      decimal += base
    }
    base *= 2
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
  if (num === 0) {
    return '0'
  }
  
  let binario = ''
  
  while (num > 0) {
    const bit = num % 2
    binario = bit + binario
    num = Math.floor(num / 2)
  }
  
  return binario
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
