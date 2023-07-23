// FUNCIONES  (ƒ) - Bloque de construcción similar a un procedimiento. (entrada y salida relacionadas). 
// Bloque de codigo autocontenido independiente del scope o ámbito global.
// Se define 1 vez. 
// Puede ser reutilizada o ejecutada/invocada en cualquier momento del codigo.
// Puede o no recibir parametros. 
// Puede devolver valores.
// Un tipo de dato muy especial, son consideradas objetos. 
// 
// las funciones se definen o "declaran" de diferente manera.  

    //***FUNCIÓN DECLARADA*** - SE DEFINE EN EL AMBITO GLOBAL. ES DECLARADA PUES LLEVA LA PALABRA RESERVADA function Y LLEVA NOMBRE 
                              //PARA PODER SER LLAMADA DESDE CUALQUIER PARTE. 
    function sum(a, b) {
        return a + b;
      }

    //***FUNCIÓN EXPRESADA*** - PUEDE SER GLOBAL O LOCAL PERO SI LOCAL SOLO FUNCIONA DENTRO DEL BLOQUE DENTRO DE DONDE ESTA EXPRESADA. 
                             // PUEDE SER O NO ANONIMA. 
    let sum = function(a, b) {
        return a + b;
      };

    //***FUNCIÓN CON CONSTRUCTOR***      
    let sum = new Function("a", "b", "return a + b");

    //***FUNCIÓN FLECHA ->*** - NO NECESARIAMENTE EN UNA VARIABLE. NO RECOMENDADA EN OBJETOS. 
    const sum = (a, b) => a + b;


    //  En JavaScript, es común utilizar camelCase para nombrar variables y funciones, y PascalCase para nombrar clases. 
