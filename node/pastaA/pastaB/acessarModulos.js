const moduloA = require('../../moduloA');
const moduloC = require('./pastaC');
const http = require('http');

console.log({ moduloA: moduloA.ola, moduloC: moduloC.ola });

// httpx
// 	.createServer((req, res) => {
// 		res.write('Ola mundo');
// 		res.end();
// 	})
// 	.listen(8080);
