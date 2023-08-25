/**
 * Factoriza un número en sus factores primos.
 * @param {number} num - El número que se desea factorizar.
 * @returns {number[]} Un array con los factores primos del número.
 */
function factorear(number) {
  // Aquí va la lógica para factorizar el número en factores primos.
  let arr = [1]
  let split = 2

  while (number !== 1){
    if(number%split === 0) {
      arr.push(split)
      number = number / split
    } else split++
  }
  return arr
}

/**
 * Ordena un arreglo usando el algoritmo Bubble Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function bubbleSort(array) {
  // Aquí va la lógica para implementar el algoritmo Bubble Sort.
  let numm = array.length

  for(let i = 0; i < numm - 1; i++){

    for(let j = 0; j < numm - i - 1; j++){

      if(array[j] > array[j + 1]) {
    

    const temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
  }
}
}
  return array
}

/**
 * Ordena un arreglo usando el algoritmo Insertion Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function insertionSort(array) {
  // Aquí va la lógica para implementar el algoritmo Insertion Sort.
  for(let i = 1; i < array.length; i++){
    let arr = array[i]
    for(let j = 0; j < i; j++){
      if(arr < array[j]){
        arr = array[j]
        array[j] = array[i]
        array[i] = arr
      }
    }
  }
  return array
}

/**
 * Ordena un arreglo usando el algoritmo Selection Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function selectionSort(array) {
  // Aquí va la lógica para implementar el algoritmo Selection Sort.
  let any = array.length

  for(let i = 0; i < any - 1; i++){
    let min = i
    for(let j = i+1; j < any; j++){
      if(array[j] < array[min]){
        min = j;
      }
    }
   // intercamnio
    if(min !== i){
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }

  return array;
}

// Exportar las funciones para su uso
module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
}
