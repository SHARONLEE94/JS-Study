// Array(배열)
// 1. 생성자 함수 방식으로 배열 데이터 생성
// - new : 생성자 함수 = 자바스크립트 클래스
const fruits = new Array('apple', 'banana', 'cherry');
console.log(fruits); // ['apple', 'banana', 'cherry']

// 2. 리터럴 방식으로 배열 데이터 생성
// - 대괄호([ ])를 사용하여 리터럴 방식으로 데이터 생성 (대괄호 표기법)
//   *** 리러털 방식 : 기호를 통해서 데이터를 만드는 방식.
// - 대괄호 내부의 데이터들은 아이템 또는 요소(Element)
const fruits2 = ['apple', 'banana', 'cherry'];
console.log(fruits2); // ['apple', 'banana', 'cherry']
console.log(fruits2[0]); // apple , 배열 인덱싱 

// length 속성
// 배열의 길이
console.log(`fruits2.length: ${fruits2.length}`);


// Objcet(객체)
// 1. 생성자 함수 방식으로 객체 데이터 생성
// - 객체 데이터는 'key:value' 형태로 만들어 진다.
// - key(=속성, =property) : value(= 값)
const user = new Object();
user.name = 'happy';
user.age = 85;
console.log(user);//{name: 'happy', age: 85}

// 2. 함수 내부에서 this라는 키워드를 통해 속성의 값을 추가하여 데이터 생성
function User() {
  this.name = 'happy2';
  this.age = 85; 
}

const user2 = new User(); // 생성자 함수
console.log(user2); // User {name: 'happy2', age: 85}
console.log(user2.age); // 85

// 3. 객체 리터럴 방식
// - 많이 사용되는 방식
const user3 = {
  name:'happy3',
  age:83
}

console.log(user3); // {name: 'happy', age: 85}
console.log(user3.name); // 점 표기법
console.log(user3['name']); // 대괄호 표기법 - 변수로 속성을 인덱싱 하는 경우에 사용
  // 대괄호 표기법
  const key = 'age';
  console.log(user3[key]); // 83

// ※ 주의
// - 객체 데이터 내부에 들어 있는 각각 속성들의 Key는 고유하다.
// - Key는 순서라는 개념이 존재하지 않다. 
// - Key는 중복을 허용하지 않는다.