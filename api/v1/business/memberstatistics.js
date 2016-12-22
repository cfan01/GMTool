//#!/usr/bin/env node
var Tools = require('../tools.js');
var _ = require('underscore');
var amqp = require('amqplib/callback_api');
var app = {};
var data = require('../../../viewModel/js/business.json');

/********************
request data: date period (date begin , date end)
query items:
refer to: http://1fkia7.axshare.com/#g=1&p=4_4_1�B�|���έp
"�C���`�n�J����":"daily_totallogin_times",
"�C���`�n�J�H��":"daily_totallogin_people",
"�s�W���U�H��(DNU)":"dnu",
"�鬡�D�H��(DAU)":"dau",
"�g���D�H��(WAU)":"wau",
"�묡�D�H��(MAU)":"mau",
"���Ƶn�J�b����":"repeat_login_accounts",
"�@��|����":"normal_member_number",
"�@��|���n�J�H��":"normal_member_logins",
"���p�|����":"whitediamond_member_number",
"���p�|���n�J�H��":"whitediamond_login_number",
"���p�|����":"bluediamond_member_number",
"���p�|���n�J�H��":"bluediamond_login_number",
"���p�|����":"goldendiamond_member_number",
"���p�|���n�J�H��":"goldendiamond_login_number",
"���p�|����":"reddiamond_member_number",
"���p�|���n�J�H��":"reddiamond_login_number",
"�`�C���ɶ�(sec)":"total_play_sec",
"�֭p�����Ʀ��C���H��":"grand_total_norepeat_players",
"�̰��b�u(PCU)":"pcu",
"�����b�u(ACU)":"acu",
"�������":"number_of_transactions",
"����`G��":"transactions_total_Gcurrency",
"����`���G��":"transactions_total_pumping_Gcurrency",
"�ֿn����`G��":"accumulated_transactions_total_Gcurrency",
"�ֿn����`���G��":"accumulated_transactions_total_pumping_Gcurrency"

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
 {...} //�@15��json
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
