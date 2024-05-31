

document.getElementById("addAlbum").addEventListener("click", () => {
  window.location.href = 'addAlbum.html';
});

document.getElementById("tours").addEventListener("click", () => {
  window.location.href = "Tours.html";
});

document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "login.html";
});
document.getElementById("login").addEventListener("click", () => {
  window.location.href = "signUp.html";
});

const getAlbums = async () => {

    try {
        console.log("peticion al servidor");
        const response = await axios.get('/Album/albumes');
        for(let key in response.data){
            renderAlbums(response.data[key])
        }
       swal("exito","los albumnes se cargaron correctamente.");
        
    } catch (error) {
        console.log(error);
        swal("Error", "No se pudo obtener la lista de álbumes", "error");
    }
}

const renderAlbums = (album) => {
    console.log(album);
    const div = document.getElementsByClassName(' mt-8 ml-40 inline-grid grid-cols-3 gap-4 grid grid-cols-2 gap-4 space-x-44 justify-items-center')[0]
    const newDiv = document.createElement('div')
    newDiv.classList.add('mb-20')
    const img = document.createElement('img')
    img.classList.add('rounded','cursor-pointer')
    img.style.width = "350px",
    img.style.height = "300px",
    img.src= album.portada ? album.portada: 'https://imgur.com/0uSALUr.png'
    
    // const a = document.createElement("a");
    // a.href = "http://localhost:5000/Album/albumes/" + album._id;
  
  
    const redirect = (id) => { window.location.href = `./album.html?id=${id}`}
    img.addEventListener("click", function(){
      redirect(album._id);
    })
  
  
    div.appendChild(newDiv)
    newDiv.appendChild(img)
    const p = document.createElement('p')
    p.classList.add('text-black','text-center', 'text-2xl', 'font-bold')
    p.textContent = album.titulo +" "+ album.anio
    newDiv.appendChild(p)


    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('cursor-pointer', 'ml-4');
    deleteIcon.innerHTML = '<i class="fa fa-trash text-green-500"></i>';

    deleteIcon.addEventListener('click', function(){
      deleteAlbum(album._id, album.titulo);
    })
    newDiv.appendChild(deleteIcon);
  }
  

  const deleteAlbum = async (albumId, albumTitle) => {
    try {
      await axios.delete(`http://localhost:5000/Album/albumes/${albumId}`);
      swal("Éxito", `Borraste ${albumTitle} de la lista`, "success")
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      console.error(error);
      swal("Error", "No se pudo eliminar el álbum", "error");
    }
  };
  
  window.onload = getAlbums;
  
window.onload = getAlbums;
