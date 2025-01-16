// this
// - 일반 함수의 this는 호출 위치에서 정의 => 특정 객체 데이터가 가지고 있는 메서드를 다른 객체 데이터가 빌려와 사용이 가능하다 
//    -> 렉시컬이란, 함수가 동작할 수 있는 유효한 범위를 의미
// - 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의

const { first } = require("lodash");

// 1. 일반함수
const user = {
  firstName: 'Ronlee',
  lastName:'Da',
  age:85,
  getFullName:function() {
    return `${this.firstName} ${this.lastName}`;
  }
}
console.log(user.getFullName()); // Ronlee Da

// 2. 화살표 함수
// - 잘못 사용의 예예
const user2 = {
  firstName: 'Ronlee2',
  lastName:'Da2',
  age:85,
  getFullName:() => {
    return `${this.firstName} ${this.lastName}`;
  }
}
console.log(user2.getFullName()); // undefined undefined

// - 옳은 사용 예
function user3() {

  this.firstName = 'Ronlee3'
  this.lastName = 'Da3'

  return { // 속성 + 메서드 => 멤버버
    firstName: 'Ronlee2',
    lastName:'Da2',
    age:85,
    getFullName:() => {
      return `${this.firstName} ${this.lastName}`;
    },
    getFullName2 () { // 축약형태 가능 ( " : funcrion " 가 생략됨)
      return `${this.firstName} ${this.lastName}`;
    }
  }
}
const u = user3();
console.log(u.getFullName()); // Ronlee3 Da3
console.log(u.getFullName2()); // Ronlee2 Da2

// - 특정 객체에서 다른 객체가 가지고 있는 메서드를 빌려 사용할 수 있다.
// --> call 메서드 사용
const lewis = {
  firstName: 'Lewis',
  lastName: 'Yang'
}

console.log(u.getFullName2.call(lewis)); // 일반함수의 this는 호출 위치에서 정의되기 때문에 다른 객체에 붙여서 사용하는 것이 가능하다

// - 특정한 함수 내부에서 this라는 키워드를 반복적으로 사용할 때, 
// 함수 내부에 또 다른 함수가 들어 있는 구조라면 화살표 함수를 사용하는 것이 좋다
const timer = {
  title: 'TIMER!',
  timeout() {
    console.log(this.title);
    setTimeout(() => {
      console.log(this.title);
    }, 1000);
  }
}
timer.timeout();
