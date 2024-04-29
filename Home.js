alert("Bienvenido");
let nombre = prompt("Como es tu nombre?");
let span = document.querySelector("#welcome");
let bienvenido = document.getElementById("nickname");
bienvenido.textContent ="hola " + nombre;
let icono = document.querySelector("i");
icono.addEventListener("click" , function(){
    icono.style.accentColor = "yellow";
})
