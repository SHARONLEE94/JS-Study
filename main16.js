// 매개변수 패턴(Paramerter pattern)
// - 패턴을 사용하면 함수 호출 시 인자의 개수, 인자의 구조(객체, 배열 등), 기본값 할당 등을 유연하게 처리할 수 있다

// 1. 기본값(default value)
// - 함수 매개변수에 기본값을 지정 할 수 있다.
// - 매개변수가 전달되지 않거나 undefined가 전달될 경우, 기본값이 사용.

function sum(a,b=1)  {
  return a + b;
}

console.log(sum(1,2));
console.log(sum(7)); // 8 // 만약 기본값이 정해지지 않았다면 NaN(=7 + undefined)이 반환된다.

// 2. 구조 분해 할당(Destructuring assignment)
// ㄱ. 객체 구조 분해(Object Destructuring)
// - 객체 형태의 인자를 받는 함수에서, 필요한 속성만 꺼내서 사용할 수 있도록 구조 분해 할당을 활용할 수 있다.
// - 매개변수 순서를 외우지 않아도 됨(순서 대신 속성 이름으로 구분)
// - 선택적 속성에 기본값도 줄 수 있음
// - 코드 가독성과 확장성에 유리
const user = {
  name: 'my name',
  age:85
}

function getName(user) {
  return user.name; 
}

function getAge({age}) {
  return age;

}

function getEmail({email = '이메일이 없습니다'}) {
  return email;
}

console.log(getName(user)); // my name
console.log(getAge(user));  // 85
console.log(getEmail(user)); // undefined(기본값이 없는 경우), 이메일이 없습니다(기본값이 있는 경우)

// ㄴ. 배열 구조 분해 (Array Destructuring)
// - 배열 형태로 전달된 인자에서도 구조 분해 할당을 사용해 특정 원소를 추출할 수 있습니다.
// - 인자를 배열 형태로 받고, 각 위치별로 변수를 직접 할당함
// - 여러 개의 값을 간단히 넘기고 해체할 때 유리
const fruits = ['apple', 'banana', 'cherry'];
const numbers = [1,2,3,4,5,6,7];

function getSecondItem(array){
  return array[1];
}

function getThirdItem([,,c]) {
  return c;
}

console.log(getSecondItem(fruits)); // banana
console.log(getThirdItem(fruits)); // cherry
console.log(getThirdItem(numbers)); // 3

// 3. 나머지 매개변수(Rest parameter)
// - 스프레드 문법(... 연산자)은 함수 호출 시 배열 같은 이터러블(Iterable) 객체를 개별 매개변수로 풀어주는 역할을 한다
// - 기존 arguments보다 가독성이 좋고, 화살표 함수에서도 사용 가능
//  *** arguments
//      - 함수로 전달된 모든 인자를 담고 있음.
//      - 유사 배열(Array-like) 객체.
//          -> 배열 메서드(map, forEach 등)를 직접 사용할 수는 없다.

function sum(...rest) {
  console.log(arguments);
  return rest.reduce(function (acc, cur) { // reduce메서드: 배열을 하나의 값으로 축소(누적)시킬 때 사용
    return acc + cur;
  }, 0);
}

console.log(sum(1,2)); // 3
console.log(sum(1,2,3,4)); // 10
console.log(sum(1,2,3,4,5,6,7,8,9,10)); // 55
