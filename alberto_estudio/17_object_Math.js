// Método: Math.abs()
// Devuelve el valor absoluto de un número.
const numero1 = -10;
const valorAbsoluto = Math.abs(numero1);
console.log("Valor absoluto:", valorAbsoluto); // Salida: 10

// Método: Math.sqrt()
// Devuelve la raíz cuadrada de un número.
const numero2 = 25;
const raizCuadrada = Math.sqrt(numero2);
console.log("Raíz cuadrada:", raizCuadrada); // Salida: 5

// Método: Math.pow()
// Devuelve un número elevado a una potencia dada.
const base = 2;
const exponente = 3;
const potencia = Math.pow(base, exponente);
console.log("Potencia:", potencia); // Salida: 8 (2 elevado a 3)

// Método: Math.floor()
// Devuelve el número redondeado hacia abajo al entero más cercano.
const numero3 = 7.8;
const redondeoAbajo = Math.floor(numero3);
console.log("Redondeo hacia abajo:", redondeoAbajo); // Salida: 7

// Método: Math.ceil()
// Devuelve el número redondeado hacia arriba al entero más cercano.
const numero4 = 4.2;
const redondeoArriba = Math.ceil(numero4);
console.log("Redondeo hacia arriba:", redondeoArriba); // Salida: 5

// Método: Math.round()
// Devuelve el número redondeado al entero más cercano.
const numero5 = 3.5;
const redondeoCercano = Math.round(numero5);
console.log("Redondeo cercano:", redondeoCercano); // Salida: 4

// Método: Math.random()
// Devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).
const numeroAleatorio = Math.random();
console.log("Número aleatorio:", numeroAleatorio); // Salida: Un número entre 0 y 1 (por ejemplo, 0.54321)

// Método: Math.max()
// Devuelve el mayor de los argumentos pasados como parámetros.
const numeroMaximo = Math.max(10, 5, 20, 15);
console.log("Número máximo:", numeroMaximo); // Salida: 20

// Método: Math.min()
// Devuelve el menor de los argumentos pasados como parámetros.
const numeroMinimo = Math.min(10, 5, 20, 15);
console.log("Número mínimo:", numeroMinimo); // Salida: 5

// Método: Math.trunc()
// Devuelve la parte entera de un número eliminando la parte decimal.
const numero6 = 7.89;
const truncNumero = Math.trunc(numero6);
console.log("Truncado:", truncNumero); // Salida: 7

// Método: Math.round()
// Redondea un número al entero más cercano.
const numero7 = 3.5;
const roundNumero = Math.round(numero7);
console.log("Redondeo cercano:", roundNumero); // Salida: 4

// Método: Math.ceil()
// Redondea un número hacia arriba al entero más cercano.
const numero8 = 4.2;
const ceilNumero = Math.ceil(numero8);
console.log("Redondeo hacia arriba:", ceilNumero); // Salida: 5

// Método: Math.floor()
// Redondea un número hacia abajo al entero más cercano.
const numero9 = 7.8;
const floorNumero = Math.floor(numero9);
console.log("Redondeo hacia abajo:", floorNumero); // Salida: 7

// Método: Math.sign()
// Devuelve el signo de un número (1 para positivos, -1 para negativos, 0 para cero).
const numero10 = -15;
const signoNumero = Math.sign(numero10);
console.log("Signo del número:", signoNumero); // Salida: -1

// Método: Math.random() para obtener números aleatorios en un rango específico
// Devuelve un número pseudoaleatorio entre min (inclusive) y max (exclusivo).
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const numeroAleatorioRango = getRandomNumber(1, 100);
console.log("Número aleatorio en rango:", numeroAleatorioRango); // Salida: Un número entre 1 y 100 (por ejemplo, 42.65321)
