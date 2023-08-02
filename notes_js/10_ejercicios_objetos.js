function sumarPropiedadesNumericas(objeto) {
  // Debes crear una función que reciba un objeto y calcule la suma de todas las propiedades numéricas que tenga.
  // Retorna la suma resultante.
  let sum = 0;
  for (prepertis in objeto) {
    if (
      objeto[prepertis] < 0 ||
      objeto[prepertis] > 0 ||
      objeto[prepertis] === 0
    ) {
      sum += objeto[prepertis];
    }
  }
  return sum;
}
console.log(
  sumarPropiedadesNumericas({
    Prop1: 8,
    Prop2: 1,
    Prop3: 2,
    Prop4: undefined,
    Prop5: "Carlos",
  })
);

function mezclarObjetos(objeto1, objeto2) {
  // Debes crear una función que reciba dos objetos y devuelva un nuevo objeto que contenga todas las propiedades de ambos. no repetidas
  // Si un propiedad se repite, el valor del objeto2 prevalecerá.
  // Retorna el nuevo objeto.

  var newObject = Object.assign({}, objeto2, objeto1);

  return newObject;
}

console.log(
  mezclarObjetos(
    {
      //objeto1
      Prop9: 1,
      Prop2: 4,
      Prop3: "",
    },
    //objeto2
    { Prop1: 1, Prop2: 44, Prop3: undefined }
  )
);

function mezclarObjetos(objeto1, objeto2) {
  // Debes crear una función que reciba dos objetos y devuelva un nuevo objeto que contenga todas las propiedades de ambos. no repetidas
  // Si un propiedad se repite, el valor del objeto2 prevalecerá.
  // Retorna el nuevo objeto.

  objectToRetunr = objeto1;
  for (var keys in objeto2) {
    objectToRetunr[keys] = objeto2[keys];
  }

  return objectToRetunr;
}

console.log(
  mezclarObjetos(
    {
      //objeto1
      Prop9: 1,
      Prop2: 4,
      Prop3: "",
    },
    //objeto2
    { Prop1: 1, Prop2: 44, Prop3: undefined }
  )
);

function agregarPropiedad(objeto, propiedad) {
  // Debes crear una función que reciba un objeto y una cadena, y agregue la propiedad correspondiente con valor null.
  // Retorna el objeto modificado.
  objeto[propiedad] = null;
  return objeto;
}

console.log(agregarPropiedad({}, "amor"));

function invocarMetodo(objeto, metodo) {
  // Debes crear una función que reciba un objeto y una cadena, e invoque el método correspondiente.
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // Debes crear una función que reciba un objeto con una propiedad numérica desconocida y devuelva su valor multiplicado por 5.
  // No modificar el objeto original.
  // Retorna el resultado de la multiplicación.
}

function eliminarPropiedad(objeto, propiedad) {
  // Debes crear una función que reciba un objeto y una cadena, y elimine la propiedad correspondiente.
  // Retorna el objeto modificado.
}

function tieneEmail(objetoUsuario) {
  // Debes crear una función que reciba un objeto y verifique si tiene una propiedad "email" con valor distinto de null, undefined, false o vacío.
  // Retorna true si tiene email, false si no.
}

function tienePropiedad(objeto, propiedad) {
  // Debes crear una función que reciba un objeto y una cadena, y verifique si el objeto tiene una propiedad con ese nombre.
  // Retorna true si tiene la propiedad, false si no.
}
