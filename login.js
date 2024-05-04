function validacion(){
    let nombre = document.getElementById("nombre").value;
    let contra = document.getElementById("contraseña").value;
    if(nombre == "" || contra == "" ){
        swal("por favor , completo todos los campos.");
    }else{
        swal("Iniciando Sesion!!")
    }
}
document.getElementById("contraseña").addEventListener("input", function(){
    let pass = this.value;
    let errorMsj=document.getElementById("mensajeError");
    if(pass.length < 6){
        errorMsj.style.display="block";
    }else{
        errorMsj.style.display="none";
    }

})