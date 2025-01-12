// 전개 연산자(Spread Operator)
// - 배열, 객체, 문자열 등과 같은 이터러블(iterable) 데이터를 개별 요소로 분해
// - 객체의 속성을 쉽게 복사하거나 병합하는 데 사용
// - 세 개의 점(...)으로 표현
const a = [1,2,3];
const b = [4,5,6];

// 1. 배열 복사
console.log(...a) // 1 2 3

// 2. 배열 병합
// ㄱ. concat 사용
const c = a.concat(...b);
console.log(c); //[1, 2, 3, 4, 5, 6]

// ㄴ. 전개 연산자 사용
d = [...a, ...b];
console.log(d); // [1, 2, 3, 4, 5, 6]

// 3. 객체 병합
const aa = {x: 1, y: 2};
const bb = {y: 3, z: 4};
// ㄱ. Object.assign()사용
const cc = Object.assign({}, aa, bb);
console.log(cc);// {x: 1, y: 3, z: 4}

// ㄴ. 전개 연산자 사용
const dd = {...aa, ...bb};
console.log(dd); // {x: 1, y: 3, z: 4}

// 4. 응용
function fn(x, y, z) {
  console.log(x, y, z);
}

fn(1,2,3);

// ㄱ. 전개 연산자를 사용하지 않은 경우
const aaa = [4,5,6];
fn(aaa[0], aaa[1], aaa[2]); // 4 5 6
// ㄴ. 전개 연산자를 사용하는 경우
fn(...aaa); // 4 5 6
