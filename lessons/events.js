const Emitter = require('events');

const emitter = new Emitter();

const callback = (data, second, third) => {
    console.log(`Вы прислали сообщение ${data}`);
    console.log(`Второй аргумент ${second}`);
}

//emmiter.once ... - чтобы событие было 1 раз
emitter.on('message', callback); //на одно событие можно несколько callback-ов

const MESSAGE = process.env.message || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123);
} else {
    emitter.emit('message', 'Вы не указали сообщение');
}

emitter.emit('message');
emitter.emit('message');
emitter.emit('message');

emitter.removeListener('message', callback); //Удалять не обязательно
emitter.removeAllListeners();                //просто для примера