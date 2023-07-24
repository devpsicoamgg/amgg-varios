// Ejemplo 1: Parámetros rest - Sumar una lista variable de números
function sumar(...numeros) {
    let resultado = 0;
    for (const numero of numeros) {
      resultado += numero;
    }
    return resultado;
  }
  
  // Uso del ejemplo 1
  const resultadoSuma1 = sumar(2, 4, 6, 8); // Suma: 2 + 4 + 6 + 8 = 20
  console.log("Resultado de la suma 1:", resultadoSuma1); // Output: Resultado de la suma 1: 20
  
  const resultadoSuma2 = sumar(1, 3, 5, 7, 9); // Suma: 1 + 3 + 5 + 7 + 9 = 25
  console.log("Resultado de la suma 2:", resultadoSuma2); // Output: Resultado de la suma 2: 25
  

// OTRA FORMA 
  function sumar (a,b,...c) {
    let resultado = a + b; 

    c.forEach(function(params) {
        if (!isNaN(params)) {
        resultado += params;
    }
    });

    return resultado;
}


  // Ejemplo 2: Operador de propagación - Copiar y combinar arreglos
  const numeros = [1, 2, 3, 4, 5];
  
  // Copiar un arreglo usando el operador de propagación
  const copiaNumeros = [...numeros];
  console.log("Copia de números:", copiaNumeros); // Output: Copia de números: [1, 2, 3, 4, 5]
  
  // Concatenar arreglos usando el operador de propagación
  const masNumeros = [6, 7, 8];
  const todosLosNumeros = [...numeros, ...masNumeros];
  console.log("Todos los números:", todosLosNumeros); // Output: Todos los números: [1, 2, 3, 4, 5, 6, 7, 8]
  
  // Ejemplo 3: Operador de propagación - Clonar y combinar objetos
  const persona = { 
    nombre: "Alberto Mario Guerrero Gonzalez",
    birthDate: "16/nov/1979",
    ciudad: "Bogota",
    pais: "Colombia",
    email: "psico.amgg@gmail.com"
  };
  
  // Clonar un objeto usando el operador de propagación
  const copiaPersona = { ...persona };
  console.log("Copia de persona:", copiaPersona);
  
  // Combinar objetos usando el operador de propagación
  const detallesPersona = { 
    profesion: "Psicólogo",
    hobbies: ["lectura", "caminar"]
  };
  const personaCompleta = { ...persona, ...detallesPersona };
  console.log("Persona completa:", personaCompleta);
  
  /* Output:
  Copia de persona: {
    nombre: 'Alberto Mario Guerrero Gonzalez',
    birthDate: '16/nov/1979',
    ciudad: 'Bogota',
    pais: 'Colombia',
    email: 'psico.amgg@gmail.com'
  }
  Persona completa: {
    nombre: 'Alberto Mario Guerrero Gonzalez',
    birthDate: '16/nov/1979',
    ciudad: 'Bogota',
    pais: 'Colombia',
    email: 'psico.amgg@gmail.com',
    profesion: 'Psicólogo',
    hobbies: [ 'lectura', 'caminar' ]
  }
  */
  