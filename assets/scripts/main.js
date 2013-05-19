$(function() {
  openPhoto();
  initSubmenu();
  $("#slider").responsiveSlides({
    auto: true,
    speed: 1200,
    manualControls: '#slider-pager'
  });
});

function openPhoto(){
  $('div[class*="-cover"]').on('click', function(){
    var col = 'col'+$(this).data('col');
    $(this).removeClass(col).addClass('col12');
  });
}

function initSubmenu(){
  $('.jsOpenSubmenu > a').on('click', function(e){
    e.preventDefault();
  })

  $('.jsOpenSubmenu').on('mouseenter', function(){
    $('.submenu').fadeIn();
  })
  $('.jsOpenSubmenu').on('mouseleave', function(){
    $('.submenu').fadeOut();
  })
}