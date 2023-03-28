// localStorage
// sessionStorage

// localStorage.setItem("iva", 21);
// localStorage.setItem("nombre", "Carpi");

// let usuario = "Matías";
// localStorage.setItem("usuario", usuario);

// let usuarioEnLocalStorage = localStorage.getItem("usuario");
// console.log(usuarioEnLocalStorage);

// let usuarioIngresado = prompt("Ingrese su nombre");
// localStorage.setItem("usuario-ingresado", usuarioIngresado);
// let usuarioIngresadoEnLocalStorage = localStorage.getItem("usuario-ingresado");
// console.log(usuarioIngresadoEnLocalStorage);


/** OBJETOS **/



const usuario = {
    nombre: "TercerPreEntrega-Regino",
    edad: 24
}

// Opción 1
const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem("usuario", usuarioJSON);

// Opción 2
localStorage.setItem("usuario", JSON.stringify(usuario));


// Opción 1
const usuarioEnLocalStorage = localStorage.getItem("usuario");
const usuarioObjeto = JSON.parse(usuarioEnLocalStorage);

// Opción 2
const usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioEnLS);

/** ARRAY DE OBJETOS **/
const productos = [
    { nombre: "Pedigree", precio: 1500 },
    { nombre: "Advance", precio: 1500 },
    { nombre: "VitalCan", precio: 1800 },
];

localStorage.setItem("productos", JSON.stringify(productos));

const productosEnLS = JSON.parse(localStorage.getItem("productos"));
console.log(productosEnLS);



/*** EJEMPLO DE DARK MODE ***/

const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})


