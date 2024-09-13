// counter

let increment = document.getElementById("inc");
let decrement = document.getElementById("dec");
let stop = document.getElementById("stop");
let counter = document.getElementById("counter");
let count = 0;
increment.addEventListener("click", () => {
    count++;
    counter.textContent = count;
})
decrement.addEventListener("click", () => {
    count--;
    counter.textContent = count;
})
stop.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
})