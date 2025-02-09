// 상속 (inheritance)과 instanceof

// 운송수단
class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0
    this.acceleration = acceleration
  }
  accelerate() {
    this.speed += this.acceleration
  }
  decelerate() {
    if(this.speed <= 0) {
      console.log('정지!')
      return
    }
    this.speed -= this.acceleration
  }
}

// 자전거
class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
    super(acceleration)
    this.price = price
    this.wheel = 2
  }
}

const bicycle = new Bicycle(300, 2);
bicycle.accelerate()
console.log(bicycle)

const bicycle1 = new Bicycle(300);
bicycle1.accelerate()
bicycle1.accelerate()
bicycle1.accelerate()
console.log(bicycle1)

console.log(bicycle instanceof Bicycle)
console.log(bicycle instanceof Vehicle)

// 자동차
class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration)
    this.license = license
    this.wheel = 4
  }
  // 오버라이딩(Overriding)
  accelerate() {
    if(!this.license) {
      console.error('무면허!')
      return
    }
    this.speed += this.acceleration
    console.log('가속!', this.speed)
  }
}

const carA = new Car(true, 7000, 10);
const carB = new Car(false, 4000, 6);
carA.accelerate()
carA.accelerate()
console.log("carA >>", carA)
carB.accelerate()
console.log('carB >>' , carB)

console.log(carA instanceof Car)
console.log(carA instanceof Bicycle)
console.log(carA instanceof Vehicle)

// 보트
class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration)
    this.price = price
    this.moter = 1
  }
}

const boat = new Boat(10000, 5)
boat.accelerate()
boat.accelerate()
boat.accelerate()
boat.accelerate()
console.log(boat)

console.log(boat instanceof Car)
console.log(boat instanceof Bicycle)
console.log(boat instanceof Vehicle)