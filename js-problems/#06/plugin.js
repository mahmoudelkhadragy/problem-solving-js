
/*global document*/

var num     = document.getElementById("numb"),
    result  = document.getElementById("result");

function check() {
    "use strict";
    
    if (num.value.length == "0") {
        result.textContent = "You Should Enter the Number";
    } else {
        if (num.value % 2 == 0) {
            result.textContent = "It is Even Number";
        } else {
            result.textContent = "It is Odd Number";
        }
    }
    
}