// 기존 객체 정의 방식
var a = {
  // 속성: 값
  language: 'javascript',
  coding: function() {
    console.log('Hello World');
  }
};

// 축약
const language = 'javascript';
const b = {
  // language: language,
  language
};
console.log(b); // {language: "javascript"}

// function 예약어 생략
const c = {
  coding() {
    console.log('Hello World');
  }
};
c.coding(); // Hello World