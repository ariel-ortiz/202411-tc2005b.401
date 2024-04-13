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

const p = makePromise(1001);

p.then(x => {
  console.log('then:', x);
})
.catch(err => {
  console.log('catch:', err);
});
