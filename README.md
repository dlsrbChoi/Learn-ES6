# ES6 입문
## 주요문법
- const & let : 새로운 변수 선언 방식
- Arrow Function : 함수를 더 편하게 정의하는 방법
- Enhanced Object Literal : 객체를 더 편하게 정의하는 방법
- Spread Operator : 인자를 편하게 넘기는 방법
- Template Literal : 문자열을 편하게 정의하는 방법
- Destructuring : 객체, 인자를 편하게 정의하고 넘기는 방법

## const & let
- ES6에서 사용하는 변수 선언 방식
- let : 한번 선언하면 다시 선언할 수 없다.
- const : 한번 할당한 값을 변경할 수 없다. 
  - 단, 객체 또는 배열로 선언했을 때는 객체의 속성과 배열의 요소를 변경할 수 있다.
### 블록 유효범위
- const 와 let의 변수 유효 범위를 블록{}으로 제한

## Arrow Function
1. 단순한 자바스크립트 표현식
2. 인자를 1개만 선언하는 경우 인자를 받을 때 사용하는 소괄호() 를 생략할 수 있다.

## Enhanced Object Literal
- 객체 정의 방식을 개선한 문법
- 객체를 정의할 때 속성과 값이 같으면 축약이 가능
- 속성에 함수를 정의할 때 function 예약어 생략 가능

## Spread Operator
- 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용

## Template Literal
- 백틱(`) 기호를 사용하여 정의
- 문자열 중간에 ${} d이용하여 변수의 값을 대입할 수 있고, 간단한 연산도 할 수 있다.

## Destructuring
- 구조 분해 문법

## Import & Export
- 모듈화 기능