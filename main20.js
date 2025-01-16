// 재귀(Recursive)
// - 하나의 함수 내에서 자기 자신을 다시 호출
// - 주의, 무한 루프가 발생할 수 있음. 그러므로 호출에 제한을 두는 로직을 추가해줘야 함

// 1. 개념
let i = 0;
const a = () => {
  console.log('A');
  i += 1;
  if(i < 4){
    a();   
  }
}
a();

// 2. 응용
const userA = { name:'A', parent:null}
const userB = { name:'B', parent:userA}
const userC = { name:'C', parent:userB}
const userD = { name:'D', parent:userC}

const getRootUser = user => {
  if(user.parent) {
    return getRootUser(user.parent); // 무한루프 방지 로직
  }
  return user;
}

console.log(getRootUser(userD)); // {name: 'A', parent: null}