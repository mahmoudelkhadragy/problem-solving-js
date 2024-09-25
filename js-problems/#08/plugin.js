
/*global document*/

var numb    = document.getElementById("numb"),
    result  = document.getElementById("result");
    
console.log(numb.value);

function check() {
    "use strict";
    
    if (numb.value < 1){
        result.innerText = "The Number is lower than 1";
    } else if (numb.value === 1){
        result.innerText = 1;
    } else{
        //remove any thing in the div before insert the new vlues
        result.innerHTML= ""

        //start to take new value and do for loop
        for(var i = 1; i <= numb.value; i++){
            //create span in the dom
            var span = document.createElement("span");
            //add class active if number is can divided by 5
            if(i % 5 === 0){
                span.classList.add("active");
            }
            //insert the generated number in the new span
            span.innerText = ` ${i} `;
            //append this span into 
            result.appendChild(span);
        }

    }
    

}