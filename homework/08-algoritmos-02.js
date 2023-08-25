/**
 * Ordena un arreglo usando el algoritmo Quick Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function quickSort(array) {
  // Aquí va la lógica para implementar el algoritmo Quick Sort.
  if(array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = [];
  let right = [];

  for(let i = 1; i < array.length; i++){
    if(array[i] < pivot){
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
}

/**
 * Ordena un arreglo usando el algoritmo Merge Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function mergeSort(array) {
  // Aquí va la lógica para implementar el algoritmo Merge Sort.
  if(array.length === 1){
    return array
  }

  let half = Math.floor(array.length / 2)
  let  left = array.slice(0, half)
  let right = array.slice(half)

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
  let result = []
  let indexleft = 0
  let indexright = 0

  while(indexleft < left.length && indexright < right.length){
    if(left[indexleft] < right[indexright]){
      result.push(left[indexleft]);
      indexleft++
    } else {
      result.push(right[indexright])
      indexright++
    }
  }
  return result.concat(left.slice(indexleft), right.slice(indexright))
}

// Exportar las funciones para su uso
module.exports = {
  quickSort,
  mergeSort,
}
