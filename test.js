

let someName = "Greg";
console.log("Name variable updated again:", someName);





<!DOCTYPE html>
<html>
<head>
    
</head>
<body>
    <h1>JAVASCRIPT COMPARISONS</h1>
    <p>INPUT YOUR AGE AND CLICK THE BUTTON</p>
    <input id="age"  value="18" />
   <button onclick=" myFunction()" >INPUT YOUR AGE </button>

   <p id="demo"></p>

    <script>
        function myFunction() { 
            let voteable;
            let age = Number(document.getElementById("age").value); 
            if (isNaN(age)){
                voteable= INPUT IS NOT A NUMBER!;
            }
            else{
                voteable = (age <18) ? "STILL YOUNG TO VOTE" : "LEGIBLE TO VOTE";
            }
            
 document.getElementById("demo").innerHTML = voteable + "to vote";
        }   
 </script>

</body>
</html>