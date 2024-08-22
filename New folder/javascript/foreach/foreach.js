let boxes = [12,23,5,67,33]
boxes.forEach((element , index)=>{
    console.log(index,element);
});


const printElement = (element , index)=>{
        console.log(index,element);
}



printElement('hemmlo ' , 23);

// boxes.forEach(printElement);

const printCopy = printElement;
printCopy('hii' ,56);
printElement('32 ' , 52)




function sum(a,b){
    return(a+b)
}
function multiply(a,b,num,func){
    const result=num*func(a,b);

    console.log(result);

}

multiply(2,4,12,sum);
 