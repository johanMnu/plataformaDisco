function validar(){
    let titulo = document.getElementById("titulo").value;
    let año = document.getElementById("año").value;
    let descrip = document.getElementById("descripcion").value;
    if(titulo == "" || año == "" || descrip == "" ){
        swal("por favor , completo todos los campos.");
    }
}