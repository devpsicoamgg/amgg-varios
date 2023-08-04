// Selector para obtener todos los elementos <li> del documento
console.log("01)  Selección de elementos por etiqueta -----");
console.log("listaItems = document.getElementsByTagName()");
const listaItems = document.getElementsByTagName("li");
console.log(listaItems); // Muestra una colección de elementos <li>

// Selector para obtener todos los elementos con la clase "card" del documento
console.log("02)  Selección de elementos por clase -----");
console.log("elementosCard = document.getElementsByClassName()");
const elementosCard = document.getElementsByClassName("card");
console.log(elementosCard); // Muestra una colección de elementos con la clase "card"

// Selector para obtener elementos por su atributo "name" igual a "nombre"
console.log("03)  Selección de elementos por atributo 'name' -----");
console.log("elementosNombre = document.getElementsByName()");
const elementosNombre = document.getElementsByName("nombre");
console.log(elementosNombre); // Muestra una colección de elementos con el atributo "name" igual a "nombre"

// Selector utilizando querySelector para obtener el primer elemento <a> (hipervínculo)
console.log("04)  Selección de elementos por etiqueta con querySelector -----");
console.log("elementoA = document.querySelector()");
const elementoA = document.querySelector("a");
console.log(elementoA); // Muestra el primer elemento <a> (hipervínculo) en el documento

// Selector utilizando querySelectorAll para obtener todos los elementos <a> (hipervínculos)
console.log(
  "05) Selección de elementos por etiqueta con querySelectorAll -----"
);
console.log("elementosA = document.querySelectorAll()");
const elementosA = document.querySelectorAll("a");
console.log(elementosA); // Muestra una colección de todos los elementos <a> (hipervínculos)

// Mostrar la cantidad de elementos <a> (hipervínculos) encontrados
console.log("06) Cantidad de elementos <a> encontrados -----");
console.log("console.log(elementosA.length)");
console.log(elementosA.length); // Muestra la cantidad de elementos <a> (hipervínculos)

// Iterar y mostrar cada elemento <a> (hipervínculo) encontrado
console.log("07) Iterar y mostrar cada elemento <a> encontrado -----");
console.log("elementosA.forEach((el) => console.log(el));");
elementosA.forEach((el) => console.log(el));

// Selector utilizando querySelector para obtener el primer elemento con la clase "card"
console.log("08) Selección de elementos por clase con querySelector -----");
console.log("elementoCard = document.querySelector()");
const elementoCard = document.querySelector(".card");
console.log(elementoCard); // Muestra el primer elemento con la clase "card"

// Selector utilizando querySelectorAll para obtener todos los elementos con la clase "card"
console.log("09) Selección de elementos por clase con querySelectorAll -----");
console.log("elementosCardAll = document.querySelectorAll()");
const elementosCardAll = document.querySelectorAll(".card");
console.log(elementosCardAll); // Muestra una colección de elementos con la clase "card"

// Acceder al tercer elemento de la colección de elementos con la clase "card"
console.log(
  "10) Acceder a un elemento específico dentro de la colección -----"
);
console.log("console.log(elementosCardAll[])");
console.log(elementosCardAll[2]); // Muestra el tercer elemento con la clase "card"

// Selector utilizando querySelector para obtener el primer elemento <li> dentro de la lista de navegación
console.log("11) Selección de elementos anidados con querySelector -----");
console.log("elementoLiNav = document.querySelector()");
const elementoLiNav = document.querySelector("nav li");
console.log(elementoLiNav); // Muestra el primer elemento <li> dentro de la lista de navegación

// Selector utilizando querySelectorAll para obtener todos los elementos <li> dentro de la lista de navegación
console.log("12)  Selección de elementos anidados con querySelectorAll -----");
console.log("elementosLiNavAll = document.querySelectorAll()");
const elementosLiNavAll = document.querySelectorAll("nav li");
console.log(elementosLiNavAll); // Muestra una colección de elementos <li> dentro de la lista de navegación

//--------------->

// Seleccionar el elemento con clase "link-dom" usando querySelector
const $linkDOM = document.querySelector(".link-dom");

// Mostrar el objeto style que representa los estilos en línea del elemento
console.log($linkDOM.style);

// Obtener el valor del atributo "style" del elemento
console.log($linkDOM.getAttribute("style"));

// Obtener el valor de la propiedad "backgroundColor" del estilo en línea del elemento
console.log($linkDOM.style.backgroundColor);

// Obtener el valor de la propiedad "color" del estilo en línea del elemento
console.log($linkDOM.style.color);

// Obtener todos los estilos computados (incluidos los estilos heredados y aplicados por CSS) del elemento
console.log(window.getComputedStyle($linkDOM));

// Obtener el valor específico de la propiedad "color" en los estilos computados del elemento
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// Establecer propiedades de estilo en el elemento usando setProperty
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

// Mostrar el objeto style actualizado después de establecer las propiedades
console.log($linkDOM.style);

// Mostrar el valor actualizado del atributo "style" del elemento
console.log($linkDOM.getAttribute("style"));

// Mostrar los estilos computados actualizados del elemento después de las modificaciones
console.log(getComputedStyle($linkDOM));

// Accediendo a las variables CSS (Custom Properties CSS) definidas en el :root
const $html = document.documentElement, // Seleccionar el elemento HTML
  $body = document.body; // Seleccionar el elemento body

// Obtener el valor de la variable CSS "--yellow-color" definida en el :root
let varYellowColor = getComputedStyle($html).getPropertyValue("--black-color");

// Mostrar los valores de las variables CSS
console.log(varDarkColor, varYellowColor);

// Cambiar el color de fondo del body usando la variable CSS "--dark-color"
$body.style.backgroundColor = varDarkColor;

// Cambiar el color del texto del body usando la variable CSS "--yellow-color"
$body.style.color = varYellowColor;

// Modificar la variable CSS "--dark-color" en el :root
$html.style.setProperty("--dark-color", "#000");

// Actualizar el valor de la variable CSS después de modificarla
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// Cambiar el color de fondo del body usando la variable CSS modificada
$body.style.setProperty("background-color", varDarkColor);
