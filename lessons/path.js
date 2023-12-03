const path = require('path');

// console.log('Склеить участки пути:', path.join('first', 'second', 'third'));
// console.log('__dirname', __dirname);
// console.log('2 уровня вверх', path.join(__dirname, '..', '..'));
// console.log('__filename', __filename);
// console.log('resolve', path.resolve('first', 'second', 'third')); //иногда ведет себя непредсказуемо, лучше не использовать

// const pth = path.join(__dirname, 'first', 'second.txt');
// console.log(path.parse(pth));

const siteURL = 'http://localhost:8080/users$id=5123';
const url = new URL(siteURL);
console.log(url);


