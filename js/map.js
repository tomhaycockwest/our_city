
window.onload = function () {
    var useragent = navigator.userAgent;
    var mapdiv = document.getElementById("map-canvas");

    if (useragent.indexOf('iPhone') !== -1 || useragent.indexOf('Android') !== -1 ) {
        styles = [
            {
                featureType: 'all',
                stylers: [
                    { saturation: -100 }
                ]
            }
        ];
        options = {
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
            center: new google.maps.LatLng(51.5247969, -0.1036586),
            zoom: 14,
            mapTypeId: 'Styled',
            zoomControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
        };


    } else {
        styles = [
            {
                featureType: 'all',
                stylers: [
                    { saturation: -100 }
                ]
            }
        ];
        options = {
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
            center: new google.maps.LatLng(51.5247969, -0.1036586),
            zoom: 14,
            mapTypeId: 'Styled',
            mapTypeControl: false,
            scrollwheel: false,
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            streetViewControl: false,
        };

    }

    var div = document.getElementById('map-canvas');
    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);
};
