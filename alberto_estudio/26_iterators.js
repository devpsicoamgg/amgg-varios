/*
Cuando se obtiene el iterador utilizando iterable[Symbol.iterator](), se obtiene un objeto 
que sigue la interfaz de un iterador. Este objeto tiene un método next() que puedes llamar para
 obtener el siguiente elemento del iterable.

El método next() devuelve un objeto con dos propiedades:

    value: El valor del elemento actual del iterable.
    done: Un booleano que indica si hemos alcanzado el final del iterable (true) o si todavía 
    hay más elementos para recorrer (false).

Al llamar a next() en el iterador, avanzas al siguiente elemento del iterable y se accede a la 
información correspondiente. Si llegas al final del iterable, done será true, y value será 
undefined.

    Array.prototype[@@iterator]()
    TypedArray.prototype[@@iterator]() (en-US)
    String.prototype[@@iterator]() (en-US)
    Map.prototype[@@iterator]() (en-US)
    Set.prototype[@@iterator]()

*/

const iterable = [1, 2, 3, 4, 5];
const iterador = iterable[Symbol.iterator]();

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
