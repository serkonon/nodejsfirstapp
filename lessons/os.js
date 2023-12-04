const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`Process ${worker.process.pid} was killed`);
        cluster.fork();
    })
} else {
    console.log(`Primary process ${process.pid} is running`);

    setInterval(() => {
        console.log(`Process ${process.pid} is still working`);
    }, 5000);
}