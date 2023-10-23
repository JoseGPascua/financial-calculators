"use strict";

// assign variables to retrieve the text input through id
const principal = document.getElementById("principal-amount");
const interestRate = document.getElementById("interest-rate");
const loanTerm = document.getElementById("loan-length");
const calculateBtn = document.getElementById('calculate-Btn');

// create a function that calculates mortage information and include a display message
function calculateFunction() {
    //take the string value and convert them into numbers
    let p = parseFloat(principal.value);
    let r = parseFloat(interestRate.value)/100;
    let t = parseFloat(loanTerm.value)
    //n is equal to number of payments per year, which is 12 months
    const n = 12;
    //calculation for monthly payment
    let monthlyPayment = (p * (r / n)) / (1 - Math.pow(1 + (r / n), -n * t));
    //calculates the total paid
    let totalPaid = monthlyPayment * n * t;
    //calculates the total interest
    let totalInterest = totalPaid - p;
    
    //displays a message
    document.getElementById('output1').innerText = "A $" + p + " loan at " + (r*100) + "% for 15 years would have a $" + monthlyPayment.toFixed(2) + "/mo payment with a total interest of $" + totalInterest.toFixed(2);
}

//performs the function
calculateBtn.addEventListener('click', calculateFunction);