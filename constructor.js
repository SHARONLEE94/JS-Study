// instanceof 와 constructor

class A {
  constructor() {}
}

class B extends A {
  constructor() {
    super()
  }
}

class C extends B {
  constructor() {
    super()
  }
}

const a = new A()
const b = new B()
const c = new C()

console.log(a instanceof A)
console.log(a instanceof B)
console.log(a instanceof C)

console.log(b instanceof A)
console.log(b instanceof B)
console.log(b instanceof C)

console.log(c instanceof A)
console.log(c instanceof B)
console.log(c instanceof C)

console.log(c.constructor === A)
console.log(c.constructor === B)
console.log(c.constructor === C)

console.log(b.constructor === A)
console.log(b.constructor === B)
console.log(b.constructor === C)

console.log(a.constructor === A)
console.log(a.constructor === B)
console.log(a.constructor === C)

const fruits =  ['Apple', 'Banana']
// const fruits = new Array('Apple', 'Banana')
console.log(fruits.constructor === Array)
console.log(fruits instanceof Array)