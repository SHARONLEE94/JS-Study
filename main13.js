// 1. while 반복문
// - 조건이 참인 경우에 계속 반복
// - 즉, 조건이 거짓인 경우가 반드시 존재해야 한다.
// - 조건이 거짓인 경우가 없으면 무한루프 발생
// - for 반복문은 배열, 객체 데이터를 다루는 경우에 특화가 되어 있다.
// - 구조
let int = 0;
while(int < 4) {
  console.log(int); // 0, 1, 2, 3
  int += 1;
}

// 2. Do While 반복문
// - 조건이 거짓이라도 최조 한번은 실행
let n = 0;
// while(n) {
//   console.log(n); // 0은 false니까 어떤 값값도 반환하지 않음
// }
console.log('--------------------');
do {
  console.log(n);
  n += 1;
} while (n < 4)