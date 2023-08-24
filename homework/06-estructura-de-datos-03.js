/**
 * Implementa la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
 * - root: Inicializado en el constructor y el cual será una instancia de la clase Node, con el valor que me den
 * - size: Retorna la cantidad total de nodos del árbol.
 * - insert: Agrega un nodo en el lugar correspondiente.
 * - contains: Retorna true o false luego de evaluar si cierto valor existe dentro del árbol.
 * - depthFirstForEach: Recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
 *                     según se indique por parámetro ("post-order", "pre-order", o "in-order").
 *                     Si no se provee ningún parámetro, se realizará el recorrido "in-order" por defecto.
 * - breadthFirstForEach: Recorre el árbol siguiendo el orden breadth first (BFS).

 * BinarySearchTree se debe valer de otra clase llamada Node, la cual debe contener:
 * - value: valor a guardar de cada nodo
 * - left: nodo izquierdo
 * - right: nodo derecho
 */

/**
 * Clase que representa un Árbol Binario de Búsqueda.
 * @class BinarySearchTree
 */
class BinarySearchTree {
  /**
   * Constructor de la clase BinarySearchTree.
   * @param {number} value - Valor que se asignará al nodo raíz del árbol binario.
   */
  constructor(value) {
    // Constructor de la clase BinarySearchTree.
    this.root = new Node(value);
  }

  /**
   * Agrega un nuevo nodo con el valor dado al árbol.
   * @param {number} value - Valor del nodo a agregar.
   * @param {Node} node - Nodo en el cual agregar el nuevo valor. Por defecto, se agrega en el nodo raíz.
   */
  insert(value, node = this.root) {
    // Implementación recursiva de la inserción de un nodo.

    if(value < node.value){
      if(!node.left){
        node.left = new Node(value);
      } else {
        this.insert(value, node.left);
      }

    } else {
      if(!node.right) {
        node.right = new Node(value);
      } else {
      this.insert(value, node.right);
      }
    }
  }
  /**
   * Retorna la cantidad total de nodos en el árbol.
   * @param {Node} node - Nodo a partir del cual se calculará la cantidad de nodos en el subárbol. Por defecto, se inicia desde el nodo raíz.
   * @returns {number} Cantidad de nodos en el árbol o subárbol.
   */
  size(node = this.root) {
    // Implementación recursiva del tamaño del árbol.
    if(!node){
      return 0;
    }
    return 1 + this.size(node.left) + this.size(node.right);
  }

  /**
   * Evalúa si cierto valor existe dentro del árbol.
   * @param {any} value - Valor a buscar en el árbol.
   * @param {Node} node - Nodo a partir del cual se realizará la búsqueda. Por defecto, se inicia desde el nodo raíz.
   * @returns {boolean} true si el valor existe, false si no.
   */
  contains(value, node = this.root) {
    // Implementación recursiva de la búsqueda de un valor.
    if(!node){
      return false;
    }
    if (value === node.value){
      return true;
    }
    if (value < node.value){
      return this.contains(value, node.left);
    } else {
      return this.contains(value, node.right);
    }
  }

  /**
   * Recorre el árbol en profundidad siguiendo el orden especificado.
   * @param {string} order - Orden de recorrido ("pre-order", "in-order" o "post-order").
   * @param {Node} node - Nodo a partir del cual se iniciará el recorrido. Por defecto, se inicia desde el nodo raíz.
   * @param {number[]} results - Un array para almacenar los valores resultantes del recorrido.
   * @returns {number[]} Un array con los valores del recorrido en el orden especificado.
   */
  depthFirstForEach(order = 'in-order', node = this.root, results = []) {
    // Implementación recursiva del recorrido en profundidad.
    if(!node){
      return results;
    }
    if (order === 'pre-order') {
      results.push(node.value);
    }
    this.depthFirstForEach(order, node.left, results);

    if (order === 'in-order'){
      results.push(node.value);
    }
    this.depthFirstForEach(order, node.right, results);

    if (order === 'post-order') {
      results.push(node.value);
    }

    return results;
  }

  /**
   * Recorre el árbol en anchura (BFS).
   * @returns {number[]} Un array con los valores del recorrido en el orden especificado.
   */
  breadthFirstForEach() {
    // Implementación del recorrido en anchura.
    if (!this.root) {
      return [];
    }

    let result = [];
    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }
}

/**
 * Representa un nodo en el árbol binario.
 * @class Node
 * @param {number} value - Valor que se asignará al nodo.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

module.exports = {
  BinarySearchTree,
}
