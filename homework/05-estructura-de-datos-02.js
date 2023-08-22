/* Ejercicio 1
Definir la clase LinkedList que incluya los siguientes métodos:
  - add: Agrega un nuevo nodo al final de la lista.
  - remove: Elimina el último nodo de la lista y devuelve su valor (considerando los casos de una lista con un solo nodo o una lista vacía).
  - search: Busca un parámetro dentro de la lista, que puede ser un valor o un callback. En el primer caso, se busca un nodo con el valor proporcionado; en el segundo caso, se busca un nodo cuyo valor retorne true cuando se evalúa mediante el callback.
  
  Ejemplo:
  search(3) busca un nodo con valor igual a 3.
  search(isEven), donde isEven es una función que retorna true para números pares, busca un nodo con valor par.
  Si no se encuentra ningún resultado, la función search debe retornar null.
*/
class LinkedList {
  constructor() {
    // Constructor de la lista enlazada.
    
  }

  add(value) {
    // Agregar un nuevo nodo al final de la lista.
    
  }

  remove() {
    // Eliminar el último nodo y retornar su valor.
    
  }

  search(param) {
    // Buscar un nodo según parámetro (valor o callback).
    
  }
}

class Node {
  constructor(value) {
    // Constructor del nodo.
    
  }
}

/* Ejercicio 2
Definir la clase HashTable que implemente una tabla hash con arreglos de buckets para almacenar datos clave-valor.
En este ejercicio, la tabla tiene 35 buckets (numBuckets = 35).

La clase debe incluir los siguientes métodos:
  - hash: Esta función determina en qué bucket se almacenará un dato.
  - set: Recibe una clave y un valor, y almacena el par en el bucket correspondiente.
  - get: Recibe una clave y busca el valor asociado en el bucket correcto.
  - hasKey: Recibe una clave y verifica si hay algo almacenado en la tabla con esa clave.

Ejemplo: hash('instructora') determina el bucket para el par {instructora: 'Ani'}.
*/
class HashTable {
  constructor() {
    // Constructor de la tabla hash.
    
  }

  hash(input) {
    // Función hasheadora para determinar bucket.
    
  }

  set(key, value) {
    // Almacena clave-valor en el bucket correcto.
    
  }

  get(key) {
    // Busca valor correspondiente a la clave en el bucket correcto.
    
  }

  hasKey(key) {
    // Verifica si hay algo almacenado con la clave dada.
    
  }
}

module.exports = {
  Node,
  LinkedList,
  HashTable,
}
