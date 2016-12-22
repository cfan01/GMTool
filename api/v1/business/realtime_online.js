//#!/usr/bin/env node
var Tools = require('../tools.js');
var _ = require('underscore');
var amqp = require('amqplib/callback_api');
var app = {};
var data = require('../../../viewModel/js/business.json');

/********************
request data:
1.遊戲主題(game subject)
2.VIP篩選(一般,白鑽,藍鑽,金鑽,紅鑽)

query items:
遊戲主題在00:00 ~ 23:45之間(每隔15分鐘)的同時在線人數

refer to: http://1fkia7.axshare.com/#g=1&p=4_4_4、即時在線

Please return array of 15 json elements such like the followings:
[{"sea_paradise":111,"gowin_car":222,"general_bio":333,"hunt_magic_tower":444,"dignity_in_troubled_times":555,
  "qiao_fortuna":666,"mayan_adventure":777,"fishing_master":888,"beach_volleyball":999,"grand_theft_auto_legends":1010,
  "galaxy_expedition":1212,"great_pirates":1313},
 {"sea_paradise":111,"gowin_car":222,"general_bio":333,"hunt_magic_tower":444,"dignity_in_troubled_times":555,
  "qiao_fortuna":666,"mayan_adventure":777,"fishing_master":888,"beach_volleyball":999,"grand_theft_auto_legends":1010,
  "galaxy_expedition":1212,"great_pirates":1313},
 {...},
 {...},
 ... ,
 {...} //共96個json
]
******************/
app.findRealTimeOnline = function(query, cb){
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
    cb(data.RealTimeOnline_Info); //For Test ONLY! MUST remove if modify
}

function generateUuid() {
  return Math.random().toString() +
         Math.random().toString() +
         Math.random().toString();
}

module.exports = app;
