// 1. 부정(Negation)
// - 사용된 연산자의 반대되는 값을 출력 된다
// - 부정연산자는 항상 boolean 데이터로 출력 된다
// - 부정연산자는 참과 거짓에 해당하는 모든 데이터에 붙여서 사용할 수 있으며,
//   출력값은 boolean 값이다.
console.log(!false); // true
console.log(!true); //false

console.log(!0); //true
console.log(!!0); //false

console.log("=========================================================================");

// 2. 비교(Comparison)
const a = 1;
const b = 3;

// - 동등/부등 연산자
console.log(a==b); // false
console.log(a!=b); // true

// - 일치/불일치치 연산자
console.log(a===b); // false
console.log(a!==b); // true

// - 크고/크거나같음/작음/작거나같음
console.log(a>b);// false
console.log(a>=b);// false
console.log(a<b);// true
console.log(a<=b);// true
