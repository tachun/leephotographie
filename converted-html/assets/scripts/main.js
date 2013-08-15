$(function() {
  responsiveActions();
  openPhoto();
  initSubmenu();
  initProjectDesc();
  fullScreen();
  initMobileMenu();

  $("#slider").responsiveSlides({
    auto: true,
    speed: 1500,
    timeout: 5000,
    manualControls: '#slider-pager'
  });

  Parse.initialize("wNc5CugL4O230OuLnYVEOm0HyYJUo6JQIxF2W5jV", "YXM31sd1kgj6dRslfPF8tUQHJ6oSTpJjqYJFTRMG");
});

function responsiveActions(){
  var $body,
      $viewWidth;
  Response.action(function() {
    $body = $('body');
    $viewWidth = Response.viewportW();
    if($viewWidth < 769){
      $body.removeClass('medium-device big-device').addClass('small-device');
      $('.fixed-header').removeClass('fixed-header').addClass('fixed-header-mobile');
    } else if($viewWidth >= 769 && $viewWidth < 1024){
      $('.main-menu').show();
      $body.removeClass('small-device big-device').addClass('medium-device');
    } else{
      $('.main-menu').show();
      $body.removeClass('small-device medium-device').addClass('big-device');
    }
  });
}

function openPhoto(){
  $('div[class*="-cover"]').on('click', function(){
    var col = 'col'+$(this).data('col');
    $(this).removeClass(col).addClass('col12');
  });
}

function initSubmenu(){
  $('.jsOpenSubmenu').on('click', function(e){
    e.preventDefault();
    $('.submenu').slideToggle();
  })
}

function initMobileMenu(){
  $('.mobile-nav-toggle').on('click', function(e){
    e.preventDefault();
    $(".submenu").hide();
    $('#mobile-nav').slideToggle(300);
  })
}

function fullScreen(){
  $('#slider img').click(function() {
    if (screenfull.enabled) {
      screenfull.toggle(this);
    }
  });
}

function initProjectDesc(){
  if($(".openProjectDesc").get(0)){
    $('.enDesc').on('click', function(){
      $('#en-desc').fadeIn();
      $('#fr-desc').fadeOut();
      $(this).addClass('actived');
      $('.frDesc').removeClass('actived');
    });
    $('.frDesc').on('click', function(){
      $('#fr-desc').fadeIn();
      $('#en-desc').fadeOut();
      $(this).addClass('actived');
      $('.enDesc').removeClass('actived');
    });
    $('.close').on('click', function(e){
      e.preventDefault();
      $(this).parent().fadeOut();
      $('.enDesc, .frDesc').removeClass('actived');
    });
  }
}