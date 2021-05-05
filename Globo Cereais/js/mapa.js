
function inicializar(Zoom) {
  var coordenadas = {lat: -17.813991541115954 ,lng:  -50.94132842816855,}
  var mapa = new google.maps.Map(document.getElementById('mapa'), {
    zoom: Zoom,
    center: coordenadas 
  })

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    title: 'Globo Cereais Rio Verde ',
    icon: './img/logo_maps.png'
  });

  
  var coordenadas = {lat: -17.124939966221003, lng: -49.965163547299355,}
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    title: 'Globo Cereais Idiara',
    icon: './img/logo_maps.png'
  });
  

}
