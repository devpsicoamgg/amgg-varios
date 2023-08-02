/*
El objeto Set en JavaScript es una estructura de datos que permite almacenar valores únicos 
de cualquier tipo, ya sean primitivos u objetos. A continuación, se presentan las propiedades 
y métodos principales del objeto Set:

Propiedades:

    Set.prototype.constructor: Devuelve la función constructora que crea una instancia de Set.
    Set.prototype.size: Devuelve el número de elementos en un objeto Set.

Métodos:

    Set.prototype.add(value): Añade un nuevo elemento al objeto Set. Retorna el objeto Set actualizado.
    Set.prototype.delete(value): Elimina un elemento del objeto Set por su valor. Retorna true si se eliminó exitosamente y false si el elemento no existe.
    Set.prototype.has(value): Verifica si un elemento está presente en el objeto Set. Retorna true si existe y false en caso contrario.
    Set.prototype.clear(): Remueve todos los elementos del objeto Set.
    Set.prototype.entries(): Retorna un nuevo objeto iterador que contiene un arreglo de pares clave-valor para cada elemento del objeto Set. Cada par es representado por un arreglo de dos elementos, donde el primero es el valor y el segundo es el mismo valor.
    Set.prototype.forEach(callbackFn[, thisArg]): Ejecuta una función de callback para cada elemento del objeto Set, en orden de inserción. La función de callback recibe tres argumentos: el valor del elemento, la clave (que es igual al valor) y el objeto Set actual.
    Set.prototype.values(): Retorna un nuevo objeto iterador que contiene los valores de los elementos del objeto Set, en orden de inserción.
    Set.prototype.keys(): Es un alias de Set.prototype.values().
    Set.prototype[@@iterator](): Retorna un nuevo objeto iterador que contiene los valores de los elementos del objeto Set, en orden de inserción. Es similar al método values().

*/

// Creación de un Set vacío
const mySetOne = new Set();

// Creación de un Set con elementos iniciales
const initialSet = new Set([1, 2, 3, 4]);

// También puedo pasar otro iterable (como un Array) para inicializar el Set
const array = [1, 2, 3, 4];
const setFromArray = new Set(array);

//ADD
const mySetTwo = new Set();
mySetTwo.add(1);
mySetTwo.add(2);
mySetTwo.add(3);
mySetTwo.add(1); // No se agrega nuevamente, ya que el 1 ya está presente.

//HAS
const mySetTree = new Set([1, 2, 3]);
console.log(mySetTree.has(2)); // Devuelve true
console.log(mySetTree.has(4)); // Devuelve false

//DELETE
const mySetFour = new Set([1, 2, 3]);
console.log(mySetFour.delete(2)); // Devuelve true y elimina el valor 2
console.log(mySetFour.delete(4)); // Devuelve false, ya que el 4 no está presente.

// CLEAR - SIZE DESPUES DE CLEAR
const mySetFive = new Set([1, 2, 3]);
mySetFive.clear();
console.log(mySetFive.size); // Devuelve 0, ya que el Set está vacío.

// FOR EACH
const mySetSix = new Set([1, 2, 3]);
mySetSix.forEach((value) => console.log(value)); // Imprime 1, 2, 3 en orden.

//ENTRIES
const mySetSevent = new Set([1, 2, 3]);
const iterator = mySetSevent.entries();
console.log(iterator.next().value); // Devuelve [1, 1]
console.log(iterator.next().value); // Devuelve [2, 2]
console.log(iterator.next().value); // Devuelve [3, 3]

// VALUES
const mySet = new Set([1, 2, 3]);
const iteratorOne = mySet.values();
console.log(iteratorOne.next().value); // Devuelve 1
console.log(iteratorOne.next().value); // Devuelve 2
console.log(iteratorOne.next().value); // Devuelve 3
