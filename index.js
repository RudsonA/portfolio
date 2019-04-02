"use strict"

// This adds the timestamp on the footer
let year = new Date();
document.getElementById('yearStamp').innerHTML = year.getFullYear(); 

// Tip Calculator
//Calculate Tip
function calcTip() {
    let billAmt = document.getElementById("billAmt").value; 
    let peopleAmt = document.getElementById("peopleAmt").value; 
    let service = document.getElementById("service").value;

    //Validate input
    if (billAmt === "" || service === 0) {
        alert("Please enter values"); 
        return;
    }

    //Check to default to 1
    if (peopleAmt === "" || peopleAmt <= 1) {
        peopleAmt = 1; 
        document.getElementById("service").style.display = "none"; 
    } else {
        document.getElementById("service").style.display = "block"; 
    }

    //Calculate tip
    let total = (billAmt * service) / peopleAmt; 
    
    //Round 
    total = Math.round(total * 100) / 100

    total = total.toFixed(2);

    //Display text 
    document.getElementById("totalTip").style.display = 'block';
    document.getElementById("tip").innerHTML = `Tip: $${total}`; // send back formatted string.
}


//click to call function
document.getElementById("calculate").onclick = function() {
    calcTip();
}; 