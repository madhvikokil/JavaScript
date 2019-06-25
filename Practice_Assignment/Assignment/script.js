  
  
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
          }
        
          
        }
        else
         {
          var users = new Array();
          users.push(obj);
          var myJSON = JSON.stringify(users);
           localStorage.setItem('users' ,myJSON);
        }
        
         

          // localStorage.setItem('fname', fname);
          // localStorage.setItem('lname', lname);
          // localStorage.setItem('address', address);
          // localStorage.setItem('pwd', pwd);
          // localStorage.setItem('uname', uname);

         console.log(users);
 
          window.open('login.html','_self');
}


         

// Login validation 

function validation()
{
   if(users.uname == uname2 && users.password == pwd2)
      {
        return true;
      }

      else if (usernameCheck) 
      {
          alert('Valid user');
      } 
    
      else 
      {
          alert('invalid user');
      }
    
}
    

 /*var uname2 = document.login.uname2.value;
  var pwd2 = document.login.pwd2.value;

  if(uname2=="" ||pwd2==""){
      alert("Fields should not be blank");
      return false;
  }
  check();
 }

 // Checking function

  function check(){   
    
    var storedName = localStorage.getItem(' uname');
    var storedPwd = localStorage.getItem('pwd');

    // entered data from the login-form
    var uname2 = document.getElementById('uname2');
    var pwd2 = document.getElementById('pwd2');

    // check if stored data from register-form is equal to data from login form
    if(uname2.value !== storedName || pwd2.value !== storedPwd) {
        alert('ERROR');
       window.open('index.html','_self');
    }else {
        alert('You are logged in.');
        window.open('dashboard.html','_self');
    }
  }
*/
//}
  function login()
  {
    window.open('login.html','_self');
  }