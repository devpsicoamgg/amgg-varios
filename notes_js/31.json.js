// JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer y escribir.
// Se utiliza comúnmente para enviar y recibir datos entre aplicaciones cliente y servidor.

// Un objeto JSON está compuesto por pares clave-valor, donde las claves son cadenas y los valores pueden ser cualquier valor JSON válido.
const persona = {
  nombre: "Juan",
  edad: 30,
  hobbies: ["Leer", "Correr", "Viajar"],
  direccion: {
    ciudad: "Madrid",
    pais: "España",
  },
  activo: true,
};

// JSON.parse: Convierte una cadena JSON en un objeto JavaScript.
const jsonString = '{"nombre": "Maria", "edad": 25, "activo": true}';
const objeto = JSON.parse(jsonString);
console.log(objeto); // Output: { nombre: 'Maria', edad: 25, activo: true }

// JSON.stringify: Convierte un objeto JavaScript en una cadena JSON.
const persona2 = {
  nombre: "Pedro",
  edad: 28,
  activo: false,
};
const jsonString2 = JSON.stringify(persona2);
console.log(jsonString2); // Output: {"nombre":"Pedro","edad":28,"activo":false}

// JSON.stringify también puede tomar opciones adicionales, como una función de reemplazo y un espacio para formatear el resultado.
const persona3 = {
  nombre: "Laura",
  edad: 22,
  activo: true,
};
const jsonString3 = JSON.stringify(persona3, null, 2);
console.log(jsonString3);
// Output:
// {
//   "nombre": "Laura",
//   "edad": 22,
//   "activo": true
// }

// JSON.stringify también puede filtrar las propiedades que se incluyen en la cadena JSON utilizando un arreglo como segundo argumento.
const persona4 = {
  nombre: "Carlos",
  edad: 35,
  activo: true,
  correo: "carlos@example.com",
};
const jsonString4 = JSON.stringify(persona4, ["nombre", "edad"]);
console.log(jsonString4); // Output: {"nombre":"Carlos","edad":35}

// JSON.stringify también puede tomar una función de transformación para modificar los valores antes de serializarlos.
const persona5 = {
  nombre: "Lucia",
  edad: 40,
  activo: false,
};
const jsonString5 = JSON.stringify(persona5, (clave, valor) => {
  if (clave === "edad") {
    return valor * 2; // Duplica el valor de "edad".
  }
  return valor;
});
console.log(jsonString5); // Output: {"nombre":"Lucia","edad":80,"activo":false}
