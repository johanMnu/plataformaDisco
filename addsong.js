let bienvenido = document.getElementById("nickname");
bienvenido.textContent ="hola " + nombre;

let titulo = document.getElementById("titulo");
let duracion = document.getElementById("duracion");
let links = document.getElementById("link");
let form = document.getElementById("form");
form.addEventListener("submit", function(nForm){
    nForm.preventDefault();
    if(titulo.value.length == 0){
        swal("el titulo no puede estar vacio")
    }
    if(duracion.value.length == 0){
        swal("la duracion no puede estar vacia")
    }
    if(links.value.length == 0){
        swal("debe ingresar una url");
    }

    });
   