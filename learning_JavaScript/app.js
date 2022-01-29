let newElement = document.createElement('a');
newElement.href = 'https://instagram.com';
newElement.textContent = 'Instagram';

let parentElement = document.querySelector('h1');

parentElement.appendChild(newElement);  

console.dir(document.body);

newElement.remove();