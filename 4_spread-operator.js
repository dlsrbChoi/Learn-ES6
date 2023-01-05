// obj 객체를 newObj 객체에 복제
const obj = {
  a: 10,
  b: 20
};
const newObj = {...obj};
console.log(newObj); // {a: 10, b: 20}

// arr 배열을 newArr 배열에 복제
const arr = [1,2,3];
const newArr = [...arr];
console.log(newArr); // [1, 2, 3]