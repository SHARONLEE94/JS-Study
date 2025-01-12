// 선택적 체이닝(Optional Chanining)
// - 선택적 체이닝(?.)
// - 객체나 배열의 중첩된 속성에 접근할 때, 해당 경로의 중간 값이 null 또는 undefined일 경우
// 오류를 발생시키지 않고 undefined를 반환하는 안전한 방법.
// - 선택적 체이닝은 읽기 전용으로만 사용. 값을 설정하려고 하면 오류가 발생
// - null 또는 undefined 이외의 값(예: false, 0, 빈 문자열)은 선택적 체이닝에 영향을 주지 않음.

// 1.
// const user = {};
// console.log(user.name); // undefined
 
// 2.
// const user = null;
// console.log(user.name); // Uncaught TypeError: Cannot read properties of null

// 3. 선택적 체이닝 사용 
const user = null;
console.log(user?.name); // undefined

// 4. 응용
const userA = {
  name:'apple',
  age: 85,
  address: {
    country: 'Korea',
    city: 'Seoul'
  }
}

const userB = {
  name:'banana',
  age: 22
}

function getCity(user) {
  // return user.address?.city; ---------------- ㄱ. 
  return user.address?.city || '주소없음'; // --- ㄴ. 예외처리 가능
}

console.log(getCity(userA)); // Seoul
console.log(getCity(userB)); // undefined (ㄱ 결과), 주소없음(ㄴ 결과)