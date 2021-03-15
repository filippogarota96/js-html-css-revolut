
var dropMenu = $('.main-menu > li');

dropMenu.click(function(){
  //$(this).siblings().children('.slide-menu').slideUp();
  dropMenu.each(function(){
    $(this).children('.slide-menu').slideUp();
  });
  $(this).children('.slide-menu').slideToggle('fast');


});

dropMenu.mouseenter(function(){
  //$(this).siblings().children('.slide-menu').slideUp();
  dropMenu.each(function(){
    $(this).children('.slide-menu').slideUp();
  });
  $(this).children('.slide-menu').slideToggle('fast');
});

















/*onClick.mouseenter(function() {
  $(this).children('.slide-menu').slideToggle('fast');
});/*/
