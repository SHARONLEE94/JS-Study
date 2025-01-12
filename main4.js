// 1. 산술(Artimetic)
// - 더하기(+), 빼기(-), 곱하기(*), 나누기(/), 나머지(%) ->연산자
// - 데이터 -> 피연산자

console.log(1+2);//3
console.log(5-7);//-2
console.log(3*4);//12
console.log(10/2);//5
console.log(7%5);//2

// 나머지 연산자 응용
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3)); //false
console.log(isEven(12)); //true

console.log("=========================================================================");

// 2. 할당(Assignment)
// - 더하기(+), 빼기(-), 곱하기(*), 나누기(/), 나머지(%) 모두 활용가능
let a = 3; // 재할당을 위해서는 const a = 3이이 아닌 let을 사용해야 한다.
a += 2; // a = a + 2;
console.log(a);

console.log("=========================================================================");

// 3. 증감(Increment & Decrement)
// - 직관적인 연산자 확인을 위해서는 할당 연산자를 사용하면 됨.
let b=3;
let c=3;
// ++ 증가 연산자
console.log(b++); // 3
console.log(b); // 4
console.log(++c); // 4
console.log(c); // 4
// -- 감소 연산자
b=3;
c=3;
console.log(b--); // 3
console.log(b); // 2
console.log(--c); // 2
console.log(c); // 2