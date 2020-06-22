$(document).ready(function(){


  $(".slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [
    '<img src="img/arrow__left.png">',
    '<img src="img/arrow__right.png" >',
    ],
  });






  $(".clients__slider").owlCarousel({
    items: 6,
    loop: true,
    margin: 50,
    nav: true,
    navText: [
    '<img src="img/arrow__left.png">',
    '<img src="img/arrow__right.png" >',
    ],
    responsive: {
      0: {
        items: 2,
      },
      1200: {
       items: 4,
     }
   }
 });


$(".object__gallery__mobile").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [
      '<img src="img/arrow__left__mobile.png">',
      '<img src="img/arrow__right__mobile.png" >',
    ],
  });

  $('[data-modal-show]').click(function(){
    var id = $(this).attr('data-modal-show');
    $('[data-modal="'+id+'"]').show();
  });
  $('[data-modal-close]').click(function(){
    var id = $(this).attr('data-modal-close');
    $('[data-modal="'+id+'"]').hide();
  });

  $('.head__contact__messangers__items a').mouseover(function(){
    var bg_hover = $(this).attr('data-bg-hover');
    $(this).css('background-image','url('+bg_hover+')');
  });
  $('.head__contact__messangers__items a').mouseout(function(){
    var bg_original = $(this).attr('data-bg-original');
    $(this).css('background-image','url('+bg_original+')');
  });



  $('input[data-mask="phone"]').mask('+7 (999) 999-9999');


  $.validator.addMethod(
    "phone",
    function (value) {
      return value.replace(/\D+/g, "").length >= 11;
    },
    "Введите номер телефона полностью"
    );

  $("form[data-validate]").each(function (i, el) {
    $(el).validate({
      rules: {
        phoneinput: "phone",
      },
    });
  });



  $('.menu-item-has-children ul').slideUp();
  $('.menu-item-has-children').click(function(){
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).children('ul').slideToggle();
  });

  $('[data-mobile-nav-show]').click(function(){
    $('.mobile__nav').css('display','flex');
  });
  $('.mobile__nav__close').click(function(){
    $('.mobile__nav').hide();
  });



});