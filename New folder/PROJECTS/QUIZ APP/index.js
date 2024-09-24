const data = [ 'option1','option2','option3','option4',]
function option(InnerText,i){
  const optionContainer=document.querySelector('.options')
  const optionElement=document.createElement('input')

  const id = `option_${i}`
  optionElement.setAttribute('type','radio')
  optionElement.setAttribute('name','option')
  optionElement.setAttribute('id',id)
  optionElement.setAttribute('value',id)

const labelElement=document.createElement('label')
 labelElement.setAttribute('for',id)
 labelElement.innerText=InnerText
  
 optionContainer.append(optionElement,labelElement)
 
  
}

function DisplayQuestion(){
  const empty = document.getElementsByClassName('options');
  empty.innerText='';






  for( let i=0 ; i<data.length ; i++){
    const value = data[i]
    option(value , i)
      
  };
}


