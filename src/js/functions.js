function initMap() {
  var configuracoes = {
    center: { lat: 40.76382089718336, lng: -73.9727863425625 },
    zoom: 15,
  };

  const mapa = new google.maps.Map(
    document.getElementById("map"),
    configuracoes
  );

  new google.maps.Marker({
    position: { lat: 40.76382089718336, lng: -73.9727863425625 },
    title: "aiFone",
    map: mapa,
  });

  new google.maps.Marker({
    position: { lat: 40.76603381551971, lng: -73.98055451143102 },
    title: "aiFone",
    map: mapa,
  });
}
