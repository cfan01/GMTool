//#!/usr/bin/env node
var Tools = require('../tools.js');
var _ = require('underscore');
var amqp = require('amqplib/callback_api');
var app = {};
var data = require('../../../viewModel/js/business.json');

/********************
request data:
1.date period (date begin , date end)
2.aid or nickname
3.���VIP

refer to: http://1fkia7.axshare.com/#g=1&p=4_4_2�B���vvip�|���d��

"GameBarID":"gbid",
"�ʺ�":"nickname",
"���VIP":"then_vip",
"�ثeVIP":"current_vip",
"�e2�Ӥ�ֿn�x��":"prev2month_accumulated_gift",
"�e2�Ӥ�ֿn��`":"prev2month_accumulated_bet",
"�̫�@���x�Ȯɶ�":"lastgifttime",
"�̫�@���n�J�ɶ�":"lastlogintime"

Please return array of json elements such like the followings:
[{"gbid":111,
  "nickname":222,
  "then_vip":333,
  "current_vip":444,
  "prev2month_accumulated_gift":555,
  "prev2month_accumulated_bet":666,
  "lastgifttime":777,
  "lastlogintime":888},
 {...},
 {...},
 ... ,
 {...} //�@n��json (���n���N�On��json)
]
******************/
app.findHistoryVIPMember = function(query, cb){
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
    cb(data.History_VIP_Members_Info); //For Test ONLY! MUST remove if modify
}

function generateUuid() {
  return Math.random().toString() +
         Math.random().toString() +
         Math.random().toString();
}

module.exports = app;
