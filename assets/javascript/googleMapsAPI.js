console.log("test");

var map;
var infowindow;
var beverage = $("#topic-input")
  .val()
  .trim();
console.log("pre", beverage);
function initMap(beverage) {
  console.log("init map");
  var pyrmont = { lat: 41.881832, lng: -87.623177 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: pyrmont,
    zoom: 13.5
  });
  console.log(map);

  infowindow = new google.maps.InfoWindow();
  // console.log(google.maps.places.PlacesService);
  console.log("THIS IS THE STRING" + google.maps.places);
  var service = new google.maps.places.PlacesService(map);
  console.log("post", beverage);
  service.nearbySearch(
    {
      location: pyrmont,
      radius: 10000,
      type: ["bar"],
      keyword: beverage
    },
    callback
  );
}

function callback(results, status) {
  console.log("CALLBACK");
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log("Callback Status OK");
    for (var i = 0; i < results.length; i++) {
      console.log("Creating Marker");
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
