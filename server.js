var port = process.env.PORT || 3000;
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var express =   require("express");
var app     =   express();
var async   = require('async');
var cors = require('cors');

var bodyParser = require('body-parser');
var session = require('express-session');
//var cookieParser = require('cookie-parser')
//var os = require('os');
var ip = require('ip');
var data = require('./viewModel/js/menu.json');
var fs = require('fs');
//const ejs = require('ejs');
//const http = require('http');
var moment = require('moment');
var os = require('os');
var dns = require('dns');
var _ = require('underscore');
var amqp = require('amqplib/callback_api');
var rpc_client = require('./api/v1/rpc_client.js');
//var server = http.createServer(app);
//let io = require('socket.io').listen(server);
//var client = require('./websocketclient.js');
var Tools = require('./api/v1/tools.js');
var save = {};

function saveData(data){
	for(var key in data){
		save[key] = data[key];
	}
}

//app.set('views', __dirname + '/views');
//app.engine('html', ejs.renderFile);
//app.set('view engine', 'html');
//app.use(cors());

// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.
app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/view');
//app.set('views', __dirname + '/view/temp');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');
app.use(cors()); //Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true})); // support encoded bodies

// passport needs ability to serialize and unserialize users out of session
Passport.serializeUser(function (user, done) {
    console.log('----------Passport.serializeUser-------------');
    //console.log(user);
    done(null, user);
});

Passport.deserializeUser(function (user, done) {
    console.log('----------Passport.deserializeUser-------------');
    //console.log(user);
    done(null, user);
});

app.use(express.static(__dirname + '/doc'));
app.use(express.static(__dirname + '/bower_components'));
//app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/viewModel'));

//var arrayContent = [];
// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  console.log('wwwwwww ===> req.path = '+req.path);
  console.log(req.isAuthenticated());
  console.log('isAuthenticated req.user ===> '+JSON.stringify(req.user));
  if (req.isAuthenticated())
  {
    console.log('isAuthenticated');
    next();
  }
  else
  {
    console.log('UnAuthenticated');
    res.redirect('/login');
  }
}

var setLoginUsingtoFalse = function (req, res, next) {
  console.log('5555555555555555555555555555555555555'+JSON.stringify(req.user));
  //var loginAccount = req.user;
  req.user.login.using=false;
  req.params.id = req.user._id;
  req.body = req.user;
  return require('./api/v1/accounts').updateAccount(req,res);
  //next();
}

var setMenuLists =  function (req, res) {
  //var has_user_form = (req.user.property.user_reportforms.length >0 ? true : false);
  //console.log('setMenuLists has_user_form ==> '+has_user_form);
  //console.log('################################setMenuLists menuLists => '+JSON.stringify(JSON.parse(fs.readFileSync('./viewModel/js/curr_menu.json', 'utf8')).menuLists));
  //console.log('################################setMenuLists user_reportforms => '+JSON.stringify(JSON.parse(fs.readFileSync('./viewModel/js/curr_menu.json', 'utf8')).user_reportforms));
  //console.log('################################setMenuLists user_historyquery => '+JSON.stringify(JSON.parse(fs.readFileSync('./viewModel/js/curr_menu.json', 'utf8')).user_historyquery));
  //req.body.property.menuLists=JSON.parse(fs.readFileSync('./viewModel/js/curr_menu.json', 'utf8')).menuLists;
  req.user.property=req.body.property;
  //req.user.property.user_reportforms=JSON.parse(fs.readFileSync('./viewModel/js/curr_menu.json', 'utf8')).user_reportforms;
  //req.user.property.user_historyquery=JSON.parse(fs.readFileSync('./viewModel/js/curr_menu.json', 'utf8')).user_historyquery;
  req.session.passport.user=req.user;
  //for (var i=0;i<data.menuLists.length;i++)  
  for (var i=0;i<req.user.property.menuLists.length;i++)
  {
  	//console.log('arrayContent['+i+'] = '+ JSON.stringify(req.user.property.menuLists[i]));
    //if(data.menuLists[i].page!="")
    if(req.user.property.menuLists[i]!=null)
    {
      function eventHandler(arr) {
          return function(req, res) {
          	   //console.log('--- has_user_form ==> '+ has_user_form);
        	     res.render('temp/'+arr.page,{ Title: arr.content,
        	     	                             Category: arr.category,
        	     	                             Page: arr.page,
        	     	                             URLs: arr.url,
        	     	                             Account_ID: req.user._id,
        	     	                             Login_Permission: req.user.permission,
        	     	                             Login_User: req.user.username,
        	     	                             Login_Times: req.user.login.times,
        	     	                             Content: arr.content,
        	     	                             //Priviledge: arr.priv,
        	     	                             Property: req.user.property
        	     	                             //UserFormContent: req.user.property.user_reportforms,
        	     	                             //UserHistoryQueryContent: req.user.property.user_historyquery
        	     	                           });
          };
      }
      app.get(req.user.property.menuLists[i].url, isAuthenticated, eventHandler(req.user.property.menuLists[i]));
      //app.get(data.menuLists[i].url, isAuthenticated, eventHandler(data.menuLists[i]));
    }
  }
}

exports.setMenuLists = setMenuLists;

var need_restart_timer = false;
var db = require('./db.js');

async.series([
    function(cb){
        db.connectDB('localhost', 27017, 'apidb',function(){
            cb()
        });
    },
    function(cb){
        var apidb = require('./db.js').getDB('apidb');

        // passport local strategy for local-login, local refers to this app
        Passport.use('local', new LocalStrategy(
            /*{
              usernameField: 'uname',
              passwordField: 'passwd'
            },
            */
            function (username, password, done) {
               apidb.collection('accounts', function(err, collection) {
                  collection.findOne({username:username, password:password}, function(err, item) {
                     if(item){
                             console.log('Found item..........');
                             return done(null, item);
                     }else{
                             console.log('Not Found item..........');
                             return done(null, false, {"message": "User not found."});
                     }
                  });
               });
            })
        );
        
        // body-parser for retrieving form data
        app.use(bodyParser.json()); 
        app.use(bodyParser.urlencoded({ extended: true }));
        
        // initialize passposrt and and session for persistent login sessions
        app.use(session({
            secret: "tHiSiSasEcRetStr",
            resave: true,
            saveUninitialized: true }));
        app.use(Passport.initialize());
        app.use(Passport.session());

        //console.log('ddddddddddddddddddddddd');
        cb()
    },
    function(cb){
       app.get('*', function (req, res, next) {
           //console.log('isAuth ==> '+req.isAuthenticated());
           //console.log('********** req.user ===> '+JSON.stringify(req.user));
           //require('./api/v1/accounts').updateReqUserSessionInfo(req,res);
           app.use(express.static(__dirname + '/view'));
           if(!req.isAuthenticated())
           {
               if (req.path === '/' || req.path === '/login' || req.path === '/register' || req.path === '/loginError1' || 
                   req.path === '/loginError2' || req.path === '/loginError3' || req.path === '/loginError4')
               {
                   /*if (typeof(Storage) !== "undefined") {
                      if(localStorage.getItem("username") && localStorage.getItem("password"))
                      
                   } else {
                      alert("Sorry, your browser does not support Web Storage...");
                   }*/
               }
               else
                 return res.redirect('/login');
           }
           else
           {
           	 console.log('xxxxxxxxxxxxxx  req.isAuthenticated() xxxxxxxxxxxxxxxxx');
           	 //require('./api/v1/accounts').updateReqUserSessionInfo(req,res);
             /*
             req.login(req.user, function(err) {
               if (err) return;
               //console.log("After relogin: "+req.session.passport.user.changedField)
               setMenuLists(req,res);
               //res.end();
             })*/
           }
           next();
       });

       app.get('/login', function(req,res){
           //console.log('A-A-A-A-A');
           res.render('login',{Title:'User Login', ErrorCode:''});
       });

       app.get('/register', function(req,res){
           //console.log('B-B-B-B-B');
           res.render('register',{Title:'User Register'});
       });

       app.get('/loginError1', function(req,res){
           res.render('login',{Title:'User Login', ErrorCode:'查無此帳號'});
       });

       app.get('/loginError2', function(req,res){
           res.render('login',{Title:'User Login', ErrorCode:'密碼錯誤'});
       });

       app.get('/loginError3', function(req,res){
           res.render('login',{Title:'User Login', ErrorCode:'帳號已鎖定，請洽管理員'});
       });

       app.get('/loginError4', function(req,res){
           res.render('login',{Title:'User Login', ErrorCode:'此帳號已登入'});
       });

       app.get('/', isAuthenticated, function(req,res){
       	   //console.log(req.user.property.user_reportforms.length);
           //console.log('C-C-C-C-C');
        	 res.render('temp/home',{ Title: '首頁',
        	 	                        Category: 'backend',
        	 	                        Page: 'home',
        	 	                        URLs: '/backend/home',
        	 	                        Account_ID: req.user._id,
        	 	                        Login_Permission: req.user.permission,
        	 	                        Login_User: req.user.username,
        	 	                        Login_Times: req.user.login.times,
        	 	                        Content: '首頁',
        	 	                        Priviledge:'r',
        	 	                        Property: req.user.property
        	 	                        //UserFormContent: req.user.property.user_reportforms,
        	 	                        //UserHistoryQueryContent: req.user.property.user_historyquery
        	 	                      });
       });

       //api
       var account = require('./api/v1/accounts');
       app.post('/api/v1/auth', account.auth);
       app.post('/login', function(req, res, next) {
        Passport.authenticate('local', {session: false}, function(err, user, info) {
        	//console.log("456#####"+JSON.stringify(user));
          if (err) { /*console.log("aaaaaaaaaaaaaaaaa");*/ return res.send({'error':'auth failed'}); }
          if (!user) { /*console.log("bbbbbbbbbbbbbbbbbbb");*/ return account.auth(req,res); }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            var loginAccount = user;
            //console.log('1...need_restart_timer = '+need_restart_timer);
            //console.log('loginAccount.login.using = '+loginAccount.login.using);
            //console.log('loginAccount.login.lock = '+loginAccount.login.lock);
            if(loginAccount.login.lock==true) return res.send({'pw3error':'password over 3 times error.'});
            if(loginAccount.login.using)
            {
            	//loginAccount.login.using = false;
              //req.params.id = loginAccount._id;
              //req.body = loginAccount;
            	account.setAccountUsing(req,res);
            	return res.send({'alreadyloginerror':'already login'});
            }
            else
            {
              var d = new Date();
              //console.log('d = '+d);
              var w='';
              var n = d.toLocaleDateString();
              //console.log('qqqqqq '+n);
              //console.log('loginAccount.login.lastLogin = '+loginAccount.login.lastLogin);
              if(loginAccount.login.lastLogin)
              {
                  w = loginAccount.login.lastLogin.toLocaleDateString();
              }
              
              //console.log('eeeee '+w);
              var k = n.localeCompare(w);
              if(!k) {
              	//console.log('EQUAL...');
                loginAccount.login.times+=1;
              }
              else
              	need_restart_timer = true;
              
              //console.log('2...need_restart_timer = '+need_restart_timer);
              if(need_restart_timer)
              {
                loginAccount.login.times=1;
                need_restart_timer = false;
              }
              //console.log('3...need_restart_timer = '+need_restart_timer);
              loginAccount.login.using = true;
              loginAccount.login.lastLogin = new Date(Date());
              loginAccount.login.errors=0;
              loginAccount.login.lock = false;
            }
            //console.log('11111111 loginAccount.property.user_reportforms = '+JSON.stringify(loginAccount.property.user_reportforms));
            //var flag =(req.user.property.user_reportforms.length >0 ? true : false);
            //setMenuLists(req.user.property.menuLists,req.user.property.user_reportforms);
            //console.log('Login Account: ' + JSON.stringify(loginAccount));
            req.params.id = loginAccount._id;
            //delete loginAccount._id;
            req.body = loginAccount;
            //console.log('8888888888888888888888888888888888888888888888888');
            //require('./api/v1/accounts').updateReqUserSessionInfo(req,res);
            return account.updateAccount(req,res);
            //res.send({'success':'auth OK','loginAccount': loginAccount});
            //return res.redirect('/users/' + user.username);
          });
        })(req, res, next);
       });

       app.get('/api/v1/accounts', account.findAll);
       app.get('/api/v1/accounts/:id', account.findById);
       app.post('/writeCurrMenuJSONFile', account.writeCurrMenuJSONFile);
       app.post('/api/v1/accounts', account.addAccount);
       app.put('/api/v1/accounts/:id', account.updateAccount);
       app.delete('/api/v1/accounts/:id', account.deleteAccount);
       app.get('/logout/:id', account.logout);

       var privlists = require('./api/v1/privlists');
       app.get('/api/v1/privlists', privlists.findAll);
       app.get('/api/v1/privlists/:id', privlists.findById);
       app.post('/api/v1/privlists', privlists.addPriv);
       app.put('/api/v1/privlists/:id', privlists.updatePriv);
       app.delete('/api/v1/privlists/:id', privlists.deletePriv);

       /* middleware */
       var rpc_client = require('./api/v1/rpc_client');
       //app.get('/api/v1/gmCommandMsg', rpc_client.gmCommandMsg);
       //app.get('/api/v1/queryAccountBasicData', rpc_client.queryAccountBasicData);
       //app.post('/api/v1/privlists', rpc_client.addPriv);
       //app.put('/api/v1/privlists/:id', rpc_client.updatePriv);
       //app.delete('/api/v1/privlists/:id', rpc_client.deletePriv);
       
       app.post('/api', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);
       	 var json = {
       	 	 game: parseInt(data["game"]),
       	 	 seat: parseInt(data["seat"]),
       	 	 json: ""+data.json
       	 }
       	 //require('./rpc_client.js').gmCommandMsg(json, function(){
       	 rpc_client.gmCommandMsg(json, function(){
       	 	 res.send(json);
       	 });
       });

       //app.post('/api/account/basic', (req, res) => {
       app.post('/api/account/basic', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);
         
       	 var query = {};
         
       	 if(_.has(data, "aid")){
       	 	query["aid"] = data["aid"];
       	 }
       	 rpc_client.queryAccountBasicData(query, function(result){
       	 	res.send(result);
       	 })
       });
       
       app.post('/api/memberlog/game', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);
         
       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 if(_.has(data, "aid")){
       	 	if(data["aid"] !== ""){
       	 		query["_v.playerInfo.aid"] = data["aid"];
       	 	}
       	 }
       	 if(_.has(data, "aid")){
       	 	if(data["aid"] !== ""){
       	 		query["_v.playerInfo.aid"] = data["aid"];
       	 	}
       	 }
       	 if(_.has(data, "nickname")){
       	 	if(data["nickname"] !== ""){
       	 		query["_v.playerInfo.name"] = data["nickname"];
       	 	}
       	 }
       	 if(_.has(data, "gameid")){
       	 	query["_v.gameid"] = {};
       	 	query["_v.gameid"]["$in"] = [];
       	 	var gamelist = data["gameid"];
       	 	for(var i = 0; i < gamelist.length; i++){
       	 		query["_v.gameid"]["$in"].push(parseInt(gamelist[i]));
       	 	}
       	 }
       	 console.log(query);
         
       	 // let limit = 1;
       	 require('./api/v1/dbaction.js').findMemberLogGame(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/image/headiconupload', function(req, res) {
       	 const data = req.body;
       	 console.log(`${req.path}`);
       	 //console.log(data);
       	 console.log(`${JSON.stringify(data)}`);
       	 console.log('aid='+data.userid);
       	 console.log('photo='+data.imgurl);
          var packet = {
            type: "account.modifyphoto.req",
            aid: data.userid,
            photo: data.img
          }
          var q = 'account';
         	rpc_client.rpcCall(packet, q, function(result){
       	 	res.send(result);
       	 });
       });

       app.post('/api/business/memberstatistics', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/memberstatistics.js').findBusinessStatistics(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/giftstatistics', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/giftstatistics.js').findGiftStatistics(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/historyvipmember', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/historyvipmember.js').findHistoryVIPMember(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/realtime_online', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/realtime_online.js').findRealTimeOnline(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/history_online', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/history_online.js').findHistoryOnline(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/retention', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/retention.js').findRetention(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/numberloss', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/numberloss.js').findNumberLoss(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/numberloss_details', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/numberloss.js').findNumberLossDetails(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/registered_numberloss', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/registered_numberloss.js').findRegisteredNumberloss(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/registered_numberloss_details', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/registered_numberloss.js').findRegisteredNumberLossDetails(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/paymember_numberloss', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/paymember_numberloss.js').findPaymemberNumberloss(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/paymember_numberloss_details', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/paymember_numberloss.js').findPaymemberNumberLossDetails(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/reflux', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/reflux.js').findReflux(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/reflux_details', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/reflux.js').findRefluxDetails(query, function(result){
       	 	res.send(result);
       	 })
       });

       app.post('/api/business/pn_query', function(req, res) {
       	 var data = req.body;
       	 console.log(`${req.path}`);
       	 console.log(data);

       	 var query = {};
       	 query["_v.time"] = {};
       	 if(_.has(data, "begin")){
       	 	var begin = new Date(data["begin"]);
       	 	query["_v.time"]["$gte"] = begin; 
       	 }
       	 if(_.has(data, "end")){
       	 	var end = new Date(data["end"]);
       	 	query["_v.time"]["$lte"] = end; 
       	 }
       	 console.log(query);
       	 require('./api/v1/business/pn_query.js').findPnQuery(query, function(result){
       	 	res.send(result);
       	 })
       });
       /* middleware */

       app.get('/doc',function(req,res){
         res.sendFile(__dirname + "/doc/index.html");
       });

       app.get('/logout', function (req, res) {
         //console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
         req.logout();
         res.redirect('/');
       });

       app.listen(port,function() {
         console.log("Run http://localhost:"+port);
       });
       cb();
     }
],function(err, results) {
});
