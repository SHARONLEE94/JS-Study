// 함수(function)

// 1. 함수 선언문(Declaration)
// function hello() {}
// hello();

// 2. 함수 표현식(Expression)
// - 변수에 할당 연산자를 통해 함수가 들어가짐
// const hello2 = function () {}
// hello2();

// 3. 호이스팅(Hoisting)
// - 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// - 함수 선언문으로 정의된 함수는 코드를 작성한 위치보다 위에서 호출해도 정상적으로 동작
// ㄱ. 함수 선언문
// - 선언문으로 만들어진 함수는 호이스팅 됨
hello(); 

function hello() {
  console.log('hello~');
}

hello();

// ㄴ. 함수 표현식
// - 함수 표현식은 정의되기 전에 호출하면 에러가 발생
// - let이나 const를 사용하면 변수가 실제로 초기화되기 전까지는 참조할 수 없다.

// hello2(); // 오류 발생 >> Uncaught ReferenceError: Cannot access 'hello2' before initialization

const hello2 = function () {
  console.log('hello~~');
}

hello2();


