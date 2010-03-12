function(e) {
  var name = $('input[name=name]', this).val(),
    pass = $('input[name=password]', this).val();
    pass2 = $('input[name=password2]', this).val();
if(pass == pass2){                  
  $(this).trigger('doSignup', [name, pass]);
  } 
  else {
      alert("Passwords do not match");
  }
  return false;
}