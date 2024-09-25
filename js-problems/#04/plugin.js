
/*global document*/

var num     = document.getElementById("numb"),
    result  = document.getElementById("result");

function check() {
    "use strict";
    
    if (num.value.length == "0") {
        
        result.textContent = "You should put a Number";
        
    } else {
        if (num.value >= 0) {
            result.textContent = "It is Positive Number";
        } else {
            result.textContent = "It is Negative Number";
        }
    }
    
}