$(function() {
  loginUser();
  logoutUser();
});

function loginUser(){
  $('#loginBtn').on('click', function(e){
    e.preventDefault();
    loginProcess();
  });
}

function logoutUser(){
  $('#logoutBtn').on('click', function(){
    Parse.User.logOut();
    showCurrentUserData();
  });
}

function showCurrentUserData(){
  var messages = $('.messages').removeClass('error'),
      currentUser = Parse.User.current();

  if (currentUser) {
    messages.text('Hello, '+ currentUser.attributes.username ).slideDown();
    setTimeout(function(){
      window.location.href = "admin-panel/";
    },500)
  } else {
    messages.text('User is logout').slideDown();
  }
}

function loginProcess(){
  var my_username = $('#login #login-username').val(),
      my_password = $('#login #login-password').val(),
      messages = $('.messages');

  if(my_username == ''){
    messages.text('USERNAME is required').addClass('error').slideDown();
  } else if(my_password == ''){
    messages.text('PASSWORD is required').addClass('error').slideDown();
  } else{
    Parse.User.logIn(my_username, my_password, {
      success: function(user) {
        console.log('login');
        showCurrentUserData();
      },
      error: function(user, error) {
        messages.text('USERNAME or PASSWORD not correct').addClass('error').slideDown();
      }
    });
  }
}

function createUser(){
  var user = new Parse.User();
    user.set("username", "creed88");
    user.set("password", "10201020");
    user.set("email", "tachun1020@gmail.com");

    user.signUp(null, {
      success: function(user) {
        console.log(user.username);
        console.log(user.password);
        console.log(user.email);
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
  });  
}