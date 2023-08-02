/**
 * Proxies en JavaScript:
 *
 * - Las Proxies son objetos especiales que permiten personalizar el comportamiento de otros
 * objetos.
 * - Se definen mediante la clase "Proxy", que toma dos parámetros: el objeto objetivo y
 * el manejador.
 * - El manejador es un objeto que define las trampas (métodos) que se interceptan y
 * personalizan.
 * - Las trampas más comunes son "get" para obtener valores y "set" para asignar
 * valores a propiedades.
 *
 * Características:
 *
 * - Las Proxies ofrecen reflexión, lo que significa que podemos inspeccionar y
 * modificar el objeto objetivo.
 * - Permiten establecer restricciones o validaciones en la asignación de valores
 * a las propiedades.
 * - Permiten agregar lógica personalizada para controlar el acceso a las propiedades
 * y métodos del objeto.
 * - Son útiles para implementar patrones como lazy loading, validaciones y logs en
 * las operaciones.
 *
 * Métodos de los Proxies:
 *
 * - "get(target, property, receiver)": Se ejecuta cuando se accede a una
 * propiedad del objeto.
 * - "set(target, property, value, receiver)": Se ejecuta cuando se asigna un
 * valor a una propiedad.
 * - "has(target, property)": Se ejecuta cuando se llama al operador "in" para
 * comprobar si una propiedad existe.
 * - "deleteProperty(target, property)": Se ejecuta cuando se usa el operador
 * "delete" para eliminar una propiedad.
 * - "apply(target, thisArg, argumentsList)": Se ejecuta cuando se llama a una función.
 * - "construct(target, argumentsList, newTarget)": Se ejecuta cuando se crea una nueva instancia de un objeto.
 */

// Creo un objeto para representar un paciente
const paciente = {
  nombre: "",
  edad: 0,
  problemas: "",
};

// Defino un manejador para la Proxy de paciente
const pacienteHandler = {
  set(target, propiedad, valor) {
    if (propiedad === "nombre" && !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)) {
      return console.error(
        `La propiedad "${propiedad}" sólo acepta letras y espacios en blanco e ingresaste el valor ${valor} `
      );
    }
    if (propiedad === "edad" && valor <= 0) {
      return console.error(` La edad no puede ser ${valor}`);
    }
    target[propiedad] = valor;
  },
};

// Creo la Proxy "registroPaciente" para el paciente utilizando el manejador.
const registroPaciente = new Proxy(paciente, pacienteHandler);

// Registro de un nuevo paciente
registroPaciente.nombre = "Juan";
registroPaciente.edad = 30;
registroPaciente.problemas = "Ansiedad";

console.log(registroPaciente);
// Output: { nombre: 'Juan', edad: 30, problemas: 'Ansiedad' }

// Intento asignar una edad negativa (lo cual está prohibido)
registroPaciente.edad = -5; // Output: La edad no puede ser ${valor}
registroPaciente.nombre = 0; // Output: La propiedad "nombre" sólo acepta letras y espacios en blanco e ingresaste el valor 0
