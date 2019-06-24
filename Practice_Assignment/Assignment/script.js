  function register() {
            var fname = document.signup.fname.value;
            var lname = document.signup.lname.value;
            var address = document.signup.address.value;
            var pwd = document.signup.pwd.value;
            var uname = document.signup.uname.value;

            if(fname=="" ||lname =="" ||address=="" ||uname==""||pwd==""){
              alert("Fields should not be blank");
              return false;
          }

          var firstnameRegex = '[a-zA-Z]';
          var firstnameResult = fname.match(firstnameRegex);

          if(!firstnameResult){
            return false;
          }

          var lastnameRegex = '[a-zA-Z]';
          var lastnameResult = lname.match(lastnameRegex);

          if(!lastnameResult){
            return false;
          }

          var addressRegex = '[a-zA-Z]';
          var addressResult = address.match(addressRegex);

          if(!addressResult){
            return false;
          }

          var usernameRegex = '[a-zA-Z0-9]';
          var usernameResult = uname.match(usernameRegex);

          if(!usernameResult){
            return false;
          }


          var passwordRegex = '[a-zA-Z0-9|\W].{6,}';
          var passwordResult = pwd.match(passwordRegex);

          if(!passwordResult){
            return false;
          }

          console.log('here');
          

         var users = new Array();
         var obj={
           fname,lname,pwd,address,uname
         }

        users.push(obj);


          // localStorage.setItem('fname', fname);
          // localStorage.setItem('lname', lname);
          // localStorage.setItem('address', address);
          // localStorage.setItem('pwd', pwd);
          // localStorage.setItem('uname', uname);

         console.log(users);
 
          document.write(window.open('login.html'));
         }


// Login validation 

function validation(){
  var uname2 = document.login.uname2.value;
  var pwd2 = document.login.pwd2.value;

  if(uname2=="" ||pwd2==""){
      alert("Fields should not be blank");
      return false;
  }
  check();
 }

 
 // Checking function

  function check(){
    var storedName = localStorage.getItem('uname');
    var storedPwd = localStorage.getItem('pwd');

    // entered data from the login-form
    var uname2 = document.getElementById('uname2');
    var pwd2 = document.getElementById('pwd2');

    // check if stored data from register-form is equal to data from login form
    if(uname2.value !== storedName || pwd2.value !== storedPwd) {
        alert('ERROR');
        document.write(window.open('index.html'));
    }else {
        alert('You are logged in.');
        document.write(window.open('dashboard.html'));
    }
  }

  function login(){
    document.write(window.open('login.html'));
  }




