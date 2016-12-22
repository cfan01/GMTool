//#!/usr/bin/env node
var Tools = require('../tools.js');
var _ = require('underscore');
var amqp = require('amqplib/callback_api');
var app = {};
var data = require('../../../viewModel/js/business.json');

/********************
request data: date period (date begin , date end)
query items:
refer to: http://1fkia7.axshare.com/#g=1&p=4_4_3纗参璸
"仓縩禣计":"accumulated_pay_numbers",
"爹禣计":"registered_pay_numbers",
"ら禣计":"daily_pay_numbers",
"秅禣计":"weekly_pay_numbers",
"る禣计":"monthly_pay_numbers",
"羆纗肂NT$":"total_giftamounts",
"GooglePlay纗":"googleplay_gift",
"筿獺肂禣":"telecom_smallpay",
"硄隔翴":"accesscard",
"IOS纗":"ios_gift",
"ARPU":"arpu",
"ARPPU":"arppu"

Please return array of 15 json elements such like the followings:
[{"accumulated_pay_numbers":111,
  "registered_pay_numbers":222,
  "daily_pay_numbers":333,
  "weekly_pay_numbers":444,
  "monthly_pay_numbers":555,
  "total_giftamounts":666,
  "googleplay_gift":777,
  "telecom_smallpay":888,
  "accesscard":999,
  "ios_gift":10101,
  "arpu":121212,
  "arppu":131313},
 {...},
 {...},
 ... ,
 {...} //15json
]
******************/
app.findGiftStatistics = function(query, cb){
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
    cb(data.Gift_Statistics_Info); //For Test ONLY! MUST remove if modify
}

function generateUuid() {
  return Math.random().toString() +
         Math.random().toString() +
         Math.random().toString();
}

module.exports = app;
