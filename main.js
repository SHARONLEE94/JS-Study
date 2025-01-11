// Boolean
// 특정 상황을 분기처리 할 경우에 사용됨
const a = true;
const b = false;

if(a) {
  console.log("Hello A");
}

if(b) {
  console.log("Hello B");
}

// Null
// 명시적 표현
// 값이 비어있다 
let age = null;
console.log(`age: ${age}`); // age: null

setTimeout(function() {
  age = 85;
  console.log(`age: ${age}`); // age: 85
}, 1000)

const user = {
  name : "happi",
  age :85,
  email:null
}

console.log(user); // {name: 'happi', age: 85, email: null}
console.log(user.name); // happy
console.log(user.age); // 85
console.log(user.email); // null

// Undefined
// 암시적 표현
// 값이 할당되어 있지 않는 상태
let age2; // let age2 = undefined;
console.log(`age2: ${age2}`); // age2: undefined

setTimeout(function() {
  age2 = 100;
  console.log(`age2: ${age2}`); //age2: 100
}, 1000)

const user2 = {
  name: "happy",
  age: 85
}
console.log(user2); // {name: 'happy', age: 85}
console.log(user2.name); // happy
console.log(user2.age); // 85
console.log(user2.email); // Undefined

