

 function sayHello(){
    alert("JavaScript");
}

            var num1 = 10;
            var num2 = 20;
            document.write("<br><br>Addition of the two  numbers are :"+(num1 + num2));
            document.write("<br>Substraction of the two  numbers are :"+(num1 - num2));
            document.write("<br>Multiplication of the two  numbers are :"+(num1 * num2));
            document.write("<br>Division of the two  numbers are :"+(num1 / num2));

            // If-else 
            
           if(num1 < num2){
             
               document.write("<br><br>"+"If-else : "+num2+" is greater than "+num1);
           }

           else{
               document.write(num1);
           }

           document.write("<br><br>");

           // For Loop

        document.write("For Loop : ");
           for(num1;num1<=20;num1++) {
               document.write(num1+"\t");
           }

           // Array

           document.write("<br><br>");
           var alphabets = ['A','B','C','D'];
           document.write("Displaying all the elements : "+alphabets);

           alphabets.push('E');                         // Push in array
           document.write("<br>"+"Pushed an element : "+alphabets);

           document.write("<br>"+alphabets.shift());     // Shift in array
           document.write("<br>"+"Shift used : "+alphabets);
           document.write("<br>"+alphabets.reverse());
           
           // Date Ojects

           var d = new Date();
           document.write("<br><br>"+"Date and its Objects");
           document.write("<br><br>"+"Current Time : "+Date.now());
           document.write("<br>"+"Month : "+d.getMonth());
           document.write("<br>"+"Day : "+d.getDay());
           document.write("<br>"+"Date : "+d.getDate());

           // Math objects

           document.write("<br><br>"+"Math and its objects");
           document.write("<br>"+"Value of PI : "+Math.PI);
           document.write("<br>"+"Power : "+Math.pow(2,3));
           document.write("<br>"+"Round of : "+Math.round(2.4));
           document.write("<br>"+"Ceil of : "+Math.ceil(2.4));
           document.write("<br>"+"Floor of : "+Math.floor(2.4));

          