// 조건문
// 1. if 조건문
// - 패턴의 종류
// ㄱ. if가 참인 경우 사용될 코드 입력
const 조건 = true;
if(조건) {
  //  
}

// ㄴ. if가 거짓인 경우에도 사용할 코드가 존재하는 경우
if(조건) {
  //  
}else{
  //
}

// ㄷ. 조건이 여러개인 경우
const 조건1 = true;
const 조건2 = true;
const 조건3 = true;
if(조건1) {
  //  
}else if(조건2){
  //
}else if(조건3) {
  //
} else {
  //
}

// ㄴ. 예제
// case1.
// function isPositive(number) {
//   if(number > 0) {
//     return '양수'
//   }
//   // return undefined; // 함수는 실행되지 않으면 undefined를 반환하는 구조를 가지고 있다.
// }

// case2.
// function isPositive(number) {
//   if(number > 0) {
//     return '양수'
//   }else {
//     return '음수'
//   }
// }

// case3.
function isPositive(number) {
  if(number > 0) {
    return '양수';
  }else if(number < 0) {
    return '음수';
  } else{
    return '0';
  }
}
 
console.log(isPositive(1));  // 양수
console.log(isPositive(10)); // 양수
console.log(isPositive(-2)); // undefined -- case1. // 음수 -- case2.
console.log(isPositive(0));

console.log("====================================================================");

// 2. Switch 조건문
// - 구조
const 값1 = '';
const 값2 = '';
switch (조건) {
  case 값1:
    // 조건이 '값1'일 때 실행
    break
  case 값2:
    // 조건이 '값2'일 때 실행
    break  
  default:
    // 조건이 '값1'도 '값2'도 아닐 때 실행
}

// 응용
// function price(fruit) {
//   let p;
//   switch(fruit) {
//     case 'apple':
//       p = 1000;
//       break
//     case 'banana':
//       p = 1500;
//       break    
//     case 'cherry':
//       p = 2000;
//       break
//     default:
//       p = 0;
//   }
//   return p;
// }

// function price(fruit) { // 위 코드 최적화
//   switch(fruit) {
//     case 'apple':
//       return 1000; // return 키워드는 함수 자체를 종료 시킴
//     case 'banana':
//       return 1500;   
//     case 'cherry':
//       return 2000;
//     default:
//       return 0;
//   }
// }

// switch문은 항상 if 조건문으로 바꿀 수 있다.
// if조건문은 switch문으로 바꿀 수 없는 경우도 있다.
function price(fruit) {
  if(fruit === 'apple'){
    return 1000;
  }else if(fruit === 'banana') {
    return 1500;
  }else if(fruit === 'cherry') {
    return 2000;
  }else {
    return 0;
  }
}

console.log(price('apple'));
console.log(price('banana'));
console.log(price('cherry'));
console.log(price('milk'));