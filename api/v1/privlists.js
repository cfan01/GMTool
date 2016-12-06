
/**
 *@api {get} /user/userlist 取得使用者權限資訊 Request
 *@apiName GetUser
 *@apiGroup User
 *@apiVersion 1.0.0
 *
 *@apiSuccess {String} name 使用者名稱.
 *@apiSuccess {String} info 使用者資訊.
 *
 *@apiSuccessExample Example data on success:
 *{
 *	name:'Jack',
 *	info:'blahblahblah...'
 *}
 */

var ObjectID = require('mongodb').ObjectID;
var apidb = require('../../db.js').getDB('apidb');
var privledgedata = require('../../viewModel/js/priviledge.json');
//var data2 = require('../../viewModel/js/data2.json');
//console.log(data);

apidb.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'apidb' database");
        db.collection('privlists', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'privlists' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving priv: ' + id);
    apidb.collection('privlists', function(err, collection) {
        collection.findOne({_id:new ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    apidb.collection('privlists', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(items));
                //alert(JSON.stringify(items));
                res.send(items);
            }
        });
    });
};

exports.addPriv = function(req, res) {
    var priv = req.body;
    console.log('Adding account: ' + JSON.stringify(priv));
    console.log('222  Adding priv: ' + JSON.stringify(priv));
    apidb.collection('privlists', function(err, collection) {
        collection.insert(priv, {safe:true}, function(err, result) {
        	console.log(result);
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result));
                res.send(result);
            }
        });
    });
}

exports.updatePriv = function(req, res) {
    var id = req.params.id;
    var priv = req.body;
    console.log('Updating priv: ' + id);
    console.log(JSON.stringify(priv));
    apidb.collection('privlists', function(err, collection) {
        collection.update({'_id':new ObjectID(id)}, {$set:priv}, {safe:true}, function(err, result) {
        //collection.update({'_id':id}, priv, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating account: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                //updateReqUserSessionInfo(req,res);
                res.send(priv);
            }
        });
    });
}

exports.deletePriv = function(req, res) {
    var id = req.params.id;
    console.log('Deleting priv: ' + id);
    apidb.collection('privlists', function(err, collection) {
        collection.remove({'_id':new ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

var updateReqUserSessionInfo = function(req,res) {
    var id = req.user._id;
    console.log('updateReqUserSessionInfo Retrieving account: ' + id);
    apidb.collection('accounts', function(err, collection) {
        collection.findOne({_id:new ObjectID(id)}, function(err, item) {
        	console.log('updateReqUserSessionInfo item ==> ' + JSON.stringify(item));
        	//if(req.user.property!=item.property)
        	{
            req.login(item, function(err) {
               if (err) return;
               //console.log("After relogin: "+req.session.passport.user.changedField)
               require('../../server.js').setMenuLists(req,res);
               res.end();
            })
            //res.send(item);
            //res.end();
          }
        });
    });
}

exports.updateReqUserSessionInfo = updateReqUserSessionInfo;

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var privlists = [
/*
        privledgedata.topmanager,
        privledgedata.planpmanager,
        privledgedata.businessmanager,
        privledgedata.qamanager,
        privledgedata.rdmanager
*/
      {
          classify: privledgedata.classify.topmanager,
          //enabledcounts: 0,
          //disabledcounts: 0,
          rf_fieldPriv: privledgedata.rf_fieldPriv,
          pagePriv: privledgedata.pagePriv,
      },
      {
          classify: privledgedata.classify.planmanager,
          //enabledcounts: 0,
          //disabledcounts: 0,
          rf_fieldPriv: privledgedata.rf_fieldPriv,
          pagePriv: privledgedata.pagePriv,
      },
      {
          classify: privledgedata.classify.businessmanager,
          //enabledcounts: 0,
          //disabledcounts: 0,
          rf_fieldPriv: privledgedata.rf_fieldPriv,
          pagePriv: privledgedata.pagePriv,
      },
      {
          classify: privledgedata.classify.qamanager,
          //enabledcounts: 0,
          //disabledcounts: 0,
          rf_fieldPriv: privledgedata.rf_fieldPriv,
          pagePriv: privledgedata.pagePriv,
      },
      {
          classify: privledgedata.classify.rdmanager,
          //enabledcounts: 0,
          //disabledcounts: 0,
          rf_fieldPriv: privledgedata.rf_fieldPriv,
          pagePriv: privledgedata.pagePriv,
      }
    ];

    apidb.collection('privlists', function(err, collection) {
        collection.insert(privlists, {safe:true}, function(err, result) {});
    });

};
