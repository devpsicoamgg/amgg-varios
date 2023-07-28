// Crear una nueva instancia de Date con la fecha y hora actual
const fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.toDateString()) // como me gusta
// Salida: "2023-07-26T08:30:00.000Z" (La fecha y hora actual en formato ISO 8601)

// Crear una nueva instancia de Date con una fecha específica
const fechaEspecifica = new Date('2023-12-31T23:59:59');
console.log(fechaEspecifica);

// Salida: "2023-12-31T23:59:59.000Z"

// Crear una nueva instancia de Date con parámetros de año, mes y día
const fechaPersonalizada = new Date(2022, 6, 15); // El mes se representa en base 0 (enero = 0, febrero = 1, etc.)
console.log(fechaPersonalizada);

// Salida: "2022-07-15T00:00:00.000Z"

// Obtener el año, mes y día de una instancia de Date
const anio = fechaActual.getFullYear();
const mes = fechaActual.getMonth(); // Devuelve el mes en base 0 (enero = 0, febrero = 1, etc.)
const dia = fechaActual.getDate();

console.log(`Año: ${anio}, Mes: ${mes + 1}, Día: ${dia}`);

// Salida: "Año: 2023, Mes: 7, Día: 26"

// Obtener el día de la semana (0: Domingo, 1: Lunes, ..., 6: Sábado)
const diaSemana = fechaActual.getDay();
console.log(`Día de la semana: ${diaSemana}`);

// Obtener la hora, minutos, segundos y milisegundos de una instancia de Date
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();
const milisegundos = fechaActual.getMilliseconds();

console.log(`Hora: ${hora}, Minutos: ${minutos}, Segundos: ${segundos}, Milisegundos: ${milisegundos}`);

// Salida: "Hora: 8, Minutos: 30, Segundos: 0, Milisegundos: 0"

// Realizar cálculos con fechas: Agregar días a una fecha
const fechaInicial = new Date('2023-07-26');
const diasAgregar = 5;

fechaInicial.setDate(fechaInicial.getDate() + diasAgregar);
console.log(fechaInicial);

// Salida: "2023-07-31T00:00:00.000Z" (Fecha inicial + 5 días)

// Comparar fechas
const fecha1 = new Date('2023-07-26');
const fecha2 = new Date('2023-07-31');

if (fecha1 < fecha2) {
  console.log('La fecha 1 es anterior a la fecha 2.');
} else if (fecha1 > fecha2) {
  console.log('La fecha 1 es posterior a la fecha 2.');
} else {
  console.log('Ambas fechas son iguales.');
}

// Salida: "La fecha 1 es anterior a la fecha 2."



function calcularEdad(fechaNacimiento, fechaActuales) {
    const nacimiento = new Date(fechaNacimiento);
    const actual = new Date(fechaActuales);
  
    // Calcular la diferencia en milisegundos
    const diferenciaMilisegundos = actual - nacimiento;
  
    // Calcular la edad en años, meses y días
    const edadFecha = new Date(diferenciaMilisegundos);
    const edadAnios = edadFecha.getUTCFullYear() - 1970;
    const edadMeses = edadFecha.getUTCMonth();
    const edadDias = edadFecha.getUTCDate() - 1;
  
    return { Años: edadAnios, meses: edadMeses, dias: edadDias };
  }
  
  // Ejemplo de uso
  const fechaNacimiento = "1979-11-16";
  const fechaActuales = "2023-07-27";
  
  const edad = calcularEdad(fechaNacimiento, fechaActuales);
  console.log(edad);
  
  // Salida: { años: 42, meses: 8, dias: 10 }  