 let para1 = document.getElementById('para1')
 console.log(para1);



 console.log(typeof para1)
 console.log(Array.isArray(para1))
para1.style.color = 'blue'


console.dir(para1);// document information record 

para1.innerText = '<u> hi ! this is me <u/>'
// para1.innerHTML = '<u> hi ! this is me </u>'
document.getElementById("para2").innerHTML="you is meee" 

let paras = document.getElementsByClassName('paras')
console.log(paras)

paras[0].style.color = 'purple'
paras[1].style.fontSize = '32px'

let para= document.getElementsByClassName('paras');
function changecolor(){
    const box = document.querySelector('.box')
    box.style.backgroundColor = 'red'

}
let colorchanged = true ;
function changeColor(){
    console.log('hello')
    const container = document.querySelector('.container')
    const box = document.querySelector('.box')

    if(colorchanged){
        box.style.backgroundColor = 'red';
        container.style.backgroundColor = 'green';
        colorchanged = false;
    }
    else{
        box.style.backgroundColor = 'blue';
        container.style.backgroundColor = 'orange';
        colorchanged = true;
    } }

    const container = document.querySelector('.container')

    container.addEventListener('click',changeColor)




    







