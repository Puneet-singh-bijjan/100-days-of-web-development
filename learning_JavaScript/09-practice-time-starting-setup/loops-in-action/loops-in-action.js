//calculate the sum

const calculateSumItemElement = document.querySelector('#calculator button');
let totalSum = 0;
function calculateSum(){
    const userNumberElement = document.getElementById('user-number');
    const enteredNumber = userNumberElement.value;
    
    for(let i=1;i<=enteredNumber;i++){
        totalSum= totalSum + i;
    }
     let sumOutputElement = document.getElementById('calculated-sum');
       sumOutputElement.textContent = totalSum;
       sumOutputElement.style.display = 'block'; 
  }

calculateSumItemElement.addEventListener('click' , calculateSum);

//highlight links

const highlightLinkButton =  document.querySelector('#highlight-links button');

function highlightLinks(){
    const anchorLinkElements = document.querySelectorAll('#highlight-links a');
    
    for(const anchorLinkElement of anchorLinkElements){
        anchorLinkElement.classList.add('highlight');
    }
}
highlightLinkButton.addEventListener('click' , highlightLinks);

//Display user data

const userData = {
    Name : 'Puneet',
    age : 21,
    Job : 'wipro'
};

const displayDataButtonElement = document.querySelector('#user-data button');

function displayData(){
    const outputUserDataParentElement = document.getElementById('output-user-data');
    outputUserDataParentElement.textContent = '';
     for(const productName in userData){
        const newElement = document.createElement('li');
         const outputedData = productName + ": " + userData[productName] + "\n";
        outputUserDataParentElement.append(outputedData);
     }
}

displayDataButtonElement.addEventListener('click' , displayData);

//Roll dice // generate random number

const rollDiceButtonElement = document.querySelector('#statistics button');

function getRollDiceNumber(){
    return (Math.floor(Math.random() * 6 ) +1);
}

function rollDice(){
    const enteredNumber = document.getElementById('user-target-number').value;
    const diceRollsElement = document.getElementById('dice-rolls');
    diceRollsElement.textContent = "";
    let numberOfRolls = 0;
    let hasRolledDiceNumber = false;
    while(!hasRolledDiceNumber){
        const randomNumber = getRollDiceNumber();
        hasRolledDiceNumber = (randomNumber == enteredNumber);
        const newElement = document.createElement('li');
        newElement.textContent = 'Roll is ' + randomNumber;
        diceRollsElement.append(newElement);
        numberOfRolls++;
    }
    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    outputTotalRollsElement.textContent = numberOfRolls;
    const outputTargetNumberElement = document.getElementById('output-target-number');
    outputTargetNumberElement.textContent = enteredNumber;
}

rollDiceButtonElement.addEventListener('click' , rollDice);