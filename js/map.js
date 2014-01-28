 function initialize() {
        var mapOptions = {
         	center: new google.maps.LatLng(51.5247969, -0.1036586),
          	zoom: 10,
      		zoomControl: false,
      		panControl: false,
      		scaleControl: false,
      		streetViewControl: false,
      		mapTypeControl: false
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
 	var map = google.maps.event.addDomListener(window, 'load', initialize);