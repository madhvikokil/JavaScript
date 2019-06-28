
// Registration 
function register() {
            var fname = document.signup.fname.value;
            var lname = document.signup.lname.value;
            var address = document.signup.address.value;
            var pwd = document.signup.pwd.value;
            var uname = document.signup.uname.value;
            var todoList = new Array();
            

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
            'fname':fname,'lname':lname ,'pwd':pwd,'address':address,'uname':uname, 'todoList':todoList
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
                    window.open("login.html","_self");
                    }
       }
       
        else
         {
          var users = new Array();
          users.push(obj);
          var myJSON = JSON.stringify(users);
           localStorage.setItem('users' ,myJSON);
           window.open("login.html","_self");
        }
         
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

  function profile_edit(){
    window.open("profile.html","_self");
  }

  function logout(){
    sessionStorage.clear();
     window.open("login.html","_self") ; 
  }

  function profileChanges(){
   console.log('here i am');
    var f_name = document.profile.f_name.value;
    var l_name = document.profile.l_name.value;
    var add_ress = document.profile.add_ress.value;
    
    users = localStorage.getItem('users');
    var parsedUser = JSON.parse(users);
    console.log("array: ", parsedUser);
    console.log("type of-> ", typeof parsedUser);
  
 

     for( index=0;index<parsedUser.length;index++){
          if(parsedUser[index].uname === sessionStorage.unamesecond){
            console.log(index);
            var itr = index;
            console.log('index', itr);
                

        }
}
console.log('index', itr);
  
    parsedUser[itr].fname = f_name;
    parsedUser[itr].lname = l_name;
    parsedUser[itr].address = add_ress;
    parsedUser = JSON.stringify(parsedUser);
    localStorage.setItem('users',parsedUser);
    }

    function view(){
     localStorage.getItem();
     localStorage.getItem(lname);
     localStorage.getItem(address);
     localStorage.getItem(username);
    }

// Logout
    function logout(){
      sessionStorage.clear();
       window.open("login.html","_self") ; 
    }
    
// Edit Profile
    function profile_edit(){
      window.open("profile.html","_self");
    }
 
// Add element in the todo List
function addElement(){
  
  var unamesecond = sessionStorage.unamesecond;

    let todoData = document.getElementById("giveInput").value;
    let users = JSON.parse(localStorage.getItem("users"));

    //search for existing email id
    for(let index=0;index<users.length;index++)
    {
        if(unamesecond==users[index].uname)   // email id found then break
        {
            users[index].todoList.push(todoData);
            todo_add_data=JSON.stringify(users);
            localStorage.setItem("users",todo_add_data);
        }
    }
  }
  


  

         /*if(localStorage.getItem('todoArray')){

          let todoArray = localStorage.getItem('todoArray');
          var parsedtodoArray = JSON.parse(todoArray);
        }

        else
         {
          var todoArray = new Array();
          todoArray.push(todo);
          var myJSONStringify = JSON.stringify(todoArray);
           localStorage.setItem('todoArray' ,myJSONStringify);
           window.open("login.html","_self");
        }
         
*/


