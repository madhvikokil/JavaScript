
// Registration 
function register() {
            var fname = document.signup.fname.value;
            var lname = document.signup.lname.value;
            var address = document.signup.address.value;
            var pwd = document.signup.pwd.value;
            var uname = document.signup.uname.value;
            var gender = document.querySelector('input[name="gender"]:checked').value; 
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
            'fname':fname,'lname':lname ,'pwd':pwd,'gender':gender,'address':address,'uname':uname, 'todoList':todoList
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

  // For changing enable it
  function enableFields(){

    document.getElementById("f_name").disabled=false; 
    document.getElementById("l_name").disabled=false; 
    document.getElementById("add_ress").disabled=false; 
    document.getElementById("gender").disabled=false; 

    
  }


  // Editing the Profile of the user
  function profileChanges(){
  
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    var add_ress = document.getElementById("add_ress").value;
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

        document.getElementById("f_name").disabled = true;
        document.getElementById("l_name").disabled = true;
        document.getElementById("add_ress").disabled = true;
        document.getElementsByClassName("gender").disabled = true;

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

   
    var users = JSON.parse(localStorage.getItem("users"));

    //search for existing email id
    for(let index=0;index<users.length;index++)
    {
        if(unamesecond==users[index].uname)   // email id found then break
        {
            users[index].todoList.push(todoText);
            todo_add_data=JSON.stringify(users);
            localStorage.setItem("users",todo_add_data);


          
        }
    }
  }

  function deleteElement(){

  }
  
function insertDefaultValues()
{
  var userRecordArray=JSON.parse(localStorage.getItem("users"));
  var unamesession=sessionStorage.getItem("unamesecond");

  for(var i=0;i<userRecordArray.length;i++){
    if(userRecordArray[i].uname==unamesession)
    {
      userid=i;
      break;
    }
   
  }
  document.getElementById("f_name").value=userRecordArray[userid].fname; 
  document.getElementById("l_name").value=userRecordArray[userid].lname; 
  document.getElementById("add_ress").value=userRecordArray[userid].address; 
  document.getElementsByClassName("gender").value=userRecordArray[userid].gender;
    
}   

function dashboard(){
  window.open("dashboard.html","self");
}
// onload function

/*
  var todoname = document.getElementById("todoname").value;
  var category = document.getElementById("category").value;
  var duedate = document.getElementById("duedate").value;
  var setremainder = document.getElementById("setremainder").value;
  var addtodonote = document.getElementById("addtodonote").value;
  var makeitpublic = document.getElementById("makeitpublic").value;

  var todoobj={
    'todoname':todoname,'category':category ,'duedate':duedate,
    'setremainder':setremainder,'addtodonote':addtodonote,'makeitpublic':makeitpublic
  }

  
  var userRecordArray=JSON.parse(localStorage.getItem("users"));
  */

 function loadData(){

 var todoname = document.getElementById("todoname").value;
 var category = document.getElementById("category").value;
 var duedate = document.getElementById("duedate").value;
 var setremainder = document.getElementById("setremainder").value;
 var addtodonote = document.getElementById("addtodonote").value;
 var makeitpublic = document.getElementById("makeitpublic").value;

 var unamesecond = sessionStorage.unamesecond;
 var userRecordArray=JSON.parse(localStorage.getItem("users"));

 for( var index=0;index<userRecordArray.length;index++){
   if(userRecordArray[index].uname === unamesecond){
    var userid=index;

   }
 }

 let get_inner_array=userRecordArray[userid].todoList;
 if(get_inner_array.length === 0)
 {
     let s=document.createElement("tr");
     var node = document.createTextNode("no todos");
     s.appendChild(node);
     let data=document.getElementById("output");
     data.appendChild(s);
 }
 else
 {
 for(let i=0;i<get_inner_array.length;i++)
 {
 
  var li=document.createElement("tr");
     
      var s = "<tr><td>"+get_inner_array[i].todoname+"</td>"+
                "<td>"+get_inner_array[i].category+"</td>"+
                "<td>"+get_inner_array[i].duedate+"</td>"+
                "<td>"+get_inner_array[i].setremainder+"</td>"+
                "<td>"+get_inner_array[i].addtodonote+"</td></tr>"
                  li.innerHTML=s;

     document.getElementById("bodytable").appendChild(li);

}
 }
}

function addtodo(){

  var todoname = document.getElementById("todoname").value;
  var category = document.getElementById("category").value;
  var duedate = document.getElementById("duedate").value;
  var setremainder = document.getElementById("setremainder").value;
  var addtodonote = document.getElementById("addtodonote").value;
  var makeitpublic = document.getElementById("makeitpublic").value;

  var todoobj={
    'todoname':todoname,'category':category ,'duedate':duedate,
    'setremainder':setremainder,'addtodonote':addtodonote,'makeitpublic':makeitpublic
  }

  var unamesecond = sessionStorage.unamesecond;
  var userRecordArray=JSON.parse(localStorage.getItem("users"));

  for( var index=0;index<userRecordArray;index++){
    if(userRecordArray[index].uname === sessionStorage.unamesecond){
      console.log(index);
      var itr = index;
      console.log('index', itr);
    }
  }

  var storage = userRecordArray[index].todoList;
  for(var i=0;i<storage.length;i++){
    
    var tr = "<td><tr>"+storage[i].todoname+"</td>"+
    "<td>"+todoList[i].category+"</td>"+
    "<td>"+todoList[i].duedate+"</td>"+
    "<td>"+todoList[i].setremainder+"</td>"+
    "<td>"+todoList[i].addtodonote+"</td></tr>"

  }
  var tr = document.createElement("tr");
  var t = document.createTextNode(todoobj);
  tr.append(t);


  for(var i=0;i<userRecordArray.length;i++){
    if(unamesecond==userRecordArray[i].uname)   // email id found then break
    {

      userRecordArray[i].todoList.push(todoobj);
        todo_add_data=JSON.stringify(userRecordArray);
        localStorage.setItem("users",todo_add_data);
    }

  }
}