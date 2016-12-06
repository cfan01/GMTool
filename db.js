//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = require('mongodb').MongoClient,
    //Server = require('mongodb').Server,
    dbServerMap = {};

exports.connectDB = function(host, port, dbName,cb){
        // Set up the connection to the local db
        //var mongoclient = new MongoClient(new Server(host,port), {native_parser: true});
        //dbServerMap[dbName] = mongoclient.db(dbName);

        // Connection URL. This is where your mongodb server is running.
        var url = 'mongodb://'+ host + ':'+ port + '/' + dbName;
        console.log("connectDB.....",url);
        // Use connect method to connect to the Server
        //MongoClient.connect("mongodb://localhost:27017/apidb", function (err, db) {
        //async.series({
        MongoClient.connect(url, function (err, db) {
          if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
          } else {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);
            // do some work here with the database.
            dbServerMap[dbName] = db;
            //CreateConnection(db,function());
            //Close connection
            //db.close();
            cb();
          }
        });
        //},function(err, results) {
          // results is now equal to: {one: 1, two: 2}
        //});
}

exports.getDB = function(dbName){
        var db = dbServerMap[dbName];
        //console.log(db);
        return db;
}
