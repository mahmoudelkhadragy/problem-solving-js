function countCharacters(str){
    let obj = {}
    for(let char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1;
        }
    }
    console.log(obj)
}

// this function check if the character is numeric or alpha 
// it's performance is more better than regex in the browser
function isAlphaNumeric(char){
    let code = char.charCodeAt(0)
    if(!(code > 47 && code < 58) && // numeric (0-9)
       !(code > 64 && code < 91) && // upper alpha (A-Z)
       !(code > 96 && code < 123)){ // lower alpha (a-z)
           return false
       }
       return true;
}

countCharacters("AAh@dH")