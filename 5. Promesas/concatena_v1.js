const fs = require('fs');

function main() {

  let resultado = '';

  fs.readFile('001.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('An error occurred:', err);
      return;
    }
    resultado += data;
    fs.readFile('002.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('An error occurred:', err);
        return;
      }
      resultado += data;
      fs.readFile('003.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('An error occurred:', err);
          return;
        }
        resultado += data;
        fs.writeFile('004.txt', resultado, 'utf8', (err) => {
          if (err) {
            console.error('An error occurred:', err);
            return;
          }
          console.log('Success!');
        });
      });
    });
  });
}

main();
