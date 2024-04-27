//alert("Bienvenido");
let nombre = prompt("Ingrese su nombre").toUpperCase();
while (nombre.length < 3) {
    if (nombre.length < 3) {
        nombre = prompt("su nombre es demasiado corto,ingrese al menos 3 letras").toUpperCase()
    }

}

let edad = prompt("Ingrese su edad");
let boton = document.querySelectorAll("button");
if (edad < 18) {
    swal("No puede comprar tickets " + " tienes " + edad + "necesitas ser mayor");

    boton.forEach(function (botonNuevo) {
        botonNuevo.disabled = true;
    });

}
let buton = document.querySelectorAll("button");
function getTickets(noTickets, place, cantEntradas, lugar) {
    if (noTickets) {
        swal("Sold!", "You have tickets to the " + place +
            " concert", "success");

    }

    let cantTickets = tickets[lugar];
    let entradasRestantes = cantTickets - 1;
    tickets[lugar] = entradasRestantes;
    if (entradasRestantes == 0) {

        swal(
            "Oh no!",
            "You are outta luck!, there are no more tickets for " +
            place, "info",
        );
        console.log(tickets)
        
}
}
//5- Para aquellos lugares que ya no tienen tickets deberás crear una segunda función llamada disableSoldOutButtons que
// recorra el objeto tickets y deshabilite el botón correspondiente a aquellas fechas ya agotadas.
function disableSoldOutButton(boton){
           
                botonNuevo.disabled = true;
                botonNuevo.textContent = "Sold Out"; }

let tickets = {
    "bsa": 2,
    "mx": 1,
    "bol": 5,
    "chile": 5,
    "calif": 5,
    "LA": 5,
    "NY": 1,
    "miami": 8,
    "bar": 8,
    "madrid": 2

};







const span = document.getElementById("welcome");
span.textContent = "Hola " + nombre;

