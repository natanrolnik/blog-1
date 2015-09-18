/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

 /*
 * Note from Ash: I've heavily removed things; see their original for more.
 */

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.navbar-custom').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
            $('.navbar-custom').addClass('is-visible');
          } else {
            $('.navbar-custom').removeClass('is-visible is-fixed');
          }
        } else {
          //if scrolling down...
          $('.navbar-custom').removeClass('is-visible');
          if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) {
            $('.navbar-custom').addClass('is-fixed');
          }
        }

        this.previousTop = currentTop;

      });
  }
});

// Speaking page, makes slides images retina.
$(function () {

  if (window.devicePixelRatio > 1) {
    var images = $(".speaking ul img");

    for(var i = 0; i < images.length; i++) {

      // Compute retina name.
      var imageType = images[i].src.substr(-4);
      var imageName = images[i].src.substr(0, images[i].src.length - 4);
      imageName += "@2x" + imageType;

      // Replace source.
      images[i].src = imageName;
    }
  }
});
