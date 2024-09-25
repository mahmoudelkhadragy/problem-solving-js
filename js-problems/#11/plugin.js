
/*global document*/

var numb1    = document.getElementById("numb1"),
    numb2    = document.getElementById("numb2"),
    result   = document.getElementById("result");
    
console.log(numb.value);

function check() {
    "use strict";
    //using Math.pow
    // result.innerText = `${numb1.value} ^ ${numb2.value} = ${Math.pow(numb1.value, numb2.value)} `; 
    var power = 1;
    //using normal solution
    for (var i = 0; i < numb2.value; i++){
        power *= numb1.value;
    }
    result.innerText = `${numb1.value} ^ ${numb2.value} = ${power} `; 
}