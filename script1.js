const btnStart = document.querySelector(".btn-primary");
const btnStop = document.querySelector(".btn-danger");
const redTag = document.querySelector(".red");
const yellowTag = document.querySelector(".yellow");
const greenTag = document.querySelector(".green");
let second = 0;
let stop;

const run = () => {
  yellowTag.style.opacity = 0;
  greenTag.style.opacity = 0;

  setTimeout(() => {
    redTag.style.opacity = 0;
    yellowTag.style.opacity = 1;
  }, 5000);

  setTimeout(() => {
    yellowTag.style.opacity = 0;
    greenTag.style.opacity = 1;
  }, 7000);

  setTimeout(() => {
    greenTag.style.opacity = 0;
    redTag.style.opacity = 1;
  }, 12000);
};

const start = () => {
  stop = setInterval(() => {
    second++;
    if (second === 1) {
      run();
      second = -12;
      console.log(second);
    }
  }, 1000);
};

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", () => {
  clearInterval(stop);
});
