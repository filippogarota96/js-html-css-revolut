
var onClick = $('.main-menu li');

onClick.click(function(){
  $(this).children('.slide-menu').toggle();
});
