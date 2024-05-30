function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const contraseña = document.getElementById("contrasena").value.trim();

    if (!nombre || !contraseña) {
        // Mostrar SweetAlert indicando que se deben completar todos los campos
        swal('error', 'Por favor llene todos los campos');
        return false; // Detener el envío del formulario
    } else {
        // Si todos los campos están completos, enviar el formulario
        return true;
    }
}

document.getElementById("contrasena").addEventListener("input", function(){
    let pass = this.value;
    let errorMsj=document.getElementById("mensajeError");
    if(pass.length < 6){
        errorMsj.style.display="block";
    }else{
        errorMsj.style.display="none";
    }})
let boton = document.getElementById("enviar");
boton.addEventListener("click", async function(e){
    // Llamamos a la función validarFormulario antes de enviar el formulario
    if (!validarFormulario()) {
        e.preventDefault(); // Detener el envío del formulario si la validación falla
    } else {
        swal({
            title: "¡Sesión iniciada!",
            text: "Usuario registrado con éxito.",
            icon: "success",
            confirmButtonText: "Ok"
        }).then(() => {
            window.location.href = "index.html";
        });
    }
});