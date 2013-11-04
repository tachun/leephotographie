$(function() {
  responsiveActions();
  openPhoto();
  initSubmenu();
  initProjectDesc();
  fullScreen();
  initMobileMenu();

  $viewWidth = Response.viewportW();
  $body = $('body');

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

  var slider = $('.main-photo > ul'),
      inArticle = $('.article-section');

  if (inArticle.length) {
    thumbs = slider.clone().attr('id', 'slider-pager').addClass("slide-thumb cf rslides_tabs rslides1_tabs");
    $('.navigation').after(thumbs);

    $('#slider-pager').find('li').each(function(){
      var item = $(this).find('img')
          path = item.attr('src');
      item.wrap($('<a>',{
        href: '#'
      }));
      item.hide();
      $(this).css("background-image", "url(" + path + ")")

    })

    if (thumbs.length) {
      slider.responsiveSlides({
        auto: true,
        speed: 1500,
        timeout: 5000,
        manualControls: '#slider-pager'
      });
    }
  }
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