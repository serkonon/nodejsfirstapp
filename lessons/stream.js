// Чтобы иметь возможность читать писать (файл, поток, ) по кусочкам (по умолч.64к)
// Типы:
// Readeble - чтение
// Writeble - запись
// Duplex - чтение + запись
// Transform - как Duplex, но может изменить данные по мере чтения

const fs = require('fs');
const path = require('path');

const stream = fs.createReadStream(path.resolve(__dirname, 'test1.txt'))

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('open', () => { console.log('Начали читать') })
stream.on('end', () => { console.log('Закончили читать') })
stream.on('error', (e) => { console.log(e.message) })