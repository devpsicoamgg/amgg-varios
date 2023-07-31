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
