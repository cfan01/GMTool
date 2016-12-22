
const async = require('async');
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const Tools = require('./tools.js');

var app = {};

var host = Tools.CONFIG.mongodb;
console.log('host='+host);

app.findMemberLogGame = function(query, callback){
    var dbName = 'log';
    var collectionName = 'item';
    var dbConnection = null;
    async.series([
        function(cb){
            var url = `mongodb://${host}/${dbName}`;
            MongoClient.connect(url, function(err, db) {
                dbConnection = db;
                cb(err, true);
            });
        },
        function(cb){
            // var query = {};
            dbConnection.collection(collectionName).find(query).sort({"_v.time":-1}).toArray(function(err, docs) {
                if(docs){
                    cb(err,docs);
                }else{
                    cb(err,null);
                }
            });
        }
    ],
    function(err, results){
        if(err) console.log(err);
        dbConnection.close();
        console.log(results[1]);
        callback(results[1]);
    });
}

app.find = function(db, collection, query, sort, callback){
    var dbName = db;
    var collectionName = collection;
    var dbConnection = null;
    async.series([
        function(cb){
            var url = `mongodb://${host}/${dbName}`;
            MongoClient.connect(url, function(err, db) {
                dbConnection = db;
                cb(err, true);
            });
        },
        function(cb){
            // var query = {};
            dbConnection.collection(collectionName).find(query).sort(sort).toArray(function(err, docs) {
                if(docs){
                    cb(err,docs);
                }else{
                    cb(err,null);
                }
            });
        }
    ],
    function(err, results){
        if(err) console.log(err);
        dbConnection.close();
        console.log(results[1]);
        callback(results[1]);
    });
}

app.insert = function(db, collection, insert, callback){
    var dbName = db;
    var collectionName = collection;
    var dbConnection = null;
    async.series([
        function(cb){
            var url = `mongodb://${host}/${dbName}`;
            MongoClient.connect(url, function(err, db) {
                dbConnection = db;
                cb(err, true);
            });
        },
        function(cb){
            // var query = {};
            dbConnection.collection(collectionName).insert(insert, function(err, docs) {
                if(docs){
                    cb(err,docs);
                }else{
                    cb(err,null);
                }
            });
        }
    ],
    function(err, results){
        if(err) console.log(err);
        dbConnection.close();
        console.log(results[1]);
        callback(results[1]);
    });
}

app.update = function(query, callback){
    var dbName = 'log';
    var collectionName = 'item';
    var dbConnection = null;
    async.series([
        function(cb){
            var url = `mongodb://${host}/${dbName}`;
            MongoClient.connect(url, function(err, db) {
                dbConnection = db;
                cb(err, true);
            });
        },
        function(cb){
            // var query = {};
            dbConnection.collection(collectionName).find(query).sort({"_v.time":-1}).toArray(function(err, docs) {
                if(docs){
                    cb(err,docs);
                }else{
                    cb(err,null);
                }
            });
        }
    ],
    function(err, results){
        if(err) console.log(err);
        dbConnection.close();
        console.log(results[1]);
        callback(results[1]);
    });
}

app.delete = function(query, callback){
    var dbName = 'log';
    var collectionName = 'item';
    var dbConnection = null;
    async.series([
        function(cb){
            var url = `mongodb://${host}/${dbName}`;
            MongoClient.connect(url, function(err, db) {
                dbConnection = db;
                cb(err, true);
            });
        },
        function(cb){
            // var query = {};
            dbConnection.collection(collectionName).find(query).sort({"_v.time":-1}).toArray(function(err, docs) {
                if(docs){
                    cb(err,docs);
                }else{
                    cb(err,null);
                }
            });
        }
    ],
    function(err, results){
        if(err) console.log(err);
        dbConnection.close();
        console.log(results[1]);
        callback(results[1]);
    });
}

module.exports = app;
