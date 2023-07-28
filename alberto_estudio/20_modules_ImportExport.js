// Módulos import y export en JavaScript
// mathUtils.js (Archivo de módulo)
// Exportando una función
export function suma(a, b) {
    return a + b;
  }
  
  // Exportando una constante
  export const PI = 3.14159;
  
  // Exportando una clase
  export class Persona {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
  }
  
  // main.js (Archivo principal)
  // Importando funciones, variables y clases desde mathUtils.js
  import { suma, PI, Persona } from './mathUtils.js';
  
  // Utilizando las funciones, variables y clases importadas
  console.log(suma(5, 3)); // Salida: 8
  console.log(PI); // Salida: 3.14159
  
  const persona1 = new Persona('Juan');
  persona1.saludar(); // Salida: "Hola, soy Juan"
  
  // Uso de <script> con nomodule
  // En navegadores que no soportan módulos de ES6, se ejecutará el siguiente código
  // El atributo "nomodule" asegura que este código no se ejecute en navegadores modernos que soportan módulos
  // Este código proporciona una alternativa para cargar y utilizar el código en navegadores más antiguos
  const scriptElement = document.createElement('script');
  scriptElement.src = 'ruta/del/archivo_compilado.js'; // Ruta del archivo que contiene el código compilado con Babel o similar
  scriptElement.setAttribute('nomodule', ''); // Asegura que este script no se ejecute en navegadores modernos con soporte de módulos
  document.head.appendChild(scriptElement);
  