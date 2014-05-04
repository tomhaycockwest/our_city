
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
            center: new google.maps.LatLng(51.507268,-0.16573),
            zoom: 12,
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
            center: new google.maps.LatLng(51.507268,-0.16573),
            zoom: 12,
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

    var conolly = new google.maps.Marker({
        position: new google.maps.LatLng(51.5109643,-0.3403185),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Conolly Dell'
    });
    var golborne = new google.maps.Marker({
        position: new google.maps.LatLng(51.5241384,-0.204138),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Golborne Rd'
    });
    var hyde = new google.maps.Marker({
        position: new google.maps.LatLng(51.507268,-0.16573),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hyde Park'
    });
    var brixton = new google.maps.Marker({
        position: new google.maps.LatLng(51.46382,-0.113125),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Brixton Rec'
    });
    var grapes = new google.maps.Marker({
        position: new google.maps.LatLng(51.508892,-0.033927),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'The Grapes'
    });
    var acton = new google.maps.Marker({
        position: new google.maps.LatLng(51.516479,-0.267204),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'North Acton'
    });
    var royal = new google.maps.Marker({
        position: new google.maps.LatLng(51.492574,-0.156634),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Royal Court Theatre'
    });
    var portobello = new google.maps.Marker({
        position: new google.maps.LatLng(51.5169408,-0.205813),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Portobello Road'
    });
    var strand = new google.maps.Marker({
        position: new google.maps.LatLng(51.4876343,-0.2859077),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Strand on the Green'
    });
    var sounds = new google.maps.Marker({
        position: new google.maps.LatLng(51.513939,-0.134622),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Sounds of the Universe'
    });
    var pitt = new google.maps.Marker({
        position: new google.maps.LatLng(51.513343,-0.138366),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Pitt Cue'
    });
    var columbia = new google.maps.Marker({
        position: new google.maps.LatLng(51.529422,-0.069571),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Columbia Road Flower Market'
    });
    var richmond = new google.maps.Marker({
        position: new google.maps.LatLng(51.442687,-0.283707),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Richmond Park'
    });
    var graffiti = new google.maps.Marker({
        position: new google.maps.LatLng(51.5013532,-0.1147415),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Graffiti Tunnel'
    });
    var theatre = new google.maps.Marker({
        position: new google.maps.LatLng(51.542413,0.001046),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Theatre Royal Stratford'
    });

        google.maps.event.addListener(conolly, 'click', function() {
        $("#infobox").animate({width:'600px'}, 250);
        });
    
};
