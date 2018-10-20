console.log("test");

var map;
var infowindow;

function initMap(beverage) {
    var pyrmont = { lat: 41.881832, lng: -87.623177 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pyrmont,
        radius: 500,
        //type: ['store']
        keyword: beverage,
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
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

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}


// $("#add-topic").on("click", function () {
//     event.preventDefault();
//     console.log("i clicked this javascripttest button");
  
//     var drinkSelection = $("#topic-input").val().trim();
//     $("#topic-input").val("");
//     console.log(drinkSelection);
//     //call the function
//     initMap(drinkSelection);
  
  
//   })