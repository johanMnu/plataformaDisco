//alert("Bienvenido");
let nombre = prompt("Ingrese su nombre").toUpperCase();
while (nombre.length < 3) {
    if (nombre.length < 3) {
        nombre = prompt("su nombre es demasiado corto,ingrese al menos 3 letras").toUpperCase()
    }

}
let bienvenido = document.getElementById("nickname");
bienvenido.textContent ="hola " + nombre;

let edad = prompt("Ingrese su edad");
let boton = document.querySelectorAll("button");
if (edad < 18) {
    swal("No puede comprar tickets " + " tienes " + edad + "necesitas ser mayor");

    boton.forEach(function (botonNuevo) {
        botonNuevo.disabled = true;
    });

}
function getTickets( place) {
    if (tickets[place]>0) {
        tickets[place]--
            swal("Sold!", "You have tickets to the " + place +
            " concert", "success");

    }else if(tickets[place]==0){
        disableSoldOutButton();
        swal('lo sentimos','los tickets para ' + place + ' se agotaron','warining')
    }

    
        
}

//5- Para aquellos lugares que ya no tienen tickets deberás crear una segunda función llamada disableSoldOutButtons que
// recorra el objeto tickets y deshabilite el botón correspondiente a aquellas fechas ya agotadas.
function disableSoldOutButton(){
            for(let place in tickets){
                if(tickets[place]==0){
                    let buton = document.querySelectorAll(".botonn");
                    buton.forEach(buton => {
                        let place = buton.getAttribute("data-place");
                        if(tickets[place]==0){
                            buton.textContent = "Sold out";
                            buton.disabled = true;
                        }
                    })
                }
            }
           
        }

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

