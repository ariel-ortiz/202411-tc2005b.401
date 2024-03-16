// "function" usa hoisting
console.log(inc(5));
console.log(inc(inc(5)));

function inc(x) {
  return x + 1;
}

// Sin hoisting.
const f = x => x + 1;

console.log(f(5));
console.log(f(f(5)));

const a = [4, 8, 15, 16, 23, 42];

console.log(a.map(inc));
console.log(a.map(x => x * 2));

setTimeout(() => {
  console.log("timeout 1");
}, 1000);
console.log("bye");
