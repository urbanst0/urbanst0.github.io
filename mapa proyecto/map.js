document.addEventListener("DOMContentLoaded", function() {
    // Aqui puse algunas Coordenadas de El Salvador 
    var ruta = [
      { lat: 13.994595, lng: -89.559566 }, // Santa Ana, El Salvador
      { lat: 13.833333, lng: -88.916667 }, // San Salvador, El Salvador
      { lat: 14.15, lng: -90.716667 } // Sonsonate, El Salvador
    ];
  
    // Inicializar el mapa
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: { lat: 13.994595, lng: -89.559566 } // Centro en Santa Ana, El Salvador
    });
  
    // Dibujar la ruta en el mapa
    var rutaLinea = new google.maps.Polyline({
      path: ruta,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
  
    rutaLinea.setMap(map);


    
    // para las imagenes 
    document.addEventListener('DOMContentLoaded', function() {
      const slider = document.querySelector('.slider');
      let counter = 1;
  
      setInterval(() => {
          slider.style.transform = `translateX(${-counter * 100}%)`;
          counter++;
          if (counter === 7) { // Número total de imágenes + 1
              counter = 1;
              setTimeout(() => {
                  slider.style.transition = 'none';
                  slider.style.transform = 'translateX(0)';
              }, 500);
              setTimeout(() => {
                  slider.style.transition = 'transform 0.5s ease';
              }, 600);
          }
      }, 3000); // Intervalo de cambio de imagen (en milisegundos)
  });
});
  
