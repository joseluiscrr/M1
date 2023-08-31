/**
 * Factoriza un número en sus factores primos.
 * @param {number} num - El número que se desea factorizar.
 * @returns {number[]} Un array con los factores primos del número.
 */
function factorear(number) {
  // Aquí va la lógica para factorizar el número en factores primos.
  const factor = [1];
  for (let divisor = 2; divisor <= number; divisor++) {
    while (number % divisor ===0) {
      factor.push(divisor);
      number /= divisor
    }
  }
  return factor
}

/**
 * Ordena un arreglo usando el algoritmo Bubble Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function bubbleSort(array) {
  // Aquí va la lógica para implementar el algoritmo Bubble Sort.
  var swap = true;
  while(swap) {
    swap = false;
    for (var i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i+1]) {
        var aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        swap = true;
      }
    }
  }
  return array;
}

/**
 * Ordena un arreglo usando el algoritmo Insertion Sort.
 * @param {number[]} array - El arreglo que se desea ordenar.
 * @returns {number[]} El arreglo ordenado.
 */
function insertionSort(array) {
  // Aquí va la lógica para implementar el algoritmo Insertion Sort.
  const n = array.length

  for (let i = 1; i < n; i++) {
    const currentElement = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = currentElement
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
  const n = array.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      const temp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = temp
    }
  }

  return array
}

// Exportar las funciones para su uso
module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
}
