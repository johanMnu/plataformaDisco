// let bienvenido = document.getElementById("nickname");
// bienvenido.textContent ="hola " + nombre;
// function Rellenar(){
// let titulo = document.getElementById("titulo").value;
// let duracion = document.getElementById("duracion").value;
// let links = document.getElementById("link").value;
// if( titulo == "" || duracion == "" || links == ""){
//     swal("por favor llene todos los campos");
// }

// }


// const getAlbumIdFromUrl = function(){
//     const params = new URLSearchParams(window.location.search);
//     return params.get('albumId');
// };

// const getAlbum = async (albumId) => {
//     try {
//         const { data } = await axios.get(`http://localhost:5000/Album/albumes/${albumId}`);
//         return data;
//     } catch (error) {
//         console.error(error);
//         swal("Error", "No se pudo obtener la información del álbum", "error");
//     }
// };
// let albumData;
// const albumId = getAlbumIdFromUrl();


// const addSong = async () => {
    
    
//     const titulo = document.getElementById("titulo").value;
//     const duracion = document.getElementById("duracion").value;
//     const youtubelink = document.getElementById("link").value;
//     const newSong = { titulo, duracion, youtubelink };

//     try {
//        albumData.canciones.push(newSong);
//        console.log(newSong);
//        console.log(albumData);
//         await axios.put(`http://localhost:5000/Album/albumes/${albumId}`, albumData);

//         // Mostrar alerta de éxito y redirigir a la vista del álbum
//         swal("Éxito", "La canción ha sido añadida correctamente", "success")
//             .then(() => {
//                 window.location.href = `./album.html?id=${albumId}`;
//             });
//     } catch (error) {
//         console.error(error);
//         swal("Error", "No se pudo añadir la canción", "error");
//     }
// };
// document.getElementById("enviar").addEventListener("click",function(e){
//     e.preventDefault();
//     window.location.href = `./album.html?id=${albumId}`;
// });
// document.getElementById("cancelar").addEventListener("click",function(e){
//     e.preventDefault();
//     window.location.href =`./album.html?id=${albumId}`;
// });
// (async () =>{
//     albumData = await getAlbum(albumId);
// })
// document.addEventListener('DOMContentLoaded', function() {
//     const albumId = getAlbumIdFromUrl();
  
    document.getElementById("home").addEventListener("click", function(){
        window.location.href = 'index.html';
    });
  
    document.getElementById("addAlbum").addEventListener("click", function(){
        window.location.href = 'addAlbum.html';
    });
  

  
    document.getElementById("tours").addEventListener("click", function(){
        window.location.href = "Tours.html";
    });
  
    document.getElementById("logout").addEventListener("click", function(){
        window.location.href = "login.html";
    });
  

const getAlbumIdFromUrl = function(){
    const params = new URLSearchParams(window.location.search);
    return params.get('albumId');
};

const getAlbum = async (albumId) => {
    try {
        const { data } = await axios.get(`/Album/albumes/${albumId}`);
        return data;
    } catch (error) {
        console.error(error);
        swal("Error", "No se pudo obtener la información del álbum", "error");
    }
};

const addSong = async () => {
    // Obtener el ID del álbum de la URL
    const albumId = getAlbumIdFromUrl();

    // Obtener los datos del álbum usando el ID
    const albumData = await getAlbum(albumId);

    const titulo = document.getElementById("titulo").value;
    const duracion = document.getElementById("duracion").value;
    const youtubelink = document.getElementById("link").value;
    
    if (!titulo || !duracion || !youtubelink) {
        swal("Error", "Por favor, complete todos los campos", "error");
        return; // Detener el proceso si algún campo está vacío
    }
    const newSong = { titulo, duracion, youtubelink };
    try {
       albumData.canciones.push(newSong);
       console.log(newSong);
       console.log(albumData);
        await axios.put(`/Album/albumes/${albumId}`, albumData);

        // Mostrar alerta de éxito y redirigir a la vista del álbum
        swal("Éxito", "La canción ha sido añadida correctamente", "success")
            .then(() => {
                window.location.href = `./album.html?id=${albumId}`;
            });
    } catch (error) {
        console.error(error);
        swal("Error", "No se pudo añadir la canción", "error");
    }
};

document.getElementById("enviar").addEventListener("click", function(e){
    e.preventDefault();
    addSong();
});

document.getElementById("Cancelar").addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = `./album.html?id=${albumId}`;
});