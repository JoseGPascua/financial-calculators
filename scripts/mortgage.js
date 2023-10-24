"use strict";

// create a function that calculates mortage information and include a display message
function calculateFunction() {
    //take the string value by referencing id and convert them into numbers then assign them to variables
    const principalValue = parseFloat(document.getElementById('principal-amount').value);
    const interestRateValue = parseFloat(document.getElementById('interest-rate').value)/100;
    const loanTermValue = parseFloat(document.getElementById('loan-length').value)
    const numberOfMonths = 12;  //create a variable for months

    //calculation for monthly payment
    const monthlyPayment = (principalValue * (interestRateValue / numberOfMonths)) / (1 - Math.pow(1 + (interestRateValue / numberOfMonths), -numberOfMonths * loanTermValue));
    const totalPaid = monthlyPayment * numberOfMonths * loanTermValue; //calculates the total paid
    const totalInterest = totalPaid - principalValue; //calculates the total interest
    
    //displays a message
    document.getElementById('output1').innerText = "A $" + principalValue + " loan at " + (interestRateValue*100).toFixed(3) + "% for " + loanTermValue
     + " years would have a $" + monthlyPayment.toFixed(2)
     + "/mo payment with a total interest of $" + totalInterest.toFixed(2);
}

// create a variable for the calculate button by referencing it through id
const calculateBtn = document.getElementById('calculate-Btn');
// add an event listener, by clicking the button, it will execute calculateFunction
calculateBtn.addEventListener('click', calculateFunction);