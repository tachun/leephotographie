$(function() {
  //addNews();
  showNewsInfo();
  updateNewsInfo();
});

var NewsInfo = Parse.Object.extend("NewsInfo");

function addNews(){
  var newsInfo = new NewsInfo();
  newsInfo.save({
    type:        'Exposition',
    title:       'Name of Exposition',
    date:        '15/08 ~ 20/09/2013',
    subtitle:    'Subtitle of this event',
    description: "This expo is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    link:    'http://google.com',
    location:    '10 rue Saint Antoine, 75004 Paris'
  }, {
    success: function(newsInfo) {
    },
    error: function(newsInfo, error) {
    }
  });
}


function showNewsInfo(){
  var newsQuery = new Parse.Query(NewsInfo);
  newsQuery.find({
    success: function(results) {
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        if ($('#news-type-input').length) {
          $('#news-type-input').val(object.get('type'));
        }
        if ($('#news-title-input').length) {
          $('#news-title-input').val(object.get('title'));
        }
        if ($('#news-date-input').length) {
          $('#news-date-input').val(object.get('date'));
        }
        if ($('#news-subtitle-input').length) {
          $('#news-subtitle-input').val(object.get('subtitle'));
        }
        if ($('#news-desc-input').length) {
          $('#news-desc-input').val(object.get('description'));
        }
        if ($('#news-link-input').length) {
          $('#news-link-input').val(object.get('link'));
        }
        if ($('#news-location-input').length) {
          $('#news-location-input').val(object.get('location'));
        }

        $('#news-type').html(object.get('type'));
        $('#news-title').html(object.get('title'));
        $('#news-date').html(object.get('date'));
        $('#news-subtitle').html(object.get('subtitle'));
        $('#news-desc').html(object.get('description'));
        $('#news-link').html(object.get('link'));
        $('#news-location').html(object.get('location'));
        if(object.get('location') != "" ){
          $("#news-location-title").show();
        }
      }
    },
    error: function(error) {
      $('#messages').text("Error: " + error.code + " " + error.message);
    }
  });
}

function updateNewsInfo(){
  var newsQuery = new Parse.Query(NewsInfo);
      
  $('#update-news').on('click', function(){
    var newType       = $('#news-type-input').val(),
        newTitle      = $('#news-title-input').val(),
        newDate       = $('#news-date-input').val(),
        newSubTitle   = $('#news-subtitle-input').val(),
        newDesc       = $('#news-desc-input').val(),
        newLink       = $('#news-link-input').val(),
        newLocation   = $('#news-location-input').val();

    $(this).text('updating').prop('disabled', true);

    newsQuery.first({
      success: function(newsQuery) {
        newsQuery.set("type", newType);
        newsQuery.set("title", newTitle);
        newsQuery.set("date", newDate);
        newsQuery.set("subtitle", newSubTitle);
        newsQuery.set("description", newDesc);
        newsQuery.set("link", newLink);
        newsQuery.set("location", newLocation);
        newsQuery.save();
        $('#update-news').text('Update News').prop('disabled', false);
        $('#messages').text('Update success !').slideDown().delay(2000).slideUp();
      }
    });
  });
}
