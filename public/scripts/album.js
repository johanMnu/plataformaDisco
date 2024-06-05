let currentAlbumId;




function renderAlbum(album){
  const div = document.getElementById("view-album")
  const h1 = document.createElement('h1')
  h1.classList.add('text-5xl','text-green-700')
  h1.textContent= album.titulo
  div.appendChild(h1)

  // Contenedor para la imagen y el párrafo
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';

  const img = document.createElement('img')
  img.src= album.portada ? album.portada : 'https://imgur.com/0uSALUr.png'
  img.classList.add('justify-center');
  img.alt = "Portada  de " + album.titulo;
  img.style.width = '400px'; 
  img.style.height = '400px';
  img.style.marginLeft = 'auto'; // Centrado horizontal
  img.style.marginRight = 'auto'; // Centrado horizontal
  container.appendChild(img);

  const p = document.createElement('p')
  p.classList.add('text-justify', 'text-center', 'text-lg', 'text-green-500', 'font-serif','text-4xls')
  p.textContent= " Descripcion : " +" " + album.descripcion
  container.appendChild(p);
  div.appendChild(container);
  if (album.canciones) {
    renderSongs(album); 
  }
}
  
 const getAlbum = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');
    console.log(albumId);
    currentAlbumId = albumId;
    const response = await axios.get(`/Album/albumes/${albumId}`);
    const albumToUse = response.data;
    renderAlbum(albumToUse);
    document.getElementById('addSongs').addEventListener('click', function() {
      window.location.href = `public/ADDSongs.html?albumId=${albumId}`;
    });
  } catch (error) {
    swal({
      title: 'Error!',
      text: `${error.response.data}`,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    redirect('../public/index.html');
  }
};

  

  // const getAlbum = async () => {
  //   try {
  //     console.log("Estoy aca!");
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const albumId = urlParams.get('');
  //     console.log(albumId);
  //     const response = await axios.get('/Album/albumes/'+ albumId);
  //     const albumToUse = response.data;
  
    
  //     renderAlbum(albumToUse);
  //   } catch (error) {
  //     swal({
  //       title: 'Error!',
  //       text: '${error.response.data}',
  //       icon: 'error',
  //       confirmButtonText: 'Ok'
  //     });
  //   //   redirect('../public/index.html');
  //   }
  // };
  

  window.onload = getAlbum;
//   async function deleteSong(albumId, songId) {
//     try {
//         const response = await axios.delete(`salbumes/${albumId}/canciones/${songId}`);
//         console.log(response.data);
//         // Una vez eliminada la canción, puedes recargar la página para reflejar los cambios
//         location.reload();
//     } catch (error) {
//         console.error('Error al eliminar la canción:', error);
//         swal({
//             title: 'Error!',
//             text: 'No se pudo eliminar la canción',
//             icon: 'error',
//             confirmButtonText: 'Ok'
//         });
//     }
// }
  
  function renderSongs(album) {
    const div = document.getElementById("view-album");
    const songList = document.createElement('ol');
    songList.classList.add('list-decimal', 'ml-6');
  
    album.canciones.forEach((cancion, index) => {
        const songItem = document.createElement('li');
        songItem.classList.add('text-green-700', 'items-center', 'justify-between', 'my-2');
  
        const songDetails = document.createElement('span');
        songDetails.textContent = `${index + 1}. ${cancion.titulo} - ${cancion.duracion}`;
        songItem.appendChild(songDetails);
  
        // Icono de YouTube
        const youtubeIcon = document.createElement('i');
        youtubeIcon.classList.add('fab', 'fa-youtube', 'text-red-500', 'ml-4', 'cursor-pointer');
        youtubeIcon.style.fontSize = '24px'; // Ajustamos el tamaño del icono
        youtubeIcon.addEventListener('click', () => window.open(cancion.youtubelink, '_blank'));
        songItem.appendChild(youtubeIcon);
        const deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<i class="fa fa-trash text-red-500"></i>';
    deleteIcon.dataset.songId = cancion._id;
    deleteIcon.addEventListener("click", function() {
      const updatedAlbum = { ...album };
      const songIndex = updatedAlbum.canciones.findIndex(song => song._id === cancion._id);
      updatedAlbum.canciones.splice(songIndex, 1);
      deleteSong(updatedAlbum);
    });// Suponiendo que hay una función deleteSong que elimina la canción
        songItem.appendChild(deleteIcon);
  
        songList.appendChild(songItem);
    });

    div.appendChild(songList);
}
const deleteSong = async (updatedAlbum) => {
  try {
    const id = updatedAlbum._id;
    const response = await axios.put(`/Album/albumes/${id}`, updatedAlbum);
    swal("Éxito", "La canción ha sido eliminada correctamente", "success")
      .then(() => {
        window.location.reload();
      });
  } catch (error) {
    console.error(error);
    swal("Error", "No se pudo eliminar la canción", "error");
  }
};
document.getElementById('home').addEventListener('click', function() {
  window.location.href = 'index.html';
});

document.getElementById('addAlbum').addEventListener('click', function() {
  window.location.href = 'addAlbum.html';
});

document.getElementById("editAlbum").addEventListener("click", function() {
  if (currentAlbumId) {
    window.location.href = `editsAlbums.html?id=${currentAlbumId}`;
  } else {
    window.location.href = 'editsAlbums.html';
  }
});
document.getElementById('tours').addEventListener('click', function() {
  window.location.href = 'tours.html';
});

document.getElementById('logout').addEventListener('click', function() {
  window.location.href = 'login.html';
});

