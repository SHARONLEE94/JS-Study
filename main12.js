// 1. For 반복문
// - 구조
// for(초기화; 조건; 증감) {
//   // 반복 실행할 코드
// }

for(let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("----------------------------------------------------------------");
// - break 키워드
// - continue 키워드
for(let i = 9; i > -1; i--) {
  // if(i < 4) {
  //   break; // 9 8 7 6 5 4
  // }

  if(i % 2) {
    // continue: 현재 반복을 종료하고 다음 반복으로 넘어감
    continue; // 9 7 5 3 1
  }
  console.log(i);
}

console.log("----------------------------------------------------------------");

// 2. For of 반복문
const fruits = ['Apple', 'Banana', 'Cherry'];
// for(let i=0; i < fruits.length; i++) {
//   console.log(fruits[i]); //Apple Banana Cherry
// }

for(const fruit of fruits) {
  console.log(fruit);
}
console.log("----------------------------------------------------------------");
const users = [
  {
    name:'A',
    age:85
  },
  {
    name:'B',
    age:22
  },
  {
    name:'C',
    age:34
  }
]

for(let i=0; i < users.length; i += 1) {
  console.log(users[i]); // {name: 'A', age: 85}, {name: 'B', age: 22}, {name: 'C', age: 34}
}
for(let i=0; i < users.length; i += 1) {
  console.log(users[i].name); // A, B, C
}

console.log("----------------------------------------------------------------");
for(const user of users) {
  console.log(user); // {name: 'A', age: 85}, {name: 'B', age: 22}, {name: 'C', age: 34}
}
console.log("----------------------------------------------------------------");
for(const user of users) {
  console.log(user.name); // A, B, C
}

console.log("----------------------------------------------------------------");

// 3. For in 반복문
// - 객체의 속성에 접근 할 경우 in 키워드를 사용해야 함.
// - 객체 데이터의 key는 순서를 보장 할 수 있음.
const user = {
  name: 'Herry',
  age: 10,
  isValid: true,
  email:'herrypoter@gmail.com'
}

for(const key in user) {
  console.log(`${key}: ${user[key]}`);
}