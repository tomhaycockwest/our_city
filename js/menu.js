
// Dropdown Menu

$('#camera').hover(function() {
  $('.camera-upload').toggleClass('active');
});

$('#audio').hover(function() {
  $('.audio-upload').toggleClass('active');
});

$('#quote').hover(function() {
  $('.quote-upload').toggleClass('active');
});

$('#video').hover(function() {
  $('.video-upload').toggleClass('active');
});


// Footer Menu

$('#filter').click(function() {
  $('#filter-menu').toggleClass('active');
  $(this).toggleClass('highlighted');
});

$('#about').click(function() {
  $('#about-menu').toggleClass('active');
  $(this).toggleClass('highlighted');
});

$('#join').click(function() {
  $('#join-menu').toggleClass('active');
  $(this).toggleClass('highlighted');
});

$('#login').click(function() {
  $('#login-menu').toggleClass('active');
  $(this).toggleClass('highlighted');
});


// Mobile Menu

$('.filter-mobile').click(function() {
	$('.filter-menu-mobile').toggleClass('active');
});

$('.filter-menu-mobile li').click(function(){
	$(this).toggleClass('selected');
});

// Camera Drawer Animation Mobile
var audioDrawer = "closed";
var quoteDrawer = "closed";
var videoDrawer = "closed";
var cameraDrawer = "closed";
$(".camera-mobile").click(function() {
	$(".audio-upload-mobile, .quote-upload-mobile, .video-upload-mobile").animate({'bottom': '-220px'}, "fast", "linear");
	audioDrawer = "closed";
	quoteDrawer = "closed";
	videoDrawer = "closed";
    if(cameraDrawer === "closed"){
        $('.photo-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
        cameraDrawer = "open";
    } else if(cameraDrawer === "open") {
        $('.photo-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
        cameraDrawer = "closed";
    }
});

// Audio Drawer Animation Mobile


$(".audio-mobile").click(function() {
	$(".photo-upload-mobile, .quote-upload-mobile, .video-upload-mobile").animate({'bottom': '-220px'}, "fast", "linear");
	cameraDrawer = "closed";
	quoteDrawer = "closed";
	videoDrawer = "closed";
    if(audioDrawer === "closed"){
        $('.audio-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
        audioDrawer = "open";
    } else if(audioDrawer === "open") {
        $('.audio-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
        audioDrawer = "closed";
    }
});

// Quote Drawer Animation Mobile


$(".quote-mobile").click(function() {
	$(".audio-upload-mobile, .photo-upload-mobile, .video-upload-mobile").animate({'bottom': '-220px'}, "fast", "linear");
	audioDrawer = "closed";
	cameraDrawer = "closed";
	videoDrawer = "closed";
    if(quoteDrawer === "closed"){
        $('.quote-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
        quoteDrawer = "open";
    } else if(quoteDrawer === "open") {
        $('.quote-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
        quoteDrawer = "closed";
    }
});

// Video Drawer Animation Mobile


$(".video-mobile").click(function() {
	$(".audio-upload-mobile, .quote-upload-mobile, .photo-upload-mobile").animate({'bottom': '-220px'}, "fast", "linear");
	audioDrawer = "closed";
	quoteDrawer = "closed";
	cameraDrawer = "closed";
    if(videoDrawer === "closed"){
        $('.video-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
        videoDrawer = "open";
    } else if(videoDrawer === "open") {
        $('.video-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
        videoDrawer = "closed";
    }
});
