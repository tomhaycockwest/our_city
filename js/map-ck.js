window.onload=function(){var e=navigator.userAgent,t=document.getElementById("map-canvas");if(e.indexOf("iPhone")!==-1||e.indexOf("Android")!==-1){styles=[{featureType:"all",stylers:[{saturation:-100}]}];options={mapTypeControlOptions:{mapTypeIds:["Styled"]},center:new google.maps.LatLng(51.5247969,-0.1036586),zoom:14,mapTypeId:"Styled",zoomControl:!1,mapTypeControl:!1,scrollwheel:!1,panControl:!1,streetViewControl:!1}}else{styles=[{featureType:"all",stylers:[{saturation:-100}]}];options={mapTypeControlOptions:{mapTypeIds:["Styled"]},center:new google.maps.LatLng(51.5247969,-0.1036586),zoom:14,mapTypeId:"Styled",mapTypeControl:!1,scrollwheel:!1,panControl:!0,panControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER},zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE,position:google.maps.ControlPosition.RIGHT_CENTER},streetViewControl:!1}}var n=document.getElementById("map-canvas"),r=new google.maps.Map(n,options),i=new google.maps.StyledMapType(styles,{name:"Styled"});r.mapTypes.set("Styled",i)};