  //   const botonEdit = document.getElementById("botonEdit")
  //   document.getElementById("home").addEventListener("click", function(){
  //       window.location.href = 'index.html';
  //   });
  
  //   document.getElementById("addAlbum").addEventListener("click", function(){
  //       window.location.href = 'addsAlbums.html';
  //   });
  //   document.getElementById("addSongs").addEventListener("click", function(){
  //           window.location.href = 'addSongs.html'
       
  //   });
  
  //   document.getElementById("tours").addEventListener("click", function(){
  //       window.location.href = "Tours.html";
  //   });
  
  //   document.getElementById("logout").addEventListener("click", function(){
  //       window.location.href = "login.html";
  //   });
    
  //   document.getElementById("botonEdit").addEventListener("click", editAlbum);
  // document.getElementById("botonCancel").addEventListener("click", function() {
  //   window.location.href = `./album.html?album=${albumId}`;
  // });
    // if(window.location.pathname.includes('editsAlbums.html')){
    //   document.addEventListener('DOMContentLoaded',function(){
    //     const albumId = getAlbumIdFromUrl();
    //     document.getElementById("home").addEventListener("click",function(){
    //         window.location.href = 'index.html';
    //     });

    //     document.getElementById("addAlbum").addEventListener("click",function(){
    //       window.location.href="addAlbum.html";
    //     });

    //     document.getElementById("addSongs").addEventListener("click",function(){
    //       if(albumId){
    //       window.location.href = `ADDsongs.html?id=${albumId}`;
    //     } else{
    //       window.location.href = "ADDsongs.html";
    //     }
    //     });
    //   });
    //   document.addEventListener('DOMContentLoaded', function(){
    //     const albumId = getAlbumIdFromUrl();
    //     if(albumId){
    //       loadAlbumDetails(albumId);
    //     }
    //     document.getElementById("edit").addEventListener("click",editAlbum);
        
    //     document.getElementById("cancelar").addEventListener("click",function(){
    //       window.location.href = `./album.html?id=${albumId}`;
    //     });
    //   });
    // }
 
    // const getAlbumIdFromUrl = () => {
    //     const params = new URLSearchParams(window.location.search);
    //     return params.get('id');
    //   };

    //   const getInputValues = () => {
    //     return {
    //       titulo: document.getElementById('titulo').value,
    //       descripcion: document.getElementById('descripcion').value,
    //       portada: document.getElementById('portada').value,
    //     };
    //   };    

    //   const validateInputs = (titulo, descripcion) => {
    //     if (titulo.trim() === '' && descripcion.trim() === '') {
    //       swal("Debes completar el título y la descripción", { icon: "error" });
    //       return false;
    //     } else if (titulo.trim() === '') {
    //       swal("Debes completar el título", { icon: "error" });
    //       return false;
    //     } else if (descripcion.trim() === '') {
    //       swal("Debes completar la descripción", { icon: "error" });
    //       return false;
    //     }
    //     return true;
    //   };
    //   const editAlbum = async (e) => {
    //     e.preventDefault();
    //     const albumId = getAlbumIdFromUrl();
    //     const albumData = getInputValues();
      
    //     if (!validateInputs(albumData.titulo, albumData.descripcion)) {
    //       return;
    //     }
      
    //     try {
    //       await axios.put(`http://localhost:5000/Album/albumes/${albumId}`, albumData);
    //       swal({
    //         title: '¡Álbum editado!',
    //         text: 'Has modificado el álbum correctamente.',
    //         icon: 'success',
    //         confirmButtonText: 'Ok'
    //       }).then(() => {
    //         window.location.href = `./album.html?id=${albumId}`;
    //       });
    //     } catch (error) {
    //       console.error('Error editing album:', error);
    //       swal("Error", "No se pudo editar el álbum", "error");
    //     }
    //   };
    //   const loadAlbumDetails = async (albumId) => {
    //     try {
    //       const response = await axios.get(`http://localhost:5000/Album/albumes/${albumId}`);
    //       const album = response.data;
    //       document.getElementById('titulo').value = album.titulo;
    //       document.getElementById('descripcion').value = album.descripcion;
    //       document.getElementById('portada').value = album.portada;
    //     } catch (error) {
    //       console.error('Error loading album details:', error);
    //       swal("Error", "No se pudo cargar la información del álbum", "error");
    //     }
    //   };
      





    const validateInputs = (titulo,  descripcion) => {
      if (titulo.trim() === '' && descripcion.trim() === '') {
          swal("Debes completar el título y la descripción", { icon: "error" });
          return false;
      } else if (titulo.trim() === '') {
          swal("Debes completar el título", { icon: "error" });
          return false;
      } else if (descripcion.trim() === '') {
          swal("Debes completar la descripción", { icon: "error" });
          return false;}
      return true;
    };
  
  
  if (window.location.pathname.includes('editsAlbums.html')) {
    document.addEventListener('DOMContentLoaded', function () {
        const albumId = getAlbumIdFromUrl();
    
  
  
        document.getElementById("home").addEventListener("click", function () {
            window.location.href = 'index.html';
        });
  
        document.getElementById("addAlbum").addEventListener("click", function () {
            window.location.href = 'addAlbum.html';
        });
        document.getElementById("tours").addEventListener("click", function () {
            window.location.href = 'tours.html';
        });
        document.getElementById("logout").addEventListener("click", function () {
            window.location.href = 'login.html';
        });
  
        document.getElementById("addSongs").addEventListener("click", function () {
            if (albumId) {
                window.location.href = `ADDSongs.html?id=${albumId}`;
            } else {
                window.location.href = "ADDSongs.html";
            }
        });
    });
  
    document.addEventListener('DOMContentLoaded', function () {
        const albumId = getAlbumIdFromUrl();
        if (albumId) {
            loadAlbumDetails(albumId);
        }
        console.log(albumId);
        document.getElementById("edit").addEventListener("click", editAlbum);
  
        document.getElementById("cancelar").addEventListener("click", function () {
          window.location.href = `./album.html?id=${albumId}`;
        });
    });
  
    const getAlbumIdFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    };
  
    const getInputValues = () => {
        return {
          titulo: document.getElementById('titulo').value,
          descripcion: document.getElementById('descripcion').value,
          portada: document.getElementById('portada').value,
        };
    };
  
  
  
    const loadAlbumDetails = async (albumId) => {
        try {
            const response = await axios.get(`http://localhost:5000/Album/albumes/${albumId}`);
            const album = response.data;
            document.getElementById('titulo').value = album.titulo;
            document.getElementById('descripcion').value = album.descripcion;
            document.getElementById('portada').value = album.portada;
        } catch (error) {
            console.error('Error loading album details:', error);
            swal("Error", "No se pudo cargar la información del álbum", "error");
        }
    };
  
   const editAlbum = async (e) => {
    e.preventDefault();
    const albumId = getAlbumIdFromUrl();
    const albumData = getInputValues();

    console.log("albumId:", albumId); // Verifiquemos que albumId se esté obteniendo correctamente

    if (!validateInputs(albumData.titulo, albumData.descripcion)) {
        return;
    }

    try {
        await axios.put(`http://localhost:5000/Album/albumes/${albumId}`, albumData);
        swal({
            title: '¡Álbum editado!',
            text: 'Has modificado el álbum correctamente.',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            window.location.href = `./album.html?id=${albumId}`;
        });
    } catch (error) {
        console.error('Error editing album:', error);
        swal("Error", "No se pudo editar el álbum", "error");
    }
};
}