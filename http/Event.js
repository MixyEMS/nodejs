var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

life.setMaxListeners(5);

function callyou(){
	console.log("call you..1");
}

life.on('callme',callyou);
life.on('callme',callyou);
life.on('callme',callyou);

life.removeListener('callme',callyou);
life.removeAllListeners('callme');
life.emit('callme');
console.log(life.listeners('callme').length);