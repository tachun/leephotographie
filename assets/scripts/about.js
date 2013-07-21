$(function() {
  //addAbout();
  //addEdu();
  showAboutInfo();
  updateAboutInfo();
  var currentUser = Parse.User.current();
  $('#logoutBtn').before('<p class="logged-info">Hello, <strong>'+currentUser.attributes.username+'</strong></p>');
});

var AboutInfo = Parse.Object.extend("AboutInfo"),
    EduInfo   = Parse.Object.extend("EduInfo");

function addAbout(){
  var aboutInfo = new AboutInfo();
  aboutInfo.save({
    title: 'BIOGRAPHIE',
    description: "Ching Tsang Lee est né en 1972. Il a étudié la photographie à l’Université Paris 8. Son mémoire avait pour sujet « Photographie : mise en scène de la vie quotidienne et simulacre ». C’est ce postulat que l’on retrouve dans la série qu’il exposera à la Galerie Le 29. La série « Do you Bollywood ? » prend place à Bombay, berceau du cinéma indien où ce dernier tient véritablement un rôle social important. Il devient un moyen d’échapper aux problèmes de la vie quotidienne."
  }, {
    success: function(aboutInfo) {
    },
    error: function(aboutInfo, error) {
    }
  });
}

function addEdu(){
  var eduInfo = new EduInfo();
  eduInfo.save({
    title: '2007 - 2008',
    description: "Université Paris 8, Paris<br>Master 2 RECH.<br>Esthétique et Histoire arts plastiques et Photographie"
  }, {
    success: function(eduInfo) {
    },
    error: function(eduInfo, error) {
    }
  });
}

function showAboutInfo(){
  var aboutQuery = new Parse.Query(AboutInfo);
  aboutQuery.find({
    success: function(results) {
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        if ($('#about-title-input').length) {
          $('#about-title-input').val(object.get('title'));
        }
        if ($('#about-desc-input').length) {
          $('#about-desc-input').val(object.get('description'));
        }
        $('#about-title').html(object.get('title'));
        $('#about-desc').html(object.get('description'));
      }

    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

  var eduQuery = new Parse.Query(EduInfo);
  eduQuery.find({
    success: function(results) {
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        if ($('.edu').length) {
          $('.edu').append('<li><p class="list-title"><strong>'+object.get('title')+'</strong></p><p class="edu-detail">'+object.get('description')+'</p></li>');
        }
        if ($('#edu-panel').length) {
          if (i == 0){
            $('#edu-first-year').val(object.get('title'));
            $('#edu-first-desc').val(object.get('description'));
          }
          else if ( i == 1){
            $('#edu-second-year').val(object.get('title'));
            $('#edu-second-desc').val(object.get('description'));
          }
        }
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function updateAboutInfo(){
  var aboutQuery = new Parse.Query(AboutInfo),
      eduFirstQuery   = new Parse.Query(EduInfo),
      eduSecondQuery   = new Parse.Query(EduInfo);
      
  $('#update-bio').on('click', function(){
    var newTitle        = $('#about-title-input').val(),
        newDesc         = $('#about-desc-input').val(),
        newEduFirstYear = $('#edu-first-year').val(),
        newEduFirstDesc = $('#edu-first-desc').val(),
        newEduSecYear   = $('#edu-second-year').val(),
        newEduSecDesc   = $('#edu-second-desc').val();

    $(this).text('updating').prop('disabled', true);

    aboutQuery.first({
      success: function(aboutQuery) {
        aboutQuery.set("title", newTitle);
        aboutQuery.set("description", newDesc);
        aboutQuery.save();
        $('#update-bio').text('Update Biographie').prop('disabled', false);
        $('#messages').text('Update success !').slideDown().delay(2000).slideUp();
      }
    });

    eduFirstQuery.equalTo("objectId", "qx4IDkMBt9");
    eduFirstQuery.first({
      success: function(eduFirstQuery) {
        eduFirstQuery.set("title", newEduFirstYear);
        eduFirstQuery.set("description", newEduFirstDesc);
        eduFirstQuery.save();
      }
    });

    eduSecondQuery.equalTo("objectId", "QRWbsFulYm");
    eduSecondQuery.first({
      success: function(eduSecondQuery) {
        eduSecondQuery.set("title", newEduSecYear);
        eduSecondQuery.set("description", newEduSecDesc);
        eduSecondQuery.save();
      }
    });
  });
}
