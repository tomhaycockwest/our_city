
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

// Set Drawer Variables
var audioDrawer = "closed";
var quoteDrawer = "closed";
var videoDrawer = "closed";
var cameraDrawer = "closed";
var loginDrawer = "closed";

// Camera Drawer Animation Mobile
$(".camera-mobile").click(function() {
	$(".audio-upload-mobile, .quote-upload-mobile, .video-upload-mobile").animate({'bottom': '-220px'}, "fast", "linear");
	$("#footer-mobile").animate({'bottom': '-200px'}, "fast", "linear");
	audioDrawer = "closed";
	quoteDrawer = "closed";
	videoDrawer = "closed";
	loginDrawer = "closed";
	if(cameraDrawer === "closed"){
		$('.photo-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
		cameraDrawer = "open";
		$('#logo-container-mobile').css("background-color", "#13958a");
	} else if(cameraDrawer === "open") {
		$('.photo-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
		$('#logo-container-mobile').css("background-color", "#70c252");
		cameraDrawer = "closed";
	}
});

// Audio Drawer Animation Mobile
$(".audio-mobile").click(function() {
	$(".photo-upload-mobile, .quote-upload-mobile, .video-upload-mobile").animate({'bottom': '-220px'}, "fast", "linear");
	$("#footer-mobile").animate({'bottom': '-200px'}, "fast", "linear");
	cameraDrawer = "closed";
	quoteDrawer = "closed";
	videoDrawer = "closed";
	loginDrawer = "closed";
	if(audioDrawer === "closed"){
		$('.audio-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
		audioDrawer = "open";
		$('#logo-container-mobile').css("background-color", "#b9205b");
	} else if(audioDrawer === "open") {
		$('.audio-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
		audioDrawer = "closed";
		$('#logo-container-mobile').css("background-color", "#70c252");
	}
});

// Quote Drawer Animation Mobile
$(".quote-mobile").click(function() {
	$(".audio-upload-mobile, .photo-upload-mobile, .video-upload-mobile").animate({'bottom': '-220px'}, "fast", "linear");
	$("#footer-mobile").animate({'bottom': '-200px'}, "fast", "linear");
	audioDrawer = "closed";
	cameraDrawer = "closed";
	videoDrawer = "closed";
	loginDrawer = "closed";
	if(quoteDrawer === "closed"){
		$('.quote-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
		quoteDrawer = "open";
		$('#logo-container-mobile').css("background-color", "#0d8fac");
	} else if(quoteDrawer === "open") {
		$('.quote-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
		quoteDrawer = "closed";
		$('#logo-container-mobile').css("background-color", "#70c252");
	}
});

// Video Drawer Animation Mobile
$(".video-mobile").click(function() {
	$(".audio-upload-mobile, .quote-upload-mobile, .photo-upload-mobile").animate({'bottom': '-220px'}, "fast", "linear");
	$("#footer-mobile").animate({'bottom': '-200px'}, "fast", "linear");
	audioDrawer = "closed";
	quoteDrawer = "closed";
	cameraDrawer = "closed";
	loginDrawer = "closed";
	if(videoDrawer === "closed"){
		$('.video-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
		videoDrawer = "open";
		$('#logo-container-mobile').css("background-color", "#ec3912");
	} else if(videoDrawer === "open") {
		$('.video-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
		videoDrawer = "closed";
		$('#logo-container-mobile').css("background-color", "#70c252");
	}
});

// login Drawer Animation Mobile
$("#login").click(function() {
	if(loginDrawer === "closed"){
		$('#footer-mobile').animate({'bottom': '0'}, "fast", "linear");
		loginDrawer = "open";
		$('#login-form-mobile').css("display", "block");
		$('#register-form-mobile').css("display", "none");
	} else if(loginDrawer === "open") {
		$('#footer-mobile').animate({'bottom': '-200px'}, "fast", "linear");
		loginDrawer = "closed";
	}
});

// login Drawer Animation Mobile
$("#register").click(function() {
	if(loginDrawer === "closed"){
		$('#footer-mobile').animate({'bottom': '0'}, "fast", "linear");
		loginDrawer = "open";
		$('#login-form-mobile').css("display", "none");
		$('#register-form-mobile').css("display", "block");
	} else if(loginDrawer === "open") {
		$('#footer-mobile').animate({'bottom': '-200px'}, "fast", "linear");
		loginDrawer = "closed";
	}
});