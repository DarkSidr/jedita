$(document).ready(function(){
  $('.carousel').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.png"></button>',
  });

});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.sidepanel').fadeIn();
  } else {
    $('.sidepanel').fadeOut();
  }
});