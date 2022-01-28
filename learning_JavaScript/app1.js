// document.body.children[2].children[0].href = 'https://google.com';

document.body.children[2].children[0].innerHTML = 'Google';

let element = document.getElementById('external-link');
element.href = 'https://google.com';

element.style = 'color: red';

element = document.querySelector('p a');
element.href = 'https://instagram.com';
