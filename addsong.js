let bienvenido = document.getElementById("nickname");
bienvenido.textContent ="hola " + nombre;
function Rellenar(){
let titulo = document.getElementById("titulo").value;
let duracion = document.getElementById("duracion").value;
let links = document.getElementById("link").value;
if( titulo == "" || duracion == "" || links == ""){
    swal("por favor llene todos los campos");
}

}