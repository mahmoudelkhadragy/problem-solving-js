
/*global document*/

var num1     = document.getElementById("numb1"),
    num2     = document.getElementById("numb2"),
    result  = document.getElementById("result");

function check() {
    "use strict"
    
    if (num1.value.length == "0" || num2.value.length == "0") {
        result.textContent = "You should put two numbers";
    } else {
        
        if (num1.value > num2.value) {
        
            result.textContent = num1.value + " Is bigger than " + num2.value;
        
        } else if (num1.value == num2.value) {
        
            result.textContent = "They are equal";  
               
        }else {
        
            result.textContent = num2.value + " Is bigger than " + num1.value;
        
        }
        
    }
    
    

}