function countInput(event){
    let x = 60 - event.target.value.length;
    document.getElementById('toChangeSpan').textContent = x;
   
}

document.getElementById('text-input').addEventListener('input' , countInput);
