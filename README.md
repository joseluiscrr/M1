# Proyecto: Ejercicios de Programación en JavaScript

Este proyecto contiene una serie de ejercicios de programación en JavaScript, organizados en carpetas según su temática. A continuación, se presenta una descripción general de las carpetas y archivos incluidos en el proyecto.

## Carpeta: homework

En esta carpeta se encuentran ejercicios relacionados con conceptos básicos de programación y manipulación de números binarios y decimales.

### Archivo: 01-intro-to-cs.js

Este archivo contiene funciones para convertir entre números binarios y decimales.

- `BinarioADecimal(num)`: Convierte un número binario en su equivalente decimal.
- `DecimalABinario(num)`: Convierte un número decimal en su equivalente binario.

### Archivo: 03-js-avanzado-02.js

Este archivo contiene funciones relacionadas con el uso de clausuras y el método `bind`.

- `counter()`: Retorna una función contador que incrementa el valor con cada invocación.
- `cacheFunction(cb)`: Retorna una función con memoria caché para el callback proporcionado.
- Funciones creadas usando `bind` para obtener el nombre del instructor y del alumno.
- Funciones creadas usando `bind` para retornar una cadena con delimitadores específicos.

### Archivo: 04-estructura-de-datos-01.js

Este archivo contiene implementaciones de funciones y clases relacionadas con estructuras de datos.

- `nFactorial(n)`: Calcula el factorial de un número de manera recursiva.
- `nFibonacci(n)`: Calcula el enésimo número de la secuencia de Fibonacci de manera recursiva.
- `Queue`: Clase para implementar una estructura de cola (FIFO).

### Archivo: 05-estructura-de-datos-02.js

En este archivo se define la clase `LinkedList` para implementar una lista enlazada, y la clase `HashTable` para implementar una tabla hash.

- `LinkedList`: Clase que incluye métodos para agregar, eliminar y buscar nodos en una lista enlazada.
- `HashTable`: Clase que implementa una tabla hash con métodos para almacenar y buscar valores mediante claves.

### Archivo: 06-estructura-de-datos-03.js

Este archivo contiene la implementación de la clase `BinarySearchTree` para crear y manipular árboles binarios de búsqueda.

- `BinarySearchTree`: Clase que incluye métodos para insertar, buscar y recorrer nodos en un árbol binario de búsqueda.

### Archivo: 07-algoritmos-01.js

En este archivo se implementan varios algoritmos de ordenación y factorización.

- `factorear(number)`: Factoriza un número en sus factores primos.
- `bubbleSort(array)`: Ordena un arreglo usando el algoritmo Bubble Sort.
- `insertionSort(array)`: Ordena un arreglo usando el algoritmo Insertion Sort.
- `selectionSort(array)`: Ordena un arreglo usando el algoritmo Selection Sort.

### Archivo: 08-algoritmos-02.js

En este archivo se implementan más algoritmos de ordenación.

- `quickSort(array)`: Ordena un arreglo usando el algoritmo Quick Sort.
- `mergeSort(array)`: Ordena un arreglo usando el algoritmo Merge Sort.

# Package

## Branches (ramas)

El proyecto tiene dos ramas:

- `empty`: Esta rama estará vacía y libre de soluciones de ejercicios.
- `solution`: Esta rama contendrá las respuestas a los ejercicios.

## Instalación

Para instalar el paquete, puede usar el siguiente comando:

```bash
npm install 
```

o de la forma abreviada:

```bash
npm i 
```

Fíjese si ya tiene instalado las carpetas y archivo, correspondientes a:

```bash
/node_modules
/package-lock.json
```

## Scripts

El paquete incluye el siguiente script:

### Test

Puede ejecutar pruebas en general con el siguiente comando:

```bash
npm test
```

o de forma individual para cada test:

```bash
npm test 01
```

(01) número del test, actualmente sólo cuanto con los test:


```bash
npm test 01
npm test 03
npm test 04
npm test 05
npm test 06
npm test 07
npm test 08
```

This script uses Jest for testing with code coverage disabled (`--collectCoverage=false`).

