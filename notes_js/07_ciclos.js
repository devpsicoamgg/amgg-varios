//*** CICLOS ***
//En JavaScript, existen varios tipos de ciclos que se pueden utilizar para repetir un conjunto de instrucciones múltiples veces. Algunos de los ciclos más comunes son:

//for: Es el ciclo más común y se utiliza para iterar sobre una lista de elementos en un rango específico. Se compone de tres partes: la inicialización de la variable de control, la condición de continuidad y el incremento o decremento de la variable de control.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while: Es utilizado cuando no se conoce el número de veces que se debe repetir el conjunto de instrucciones. El ciclo se ejecuta mientras la condición sea verdadera.

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while: Es similar al ciclo while, pero la condición se evalúa al final del ciclo en lugar del principio. Esto significa que el ciclo se ejecuta al menos una vez antes de verificar la condición.

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

//for...in: Es utilizado para iterar sobre las propiedades de un objeto. El ciclo se ejecuta una vez para cada propiedad en el objeto.

const persona = {
  nombre: "Juan",
  edad: 30,
  altura: 1.75,
  peso: 75,
};

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

// for...of: Es utilizado para iterar sobre elementos de un objeto iterable, como arreglos o cadenas de texto.

const nombres = ["Juan", "Ana", "Pedro"];

for (let nombre of nombres) {
  console.log(nombre);
}
