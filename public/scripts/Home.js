
//let nombre = prompt("Como es tu nombre?");
//let span = document.querySelector("#welcome");
//let bienvenido = document.getElementById("nickname");
//bienvenido.textContent ="hola " + nombre;
let favoritos = ["american", "dookie", "21"];
function addFavoritos(favorites){
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
        if(favorites.includes(img.getAttribute('name'))){
            const icon = document.createElement("i");
            icon.classList.add("fa-regular");
            icon.classList.add("fa-star");
            icon.style.position = "absolute";
            icon.style.top = "1%";
            icon.style.left = "2%";
            img.parentNode.style.position = "relative";
            img.parentNode.appendChild(icon);

            img.parentElement.classList.add("favorite");
        }
    });
}
addFavoritos(favoritos);
let icons = document.querySelectorAll("i");
icons.forEach((i)=> {
    i.addEventListener("click", function(e){
        e.preventDefault();
        i.classList.toggle("fa-solid");
    })
}) 