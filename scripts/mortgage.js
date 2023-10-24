"use strict";

//Create a function that calculates mortage information and include a display message
function calculateFunction() {
    //Input - Intitialize the variables
    const principalValue = parseFloat(document.getElementById('principal-amount').value);
    const interestRateValue = parseFloat(document.getElementById('interest-rate').value)/100;
    const loanTermValue = parseFloat(document.getElementById('loan-length').value)
    const numberOfMonths = 12;  //create a variable for months

    //Calculation for monthly payment, total paid and total interest
    const monthlyPayment = (principalValue * (interestRateValue / numberOfMonths)) / (1 - Math.pow(1 + (interestRateValue / numberOfMonths), -numberOfMonths * loanTermValue));
    const totalPaid = monthlyPayment * numberOfMonths * loanTermValue; //calculates the total paid
    const totalInterest = totalPaid - principalValue; //calculates the total interest
    
    //Output Dislaying a message on HTML
    let message = `A $${principalValue} loan at  a $${(interestRateValue*100).toFixed(3)}% for ${loanTermValue} years would have a $${monthlyPayment.toFixed(2)}/mo payment with a total interest of $${totalInterest.toFixed(2)}`;
    document.getElementById('output1').innerText = message;
    }

//Create a variable for buttons by referencing it through id
const calculateBtn = document.getElementById('calculate-Btn');
//Add an event listener, by clicking the button, it will execute calculateFunction
calculateBtn.addEventListener('click', calculateFunction);