//#!/usr/bin/env node
var Tools = require('../tools.js');
var _ = require('underscore');
var amqp = require('amqplib/callback_api');
var app = {};
var data = require('../../../viewModel/js/business.json');

/********************
request data: date period (date begin , date end)
query items:
refer to: http://1fkia7.axshare.com/#g=1&p=4_4_1穦参璸
"–ら羆祅Ω计":"daily_totallogin_times",
"–ら羆祅计":"daily_totallogin_people",
"穝糤爹计(DNU)":"dnu",
"ら臘计(DAU)":"dau",
"秅臘计(WAU)":"wau",
"る臘计(MAU)":"mau",
"狡祅眀腹计":"repeat_login_accounts",
"穦计":"normal_member_number",
"穦祅计":"normal_member_logins",
"フ苝穦计":"whitediamond_member_number",
"フ苝穦祅计":"whitediamond_login_number",
"屡苝穦计":"bluediamond_member_number",
"屡苝穦祅计":"bluediamond_login_number",
"苝穦计":"goldendiamond_member_number",
"苝穦祅计":"goldendiamond_login_number",
"苝穦计":"reddiamond_member_number",
"苝穦祅计":"reddiamond_login_number",
"羆笴栏丁(sec)":"total_play_sec",
"仓璸ぃ狡Τ笴栏计":"grand_total_norepeat_players",
"程蔼絬(PCU)":"pcu",
"キА絬(ACU)":"acu",
"ユ掸计":"number_of_transactions",
"ユ羆G刽":"transactions_total_Gcurrency",
"ユ羆┾G刽":"transactions_total_pumping_Gcurrency",
"仓縩ユ羆G刽":"accumulated_transactions_total_Gcurrency",
"仓縩ユ羆┾G刽":"accumulated_transactions_total_pumping_Gcurrency"

Please return array of 15 json elements such like the followings:
[{"item":"daily_totallogin_times","d1":111, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {"item":"daily_totallogin_people","d1":222, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {"item":"dnu","d1":333, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {"item":"dau","d1":444, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {"item":"wau","d1":555, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {"item":"mau","d1":666, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {"item":"repeat_login_accounts","d1":777, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {"item":"normal_member_number","d1":888, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {"item":"normal_member_logins","d1":999, "d2":222, "d3":333, "d4":444, "d5":555, "d6":666, "d7":777, "d8":888, "d9":999, "d10":1010, "d11":1111, "d12":1212, "d13":1313, "d14":1414, "d15":1515},
 {...},
 {...},
 ... ,
 {...} //15json
]
******************/
app.findBusinessStatistics = function(query, cb){
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
    cb(data.Member_Statistics_Info); //For Test ONLY! MUST remove if modify
}

function generateUuid() {
  return Math.random().toString() +
         Math.random().toString() +
         Math.random().toString();
}

module.exports = app;
