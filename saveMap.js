/*
 * When you add a marker using a Place instead of a location, the Maps API
 * will automatically add a 'Save to Google Maps' link to any info window
 * associated with that marker.
 */

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: {lat: -33.8666, lng: 151.1958}
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  // Create a new Place Details Request with Google's place ID
  var request = {
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  };

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  // Request Details about the Place using the Place Id.
  service.getDetails(request, function(placeResult, status) {
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      alert('Unable to find the Place details.');
      return;
    }
    // Add a marker, using the Place Id and Location instead of the position
    // attribute.
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: placeResult.place_id,
        location: placeResult.geometry.location
      },
      // Attributions help users find your app again.
      attribution: {
        source: 'Google Maps JavaScript API',
        webUrl: 'https://developers.google.com/maps/'
      }
    });
    // Add an info window to the Marker. Here we use data returned in the Place
    // Details request to provide richer info window text.
    marker.addListener('click', function() {
      infowindow.setContent('<a href="' + placeResult.website + '">' +
        placeResult.name + '</a>');
      infowindow.open(map, this);
    });
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
