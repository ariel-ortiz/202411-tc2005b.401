function makePromise(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 == 0) {
        resolve(n);
      } else {
        reject(`I don't like uneven number: ${ n }`);
      }
    }, n);
  });
}

// const p = makePromise(1001);

// p.then(x => {
//   console.log('then:', x);
// })
// .catch(err => {
//   console.log('catch:', err);
// });

async function main() {
  try {
    let x;
    x = await makePromise(1000);
    console.log('x =', x);
    x = await makePromise(2000);
    console.log('x =', x);
  } catch (err) {
    console.log(err);
  }
}

console.log(main());
console.log('Fin de programa');
