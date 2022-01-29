let newElement = document.createElement('a');
newElement.href = 'https://instagram.com';
newElement.textContent = 'Instagram';

let parentElement = document.querySelector('h1');

parentElement.appendChild(newElement);  

console.dir(document.body);

newElement.remove();

let toMove = document.querySelector('p');
document.body.append(toMove);

toMove.remove();
document.querySelector('p').remove();

let count = 0;

function countValve (event){
    console.log(event.target.value);
    console.log(++count);
}

document.querySelector('input').addEventListener('input' , countValve);

newElement = document.createElement('p');
newElement.textContent = 'click me';
document.body.append(newElement);

function clickMeListener(){
    newElement.textContent = 'Clicked';
}
newElement.addEventListener('click' , clickMeListener);