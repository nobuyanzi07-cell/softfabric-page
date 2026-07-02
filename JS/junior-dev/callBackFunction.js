// callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows for asynchronous programming and can be used to handle events, perform actions after a delay, or process data once it has been retrieved.

//time 
function showCurrentTime() {
    const rn = new Date();
    alert(`Current time is: ${rn.toLocaleTimeString()}`);
    console.log(`Current time is: ${rn.toLocaleTimeString()}`);
}
// global scope
if (true) {
    const currentTime = new Date();
    console.log(`done in if=> Current time is: ${currentTime}`);
}

//showCurrentTime();
// callback function
//interval = 5000 millisecon/ds = 5 seconds
let k = 0;

let invT = setInterval(function showCurrentTime() {
    if (k >= 5) {
        clearInterval(invT); // Stop the interval after 5 iterations
        return;
    }

    const rn = new Date();
    alert(`Current time is: ${rn}`);
    console.log(`Current time is: ${rn}`);

    k = k + 1; // increment inside the interval
    console.log(`k is ${k}`);
}, 2000); // Call showCurrentTime every 2 seconds

function reminder() {
    alert("This is a reminder to take a break and stretch!");
}

setTimeout(reminder, 10000); // Call reminder after 10 seconds

// task 1