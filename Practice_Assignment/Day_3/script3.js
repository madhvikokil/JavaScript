// Closure 

function function1(){       // outer function
    var number = 10;        // Local variable of the outer function
    function function2(){   // inner function
        alert(number);      
    }
    return function2();
}

var fun = function1();
document.write(fun())

// Lexical Scope

function lexicalScope() {
    var number2 = 100; 
    function display() { 
      alert(number2);
    }
    display();
  }
  lexicalScope();

  
  // Callback

  function add(a,b,callback) {
      document.write("Sum of a and b is : "+(a+b));
        callback();
  }

  function display(){
        document.write("<br>Callback is called");
  }

  add(2,3,display);
  