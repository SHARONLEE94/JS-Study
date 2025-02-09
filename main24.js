// ES6 Classes

// User 함수
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// 프로토 타입
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// 클래스 문법 => ES6문법
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const ronLee = new User('ron', 'lee')
const bbiYack = new User('bbi', 'yack')

console.log(ronLee)
console.log(bbiYack)