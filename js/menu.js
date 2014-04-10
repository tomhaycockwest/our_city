
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


$('.camera-mobile').click(function() {
  $('.photo-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
});


// $('.camera-mobile').click(function() {
//   $('.photo-upload-mobile').clickToggle(
//     function() {
//     $(this).animate({'bottom': '0'}, "fast", "linear");
//   },
//     function() {
//     $(this).animate({'bottom': '-220px'}, "fast", "linear");
//   });
// });




// $(function slideUp() {
// $('.photo-upload-mobile').toggle(function() {
//   $('.photo-upload-mobile').animate({'bottom': '0'}, "fast", "linear");
// }, function() {
//   $('.photo-upload-mobile').animate({'bottom': '-220px'}, "fast", "linear");
// });
// });

// $('.camera-mobile').click(function() {
//   slideUp();
// });