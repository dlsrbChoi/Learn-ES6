let a = () => {
  // ...
}

() => 10 + 20; // {} 필요 없음

() => {
  print();
  log();
  return 10 + 20;
}

num = 10;
const b = (num) => { return num * 10 };
const c = num => num * 10;
b(10); // 100
c(10); // 100