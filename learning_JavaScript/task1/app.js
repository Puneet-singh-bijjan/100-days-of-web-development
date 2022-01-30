let remainingCharacter;
function countInput(event){
    remainingCharacter = 60 - event.target.value.length;
     let toChangeSpan = document.getElementById('toChangeSpan');
     toChangeSpan.textContent = remainingCharacter;
   if(remainingCharacter<10){
       document.querySelector('input').style.backgroundColor = 'rgb(223, 91, 58)';
       toChangeSpan.style.color =  'rgb(223, 91, 58)';
   }else{
    document.querySelector('input').style.backgroundColor = 'white';   
   }
}

document.getElementById('text-input').addEventListener('input' , countInput);
