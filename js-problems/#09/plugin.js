
/*global document*/

var numb    = document.getElementById("numb"),
    result  = document.getElementById("result");
    
console.log(numb.value);

function check() {
    "use strict";
    
    //remove any thing in the div before insert the new vlues
    result.innerHTML= ""

    //start to take new value and do for loop
    for(var i = 1; i <= 12; i++){
        //create span in the dom
        var p = document.createElement("p");
        //insert the generated number in the new span
        p.innerText = ` ${numb.value} x ${i} = ${numb.value * i}`;
        //append this span into 
        result.appendChild(p);
    }

}