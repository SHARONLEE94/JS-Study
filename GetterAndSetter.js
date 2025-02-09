// Gettet, Setter

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  // getFullName() {
  //   return `${this.firstName} ${this.lastName}`
  // }
  get fullName() { // 속성처럼 사용이 가능
    console.log('Getting full name')
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ')
  }
}

const ronlee = new User('Ron', 'lee');
console.log(ronlee)
// console.log(ronlee.getFullName())
console.log(ronlee.fullName)

ronlee.firstName = 'Yack'
console.log(ronlee.fullName)

ronlee.fullName = 'Dae Han'
console.log(ronlee)
console.log(ronlee.fullName)