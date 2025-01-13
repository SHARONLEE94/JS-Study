// 반환 및 종료
// - 함수가 어떤 값을 반환한다 = 해당 함수를 호출한 곳(호출부)으로 값을 돌려준다.
// - return 뒤에 어떤 식(expression)이 오면, 그 식이 평가된 결과값을 함수의 호출부로 반환.
// - 자바스크립트에서는 return 키워드를 만나면 그 즉시 함수의 실행이 중단(종료)된다.
// - 자바스크립트 함수에서 return 구문을 사용하지 않으면, 해당 함수의 반환값은 **undefined**가 된된다

function hello() {
  return 'Hello~';
}

console.log(hello());

// 응용
function plus(num) {
  return num + 1;
}

console.log(plus(2)); // 3
console.log(plus(7)); // 8
console.log(plus()); // undefined + 1  = NaN

// -> 오류 해결
function plus2(num) {
  if(typeof num !== 'number') {
    console.log('숫자를 입력해주세요'); // 로그 남기기
    return 0;
  }
  return num + 1;
}

console.log(plus2()); // 0