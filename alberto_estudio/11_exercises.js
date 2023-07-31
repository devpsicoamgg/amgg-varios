//Contraseña válida

// Escribir una función llamada `contrasenaValida` que reciba un string y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar `false`.

// javascript
// escribe tu respuesta acá

function constrasenaValida(str) {
  if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
    return true;
  }
  return false;
}
// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValuda("")); // false
// 7. Contar rango de números

// Escribir una función llamada `contarRango` que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

// **Nota:** Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// javascript
// escribe tu respuesta acá

function contarRango(num1, num2) {
  var count = num2 - num1 - 1;

  return count;
}

// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0

function sumarRango(num1, num2) {
  if (num1 === num2) {
    return 0;
  } else var suma = 0;
  for (var i = num1; i <= num2; i++) {
    suma += i;
  }
  return suma;
}

console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0

//Escribir una función llamada `numeroDeAes` que reciba un string y retorne el número de veces que aparece la letra "a":
// escribe tu respuesta acá
function numeroDeAes(string) {
  var countAes = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      countAes += string[i];
    }
  }
  return countAes.length;
}
// código de prueba
console.log(numeroDeAes("abracadabraAA")); // 5
console.log(numeroDeAes("etinola")); // 0
console.log(numeroDeAes("")); // 0

//Escribir una función llamada `numeroDeCaracteres` que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.
// escribe tu respuesta acá
function numeroDeCaracteres(string, cart) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === cart) {
      count += 1;
    }
  }
  return count;
}
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4

//Escribir una función llamada `sumarArreglo` que reciba un arreglo de números y retorne la suma de todos los elementos.
// escribe tu respuesta acá
function sumarArreglo(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// código de prueba
console.log(sumarArreglo([3, 1, 2])); // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArreglo([])); // 0

//Escribir una función llamada `multiplicarArreglo` que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
// escribe tu respuesta acá

function multiplicarArreglo(array) {
  if (array[0] === undefined) {
    return 1;
  } else return array.reduce((acc, value) => acc * value, array[0]);
}
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1

//Escribir una función llamada `removerCeros` que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
// escribe tu respuesta acá
function removerCeros(array) {
  newArray = [];
  array.map(function (num) {
    if (num !== 0) {
      newArray.push(num);
    }
  });
  return newArray;
}
// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []

//Escribir una función llamada `sumarArreglo` que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).
//**Nota:** puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.
// escribe tu respuesta acá
function sumarArreglo(array, init, endp) {
  if (init === endp) {
    return 0;
  }
  var newArray = [];
  var sum = 0;
  for (var i = array[init] - 1; i < array.length; i++) {
    newArray.push(array[i]);
    if (i === endp) {
      break;
    }
  }
  var toReturn = newArray.reduce(function (acc, val) {
    return acc + val;
  });
  return toReturn;
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 0

//Escribir una función llamada `transcribir` que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).
/*Los complementos son los siguientes:
 * G -> C
 * C -> G
 * T -> A
 * A -> U*/
// escribe tu función acá
function transcribir(str) {
  var arrayTrans = [];
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "G":
        arrayTrans.push("C");
        break;
      case "C":
        arrayTrans.push("G");
        break;
      case "T":
        arrayTrans.push("A");
        break;
      case "A":
        arrayTrans.push("U");
        break;
      default:
        "";
    }
  }
  return arrayTrans.join("");
}
// código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU

//Escribir una función llamada `capitalizar` que reciba un string y capitalice la primera letra:

// escribe tu función acá
function capitalizar(str) {
  var toShow = [];
  toShow.push(str[0].toUpperCase());
  for (var i = 1; i < str.length; i++) {
    toShow.push(str[i]);
  }

  return toShow.join("");
}
// código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""

//Escribir una función llamada `capitalizar` que reciba un string y capitalice cada letra

// escribe tu función acá
function capitalizar(str) {
  let array = str.split(" ");
  let newArray = array.map(function (palabra, ind) {
    rest = palabra.substring(1);
    return palabra[0].toUpperCase() + rest;
  });
  console.log(rest);
  return newArray.join(" ");
}

// código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("todas las noches")); // ""

//Escribir una función llamada `max` que reciba un arreglo de números y retorne el número máximo:

//**Nota:** Intentarlo hacer sin el método `Math.max` de JavaScript.

// escribe tu función acá

function max(arry) {
  count = 0;
  for (var i = 0; i < arry.length; i++) {
    if (arry[i] > count) {
      count = arry[i];
    }
  }

  return count;
}

// código de prueba
console.log(max([3, 9, 6])); // 9
console.log(max([67, 35, 54, 26, 878687])); // 67
console.log(max([5, 9, 2, 4, 5, 7])); // 9
