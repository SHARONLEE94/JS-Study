// 정적 메서드(Static Method)

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}` 
  }
  static isUser(user) { // 보조함수 // 구조 확인하는 용도
    if(user.firstName && user.lastName) {
      return true
    }
    return false
  }
}

const ronlee = new User('Ron', 'Lee')
const DaeHan = new User('Han', 'choi')
const BBiYack = new User('BBiYack')
const aron = {
  name: 'aa ron',
  age: 85
}

console.log(ronlee.getFullName())
console.log(DaeHan.getFullName())
// console.log(User.getFullName)
console.log(User.isUser(ronlee))
console.log(User.isUser(DaeHan))
console.log(User.isUser(BBiYack))
console.log(User.isUser(aron))