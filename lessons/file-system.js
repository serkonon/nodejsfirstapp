const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true});

// console.log('START');

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
    
//     console.log('Папка создана');
// });

// console.log('STOP');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//       throw err;
//     }
    
//     console.log('Папка удалена');
// });

// fs.writeFile(path.resolve(__dirname, 'info.txt'), 'Hello, World!', (err) => {
//     if (err) {
//       throw err;
//     }
    
//     console.log('Файл создан');
// });

// !!! Функции ассинхронны, чтобы точно знать, что сначала файл создастся, а потом в него
// !!! добавится, нужно вложить одну функцию в другую

// fs.appendFile(path.resolve(__dirname, 'info.txt'), 'Hello, World!', (err) => {
//     if (err) {
//       throw err;
//     }
    
//     console.log('В файл добавлено');
// });

const writeFileAsync = async (path, data) => {
    return new Promise(
        (resolve, reject) => fs.writeFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve();
        })
    )
}

const appendFileAsync = async (path, data) => {
    return new Promise(
        (resolve, reject) => fs.appendFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve();
        })
    )
}

const readfileAsync = async (path) => {
    return new Promise(
        (resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return reject(err.message)
            }
            resolve(data);
        })
    )

}

const removeFileAsync = async (path) => {
    return new Promise(
        (resolve, reject) => fs.rm(path, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve();
        })
    )
}

// const fileName = path.resolve(__dirname, 'test.txt');
// writeFileAsync(fileName, 'data')
//     .then(() => appendFileAsync(fileName, '123'))
//     .then(() => appendFileAsync(fileName, '456'))
//     .then(() => appendFileAsync(fileName, '789'))
//     .then(() => readfileAsync(fileName))
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message))

// removeFileAsync(fileName)
//     .then(() => console.log('File was removed'))

const fileName1 = path.resolve(__dirname, 'test.txt');
const fileName2 = path.resolve(__dirname, 'count.txt');

const text = process.env.TEXT || '';

writeFileAsync(fileName1, text)
    .then(() => readfileAsync(fileName1))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(fileName2, `Кол-во слов ${count}`))
    .then(() => removeFileAsync(fileName1))

// "start": "cross-env TEXT=\"12 34 Sergey Kononov\" node ./lessons/file-system.js"