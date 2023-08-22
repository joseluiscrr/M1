/**
 * Definir las funciones recursivas nFactorial y nFibonacci.

 * La función nFactorial(n) debe retornar el factorial de n. Para un número natural n, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1.

 * La función nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci. En esta secuencia, el 0 y el 1 son el primer y segundo elementos, respectivamente. Cada elemento subsiguiente es la suma del último elemento y el anterior. Por ejemplo, nFibonacci(7) retornará 13, ya que 13 es el dígito que ocupa la posición 7 en la secuencia.

 * Secuencia: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

 * Como ejercicio adicional y completamente opcional, después de resolver este problema de manera recursiva, puedes intentar definir funciones que logren los mismos resultados pero utilizando un enfoque iterativo.
**/

/**
 * Ejercicio 1
 * Calcula el factorial de un número natural.
 * @param {number} n - El número para el cual se calculará el factorial.
 * @returns {number} El factorial del número n.
 */
function nFactorial(n) {
  // Implementación recursiva para el cálculo del factorial.
  
}

/**
 * Ejercicio 2
 * Calcula el enésimo número de la secuencia de Fibonacci.
 * @param {number} n - El índice del número en la secuencia de Fibonacci.
 * @returns {number} El número en la posición n de la secuencia.
 */
function nFibonacci(n) {
  // Implementación recursiva para calcular el número en la posición n de Fibonacci.
  
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.
*/

/**
 * Ejercicio 3
 * Clase para implementar una estructura Queue (FIFO).
 */
class Queue {
  // Implementación de la clase Queue con sus métodos.
  constructor() {
    // Inicialización de la cola como un arreglo vacío.
    
  }

  enqueue(item) {
    // Agrega un elemento al final de la cola.
    
  }

  dequeue() {
    // Remueve y devuelve el primer elemento de la cola.
    // Si la cola está vacía, retorna undefined.
    
  }

  size() {
    // Retorna el número de elementos en la cola.
    
  }

  isEmpty() {
    // Verifica si la cola está vacía.
    
  }
}

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
}
