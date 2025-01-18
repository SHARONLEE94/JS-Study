// 프로토 타입(prototype)

const { last } = require("lodash");

// const fruits = ['Appple', 'Banana', 'Cherry'] // 리터럴 방식으로 생성한 배열 데이터
const fruits = new Array('Appple', 'Banana', 'Cherry'); // fruits => 생성자 함수에서 반환된 인스턴스

console.log(fruits); // ['Appple', 'Banana', 'Cherry']
console.log(fruits.length); // 3
console.log(fruits.includes('Banana')); // true
console.log(fruits.includes('Orange')); // false

Array.prototype.happy = function () {
  console.log(this)
}

console.log(fruits.happy());

// 프로토타입 사용 예제
// - 프로토 타입을 사용하는 이유: 반복적으로 호출되는 특정 객체의 메서드를 효율적으로 사용하기 위함함
// ㄱ.프로토타입을 사용하지 않은 경우
const happi = {
  firstName: 'Happi',
  lastName: 'Lee',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const reo = {
  firstName:'Reo',
  lastName:'Park'
}

console.log(happi.getFullName())
console.log(happi.getFullName.call(reo))

// ㄴ. 프로토타입을 사용한 경우
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}` 
}

const poporo = new User('Poro', 'Po');
const reo2 = new User('Reo', 'Park');
console.log(poporo.getFullName());
console.log(reo2.getFullName());