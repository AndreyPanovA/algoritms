let value = [];
function fib(n, stack = []) {
  if (stack[n] !== undefined) {
    return stack[n];
  }
  if (n === 0 || n === 1) {
    return n;
  }
  let result = fib(n - 1, stack) + fib(n - 2, stack);
  stack[n] = result;

  return result;
}

function Fib(n) {
  const arr = [0, 1];
  const t = new Promise((res, rej) => {
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    res(arr);
  });

  return arr;
  //   t.then((res) =>).catch((e) => console.log(e));
}

// console.log(Fib(100));
console.log(fib(20));
// 0 1 1 2 3 5 8 13

for (let i = 0; i < 40; i++) {
  //   value.push(Fib(i));
}
