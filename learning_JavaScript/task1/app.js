let remainingCharacter;
function countInput(event){
    remainingCharacter = 60 - event.target.value.length;
     let toChangeSpan = document.getElementById('toChangeSpan');
     toChangeSpan.textContent = remainingCharacter;
   if(remainingCharacter === 0){
       document.querySelector('input').classList.add('error');
       toChangeSpan.classList.add('error');
   }else if (remainingCharacter<11){
    document.querySelector('input').classList.add('warning');  
    toChangeSpan.classList.add('warning');
    document.querySelector('input').classList.remove('error');  
    toChangeSpan.classList.remove('error');
   }else{
    document.querySelector('input').classList.remove('warning');  
    toChangeSpan.classList.remove('warning');
   }
}

document.getElementById('text-input').addEventListener('input' , countInput);
