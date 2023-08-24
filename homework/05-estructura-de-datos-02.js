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
    this.head = null;
    this.length = 0;
  }

  add(value) {
    // Agregar un nuevo nodo al final de la lista.
    let node = new Node(value);

    if(!this.head){
      this.head = node;
    } else {
      let current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
      this.length++;
      return node;
    };
  

  remove() {
    // Eliminar el último nodo y retornar su valor.
    let current = this.head;
    let deleted;

    if(!current) return null;
    else if(!current.next){
      deleted = current.value;
      this.head = null;
      this.length--;
      return deleted;
    }
    while(current.next.next){
      current = current.next
    }
    deleted = current.next.value;
    current.next = null;
    this.length--;

    return deleted;
  };

  search(param) {
    // Buscar un nodo según parámetro (valor o callback).
    let current = this.head;
    
    while(current) {
      if (typeof param === "function" && param(current.value)) {
      return current.value;
    } else if (param === current.value) {
      return current.value;
    }
    current = current.next;
  }
  return null;
}
}

class Node {
  constructor(value) {
    // Constructor del nodo.
    this.value = value
    this.next = null
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
    this.buckets = [];
    this.numBuckets = 35;
  }

  hash(input) {
    // Función hasheadora para determinar bucket.
    let store = 0;

    for (let i = 0; i < input.length; i++){
      store += input.charCodeAt(i);
    }
    return store % this.numBuckets; 
  }

  set(key, value) {
    // Almacena clave-valor en el bucket correcto.
    let index = this.hash(key)

    if(typeof key !== 'string') throw new TypeError("keys must be strings")

    if(!this.buckets[index]){
      this.buckets[index] = {};
    }
    this.buckets[index][key] = value;
  };

  get(key) {
    // Busca valor correspondiente a la clave en el bucket correcto.
    let index = this.hash(key);

    if(this.buckets[index] && this.buckets[index][key]){
    return this.buckets[index][key];
    } else {
      return undefined;
    }
  };

  hasKey(key) {
    // Verifica si hay algo almacenado con la clave dada.
    let index = this.hash(key);
    
    return this.buckets[index].hasOwnProperty(key);
  }
}

module.exports = {
  Node,
  LinkedList,
  HashTable,
}
