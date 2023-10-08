const promoEl = document.querySelector('.btn__tab-1');
const shortbEl = document.querySelector('.btn__tab-2');
const longbEl = document.querySelector('.btn__tab-3');
const coundownMin = document.querySelector('.coundown__min');
const coundownSec = document.querySelector('.coundown__sec');
const btnStart = document.querySelector('.btn__start');
const btnPush = document.querySelector('.btn__push');
const innerContainer = document.querySelector('.inner__container');

let preStartlog;
let shortBreakeMin = 5 * 60;
let longBrakeMin = 15 * 60;
let promiMin;
let promiSec;
let randomNumberGen;

let intervel;

// allFuncation

// change background img
randomNumberGen = Math.floor(Math.random() * 6) + 1;
innerContainer.style.backgroundImage = `url(assets/img/img-${randomNumberGen}.jpg)`;

const timeCulFun = function (min, sec) {
  clearInterval(intervel);

  let promoDoroMin = min * 60 + Number(sec) - 1;

  intervel = setInterval(() => {
    console.log(sec, typeof sec);
    let minutes = promoDoroMin / 60;
    let secend = promoDoroMin % 60;
    console.log(minutes);
    console.log(secend);
    coundownMin.textContent = Math.floor(minutes).toString().padStart(2, '0');
    coundownSec.textContent = Math.floor(secend).toString().padStart(2, '0');

    if (promoDoroMin <= 0) {
      clearInterval(intervel);
    } else {
      promoDoroMin = promoDoroMin - 1;
    }
    console.log(
      Math.floor(minutes).toString().padStart(2, '0'),
      Math.floor(secend).toString().padStart(2, '0')
    );
  }, 1000);
};

promoEl.addEventListener('click', () => {
  promoEl.classList.add('btn__active');
  shortbEl.classList.remove('btn__active');
  longbEl.classList.remove('btn__active');
  coundownMin.textContent = '25';
  coundownSec.textContent = '00';
  clearInterval(intervel);
});
shortbEl.addEventListener('click', () => {
  promoEl.classList.remove('btn__active');
  shortbEl.classList.add('btn__active');
  longbEl.classList.remove('btn__active');
  coundownMin.textContent = '05';
  coundownSec.textContent = '00';
  clearInterval(intervel);
});

longbEl.addEventListener('click', () => {
  promoEl.classList.remove('btn__active');
  shortbEl.classList.remove('btn__active');
  longbEl.classList.add('btn__active');

  coundownMin.textContent = '15';
  coundownSec.textContent = '00';
  clearInterval(intervel);
});

btnStart.addEventListener('click', function () {
  const currentMin = coundownMin.textContent;
  const currentSec = coundownSec.textContent;
  timeCulFun(currentMin, currentSec);
});

btnPush.addEventListener('click', () => {
  clearInterval(intervel);
  const pushMin = coundownMin.textContent;
  const pushSec = coundownSec.textContent;

  // btnStart.addEventListener('click', function () {
  //   const sumBothMinSec = pushMin * 60 + pushSec;
  //   const currentMin = coundownMin.textContent;
  //   console.log(pushMin, pushSec, typeof pushMin, typeof pushSec);
  // });
});
