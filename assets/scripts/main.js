$(function() {
  openPhoto();
  initSubmenu();
  $("#slider").responsiveSlides({
    auto: true,
    speed: 1200,
    manualControls: '#slider-pager'
  });

  function initialize() {
    var mapOptions = {
      zoom: 17,
      center: new google.maps.LatLng(48.875286, 2.360062),
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
    };

    var stylez = [{
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 } // <-- THIS
      ]}
    ];

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions, stylez);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
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