// Explicación sobre Expresiones Regulares (Regex) en JavaScript

// ¿Qué son las expresiones regulares?
// Las expresiones regulares, también conocidas como regex o regexp, son patrones utilizados para buscar, encontrar y manipular texto en cadenas de caracteres. Son muy poderosas y versátiles y se utilizan en muchos lenguajes de programación, incluido JavaScript.

// Creación de una expresión regular:
// Para crear una expresión regular en JavaScript, se utiliza el objeto RegExp o se pueden escribir entre barras diagonales "/". Por ejemplo:

const regex1 = new RegExp('patrón');
const regex2 = /patrón/;

// Uso de expresiones regulares:
// Las expresiones regulares se utilizan con métodos específicos de JavaScript que admiten regex, como test(), exec(), match(), replace() y otros.

// Método test():
// El método test() se utiliza para verificar si un patrón se encuentra en una cadena. Devuelve true si encuentra el patrón y false si no lo encuentra.

const texto = 'Hola, ¿cómo estás?';
const patron = /cómo/;

const resultado = patron.test(texto);
console.log(resultado); // Devolverá true

// Método exec():
// El método exec() se utiliza para buscar el patrón en la cadena y devuelve un objeto con información sobre la coincidencia. Si no encuentra ninguna coincidencia, devuelve null.

const texto2 = 'La casa es grande y bonita.';
const patron2 = /grande/;

const resultado2 = patron2.exec(texto2);
console.log(resultado2); // Devolverá un objeto con información sobre la coincidencia

// Método match():
// El método match() se utiliza para buscar todas las coincidencias de un patrón en una cadena y devuelve un array con las coincidencias encontradas.

const texto3 = 'La montaña es alta y la luna es redonda.';
const patron3 = /es/g;

const resultado3 = texto3.match(patron3);
console.log(resultado3); // Devolverá ["es", "es"]

// Método replace():
// El método replace() se utiliza para reemplazar un patrón en una cadena por otro valor.

const texto4 = 'Hola, soy {nombre}.';
const patron4 = /{nombre}/;
const nuevoTexto = texto4.replace(patron4, 'Juan');

console.log(nuevoTexto); // Devolverá "Hola, soy Juan."

// Modificadores:
// Las expresiones regulares pueden llevar modificadores para hacerlas más flexibles. Algunos modificadores comunes son "i" (ignorar mayúsculas y minúsculas) y "g" (buscar todas las coincidencias).

const texto5 = 'Hola, Mundo!';
const patron5 = /mundo/i; // El modificador "i" ignora mayúsculas y minúsculas

const resultado5 = texto5.match(patron5);
console.log(resultado5); // Devolverá ["Mundo"]

// Uso de caracteres especiales:
// En las expresiones regulares, algunos caracteres tienen un significado especial, como ".", "*", "+", "?", entre otros. Si deseas buscar estos caracteres literales, debes escaparlos con una barra diagonal "\".

const texto6 = 'Mi correo es juan@example.com.';
const patron6 = /juan@example\.com/;

const resultado6 = patron6.test(texto6);
console.log(resultado6); // Devolverá true

// Conclusión:
// Las expresiones regulares son una poderosa herramienta para manipular texto en JavaScript. Son útiles para validar cadenas, buscar patrones específicos y realizar reemplazos en textos. Aunque pueden ser un poco complicadas al principio, una vez que te familiarices con ellas, te serán de gran ayuda en tus desarrollos.

