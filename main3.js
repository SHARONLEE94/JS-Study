// 1. 형 변환(Type Conversion)
// '===' 일치 연산자
// '==' 동등 연산자
// 두 데이터를 비교할 시 형 변환이 일어날 수 있기 때문에 일치 연산자를 사용해야 한다.

const a = 1; // Number
const b = '1'; // String

console.log(a === b); // false
console.log(a == b); // true

const c = 0; // Number
const d = false; // Boolean

console.log(c === d); // false
console.log(c == d); // true

const e = 1; // Number
const f = true; // Boolean

console.log(e === f); // false
console.log(e == f); // true

console.log("=========================================================================");

// 2. 참과 거짓(Truthy & Falsy)
// - boolean 값에만 국한되지 않는다
// - 조건문을 통과하는 데이터를 참(Truthy)이라고 부른다.
// - 일반적인 데이터는 Truthy
// - Falsy 해당하는 값 : false, 0( -0), null, undefined, NaN, '', 0n (7가지)

if(true) { // '0'
  console.log('참!');
}

if(false) { // 0
  console.log('거짓!');
}

const fruits = ['Apple', 'Banana'];
// const fruits = [];

if(fruits.length) { // 배열에 들어 있는 아이템의 갯수를 나타냄
  console.log('아이템 들어있음!'); // fruits = ['Apple', 'Banana'];
}else {
  console.log('없음!') // fruits = [];
}

console.log("=========================================================================");

// 3. 데이터 타입 확인
// - 데이터 타입을 확인하기 위해서 typeof 키워드 사용.
console.log(typeof 'Hello'); // string
console.log(typeof 'Hello' === 'string'); // true
console.log(typeof 123 === 'number'); // true
console.log(typeof false === 'boolean'); // true
console.log(typeof undefined === 'undefined'); // true

console.log(typeof function () {}); //function
console.log(typeof function () {} === 'function'); //true

// - null, [], {}의 typeof 결과는 object.
// - 위 세개는 typeof 키워드만으로 구분이 힘들다.
console.log(typeof null === 'null'); // false
console.log(typeof null); // object
console.log(typeof null === 'object'); // true
console.log(typeof []); // object
console.log(typeof [] === 'object'); // true
console.log(typeof {}); // object
console.log(typeof {} === 'object'); // true

// - constructor를 통해서 배열과 객체 데이터를 구분할 수 있다.
console.log([].constructor); //ƒ Array() { [native code] }
console.log([].constructor === Array); //true
console.log({}.constructor); //ƒ Object() { [native code] }
console.log({}.constructor === Object); //true

// - null 데이터를 구분하려면
// - Object.prototype.toString.call(확인하고 싶은 데이터 타입)
// - 위 값으로는 모든 데이터 타입을 확인 할 수 있다.
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(null).slice(8,-1) === 'Null');

let datas = [{}, [], null,'Hello', 123,false, undefined, function () {}];
for(let i=0; i < datas.length; i++) {
  let data = datas[i];
  checkType(data);
}

function checkType(data) {
  return console.log(Object.prototype.toString.call(data).slice(8,-1));
}

