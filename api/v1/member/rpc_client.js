//#!/usr/bin/env node
var Tools = require('./tools.js');
var _ = require('underscore');
var amqp = require('amqplib/callback_api');
var app = {}

app.gmCommandMsg = function(data, cb){
  amqp.connect('amqp://'+Tools.CONFIG.rabbitmq, function(err, conn) {
    conn.createChannel(function(err, ch) {
      var q = Tools.findQueueByGameId(data.game) || "stage.maya";
      var packet = _.clone(data);
      packet["type"] = "gm.command.msg";

      ch.assertQueue(q, {durable: true});
      var bson = Tools.bsonSerialize(packet);
      ch.sendToQueue(q, bson);
      console.log(packet);
    });
    setTimeout(function() { conn.close(); cb()/*process.exit(0)*/ }, 500);
  });
}

app.queryAccountBasicData = function(aid, cb){
  amqp.connect('amqp://'+Tools.CONFIG.rabbitmq, function(err, conn) {
    conn.createChannel(function(err, ch) {
      ch.assertQueue('', {exclusive: true}, function(err, q) {
        var corr = generateUuid();
        // var num = parseInt(args[0]);

        // console.log(' [x] Requesting fib(%d)', num);

        ch.consume(q.queue, function(msg) {
        	console.log(msg);
          if (msg.properties.correlationId == corr) {
            const bson = require('bson');
            var BSON = new bson.BSONPure.BSON();
            var doc = BSON.deserialize(msg.content)
            console.log(doc);
            // console.log(' [.] Got %s', msg.content.toString());
            setTimeout(function() { conn.close(); cb(doc)/*process.exit(0)*/ }, 500);
          }
        }, {noAck: true});

        var packet = {
          type: "account.profile.req",
          aid: aid
        }
        var data = Tools.bsonSerialize(packet);

        ch.sendToQueue('account',
          data,
          { correlationId: corr, replyTo: q.queue });
      });
    });
  });
}

app.rpcCall = function(packet, queue, cb){
	console.log('rpcCall');
  amqp.connect('amqp://'+Tools.CONFIG.rabbitmq, function(err, conn) {
    conn.createChannel(function(err, ch) {
      ch.assertQueue('', {exclusive: true}, function(err, q) {
        var corr = generateUuid();
        // var num = parseInt(args[0]);

        // console.log(' [x] Requesting fib(%d)', num);
        ch.consume(q.queue, function(msg) {
        	console.log(msg);
          if (msg.properties.correlationId == corr) {
            const bson = require('bson');
            var BSON = new bson.BSONPure.BSON();
            var doc = BSON.deserialize(msg.content)
            console.log(doc);
            // console.log(' [.] Got %s', msg.content.toString());
            setTimeout(function() { conn.close(); cb(doc)/*process.exit(0)*/ }, 500);
          }
        }, {noAck: true});

        var data = Tools.bsonSerialize(packet);

        ch.sendToQueue(queue,
          data,
          { correlationId: corr, replyTo: q.queue });
        console.log(" ["+JSON.stringify(packet)+"] has been sent");
      });
    });
  });
}

//app.findBusinessStatistics = function(query, callback){
//    var dbName = 'log';
//    var collectionName = 'item';
//    var dbConnection = null;
//    async.series([
//        function(cb){
//            var url = `mongodb://${host}/${dbName}`;
//            MongoClient.connect(url, function(err, db) {
//                dbConnection = db;
//                cb(err, true);
//            });
//        },
//        function(cb){
//            // var query = {};
//            dbConnection.collection(collectionName).find(query).sort({"_v.time":-1}).toArray(function(err, docs) {
//                if(docs){
//                    cb(err,docs);
//                }else{
//                    cb(err,null);
//                }
//            });
//        }
//    ],
//    function(err, results){
//        if(err) console.log(err);
//        dbConnection.close();
//        console.log(results[1]);
//        callback(results[1]);
//    });
//
//}

//app.findBusinessStatistics = function(aid, cb){
//  amqp.connect('amqp://'+Tools.CONFIG.rabbitmq, function(err, conn) {
//    conn.createChannel(function(err, ch) {
//      ch.assertQueue('', {exclusive: true}, function(err, q) {
//        var corr = generateUuid();
//        // var num = parseInt(args[0]);
//
//        // console.log(' [x] Requesting fib(%d)', num);
//
//        ch.consume(q.queue, function(msg) {
//        	console.log(msg);
//          if (msg.properties.correlationId == corr) {
//            const bson = require('bson');
//            var BSON = new bson.BSONPure.BSON();
//            var doc = BSON.deserialize(msg.content)
//            console.log(doc);
//            // console.log(' [.] Got %s', msg.content.toString());
//            setTimeout(function() { conn.close(); cb(doc)/*process.exit(0)*/ }, 500);
//          }
//        }, {noAck: true});
//
//        var packet = {
//          type: "business.profile.req",
//          aid: aid
//        }
//        var data = Tools.bsonSerialize(packet);
//
//        ch.sendToQueue('account',
//          data,
//          { correlationId: corr, replyTo: q.queue });
//      });
//    });
//  });
//}

function generateUuid() {
  return Math.random().toString() +
         Math.random().toString() +
         Math.random().toString();
}

module.exports = app;
