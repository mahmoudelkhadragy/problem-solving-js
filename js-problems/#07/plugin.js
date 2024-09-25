
/*global document*/

var char     = document.getElementById("numb"),
    result  = document.getElementById("result");
    

function check() {
    "use strict";
    var char_lower = char.value.toLowerCase();
    
    if (char_lower === 'a' || char_lower === 'o' || char_lower === 'e' || char_lower === 'i' || char_lower === 'u') {
        result.textContent = "You Entered " + char.value + " and it is Vowel";
    } else if (char.value.length > 1){
        result.textContent = "You Entered More than One character";
    } else{
        result.textContent = "You Entered Constant Character";
    }
    
}