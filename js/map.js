
window.onload = function () {
    var useragent = navigator.userAgent;
    var mapdiv = document.getElementById("map-canvas");

function setVideo() {
    $('video').mediaelementplayer({
        // if the <video width> is not specified, this is the default
        defaultVideoWidth: 600,
        // if the <video height> is not specified, this is the default
        defaultVideoHeight: 300,
        // if set, overrides <video width>
        videoWidth: -1,
        // if set, overrides <video height>
        videoHeight: -1,
        // width of audio player
        audioWidth: 600,
        // height of audio player
        audioHeight: 300,
        // initial volume when the player starts
        startVolume: 0.8,
        // useful for <audio> player loops
        loop: false,
        // enables Flash and Silverlight to resize to content size
        enableAutosize: true,
        // the order of controls you want on the control bar (and other plugins below)
        features: ['playpause','progress','current','duration','volume'],
        // Hide controls when playing and mouse is not over the video
        alwaysShowControls: false,
        // force iPad's native controls
        iPadUseNativeControls: false,
        // force iPhone's native controls
        iPhoneUseNativeControls: false, 
        // force Android's native controls
        AndroidUseNativeControls: false,
        // forces the hour marker (##:00:00)
        alwaysShowHours: false,
        // show framecount in timecode (##:00:00:00)
        showTimecodeFrameCount: false,
        // used when showTimecodeFrameCount is set to true
        framesPerSecond: 25,
        // turns keyboard support on and off for this instance
        enableKeyboard: true,
        // when this player starts, it will pause other players
        pauseOtherPlayers: true,
        // array of keyboard commands
        keyActions: [],
    });

}

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

        var div = document.getElementById('map-canvas');
        var map = new google.maps.Map(div, options);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);

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

 

    var iconHoverBase = 'img/photo_pins/';
    var iconBase = 'img/photo_pins/';
    function markers() {

        var div = document.getElementById('map-canvas');
        var map = new google.maps.Map(div, options);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);

        var conolly = new google.maps.Marker({
            position: new google.maps.LatLng(51.5109643,-0.3403185),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Conolly Dell',
            icon: iconBase + 'conolly_dell.png'
        });
        var golborne = new google.maps.Marker({
            position: new google.maps.LatLng(51.5241384,-0.204138),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Golborne Rd',
            icon: iconBase + 'golborne.png'
        });
        var hyde = new google.maps.Marker({
            position: new google.maps.LatLng(51.507268,-0.16573),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hyde Park',
            icon: iconBase + 'hyde_park.png'
        });
        var brixton = new google.maps.Marker({
            position: new google.maps.LatLng(51.46382,-0.113125),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Brixton Rec',
            icon: iconBase + 'brixton.png'
        });
        var grapes = new google.maps.Marker({
            position: new google.maps.LatLng(51.508892,-0.033927),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'The Grapes',
            icon: iconBase + 'grapes.png'
        });
        var acton = new google.maps.Marker({
            position: new google.maps.LatLng(51.516479,-0.267204),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'North Acton',
            icon: iconBase + 'acton.png'
        });
        var royal = new google.maps.Marker({
            position: new google.maps.LatLng(51.492574,-0.156634),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Royal Court Theatre',
            icon: iconBase + 'sloane_sq.png'
        });
        var portobello = new google.maps.Marker({
            position: new google.maps.LatLng(51.5169408,-0.205813),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Portobello Road',
            icon: iconBase + 'portobello.png'
        });
        var strand = new google.maps.Marker({
            position: new google.maps.LatLng(51.4876343,-0.2859077),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Strand on the Green',
            icon: iconBase + 'strand.png'
        });
        var sounds = new google.maps.Marker({
            position: new google.maps.LatLng(51.513939,-0.134622),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Sounds of the Universe',
            icon: iconBase + 'sounds_universe.png'
        });
        var pitt = new google.maps.Marker({
            position: new google.maps.LatLng(51.513343,-0.138366),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Pitt Cue',
            icon: iconBase + 'pitt_cue.png'
        });
        var columbia = new google.maps.Marker({
            position: new google.maps.LatLng(51.529422,-0.069571),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Columbia Road Flower Market',
            icon: iconBase + 'columbia_rd.png'
        });
        var richmond = new google.maps.Marker({
            position: new google.maps.LatLng(51.442687,-0.283707),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Richmond Park',
            icon: iconBase + 'richmond.png'
        });
        var graffiti = new google.maps.Marker({
            position: new google.maps.LatLng(51.5013532,-0.1147415),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Graffiti Tunnel',
            icon: iconBase + 'graffiti.png'
        });
        var theatre = new google.maps.Marker({
            position: new google.maps.LatLng(51.542413,0.001046),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Theatre Royal Stratford',
            icon: iconBase + 'stratford.png'
        });
        var vanda = new google.maps.Marker({
            position: new google.maps.LatLng(51.496576,-0.172172),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Victoria and Albert Museum',
            icon: iconBase + 'va.png'
        });

        // add click to markers

        google.maps.event.addListener(brixton, 'click', function() {
            $('.info-wrap').load('brixton.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(brixton, 'mouseover', function() {
            brixton.setIcon(iconHoverBase + 'brixton.png');
        });
        google.maps.event.addListener(brixton, 'mouseout', function() {
            brixton.setIcon(iconBase + 'brixton.png');
        });
       

        google.maps.event.addListener(graffiti, 'click', function() {
            $('.info-wrap').load('graffiti.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(graffiti, 'mouseover', function() {
            graffiti.setIcon(iconHoverBase + 'graffiti.png');
        });
        google.maps.event.addListener(graffiti, 'mouseout', function() {
            graffiti.setIcon(iconBase + 'graffiti.png');
        });
        

        google.maps.event.addListener(pitt, 'click', function() {
            $('.info-wrap').load('pitt.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(pitt, 'mouseover', function() {
            pitt.setIcon(iconHoverBase + 'pitt_cue.png');
        });
        google.maps.event.addListener(pitt, 'mouseout', function() {
            pitt.setIcon(iconBase + 'pitt_cue.png');
        });
        

        google.maps.event.addListener(portobello, 'click', function() {
            $('.info-wrap').load('portobello.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(portobello, 'mouseover', function() {
            portobello.setIcon(iconHoverBase + 'portobello.png');
        });
        google.maps.event.addListener(portobello, 'mouseout', function() {
            portobello.setIcon(iconBase + 'portobello.png');
        });
        

        google.maps.event.addListener(sounds, 'click', function() {
            $('.info-wrap').load('sounds.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(sounds, 'mouseover', function() {
            sounds.setIcon(iconHoverBase + 'sounds_universe.png');
        });
        google.maps.event.addListener(sounds, 'mouseout', function() {
            sounds.setIcon(iconBase + 'sounds_universe.png');
        });
        

        google.maps.event.addListener(grapes, 'click', function() {
            $('.info-wrap').load('grapes.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(grapes, 'mouseover', function() {
            grapes.setIcon(iconHoverBase + 'grapes.png');
        });
        google.maps.event.addListener(grapes, 'mouseout', function() {
            grapes.setIcon(iconBase + 'grapes.png');
        });
        

        google.maps.event.addListener(hyde, 'click', function() {
            $('.info-wrap').load('hyde-park.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(hyde, 'mouseover', function() {
            hyde.setIcon(iconHoverBase + 'hyde_park.png');
        });
        google.maps.event.addListener(hyde, 'mouseout', function() {
            hyde.setIcon(iconBase + 'hyde_park.png');
        });
        
        google.maps.event.addListener(royal, 'click', function() {
            $('.info-wrap').load('royal-court-theatre.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(royal, 'mouseover', function() {
            royal.setIcon(iconHoverBase + 'sloane_sq.png');
        });
        google.maps.event.addListener(royal, 'mouseout', function() {
            royal.setIcon(iconBase + 'sloane_sq.png');
        });

        google.maps.event.addListener(columbia, 'click', function() {
            $('.info-wrap').load('columbia-road.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(columbia, 'mouseover', function() {
            columbia.setIcon(iconHoverBase + 'columbia_rd.png');
        });
        google.maps.event.addListener(columbia, 'mouseout', function() {
            columbia.setIcon(iconBase + 'columbia_rd.png');
        });

        google.maps.event.addListener(strand, 'click', function() {
            $('.info-wrap').load('strand.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(strand, 'mouseover', function() {
            strand.setIcon(iconHoverBase + 'strand.png');
        });
        google.maps.event.addListener(strand, 'mouseout', function() {
            strand.setIcon(iconBase + 'strand.png');
        });

        google.maps.event.addListener(theatre, 'click', function() {
            $('.info-wrap').load('stratford.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(theatre, 'mouseover', function() {
            theatre.setIcon(iconHoverBase + 'stratford.png');
        });
        google.maps.event.addListener(theatre, 'mouseout', function() {
            theatre.setIcon(iconBase + 'stratford.png');
        });

        google.maps.event.addListener(vanda, 'click', function() {
            $('.info-wrap').load('v-and-a.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(vanda, 'mouseover', function() {
            vanda.setIcon(iconHoverBase + 'va.png');
        });
        google.maps.event.addListener(vanda, 'mouseout', function() {
            vanda.setIcon(iconBase + 'va.png');
        });

        google.maps.event.addListener(conolly, 'click', function() {
            $('.info-wrap').load('conolly-dell.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(conolly, 'mouseover', function() {
            conolly.setIcon(iconHoverBase + 'conolly_dell.png');
        });
        google.maps.event.addListener(conolly, 'mouseout', function() {
            conolly.setIcon(iconBase + 'conolly_dell.png');
        });

        google.maps.event.addListener(acton, 'click', function() {
            $('.info-wrap').load('north-acton.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(acton, 'mouseover', function() {
            acton.setIcon(iconHoverBase + 'acton.png');
        });
        google.maps.event.addListener(acton, 'mouseout', function() {
            acton.setIcon(iconBase + 'acton.png');
        });

        google.maps.event.addListener(richmond, 'click', function() {
            $('.info-wrap').load('richmond-park.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(richmond, 'mouseover', function() {
            richmond.setIcon(iconHoverBase + 'richmond.png');
        });
        google.maps.event.addListener(richmond, 'mouseout', function() {
            richmond.setIcon(iconBase + 'richmond.png');
        });

        google.maps.event.addListener(golborne, 'click', function() {
            $('.info-wrap').load('golborne-road.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({left:'0'}, 250);
            setTimeout(function(){clicks();}, 300);
        });
        google.maps.event.addListener(golborne, 'mouseover', function() {
            golborne.setIcon(iconHoverBase + 'golborne.png');
        });
        google.maps.event.addListener(golborne, 'mouseout', function() {
            golborne.setIcon(iconBase + 'golborne.png');
        });
    }
    markers();


        function clicks() {
        var middleLeft = '';
        var middleRight = '';
        var bottomLeft = '';
        var bottomRight = '';

        var className = $('#infoTitle').attr('class');
        switch(className){
            case 'brixton':
            middleLeft = '<img height="300px" width="600px" src="img/brixton_rec/brixton1.jpg">';
            middleRight = "<img height='300px' width='600px' src='img/brixton_rec/brixton2.jpg'>";
            bottomLeft = "<img height='300px' width='600px' src='img/brixton_rec/brixton3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/brixton_rec/brixton4.jpg'>";
            break;
            case 'graffiti':
            middleLeft = "<img height='300px' width='600px' src='img/graffiti_tunnel/graff1.jpg'>";
            middleRight = "<img height='300px' width='600px' src='img/graffiti_tunnel/graff2.jpg'>";
            bottomLeft = "<img height='300px' width='600px' src='img/graffiti_tunnel/graff3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/graffiti_tunnel/graff4.jpg'>";
            break;
            case 'pitt':
            middleLeft = '<img height="300px" width="600px" src="img/pitt_cue/pitt1.jpg">';
            middleRight = '<img height="300px" width="600px" src="img/pitt_cue/pitt2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/pitt_cue/pitt3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/pitt_cue/pitt4.jpg'>";
            break;
            case 'portobello':
            middleLeft = '<img height="300px" width="600px" src="img/portobello_rd/porto1.jpg">';
            middleRight = '<img height="300px" width="600px" src="img/portobello_rd/porto2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/portobello_rd/porto3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/portobello_rd/porto4.jpg'>";
            break;
            case 'sounds':
            middleLeft = '<img height="300px" width="600px" src="img/sounds/sound1.jpg">';
            middleRight = '<img height="300px" width="600px" src="img/sounds/sound2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/sounds/sound3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/sounds/sound4.jpg'>";
            break;
            case 'grapes':
            middleLeft = '<img height="300px" width="600px" src="img/grapes/grapes1.jpg">';
            middleRight = '<img height="300px" width="600px" src="img/grapes/grapes2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/grapes/grapes3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/grapes/grapes4.jpg'>";
            break;
            case 'hyde-park':
            middleLeft = '<video height="300px" width="600px" src="img/hyde_park/hyde_park.mp4"></video>';
            middleRight = '<img height="300px" width="600px" src="img/hyde_park/hyde2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/hyde_park/hyde3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/hyde_park/hyde4.jpg'>";
            break;
            case 'royal-court-theatre':
            middleLeft = '<video height="300px" width="600px" src="img/royal_court_theatre/sloane.mp4"></video>';
            middleRight = '<img height="300px" width="600px" src="img/royal_court_theatre/roycour2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/royal_court_theatre/roycour3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/royal_court_theatre/roycour4.jpg'>";
            break;
            case 'columbia-road':
            middleLeft = '<img height="300px" width="600px" src="img/columbia_rd/col_rd1.jpg">';
            middleRight = '<img height="300px" width="600px" src="img/columbia_rd/col_rd2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/columbia_rd/col_rd3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/columbia_rd/col_rd4.jpg'>";
            break;
            case 'strand':
            middleLeft = '<video height="300px" width="600px" src="img/strand/strand.mp4"></video>';
            middleRight = '<img height="300px" width="600px" src="img/strand/strand2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/strand/strand3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/strand/strand4.jpg'>";
            break;
            case 'stratford':
            middleLeft = '<video height="300px" width="600px" src="img/stratford/stratford.mp4"></video>';
            middleRight = '<img height="300px" width="600px" src="img/stratford/strat2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/stratford/strat3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/stratford/strat4.jpg'>";
            break;
            case 'v-and-a':
            middleLeft = '<video height="300px" width="600px" src="img/v-and-a/va.mp4"></video>';
            middleRight = '<img height="300px" width="600px" src="img/v-and-a/va2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/v-and-a/va3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/v-and-a/va4.jpg'>";
            break;
            case 'conolly-dell':
            middleLeft = '<video height="300px" width="600px" src="img/conolly_dell/conolly.mp4"></video>';
            middleRight = '<img height="300px" width="600px" src="img/conolly_dell/con_dell2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/conolly_dell/con_dell3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/conolly_dell/con_dell4.jpg'>";
            break;
            case 'north-acton':
            middleLeft = '<img height="300px" width="600px" src="img/north_acton/acton1.jpg">';
            middleRight = '<img height="300px" width="600px" src="img/north_acton/acton2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/north_acton/acton3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/north_acton/acton4.jpg'>";
            break;
            case 'richmond-park':
            middleLeft = '<img height="300px" width="600px" src="img/richmond_park/rich_park1.jpg">';
            middleRight = '<img height="300px" width="600px" src="img/richmond_park/rich_park2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/richmond_park/rich_park3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/richmond_park/rich_park4.jpg'>";
            break;
            case 'golborne-road':
            middleLeft = '<video height="300px" width="600px" src="img/golborne_road/golborne.mp4"></video>';
            middleRight = '<img height="300px" width="600px" src="img/golborne_road/golborne2.jpg">';
            bottomLeft = "<img height='300px' width='600px' src='img/golborne_road/golborne3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/golborne_road/golborne4.jpg'>";
            break;

        }

        $('#middleLeft').click(function () {
            $('#top').html(middleLeft);
            setVideo();
        });

        $('#middleRight').click(function () {
            $('#top').html(middleRight);
        });

        $('#bottomLeft').click(function () {
            $('#top').html(bottomLeft);
        });

        $('#bottomRight').click(function () {
            $('#top').html(bottomRight);
        });

        $('.close').click(function() {
            $('#infobox').animate({left:'-600px'}, 250);
        });

        $('#trailer').bind( "click", function() {
            console.log('lk');
        });


        }

        $('#camera').click(function() {
            iconBase = 'img/photo_pins/';
            iconHoverBase = 'img/photo_pins/';
            markers();
        });

        $('#audio').click(function() {
            iconBase = 'img/feeling_pins/';
            iconHoverBase = 'img/feeling_pins_hover/';
            markers();
        });

        $('#quote').click(function() {
            iconBase = 'img/quote_pins/';
            iconHoverBase = 'img/quote_pins_hover/';
            markers();
        });
    }

};
