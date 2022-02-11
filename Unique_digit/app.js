const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', calculateResult);

function calculateResult() {
    const baseValue = document.getElementById('base-value').value;
    const powerValue = document.getElementById('power-value').value;
    var tempBaseValue, tempPowerValue,finalValue;
    const outputElement = document.getElementById('show-result');
    if(powerValue == 0){
        finalValue = 1;
        outputElement.textContent = 'The last degit of ' +baseValue +'^' +powerValue + ' is ' +finalValue; 
        console.log('working') ;
        return;
    }
    if (baseValue > 9) {
        tempBaseValue = baseValue % 10;
    } else {
        tempBaseValue = baseValue;
    }
    if (powerValue > 9) {
        tempPowerValue = powerValue % 4;
        if(!tempPowerValue){
            tempPowerValue = 4;
        }
    } else {
        tempPowerValue = powerValue;
    }


    console.log(tempBaseValue);
    console.log(tempPowerValue);
    if (tempPowerValue == 0) {
         finalValue = 0;
    } else {
         finalValue = Math.round((Math.pow(tempBaseValue, tempPowerValue)) % 10);
    }       
    outputElement.textContent = 'The last degit of ' +baseValue +'^' +powerValue + ' is ' +finalValue;
        console.log(finalValue);
}