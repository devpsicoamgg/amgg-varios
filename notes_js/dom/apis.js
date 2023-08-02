// DOM (Document Object Model)
// El DOM representa la estructura de un documento HTML/XML como un árbol de nodos, donde cada elemento es un nodo en el árbol.
// Permite interactuar con el contenido y la estructura de una página web desde JavaScript.

// Ejemplo: Acceder a elementos del DOM
const titulo = document.getElementById("titulo"); // Obtenemos un elemento por su ID
const enlaces = document.getElementsByClassName("enlace"); // Obtenemos elementos por su clase
const parrafos = document.getElementsByTagName("p"); // Obtenemos elementos por su etiqueta

// BOM (Browser Object Model)
// El BOM proporciona objetos que representan la ventana y otros elementos del navegador, permitiendo interactuar con el navegador mismo.

// Ejemplo: Manipular la barra de direcciones con el History API
history.pushState(null, null, "/pagina2"); // Agregamos una nueva entrada en el historial del navegador
window.addEventListener("popstate", () => {
  console.log("Se ha navegado hacia atrás o adelante en el historial.");
}); // Manejamos el evento de navegación

// CSSOM (CSS Object Model)
// El CSSOM permite acceder y manipular reglas y estilos CSS de una página web.

// Ejemplo: Modificar estilos de un elemento
const elemento = document.getElementById("miElemento");
elemento.style.color = "red"; // Cambiamos el color del texto a rojo

// Eventos
// Los eventos son interacciones del usuario o acciones que ocurren en una página web.

// Ejemplo: Agregar un evento click a un botón
const boton = document.getElementById("miBoton");
boton.addEventListener("click", () => {
  console.log("¡Botón clickeado!");
});

// Formularios
// La API de formularios permite trabajar con formularios en una página web.

// Ejemplo: Obtener datos de un formulario
const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitamos el envío del formulario

  const formData = new FormData(formulario);
  const nombre = formData.get("nombre");
  const email = formData.get("email");

  console.log(`Nombre: ${nombre}, Email: ${email}`);
});

// AJAX con fetch
// Fetch es una API que permite realizar peticiones HTTP asíncronas (AJAX).

// Ejemplo: Obtener datos desde una API
const url = "https://api.example.com/data";
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudo obtener la data");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Datos obtenidos desde la API
  })
  .catch((error) => {
    console.error(error);
  });

// Web Storage
// Web Storage API proporciona dos mecanismos para almacenar datos en el navegador: localStorage y sessionStorage.

// Ejemplo: Almacenar y obtener datos en localStorage
localStorage.setItem("nombre", "Juan");
const nombreAlmacenado = localStorage.getItem("nombre");
console.log(nombreAlmacenado); // Output: "Juan"

// Geolocation API
// La Geolocation API permite obtener la ubicación geográfica del usuario a través del navegador.

// Ejemplo: Obtener la ubicación del usuario
navigator.geolocation.getCurrentPosition((position) => {
  const latitud = position.coords.latitude;
  const longitud = position.coords.longitude;
  console.log(`Latitud: ${latitud}, Longitud: ${longitud}`);
});

// Drag and Drop API
// La API de Arrastrar y Soltar permite que elementos HTML sean arrastrados y soltados en una página web.

// Ejemplo: Habilitar un elemento para ser arrastrado y soltado en un área específica
const elementoArrastrable = document.getElementById("elementoArrastrable");
const areaDestino = document.getElementById("areaDestino");

elementoArrastrable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

areaDestino.addEventListener("dragover", (event) => {
  event.preventDefault();
});

areaDestino.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const elementoArrastrado = document.getElementById(data);
  areaDestino.appendChild(elementoArrastrado);
});

// IndexedDB
// IndexedDB es una base de datos en el navegador que permite almacenar grandes cantidades de datos.

// Ejemplo: Crear y almacenar datos en una base de datos IndexedDB
const request = indexedDB.open("miBaseDeDatos", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const objectStore = db.createObjectStore("personas", { keyPath: "id" });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction(["personas"], "readwrite");
  const objectStore = transaction.objectStore("personas");

  const persona = { id: 1, nombre: "Juan", edad: 30 };
  objectStore.add(persona);
};

// Canvas API
// Canvas API permite dibujar gráficos, imágenes y animaciones en una página web.

// Ejemplo: Dibujar un cuadrado rojo en un canvas
const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);
