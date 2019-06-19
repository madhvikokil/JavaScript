var fruits = {name:"mango",color:"yellow"};
var cars = {color:"red",company2:"Honda"};
var bike = {color3:"black",company3:"Yamaha"};

// Accessing the object methods

document.write("Object : ["+fruits.name+","+fruits.color+"]");
document.write("<br>");
document.write("I have  a "+cars.color+" color "+bike.company+" bike");
document.write("<br>Key of object fruits where index is 1: "+Object.keys(fruits)[1]);   // Object.keys()
document.write("<br>Value of object bike where index is 0 : "+Object.values(bike)[0]+"<br><br>");  // Object.Values()

// Exception Handling
// Finally will execute

try {
    allert("JavaScript");
}

catch(err){
    document.write(err.message);

}
finally{
    document.write("<br>Try-catch of javascript<br>");
}

// Call by Value

function callByValue(num1, num2) { 
    document.write("<br>Inside Call by Value Method<br>"); 
    num1 = 100; 
    num2= 200; 
    document.write("num1 =" + num1 +" num2 =" +num2); 
  } 
  let num1 = 10; 
  let num2 = 20; 
  document.write("<br>Before Call by Value Method"); 
  document.write("<br>num1 =" + num1 +" num2 =" +num2); 
  callByValue(num1,num2) 
  document.write("<br>After Call by Value Method"); 
  document.write("<br>num1 =" + num1 +" num2 =" +num2); 

// Call by Reference

function callByReference(obj) { 
    document.write("<br>Inside Call by Reference Method<br>"); 
    obj.aValue = 100; 
    document.write(obj.aValue); 
  } 
  let obj = {aValue:1};
  document.write("<br><br>Before Call by Reference Method<br>"); 
  document.write(obj.aValue);
  callByReference(obj) 
  document.write("<br>After Call by Reference Method<br>"); 
  document.write(obj.aValue);