$(function () {

  $('.header__toggle-btn').on('click', function () {
    $('.menu').toggleClass('menu-visible');
  });

  $('.menu-visible__btn').on('click', function () {
    $('.menu').removeClass('menu-visible');
  });

  $('.team__inner').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });

});