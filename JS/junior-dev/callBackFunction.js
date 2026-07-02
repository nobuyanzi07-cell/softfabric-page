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
let k = 0 
let invT = setInterval(function showCurrentTime() {
    if (k >= 5) {
        clearInterval(invT); // Stop the interval after 5 iterations
        return;
    }

    const rn = new Date();
    alert(`Current time is: ${rn.getDate()}-${rn.getMonth() + 1}-${rn.getFullYear()} ${rn.toLocaleTimeString()}`);
    console.log(`Current time is: ${rn.getDate()}-${rn.getMonth() + 1}-${rn.getFullYear()} ${rn.toLocaleTimeString()}`);
}, 1000); // Call showCurrentTime every 2 seconds
k = k + 1;
console.log(`k is ${k}`);

clearInterval(invT); // Stop the interval after some time (optional)
// task 1