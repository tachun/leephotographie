$(function() {
  //addWorks();
  //showNewsInfo();
  //updateNewsInfo();
});

var WorksInfo = Parse.Object.extend("WorksInfo");

function addWorks(){
  var worksInfo = new WorksInfo();
  worksInfo.save({
    title:    'Road',
    title_en: 'Road', 
    desc_en:  'Taking the high road is easy to say and it reveals the innocence and the ignorance of a bystander. However, the most absurd is the fact that people do believe in the so-called bystander. People lift their heads to move towards the downward regard... even we have a bunch of questions...<br><br>you do not need to question. the beacon of light is the answer. you do not need to question. even though you wonder the destination you do not need to question. even though you have another answer. how dare you question the belief is your power how dare you question could it be possible that you have another destination how dare you question no one have another answer i know you may question why the beacon of light glimmers i know you may question why it takes so long to get to the destination i know you may question do i believe in that answer please do not question the beacon of light does not glimmer but glitter please do not question work harder to reach the destination please do not question even you wonder.... even you wonder.... even you wonder... you could question will the leafs get greener and greener? you could question  will they still wander and wonder? you could question will the road stay as red as on the instant forever? i would say only if you are a dreamer i would say only if you are a dreamer i would say  only if you are a dreamer well..., anyways, see you tomorrow, Burkina Faso',
    title_fr: 'Road',
    desc_fr:  'Southeast of India, in the Bay of Bengal and the Andeman Sea, there are forgotten archipelagos: The Andaman & Nicobar Islands. A former British colony, off the coast of Myanmar (Burma), they reach right down to the Island of Sumatra in Indonesia. It is group of more than 250 tropical islands, where most of them are still unknown and unexplored. On a geographic map, they are nearer Myanmar but have been considered part of India, since the latter’s independence in 1947.<br><br>Due to their isolated position, these islands give shelter to preserve tribes in another age, undoubtedly the most mysterious in the world. Some of them are still living today as if in the Stone Age. We do not know much about their history, traditions and their language… we do not even know how they refer to themselves.'
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

function updateWorksInfo(){
  var worksQuery = new Parse.Query(WorksInfo);
      
  $('#update-works').on('click', function(){
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
