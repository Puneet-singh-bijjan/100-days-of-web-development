const calculateButtonElement =  document.querySelector('button');
const showResultElement = document.getElementById('show-result');
calculateButtonElement.addEventListener('click' , function(){
    const Principal = document.querySelector('input').value;
    const Rate = document.body.children[0].children[1].children[4].value;
    const Time = document.body.children[0].children[1].children[6].value;
    const simpleInterest = (Principal*Rate*Time)/100;
    showResultElement.innerHTML = '<h3>Simple Interest = ' + simpleInterest + '</h3>';
})