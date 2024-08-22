let array = [11,23,24,5,6,55,66,77,'hi', 'hello'];
for(let z=0;z<=10;z=z+2){
    console.log(array[z]);
}






let obj={
    firstname:'mohaid',
    lastname:'jalal',
    age:17,
    occupation:"student",
}
let index="";
for(let key in obj ) {
   
    index+=obj[key];
}
console.log(" "+index)
    
 







 array = ['magic', 'mango', 'milk', 'juice'];

 function getFirstElement(arr) {
     return arr[0];
 }
 
 const firstElement = getFirstElement(array);
 console.log(firstElement);









 array = ['magic', 'mango', 'milk', 'juice'];

function getLastElement(array){
    return array[array.length-1];
}

const lastElement = getLastElement(array);
console.log(lastElement);















array = ['magic', 'mango', 'milk', 'juice'];

function getArrayLength(arr) {
    return arr.length;
}               

const arrayLength = getArrayLength(array);
console.log(arrayLength);










for( x=0; x<6; x=x+1){
    console.log(x)
}





 let  y="this"
 
 function isnmber(y){

    if (y==0||y>0||y<0){
        console.log('this is an integer');
    }
    
    else{console.log("this is not an integer")}
 }
//  const inumber = isnmber(y)
 console.log(inumber)





// const cars = ['bmw','toyota','ford','honda'];

// let i=1;

// for(;cars.length;){

//     const value=cars[i];
//     console.log(value);

//     if(1%2==0){
//         i*2;
//     }
//     else{
//         i++;
//     }

    
// }
