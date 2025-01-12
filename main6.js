// 1. 논리(Locical)

const a = true;
const b = false;

// - AND 연산자
if(a && b) {
console.log('모두가 참!');
}

// - OR 연산자
if(a || b) {
  console.log('하나 이상이 참!');
}

// ※ 주의 사항
// - 비교 연산자를 기준으로 좌우에 있는 피연산자가 반환이 되는 경우가 있다.
// - AND 연산자는, 코드의 왼쪽부터 가장 먼저 만나는 거짓 데이터를 반환
// - AND 연산자를 사용시 거짓 데이터 주의
console.log(true && false); // false
console.log(1 && 0); // 0(거짓에 해당하는 데이터)
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && 2); // 0
console.log(0 && 1 && 2); // 0
console.log('A' && 'B' && ''); // ''
console.log('A' && 'B' && 'C'); // C -> 만약 모든 값이 참인 경우는 마지막 데이터를를 반환
// - OR 연산자는, 가장 먼저 만나는 참 데이터를 반환
console.log(false || true); // true
console.log(0 || 1); // 1
console.log(false || 0 || {}); // {}
console.log(false || {} || 0 ); // {}
console.log(function () {} || undefined || 0 ); // function () {}
console.log(false || 0 || NaN) // NaN -> 만약 모든 값이 거짓짓인 경우는 마지막 데이터를 반환

// *** 비교연산자를 사용한 값이 ture/false로만 해석하지 말고
// 어떤 연산자를 사용함으로 인해 어떤 데이터가 반환됐는지까지 정확하게 알고 가야한다.