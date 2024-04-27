alert("Bienvenido");
let nombre = prompt("Como es tu nombre?");
let span = document.querySelector("#welcome");

if(nombre.length < 2){
  nombre= prompt("su nombre debe tener mas de dos letras, por favor ingrese su nombre de nuevo");
}
if(nombre == ""){}
alert("Hola " + nombre.toUpperCase());

let favoriteRecords = ["American Idiot", "dookie", "disco21st Century Breakdown"];
function addFavorites(favorites) {
  let imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    if (favorites.includes(img.name)) {
      let icon = document.createElement("i");
      icon.classList.add("fa-solid");
      icon.classList.add("fa-star");
      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");
    }
  });
}

console.log(addFavorites(favoriteRecords))
