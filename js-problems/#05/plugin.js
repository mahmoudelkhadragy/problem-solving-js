
/*global document*/

var num1     = document.getElementById("numb1"),
    num2     = document.getElementById("numb2"),
    num3     = document.getElementById("numb3"),
    result1  = document.getElementById("result1"),
    result2  = document.getElementById("result2");

function check() {
    "use strict"
    var x = num1.value,
        y = num2.value,
        z = num3.value,
        max = Math.max(x, y, z),
        min = Math.min(x, y, z);
    
    if (num1.value.length == "0" || num2.value.length == "0" || num3.value.length == "0") {
        result1.textContent = "You should put the numbers";
    } else {
        
        result1.textContent = "Max Number is: " + max;
        result2.textContent = "Min Number is: " + min;
        
    }
    
    

}