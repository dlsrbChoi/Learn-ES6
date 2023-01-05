// 똑같은 변수를 재선언할 때 오류
let a = 10;
let a = 20; // error

// 값을 다시 할당했을 때 오류
const b = 10;
let b = 20; // error

// 객체로 선언하고 속성 값을 변경
const c = {
  num: 10,
  text: 'hi'
};
console.log(c.num); // 10

c.num = 20;
console.log(c.num); // 20

// 배열로 선언하고 배열 요소를 추가
const d = [];
console.log(d); // []

d.push(10);
console.log(d); // [10]