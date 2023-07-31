// Ejemplo 1: Destructuración de objetos
const person = { name: "John", age: 30, city: "New York" };

// Destructuración de objetos
const { nameOne, age, cityOne } = person;

console.log(nameOne); // Output: John
console.log(age); // Output: 30
console.log(cityOne); // Output: New York

// Ejemplo 2: Destructuración con asignación de alias
const user = {
  firstName: "Alice",
  lastName: "Smith",
  email: "alice@example.com",
};

// Destructuración con asignación de alias
const { firstName: fName, lastName: lName, email } = user;

console.log(fName); // Output: Alice
console.log(lName); // Output: Smith
console.log(email); // Output: alice@example.com

// Ejemplo 3: Destructuración en funciones
// Destructuración de parámetros en una función
const printInfo = ({ name, age }) => {
  console.log(`Nombre: ${name}, Edad: ${age}`);
};

const personInfo = { name: "John", age: 30 };
printInfo(personInfo); // Output: Nombre: John, Edad: 30

// Ejemplo 4: Destructuración de arreglos
const numbers = [1, 2, 3, 4, 5];

// Destructuración de arreglos
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Ejemplo 5: Destructuración anidada
const personDetails = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

// Destructuración anidada
const {
  name,
  address: { city, country },
} = personDetails;

console.log(name); // Output: John
console.log(city); // Output: New York
console.log(country); // Output: USA

// Ejemplo 6: Destructuración con valores predeterminados
const config = { backgroundColor: "white", fontSize: 14 };

// Destructuración con valores predeterminados
const { backgroundColor, fontSize, fontFamily = "Arial" } = config;

console.log(backgroundColor); // Output: white
console.log(fontSize); // Output: 14
console.log(fontFamily); // Output: Arial (valor predeterminado ya que no está en el objeto)
