//#!/usr/bin/env node
var Tools = require('../tools.js');
var _ = require('underscore');
var amqp = require('amqplib/callback_api');
var app = {};
var data = require('../../../viewModel/js/business.json');

/********************
request data: date period (date begin , date end)

query items:
在date區間內的留存率

refer to: http://1fkia7.axshare.com/#g=1&p=4_4_7、流失數

Please return array of 31 json elements such like the followings:
[{"item":"new_registered","d1":111, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515,
  "d16":111, "d17":222, "d18":333, "d19":444, "d20":555, "d21":666, "d22":777, "d23":888, "d24":999, "d25":1010, "d26":1111, "d27":1212, "d28":1313, "d29":1414, "d30":1515},
 {"item":"1day_retention","d1":222, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515,
  "d16":111, "d17":222, "d18":333, "d19":444, "d20":555, "d21":666, "d22":777, "d23":888, "d24":999, "d25":1010, "d26":1111, "d27":1212, "d28":1313, "d29":1414, "d30":1515},
 {"item":"2day_retention","d1":333, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515,
  "d16":111, "d17":222, "d18":333, "d19":444, "d20":555, "d21":666, "d22":777, "d23":888, "d24":999, "d25":1010, "d26":1111, "d27":1212, "d28":1313, "d29":1414, "d30":1515},
 {...},
 {...},
 ... ,
 {...} //共31個json
]
******************/
app.findRegisteredNumberloss = function(query, cb){
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
    //cb({"errCode":"Success"}); //For Test ONLY! MUST remove if modify
    cb(data.RegisteredNumberloss_Info); //For Test ONLY! MUST remove if modify
}

app.findRegisteredNumberLossDetails = function(query, cb){
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
    //cb({"errCode":"Success"}); //For Test ONLY! MUST remove if modify
    cb(data.RegisteredNumberloss_Details); //For Test ONLY! MUST remove if modify
}

function generateUuid() {
  return Math.random().toString() +
         Math.random().toString() +
         Math.random().toString();
}

module.exports = app;
