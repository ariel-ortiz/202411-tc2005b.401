const fsPromises = require('fs/promises');

function main() {
  let resultado = '';
  fsPromises.readFile('001.txt', 'utf-8')
  .then(data => {
    resultado += data;
    return fsPromises.readFile('002.txt', 'utf-8');
  })
  .then(data => {
    resultado += data;
    return fsPromises.readFile('003.txt', 'utf-8');
  })
  .then(data => {
    resultado += data;
    return fsPromises.writeFile('004.txt', resultado, 'utf-8');
  })
  .then(() => {
    console.log('Success!');
  })
  .catch(err => {
    console.error('An error occurred:', err);
  });
  console.log('Fin de main');
}

main()
