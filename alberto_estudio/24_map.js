/*
El objeto Map en JavaScript es una estructura de datos que permite mapear claves a valores. 
A diferencia de un objeto regular, las claves en un objeto Map pueden ser de cualquier tipo, 
incluyendo objetos y funciones. A continuación, se presenta una explicación del objeto Map y 
sus principales características:

    El objeto Map almacena pares clave-valor, donde cada clave es única y está asociada a un valor.
    Las claves y los valores pueden ser de cualquier tipo, y no están limitados a ser solo cadenas 
    de texto como en un objeto regular.
    Los pares clave-valor en un objeto Map se mantienen en el orden de inserción, lo que significa
    que los elementos se pueden iterar en el mismo orden en que se agregaron.
    A diferencia de un objeto regular, un objeto Map tiene una interfaz más intuitiva y métodos 
    dedicados para manipular y acceder a los elementos.

Algunos métodos importantes del objeto Map son:

    Map.prototype.set(key, value): Permite agregar un par clave-valor al objeto Map. Si la clave ya existe, actualiza su valor. Retorna el objeto Map actualizado.
    Map.prototype.get(key): Retorna el valor asociado a una clave específica en el objeto Map. Si la clave no existe, retorna undefined.
    Map.prototype.has(key): Verifica si una clave existe en el objeto Map. Retorna true si la clave existe y false en caso contrario.
    Map.prototype.delete(key): Elimina un par clave-valor del objeto Map. Retorna true si el par fue eliminado exitosamente y false si la clave no existe.
    Map.prototype.size: Retorna el número de pares clave-valor en el objeto Map.
    Map.prototype.clear(): Remueve todos los pares clave-valor del objeto Map.

*/

// Creación de un Map vacío
const myMap = new Map();

// Agregar pares clave-valor al Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("job", "Engineer");

// Obtener el valor asociado a una clave específica
const name = myMap.get("name");
console.log("Nombre:", name); // Devuelve 'John'

// Verificar si una clave está presente en el Map
console.log('¿Tiene la clave "age"?:', myMap.has("age")); // Devuelve true
console.log('¿Tiene la clave "gender"?:', myMap.has("gender")); // Devuelve false

// Eliminar un par clave-valor del Map
myMap.delete("job");

// Tamaño del Map (número de pares clave-valor)
const size = myMap.size;
console.log("Tamaño del Map:", size); // Devuelve 2

// Recorrer el Map utilizando un bucle forEach
myMap.forEach((value, key) => {
  console.log(`Clave: ${key}, Valor: ${value}`);
});

// Obtener un iterador con las claves del Map
const keysIterator = myMap.keys();
console.log("Claves del Map:");
for (const key of keysIterator) {
  console.log(key);
}

// Obtener un iterador con los valores del Map
const valuesIterator = myMap.values();
console.log("Valores del Map:");
for (const value of valuesIterator) {
  console.log(value);
}

// Obtener un iterador con todos los pares clave-valor del Map
const entriesIterator = myMap.entries();
console.log("Pares clave-valor del Map:");
for (const [key, value] of entriesIterator) {
  console.log(`Clave: ${key}, Valor: ${value}`);
}

// Limpia todos los pares clave-valor del Map
myMap.clear();
console.log("Map después de clear:", myMap.size); // Devuelve 0
