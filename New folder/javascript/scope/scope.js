// global scope - it can be accessible anywhere
let sum = 10;  

// local and function scope ki value hum bahir excess nhi kar saktay 
function add() {
    let a = 10
    sum += a;
    console.log(sum);
}
add()



// block elemnts - only accessible inside block ( let , var )
if (sum > 10 ){
    let result = sum + 20;
    console.log(result);
}


