/* 
1. WeakSet:
WeakSet es una colección de objetos débilmente enlazados, lo que significa que no impide que 
sus miembros sean eliminados por el recolector de basura si no hay otras referencias a ellos. 
No permite elementos primitivos, solo objetos. Esto hace que WeakSet sea útil cuando deseas 
mantener una lista de objetos únicos pero no quieres que estos objetos sean retenidos solo por 
estar en el WeakSet.
*/

let obj1 = { name: "John" };
let obj2 = { name: "Jane" };

const weakSet = new WeakSet([obj1, obj2]);

console.log(weakSet.has(obj1)); // true

obj1 = null; // Eliminamos la única referencia fuerte a obj1

// Debido a que no hay referencias fuertes a obj1, será eliminado automáticamente del WeakSet
//en la próxima recolección de basura
console.log(weakSet.has(obj1)); // false

/*
2. WeakMap:
WeakMap es una colección similar a Map, pero solo permite usar objetos como claves y tiene 
las mismas características débiles de WeakSet. Esto es útil cuando deseas asociar datos a 
objetos de una manera que no impida que esos objetos sean recolectados por el recolector de 
basura cuando ya no se utilizan en otros lugares de tu código.
*/

let user1 = { name: "John" };
let user2 = { name: "Jane" };

const weakMap = new WeakMap();

weakMap.set(user1, 42);
weakMap.set(user2, 30);

console.log(weakMap.get(user1)); // 42

user1 = null; // Eliminamos la única referencia fuerte a user1

// Debido a que no hay referencias fuertes a user1, tanto el objeto como su entrada en el WeakMap serán eliminados automáticamente en la próxima recolección de basura
console.log(weakMap.get(user1)); // undefined
