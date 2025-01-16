// 콜백 (Callback)
// - 함수가 실행 될 때 인수로 들어가는 또 다른 함수

// 1. 
const a = callback => {
  console.log('A');
  callback();
}

const b = () => {
  console.log('B');
}

// a();
// b();
a(b);

// 2.
const sum = (a,b) => a+b;
console.log(sum(3,4));
console.log(sum(3,7));

const sum2 = (a,b,c) => {
  setTimeout(()=>{
    c(a+b)
  }, 1000);
}
sum2(3,4,value =>{
  console.log(value);
})

sum2(3,7, value => {
  console.log(value);
})

// 3. 
const loadImage = (url, cb) => {
  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.addEventListener('load', () => {
    cb(imgEl);
  })
}

const continerEl = document.querySelector('.container');

loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
  continerEl.innerHTML = '';
  continerEl.append(imgEl);
});