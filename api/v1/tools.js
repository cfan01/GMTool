var app = {};
var EventEmitter = require('events');

app.handler = new EventEmitter();

app.findQueueByGameId = function(gameid){
	if(gameid === 7) return "stage.maya";
	
	return "";
}

app.loadJSONfile = function(path){
	// console.log(path);
	var fs = require('fs');
	var readfile = fs.readFileSync(path);
	var doc = JSON.parse(readfile);
	return doc;
}

app.bsonSerialize = function(data){
	var bson = require('bson');
	var BSON = new bson.BSONPure.BSON();
	var Long = bson.BSONPure.Long;
	var bsonData = BSON.serialize(data, false, true, false);
	
	return bsonData;
}

app.sendDisconnectEvent = function(){
	// console.log(' # Tools sendDisconnectEvent')
	app.handler.emit('disconnect');
}

app.sendMsgEvent = function(msg){
	// console.log(' # Tools sendMsgEvent')
	var bson = Tools.bsonSerialize(data);

	// console.log(doc);
	client.sendForce(bson);

	var body = "null";
	client.closeConnectCB = function(i){
		console.log(" # closeConnectCB3 "+i);
		Tools.sendDisconnectEvent();
	}
	var count = 0;
	client.getMessageCB = function(response){
		// body = response;
		console.log(' # getMessageCB3');
		body = response;
		// console.log(body);
		// if(body.result !== 0){
		// 	// cb();
		// 	// process.exit(0);
		// }
		// // cb(body);
		res.send(body);		
	}
}

app.sendMsgToQueue = function(queueName, buffData, cb){
	var amqp = require('amqplib/callback_api');
	amqp.connect('amqp://'+mqHost, function(err, conn) {
		conn.createChannel(function(err, ch) {
			// var queueName = 'treasure';
			ch.assertQueue(queueName);
			ch.sendToQueue(queueName, buffData);
			console.log(" [x] Sent message to queue ["+queueName+"]");
			setTimeout(function() { conn.close(); cb()/*process.exit(0)*/ }, 500);
			// cb();
		});
	});
}

app.CONFIG = app.loadJSONfile('./viewModel/js/serverstation.json');

module.exports = app;