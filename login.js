let nombre = document.getElementById("nombre");
let contraseña = document.getElementById("contraseña");
let form = document.getElementById("form");
form.addEventListener("submit", function(nForm){
nForm.preventDefault();
if(nombre.length == 0){
    swal("Debe llenar el nombre")
}
if(contraseña.value.length < 6){
    swal("la contraseña no puede ser tan corta ")
}
})
