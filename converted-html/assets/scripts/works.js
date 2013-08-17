$(function() {
  //addWorks();
  showWorksInfo();
  updateWorksInfo();
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
    success: function(worksInfo) {
    },
    error: function(worksInfo, error) {
    }
  });
}


function showWorksInfo(){
  var worksQuery = new Parse.Query(WorksInfo).ascending("createdAt");
  worksQuery.find({
    success: function(results) {
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        $("#works-list").append("<li class='"+object.id+"'>"+ object.get('title') +"</li>");
      }

      $('#works-list li').on('click', function(){
        var obId = $(this).attr('class');
        $(this).css("color", "#dd4b39").siblings("li").css("color", "#414141");
        showCurrentWorkInfo(obId);
      });
    },
    error: function(error) {
      $('#messages').text("Error: " + error.code + " " + error.message);
    }
  });
}

function showCurrentWorkInfo(obId){
  var workQuery = new Parse.Query(WorksInfo);
  workQuery.equalTo("objectId", obId);

  workQuery.find({
    success: function(results) {
      var object = results[0];
      if ($('#works-title-input').length) {
        $('#works-title-input').val(object.get('title'));
      }
      if ($('#works-title_en-input').length) {
        $('#works-title_en-input').val(object.get('title_en'));
      }
      if ($('#works-en-desc').length) {
        $('#works-en-desc').val(object.get('desc_en'));
      }
      if ($('#works-title_fr-input').length) {
        $('#works-title_fr-input').val(object.get('title_fr'));
      }
      if ($('#works-fr-desc').length) {
        $('#works-fr-desc').val(object.get('desc_fr'));
      }
      if ($('#work-id').length) {
        $('#work-id').val(obId);
      }

      
    },
    error: function(error) {
      $('#messages').text("Error: " + error.code + " " + error.message);
    }
  });
}

function updateWorksInfo(){    
  $('#update-works').on('click', function(){
    var obId       = $('#work-id').val(),
        menuTitle  = $('#works-title-input').val(),
        enTitle    = $('#works-title_en-input').val(),
        enDesc     = $('#works-en-desc').val(),
        frTitle    = $('#works-title_fr-input').val(),
        frDesc     = $('#works-fr-desc').val();

    $(this).text('updating').prop('disabled', true);

    var workQuery = new Parse.Query(WorksInfo);

    workQuery.equalTo("objectId", obId);
    workQuery.first({
      success: function(workQuery) {
        workQuery.set("title", menuTitle);
        workQuery.set("title_en", enTitle);
        workQuery.set("desc_en", enDesc);
        workQuery.set("title_fr", frTitle);
        workQuery.set("desc_fr", frDesc);
        workQuery.save();

        $('#update-news').text('Update News').prop('disabled', false);
        $('#messages').text('Update success !').slideDown().delay(2000).slideUp();
      }
    });
  });
}
