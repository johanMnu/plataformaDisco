// function validar(){
//     let titulo = document.getElementById("titulo").value;
//     let año = document.getElementById("año").value;
//     let descrip = document.getElementById("descripcion").value;
//     if(titulo == "" || año == "" || descrip == "" ){
//         swal("por favor , completo todos los campos.");
//     }
// }
// let boton = document.getElementById('enviarBtn');

// const titulo = document.getElementById('titulo');
// const anio = document.getElementById('anio');
// const descripcion = document.getElementById('descripcion');
// const imagen = document.getElementById('imagen');

// boton.addEventListener('click', async function(e) {
//     e.preventDefault();
//     //const albumForm = document.getElementById('albumForm');
//     try {
//         // Envía los datos al backend
//         const response = await axios.post("http://localhost:5000/Albums/albumes", {
//             titulo: titulo.value,
//             descripcion: descripcion.value,
//             anio: anio.value,
//             portada: imagen.value 
//         });
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error al enviar el álbum:', error);
        
//     }
//     window.location.reload();
// });

// document.getElementById("home").addEventListener("click", () => {
//     window.location.href = 'index.html';
//   });
  
//   document.getElementById("editAlbum").addEventListener("click", () => {
  
//         window.location.href = 'editsAlbums.html';
    
//   });
  
//   document.getElementById("addSongs").addEventListener("click", () => {
  
//         window.location.href = 'addSongs.html';
    
//   });
  
//   document.getElementById("tours").addEventListener("click", () => {
//     window.location.href = "Tours.html";
//   });
  
//   document.getElementById("logout").addEventListener("click", () => {
//     window.location.href = "login.html";
//   });
const validateInputs = (titulo, year, descripcion) => {
  if (titulo.trim() === '' && descripcion.trim() === '') {
      swal("Debes completar el título y la descripción", { icon: "error" });
      return false;
  } else if (titulo.trim() === '') {
      swal("Debes completar el título", { icon: "error" });
      return false;
  } else if (descripcion.trim() === '') {
      swal("Debes completar la descripción", { icon: "error" });
      return false;
  } else if (year.trim() === '' || isNaN(year)) {
      swal("Debes ingresar un año válido", { icon: "error" });
      return false;
  } else if (parseInt(year) < 2008) {
      swal("El año debe ser igual o mayor a 2008", { icon: "error" });
      return false;
  }
  return true;
};

const Btn= document.getElementById("Btn");
const titulo = document.getElementById("titulo");
const year = document.getElementById("year");
const descripcion = document.getElementById("descripcion");
const portada = document.getElementById("portada");

Btn.addEventListener("click", async function(e) {
  e.preventDefault();

  // Validar los campos de entrada
  if (!validateInputs(titulo.value, year.value, descripcion.value)) {
      return;
  }

  try {
      const response = await axios.post("http://localhost:5000/album/albumes", {
          titulo: titulo.value,
          descripcion: descripcion.value,
          anio: year.value,
          portada: portada.value,
          canciones: []
      });
      const albumId = response.data.id;
      console.log(albumId)
      if (albumId) {
          swal({
              title: "Álbum creado!",
              text: "Has creado un álbum correctamente.",
              icon: "success",
              confirmButtonText: "Ok"
          }).then(() => {
              window.location.href = `./album.html?id=${albumId}`;
          });
      } else {
          console.log("No se recibió el ID del álbum del servidor")
      }
  } catch (error) {
      console.error("Error al enviar el álbum", error);
  }
});

document.getElementById('cancelar').addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'index.html';
});
document.getElementById('home').addEventListener('click', function() {
  window.location.href = 'index.html';
});

document.getElementById('tours').addEventListener('click', function() {
  window.location.href = 'tours.html';
});
document.getElementById('logout').addEventListener('click', function() {
    window.location.href = 'login.html';
  });
