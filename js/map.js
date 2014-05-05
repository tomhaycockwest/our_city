
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

        google.maps.event.addListener(pitt, 'click', function() {
            $('.info-wrap').load('pitt.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({width:'600px'}, 250);
            setTimeout(function(){clicks();}, 300);
        });

        google.maps.event.addListener(portobello, 'click', function() {
            $('.info-wrap').load('portobello.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({width:'600px'}, 250);
            setTimeout(function(){clicks();}, 300);
        });

        google.maps.event.addListener(sounds, 'click', function() {
            $('.info-wrap').load('sounds.php');
            setTimeout(function(){setVideo();}, 250);
            $("#infobox").animate({width:'600px'}, 250);
            setTimeout(function(){clicks();}, 300);
        });

        google.maps.event.addListener(grapes, 'click', function() {
            $('.info-wrap').load('grapes.php');
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
            case 'pitt':
            middleLeft = '<video controls src="img/brixton_rec/ripples.mp4" id="player1" width="600" height="300"></video>';
            middleRight = "<p>The first time i ever came here I past it so many times by the time I found it it was closed. I love cooking and experimenting with food, London’s great for that. Usually apart from the sides every time you come here there’s a different main. You never know what you’re going to get, and also, I mean the place is hidden, it’s not obvious what it is, I mean the curtains in the window, why are they even there? They don’t make any sense it’s meant to be a restaurant and surely you’d want to promote yourself, but it’s hidden and that’s what I like. You can’t book a table, in fact sometimes the queue goes down past a few shops. Even though there is an air of pretentiousness about the whole thing…the eating is good. It’s good eating! If I had the funds I would come here everyday, It’s an amazing place, restaurants have become a bit pretentious these days. They do amazing cocktails too, but I don’t drink them…I stick to whiskey.</p>";
            bottomLeft = "<img height='300px' width='600px' src='img/pitt_cue/pitt3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/pitt_cue/pitt4.jpg'>"
            break;
            case 'portobello':
            middleLeft = '<video controls src="img/brixton_rec/ripples.mp4" id="player1" width="600" height="300"></video>';
            middleRight = "<p>What’s happened was, my best friends dad has a stall here and we used to come up here when we were kids, we’d go to the skate parks round here and we used to like…knock about, not cause trouble but just be kids and it was great. Then i started working at the stall when I was 15 and that was absolutely great, probably the best time of my life, it was good. An pie and mash is just up the road which I love, it’s my favourite food in the world. Cockneys is a fantastic establishment, Ruth’s lovely. I’ve got lots of memories and now my friends sister lives at the top of Portobello Road, and out of all the places in London this is the most significant place for me because I spend so much time here, my whole entire life.</p>";
            bottomLeft = "<img height='300px' width='600px' src='img/portobello_rd/porto3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/portobello_rd/porto4.jpg'>"
            break;
            case 'sounds':
            middleLeft = '<video controls src="img/brixton_rec/ripples.mp4" id="player1" width="600" height="300"></video>';
            middleRight = "<p>Firstly,it is one of only a handful left in the Capital,in an area of soho that used to have a lot. I love music,and it also happens to be what I do for a living,I'm a musician,producer and songwriter.A big part of my job relies upon me understanding the way music is made on a deep level,this comes through studying it through listening.When I first became interested in music as a child in the 1970's there was no Internet and the only way to buy something you heard on the radio or on TV was from a shop,you couldn't listen online or download so you had to go to a shop. As I got more and more into music and started spending most of my money on it I really also enjoyed the time I was spending in the shops ,the community and atmosphere etc and this became a big part of it all for me. Whenever I'm in soho and have a little time to spare,I'll pop in to the shop to see what they have,soak up some of the atmosphere and get lost in music for a minute.</p><p>The atmosphere in the shop is special,they'll always be something playing with the vinyl or cd on display to show you what it is,people will be walking around flicking through the racks divided up into styles,Classic soul,new soul,house music,reggae,jazz,electronic ,Latin etc etc.New releases will be on display at a listening station with headphones ,related books ,magazines or club flyers  are on display..downstairs they'll be rare vinyl on display to buy or just look at or listen to.There will always be a conversation going on. As someone who's been buying music since my childhood and as a collector since my teens,I've  spent many hours blissfully lost in these temples to musical escapism and I still enjoy it as much now as ever,and although I buy and listen to just as much music online,I still enjoy the original special atmosphere to that particular type of social club that is the record shop,and this one is one of my favourites.</p>";
            bottomLeft = "<img height='300px' width='600px' src='img/sounds/sound3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/sounds/sound4.jpg'>"
            break;
            case 'grapes':
            middleLeft = '<video controls src="img/brixton_rec/ripples.mp4" id="player1" width="600" height="300"></video>';
            middleRight = "<p>One of the oldest Thames pubs, part-owned by Sir Ian Mckellen and thoroughly Dickensian. I associate it with a trip I once made with my mother in the early 80's when Docklands was still new, which sparked off my interest in walking around historic London. The pub has managed to keep it’s old fashioned feel. When you walk in you can feel the rich history of this place, and it’s showcased in the paintings and books that you find in the pub. A meeting place of city workers and east end locals. It’s well known that Chalres Dickens used to come in here as a boy with his parents and dance on the tables for a penny.</p>";
            bottomLeft = "<img height='300px' width='600px' src='img/grapes/grapes3.jpg'>";
            bottomRight = "<img height='300px' width='600px' src='img/grapes/grapes4.jpg'>"
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
