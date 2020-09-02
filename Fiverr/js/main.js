$(window).scroll(function() {
  if ($(this).scrollTop()>0) {
    $('.header__top').css('background-color', '#fff');
    $('.header__top-form').css('visibility', 'visible');
    $('.join').addClass('btn-green').removeClass('btn-gray');
  } else {
    $('.header__top').css('background-color', 'transparent');
    $('.header__top-form').css('visibility', 'hidden');
    $('.join').addClass('btn-gray').removeClass('btn-green');

  }
  

  if ($(this).scrollTop()>200) {
    $('.header__bottom').css('visibility', 'visible');
  } else {
    $('.header__bottom').css('visibility', 'hidden');
  }
 });