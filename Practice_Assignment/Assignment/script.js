
// Registration 
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
          
       
          var obj={
            'fname':fname,'lname':lname ,'pwd':pwd,'address':address,'uname':uname
          }
         
          var myJSON = JSON.stringify(obj);
         if(localStorage.getItem('users')){

        
           let users = localStorage.getItem('users');
          var parsedArray = JSON.parse(users);
           
          
          
          const username = parsedArray.find(function(user)
           {

            if(user.uname === uname)
            {
            return true;}
          });

          if (username) 
          {
            alert('user is already present');
          } 
          
          else 
          {
            parsedArray.push(obj);
            var parsedJSON = JSON.stringify(parsedArray);
            localStorage.setItem('users' ,parsedJSON);
            window.open("login.html");
          }
        
          
        }
        else
         {
          var users = new Array();
          users.push(obj);
          var myJSON = JSON.stringify(users);
           localStorage.setItem('users' ,myJSON);
        }
         window.open("login.html");
}

// Login validation 
function validation(){

  var unamesecond = document.login.unamesecond.value;
  var pwdsecond = document.login.pwdsecond.value;
    users = localStorage.getItem('users');
    parsedArray = JSON.parse(users);

  var validUser = parsedArray.find(function(user2){
    if(user2.uname === unamesecond && user2.pwd === pwdsecond){
      return true;}
    });

    if(validUser){

    if(sessionStorage){
      // Store data
      sessionStorage.setItem('unamesecond' ,unamesecond);
      
      // Retrieve data
      alert("Hi, " +  sessionStorage.getItem('unamesecond'));
      window.open("dashboard.html");
      }
     else{
      alert("Sorry, your browser do not support session storage.");
      }
}
    
    else{
      alert('invalid User');
      window.open("login.html","_self");
      }
    }

  function login(){ 
   window.open("login.html","_self");
  }

  
 