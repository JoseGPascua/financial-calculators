"use strict";

// create a function that calculates compounding interest with a one time deposit and include a display message
function calculateFunction() {
    //take the string value by referencing id and convert them into numbers then assign them to variables
    const initalDeposit = parseFloat(document.getElementById('initial-deposit').value);
    const interestRateValue = parseFloat(document.getElementById('interest-rate').value)/100;
    const numberOfYears = parseFloat(document.getElementById('number-years').value);
    const numberOfDays = 365;  //create a variable for days in a year

    //calculation for final account value and interest earned
    const accountValue = initalDeposit * Math.pow(1 + (interestRateValue / numberOfDays), numberOfDays * numberOfYears);
    const interestEarned = accountValue - initalDeposit;
    //displays a message
    document.getElementById('output1').innerText = "If you deposit $" + initalDeposit + " in a CD that earns " + (interestRateValue * 100).toFixed(2) + "% interest and matures in " 
    + numberOfYears + " years, your CD's ending balance will be $" + accountValue.toFixed(2) + " and you would have earned $" + `${interestEarned.toFixed(2)}` + " in interest.";
}

// create a variable for the calculate button by referencing it through id
const calculateBtn = document.getElementById('calculate-Btn');
// add an event listener, by clicking the button, it will execute calculateFunction
calculateBtn.addEventListener('click', calculateFunction);