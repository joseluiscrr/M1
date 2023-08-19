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
class BinarySearchTree {
  constructor(value) {
    // Constructor de la clase BinarySearchTree.
    this.root = new Node(value)
  }

  console(value) {
    console.log(this.root)
  }

  /**
   * Agrega un nuevo nodo con el valor dado al árbol.
   * @param {number} value - Valor del nodo a agregar.
   */
  insert(value, node = this.root) {
    // Implementación recursiva de la inserción de un nodo.
    if (this.root === null) {
      this.root = new Node(value)
      return
    }

    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value)
      } else {
        this.insert(value, node.left)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value)
      } else {
        this.insert(value, node.right)
      }
    }
  }

  /**
   * Retorna la cantidad total de nodos en el árbol.
   * @returns {number} Cantidad de nodos en el árbol.
   */
  size(node = this.root) {
    // Implementación recursiva del tamaño del árbol.
    if (node === null) {
      return 0
    }

    return 1 + this.size(node.left) + this.size(node.right)
  }

  /**
   * Evalúa si cierto valor existe dentro del árbol.
   * @param {any} value - Valor a buscar en el árbol.
   * @returns {boolean} true si el valor existe, false si no.
   */
  contains(value, node = this.root) {
    // Implementación recursiva de la búsqueda de un valor.
    if (node === null) return false

    if (value === node.value) {
      return true
    } else if (value < node.value) {
      return this.contains(value, node.left)
    } else {
      return this.contains(value, node.right)
    }
  }

  /**
   * Recorre el árbol en profundidad siguiendo el orden especificado.
   * @param {string} order - Orden de recorrido ("pre-order", "in-order" o "post-order").
   */
  depthFirstForEach(order = 'in-order', node = this.root, results = []) {
    // Implementación recursiva del recorrido en profundidad.
    if (node) {
      if (order === 'in-order') {
        this.depthFirstForEach('in-order', node.left, results)
        results.push(node.value)
        this.depthFirstForEach('in-order', node.right, results)
      }

      if (order === 'pre-order') {
        results.push(node.value)
        this.depthFirstForEach('pre-order', node.left, results)
        this.depthFirstForEach('pre-order', node.right, results)
      }

      if (order === 'post-order') {
        this.depthFirstForEach('post-order', node.left, results)
        this.depthFirstForEach('post-order', node.right, results)
        results.push(node.value)
      }
    }

    return results
  }

  /**
   * Recorre el árbol en anchura (BFS).
   */
  breadthFirstForEach() {
    // Implementación del recorrido en anchura.
    if (!this.root) {
      return [];
    }

    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
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
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree,
}
