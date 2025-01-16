// 호출 스케줄링(Scheduling a function call)

const hello = () => {
  console.log('hello~');
}

// 1. setTimeout() , clearTimeout()
const timeout = setTimeout(hello, 2000);
const h1El = document.querySelector('h2');
h1El.addEventListener('click', () => {
  console.log('Clear!');
  clearTimeout(timeout);
})

// 2. setInterval(), clearInterval()
const i = 0;
const timeout2 = setInterval(hello, 2000);
const h1El2 = document.querySelector('h3');
h1El2.addEventListener('click', () => {
  console.log('Clear!');
  clearInterval(timeout2);
})