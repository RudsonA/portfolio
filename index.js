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



// Timer/Countdown pROJECT

function timer() { 

    // clearInterval(x);
// Getting the value submitted
let day = document.querySelector("#days").value; 
let hour = document.querySelector("#hours").value;
let min = document.querySelector("#minutes").value;
let sec = document.querySelector("#seconds").value; 

// Converting the values to a workable format
day = day * 1000 * 60 * 60 * 24; 
hour = hour * 1000 * 60 * 60; 
min = min * 1000 * 60; 
sec = sec * 1000; 

let inputAmt = day + hour + min + sec; 
let now = new Date().getTime();
let startPoint = inputAmt + now; 

document.querySelector("#button").style.display = "none"; 

// Updates the countdown every second
let x = setInterval(function() {

    // Today' date and time
    let now = new Date().getTime();

    let distance = startPoint - now; 
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Outputs the results
    document.querySelector("#timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
     
    // if count is over
    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#timer").innerHTML = "EXPIRED";
    }
}, 1000)

}