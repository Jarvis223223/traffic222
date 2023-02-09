const startBtn = document.querySelector(".start-btn");
const endBtn = document.querySelector(".end-btn");
const redLig = document.querySelector(".redlight");
const yellowLig = document.querySelector(".yellowlight");
const greenLig = document.querySelector(".greenlight");

let red = 0,
  green = 0,
  yellow = 0;

let Rsett;
let Ysett;
let Gsett;

// START BUTTON
startBtn.addEventListener("click", () => {
  Rsett = setInterval(showRed, 1000);
  RRR = setInterval(showSecRed, 1000);
});

// END BUTTON
endBtn.addEventListener("click", () => {
  (red = 0), (green = 0), (yellow = 0);
  redLig.textContent = "00";
  yellowLig.textContent = "00";
  greenLig.textContent = "00";
  clearInterval(Rsett);
  clearInterval(Ysett);
  clearInterval(Gsett);
  redLig.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
  yellowLig.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
  greenLig.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
});
// RED
const showRed = () => {
  red += 1;
  redLig.style.backgroundColor = "red";
  if (red === 11) {
    redLig.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
    red = 0;
    clearInterval(Rsett);
    Ysett = setInterval(showYellow, 1000);
  }
  const redd = red < 10 ? "0" + red.toString() : red;
  redLig.textContent = redd;
};
// YELLOW
const showYellow = () => {
  yellow += 1;
  yellowLig.style.backgroundColor = "yellow";
  if (yellow === 6) {
    yellowLig.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
    yellow = 0;
    clearInterval(Ysett);
    Gsett = setInterval(showGreen, 1000);
  }
  const yelloww = yellow < 10 ? "0" + yellow.toString() : yellow;
  yellowLig.textContent = yelloww;
};
// GREEN
const showGreen = () => {
  green += 1;
  greenLig.style.backgroundColor = "greenyellow";
  if (green === 11) {
    greenLig.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
    green = 0;
    clearInterval(Gsett);
    Rsett = setInterval(showRed, 1000);
  }
  const greenn = green < 10 ? "0" + green.toString() : green;
  greenLig.textContent = greenn;
};

// ***************************************************************************************************
const redTrackDiv = document.querySelector(".redTrack");
const yellowTrackDiv = document.querySelector(".yellowTrack");
const greenTrackDiv = document.querySelector(".greenTrack");
const secStartBtn = document.querySelector(".twoStart-btn");
const secEndBtn = document.querySelector(".twoEnd-btn");
const numbers = document.querySelector(".number");
let reded = 0,
  yellowed = 0,
  greened = 0;

let RRR;
let YYY;
let GGG;

// STARTED
// secStartBtn.addEventListener("click", () => {
//   RRR = setInterval(showSecRed, 1000);
// });

// ENDED
secEndBtn.addEventListener("click", () => {
  (reded = 0), (yellowed = 0), (greened = 0);
  numbers.textContent = "00";
  clearInterval(RRR);
  clearInterval(YYY);
  clearInterval(GGG);
  redTrackDiv.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
  yellowTrackDiv.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
  greenTrackDiv.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
});

const showSecRed = () => {
  reded += 1;
  redTrackDiv.style.backgroundColor = "red";
  if (reded === 11) {
    redTrackDiv.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
    reded = 0;
    clearInterval(RRR);
    YYY = setInterval(showSecYellow, 1000);
  }
  const numText = reded < 10 ? "0" + reded.toString() : reded;
  numbers.textContent = numText;
};

const showSecYellow = () => {
  yellowed += 1;
  yellowTrackDiv.style.backgroundColor = "yellow";
  if (yellowed === 6) {
    yellowTrackDiv.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
    yellowed = 0;
    clearInterval(YYY);
    GGG = setInterval(showSecGreen, 1000);
  }
  const numText = yellowed < 10 ? "0" + yellowed.toString() : yellowed;
  numbers.textContent = numText;
};

const showSecGreen = () => {
  greened += 1;
  greenTrackDiv.style.backgroundColor = "greenyellow";
  if (greened === 11) {
    greenTrackDiv.style.backgroundColor = "rgba(89, 89, 105, 0.526)";
    greened = 0;
    clearInterval(GGG);
    RRR = setInterval(showSecRed, 1000);
  }
  const numText = greened < 10 ? "0" + greened.toString() : greened;
  numbers.textContent = numText;
};
