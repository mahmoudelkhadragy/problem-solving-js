// write function take n number as parameter and return sum until this number

// Big O => O(1) => constant
function addUpTo(n){
    return (n * (n + 1))/2;
}
let t1 = performance.now();
addUpTo(1000000) 
let t2 = performance.now();

console.log(`time is: ${(t2 -t1) / 1000}`);


// Big O => O(n) 
function addUpTo1(n){
    let total = 0
    for(let i = 1; i <= n; i++){
        total += i
    }
    return total;
}

let t1 = performance.now();
addUpTo1(1000000000) 
let t2 = performance.now();

console.log(`time is: ${(t2 -t1) / 1000}`);