// 화살표 함수(Array function)

// 1. 함수 형태
// - 화살표 함수는 항상 변수에 할당해서 사용해야 한다.
// - 화살표 함수는, 함수 선언이 아닌 함수 표현인다
// function sum() {}
// const sum = function() {}
// const sum = () => {} // 화살표 함수

function sum (a,b) { return a+b; }

// const sum2 = (a,b) => { return a+b}; // sum과 같은 함수. 간결하게 표현이 가능하다
const sum2 = (a,b) => a+b; // 위와 같은 표현

console.log(sum(1,2)); // 3
console.log(sum2(1,2)); // 3

// 2. 사용 패턴
const a = () => {}
const b = x => {} // const b = (x) => {}, 매개변수가 한 개인 경우 소괄호 생략이 가능하다.
const c = (x,y) => {} // 매개 변수가 두 개 이상이라면 소괄호 생략 불가능
const d = x => {return x*x}
const e = x => x*x;
const f = x => {
  console.log(x*x);
  return x*x; // 바디가 여러 줄인 경우 중괄호를 쓰고, return 키워드 생략 불가
}
const g = () => { return {a:1} }
// const g = () => {a:1} // 사용 불가 -> 데이터 표시와 중괄호 표시가 구분이 안되기 때문에
// 만약 return 키워드를 축약해서 사용하려면 아래와 같이 소괄호로 묶어주어야 한다.
const h = () => ({a:1})
const i = () => {return [1,2,3]}
const j = () => [1,2,3]
