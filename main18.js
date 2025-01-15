// 즉시 실행 함수(IIFE, Immediately-Invoked function Expression)
// - 정의되자마자 즉시 호출되는 함수
// - 즉, 함수를 선언하자마자 즉시 실행시켜 한 번만 사용하고 이후에는 사용하지 않음
// - 주로 한 번만 실행되는 초기화 로직을 처리할 때 사용됨

// 1.
const a = 7;
// const double = () => {
//   console.log(a*2);
// }

// double();

(()=>{
  console.log(a*2);
}) ();

// 2. 형태
(() => {})(); // (F)()
(function () {})(); // (F)()
(function () {}()); // (F())
!function () {}(); // !F()
+function () {}(); // +F()

(() => {console.log(a*2)})(); // (F)()
(function () {console.log(a*2)})(); // (F)()
(function () {console.log(a*2)}()); // (F())
!function () {console.log(a*2)}(); // !F()
+function () {console.log(a*2)}(); // +F()

// 3. 매개변수가 있는 형태
((a,b) => {
  console.log(a);
  console.log(b);
})(1,2); // 두번째 소괄호의 데이터들은 즉시 실행 함수의 매개변수로 사용될 수 있다.

// ㄱ. 활용
// - 전역 데이터들의 이름을 간소화 시킬 수 있다.
// - 함수 내부에서는 난독화가 가능하다.
((a,b) => {
  console.log(a.innerWidth);
  console.log(b.body);
})(window, document); 