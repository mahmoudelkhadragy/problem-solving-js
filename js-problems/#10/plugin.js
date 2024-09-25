
/*global document*/

var numb    = document.getElementById("numb"),
    result  = document.getElementById("result");
    
console.log(numb.value);

function check() {
    "use strict";

    if (numb.value <= 1){
        result.innerText = "The Number can't be negative or 1";
    } else {
        //remove any thing in the div before insert the new vlues
        result.innerHTML= "";

        //start to take new value and do for loop
        for(var i = 1; i <= numb.value; i++){

            //create span in the dom
            var span = document.createElement("span");

            //insert only even numbers into span
            if (i % 2 === 0){
                span.innerText = ` ${i} `;
            }
            //append this span into result div
            result.appendChild(span);
        }
        
    }
    
    

}