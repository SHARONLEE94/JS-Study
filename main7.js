// 1. Nullish 병합(Nullish Coalescing)
const n = 0;

// OR 연산자를 사용한 경우
// - 거짓 데이터를 기준으로 값을 반환
const num1 = n || 7;
console.log(num1); // 7 -> 문제 발생, 만약 내가 0을 숫자 데이터로 사용하고 싶다면?

// Nullish 병합 연산자를 사용한 경우
// - Nullish 병합 연산자는 null이나 undefined만을 거짓 데이터로 판단
// - 그러므로 null, undefined 제외한 데이터 값을 반환
const num2 = n ?? 7;
console.log(num2); // 0

// 1-1. 응용
console.log(null ?? 1); // 1
console.log(undefined ?? 2); // 2
console.log(null ?? undefined); // undefined -> 모든 데이터가 Nullish데이터라면, 마지막 데이터가 출력
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2) // false
console.log(0 ?? 1 ?? 2) // 0


// 2. 삼항연산자(Ternary)
// 조건 ? 참 : 거짓;
// if-else 구문보다 간소화되기 때문에 많이 사용됨
const a = 1;
if(a < 2) {
  console.log('참!');
}else {
  console.log('거짓...');
}

const b = 5;
console.log((b < 2) ? '참!' : '거짓...');

// 2-1. 응용
function getAlert(message) {
  return message ? message : '메시지가 존재하지 않습니다';
}

console.log(getAlert('Hello')); // Hello
console.log(getAlert('')); // 메시지가 존재하지 않습니다