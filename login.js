let nombre = document.getElementById("nombre");
let contraseña = document.getElementById("contraseña");
let form = document.getElementById("form");
form.addEventListener("submit", function(nForm){
nForm.preventDefault();
if(nombre.value.length == 0){
    swal("Debe llenar el nombre")
}
if(contraseña.value.length == 0){
    swal("la contraseña no puede estar vacia")
}
})
