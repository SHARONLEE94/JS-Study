// 구조 분해 할당(Destructuring assignment)
// - 배열이나 객체의 값을 쉽게 추출하여 변수에 할당하는 간결한 문법
// - 코드의 가독성을 높이고, 필요한 데이터만 간편하게 사용
const arr = [1,2,3];

// 1. 일반적인 변수 할당
// - 각각 인뎅싱을 하여 변수에 할당당
// const a = arr[0]; 
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c); // 1 2 3

// 2. 구조 분해 할당을 사용한 변수 재할당
// ㄱ.
const [a, b, c] = arr;
console.log(arr); // [1, 2, 3]
// ㄴ.
let d = 0;
let e = 0;
let f = 0;
const arr2 = [4,5,6];
[d,e,f] = arr2;
console.log(arr2); // [4, 5, 6]
// ㄷ.
// - 사용하지 않을 변수는 쉼표로 구분하되 단순히 비워 놓으면 된다.
// - 즉, 순서에 맞춰서 구조 분해 할당을 해야 한다.
let bb = 0;
let cc = 0;
const arr3 = [1,2,3];
[, bb, cc] = arr3;
console.log(bb, cc);

// 3. 응용
 const arr4 = [1,2,3];
 const [aa, ...rest] = arr4;
 console.log(aa, rest); // 1, [2,3]

 // 4. 객체에서의 사용
 // - 객체는 객체 내부에 key 값으로 해당하는 데이터를 찾을 수 있다.
 const obj = {
  a1:111,
  b1:222,
  c1:333,
  z:5
 }
// ㄱ. 구조 분해 할당을 사용하지 않는 경우
// const a1 = obj.a1;
// const b1 = obj.b1;
// const c1 = obj.c1;
// console.log(a1, b1, c1);

// ㄴ. 구조 분해 할당을 사용하는 경우
const {a1, b1} = obj;
console.log(a1, b1); // 111 222

const {c1} = obj;
console.log(c1);

// ㄷ. 기본값 지정
// - 사용하려는 객체에 찾는 속성값이 없을 경우를 대비하여 기본값을 지정할 수 있다.
// - 실제 객체에 속성과 값이 존재한다면, 기본값이 아닌 속성에 있는 값이 사용이 된다.
const {x} = obj;
console.log(x); //undefined

const {y = 4} = obj;
console.log(y); // 4

const {z = 10} = obj;
console.log(z); // 5

// ㄹ. 속성의 새로운 변수명으로 대신하고 싶다면
const {a1:happy, xx: ten = 10} = obj;
console.log(happy, ten); // 111, 10

// ㅁ. 전개 연산자를 사용하여 객체 데이터 만들기
const obj2 = {
  a2:111,
  b2:222,
  c2:333,
  z1:5
 }
const {a2, ...rest2} = obj2;
console.log(a2, rest2); // 111, {b2: 222, c2: 333, z1: 5}