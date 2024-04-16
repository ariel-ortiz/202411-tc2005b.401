const fsPromises = require('fs/promises');

async function main() {
  let resultado = '';
  try {
    const fileNames = ['001.txt', '002.txt', '003.txt', '001.txt'];
    for (const fileName of fileNames) {
      resultado += await fsPromises.readFile(fileName, 'utf-8');
    }
    await fsPromises.writeFile('004.txt', resultado, 'utf-8');
    console.log('Success!');
    return 42;
  } catch (err) {
    console.log(err);
    throw 7;
  }
}

// (async () => {
//   try {
//     let z = await main();
//     console.log('z =', z);
//   } catch (err) {
//     console.log(err);
//   }
// })();

main()
.then(z => {
  console.log('z =', z);
}).catch(err => {
  console.log(err);
});
