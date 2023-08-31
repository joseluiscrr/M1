/**
 * Ordena un arreglo usando el algoritmo Quick Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function quickSort(array) {
  // Aquí va la lógica para implementar el algoritmo Quick Sort.
  if (array.length <= 1) {
    return array
  }

  const pivot = array[0]
  const left = []
  const right = []

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

/**
 * Ordena un arreglo usando el algoritmo Merge Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function mergeSort(array) {
  // Aquí va la lógica para implementar el algoritmo Merge Sort.
  if (array.length <= 1) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

/**
 * Función auxiliar para combinar dos arreglos ordenados en uno solo.
 * @param {number[]} left - El primer arreglo ordenado.
 * @param {number[]} right - El segundo arreglo ordenado.
 * @returns {number[]} Un arreglo que combina los elementos de ambos arreglos.
 */
function merge(left, right) {
  // Aquí va la lógica para implementar la función auxiliar merge.
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// Exportar las funciones para su uso
module.exports = {
  quickSort,
  mergeSort,
}
