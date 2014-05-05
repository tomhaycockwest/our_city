
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

        google.maps.event.addListener(brixton, 'click', function() {
            $('.info-wrap').load('brixton.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({width:'600px'}, 250);
            setTimeout(function(){clicks();}, 300);
        });

        google.maps.event.addListener(graffiti, 'click', function() {
            $('.info-wrap').load('graffiti.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({width:'600px'}, 250);
            setTimeout(function(){clicks();}, 300);
        });

       

        function clicks() {
        var middleLeft = '';
        var middleRight = '';
        var bottomLeft = '';
        var bottomRight = '';

        var className = $('#infoTitle').attr('class');
        switch(className){
            case 'brixton':
            middleLeft = '<video controls src="img/brixton_rec/ripples.mp4" id="player1" width="600" height="300"></video>';
            middleRight = "<p>I spent countless days many that even I can't recollect here Leant back in my buggy watching my Dads intensely religious, rigorous training. As me and my siblings grew we were soon inheriting, somewhat forcefully these same rigorous training efforts, always rewarded with a pattie and cool aid. As we grew further Brixton became the nucleus of many of my first struggles as a young, more specifically a young black man growing in and through a particular experience in such an intense environment. Why this all defines London somewhat to me, as can we? Is because as we wander through the social, emotional, cultural and even structural maze that is London, it for me has grown into a symbol of defiance, an expression of our innate human nature. Like the early memories of watching my pops defy what were profound odds in the gym to watching the community do the same by sheer existence, especially growing up on the stories and overheard and heated conversations outside 'Reds Records' amongst my Father and other London Born 'Black' men and women, of the many fights fought to preserve and expand an identity specific to them like so many others who sailed ships of adverse origin and destination.</p>";
            bottomLeft = "<img height='300px' width='600px' src='img/brixton_rec/brixton3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/brixton_rec/brixton4.jpg'>"
            break;
            case 'graffiti':
            middleLeft = '<video controls src="img/brixton_rec/ripples.mp4" id="player1" width="600" height="300"></video>';
            middleRight = "<p>South of the river is already a buzzing area, you can walk along and see pop-up markets, buskers, skaters, magicians, it’s crazy. But for me the Graffiti Tunnel along Leake Street perfectly sums up the creativity and street art that’s so big across London. I first visited the tunnel maybe in 2008 with my family for the Cans Festival set up by Banksy, someone I was already in awe of, there were massive queues and we waited for hours. I’ll never forget first entering the tunnel and being so overwhelmed by what filled the walls. Walking through it was like another world. Now people are constantly adding to the wall and I love it because you could walk down there and two days later what you saw may be covered by something else. It’s kind of eerie and almost like walking through a story, but I love it because there is so much street art in London, and this is a place where people can express their creativity freely, it’s so easy to get lost in.</p>";
            bottomLeft = "<img height='300px' width='600px' src='img/graffiti_tunnel/graff3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/graffiti_tunnel/graff4.jpg'>"
            break;
        }








        $('#middleLeft').click(function () {
            $('#top').css('padding', '0').html(middleLeft);
            setVideo()
        });

        $('#middleRight').click(function () {
            $('#top').css('padding', '20px').html(middleRight);
        });

        $('#bottomLeft').click(function () {
            $('#top').css('padding', '0').html(bottomLeft);
        });

        $('#bottomRight').click(function () {
            $('#top').css('padding', '0').html(bottomRight);
        });

        $('.close').click(function() {
            $('#infobox').animate({width:'0'}, 250);
        })
        }


    
};
