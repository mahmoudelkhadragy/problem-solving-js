
/*global document*/

var num     = document.getElementById("numb"),
    result  = document.getElementById("result");

function check() {
    "use strict";
    
    
    if (num.value % 3 == 0 && num.value % 4 == 0 && num.value != 0) {
        result.innerHTML = "Yes <span>" + num.value + "</span> Can Be Divided By 3 And 4";
    } else if (num.value.length == 0) {
        result.textContent = "You Should Enter the Number";
    } else {
        result.textContent = "No It Can't Be Divided By 3 And 4";
    }
    
}