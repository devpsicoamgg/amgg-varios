//En el contexto de JavaScript, la asincronía (o programación asíncrona) se refiere a la capacidad de realizar tareas sin bloquear
//el hilo principal de ejecución. En otras palabras, permite que ciertas operaciones se realicen de forma independiente y en paralelo,
//sin esperar a que se completen antes de continuar con otras tareas.
//En un entorno de ejecución síncrono, las tareas se realizan una tras otra en secuencia. Si una tarea toma mucho tiempo en completarse,
//todas las tareas siguientes se bloquean y deben esperar a que termine antes de poder ejecutarse. Esto puede ser problemático en aplicaciones
//web, ya que podría hacer que la interfaz de usuario se vuelva lenta y poco receptiva.
// La programación asíncrona en JavaScript se logra principalmente utilizando:
// Callbacks: Una función que se pasa como argumento a otra función y que se ejecuta después de que la función original haya terminado su tarea.
//Promesas: Un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Las promesas permiten encadenar operaciones
//asíncronas y manejar errores de manera más eficiente.
//Async/await: Una forma más sintáctica y legible de trabajar con código asíncrono. Las funciones que utilizan la palabra clave "async" devuelven
//promesas automáticamente, y dentro de ellas, se puede utilizar la palabra clave "await" para esperar a que se resuelvan las promesas y obtener
//sus resultados.
//La programación asíncrona es esencial en JavaScript, especialmente cuando se trabaja con tareas que involucran interacciones de red,
//como solicitudes HTTP a servidores, operaciones de lectura y escritura en bases de datos, o cualquier operación que pueda llevar
//tiempo en completarse. Al utilizar la asincronía de manera adecuada, se puede mejorar la eficiencia y la capacidad de respuesta de
//las aplicaciones.

//Temporizadores: Por ejemplo, utilizando la función setTimeout, se puede programar una función
// para que se ejecute después de cierto tiempo. El siguiente código muestra un ejemplo de cómo
//utilizar una callback en un temporizador:

setTimeout(() => {
  console.log("Código asíncrono.");
}, 2000);
console.log("Código síncrono.");

//CALLBACK - HELL
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin Callback");
            console.log("Callback Hell !!!!!😈🤘");
            console.log("http://callbackhell.com/");
          });
        });
      });
    });
  });
});

//Eventos: En la programación de interfaces de usuario, se utilizan callbacks para manejar eventos.
//Por ejemplo, al hacer clic en un botón, se puede especificar una función callback que se ejecutará
//cuando ocurra el evento. El siguiente código muestra un ejemplo de cómo utilizar una callback como función escuchadora de un evento:

function showAlert() {
  alert("Alerta");
}
button.addEventListener("click", showAlert);

// Tareas asíncronas: Las callbacks también se utilizan para manejar tareas asíncronas. Por ejemplo,
//al realizar una petición HTTP, se puede pasar una callback que se ejecutará una vez que se obtenga
//la respuesta. El siguiente código muestra un ejemplo de cómo utilizar una callback para manejar una tarea asíncrona:

function doTask(number, callback) {
  // Código de la función
}

doTask(42, function (err, result) {
  // Trabajamos con err o result según nos interese
});

//Las Promesas en JavaScript son objetos que representan el resultado de una operación asíncrona. Proporcionan una forma más estructurada
//y legible de manejar la asincronía en comparación con las callbacks anidadas. Las Promesas resuelven el problema del "callback hell"
//al permitir encadenar operaciones de manera más clara y fácil de entender.

/*
    Estados de una Promesa:
        Pendiente (pending): La Promesa está en curso y aún no se ha resuelto ni rechazado.
        Cumplida (fulfilled): La Promesa se resolvió exitosamente y se obtuvo un resultado.
        Rechazada (rejected): La Promesa fue rechazada y se obtuvo un motivo de rechazo.

    Métodos de una Promesa:
        then(): Se utiliza para manejar el resultado exitoso de una Promesa. Recibe una función de callback que se ejecutará cuando la Promesa se resuelva correctamente.
        catch(): Se utiliza para manejar el motivo de rechazo de una Promesa. Recibe una función de callback que se ejecutará cuando la Promesa sea rechazada.
        finally(): Se utiliza para ejecutar código sin importar si la Promesa se resuelve o se rechaza. Recibe una función de callback que se ejecutará siempre al final, sin importar el resultado de la Promesa.

    Encadenamiento de Promesas:
        El método then() también devuelve una Promesa, lo que permite encadenar múltiples operaciones asíncronas de manera más clara.
        Cada then() puede recibir una función de callback que devuelve una Promesa, lo que permite encadenar operaciones sucesivas.
        Esto evita la anidación excesiva de callbacks y mejora la legibilidad del código.
*/

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 10 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    //console.log(obj);
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("4");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  })
  .catch((err) => console.error(err));
