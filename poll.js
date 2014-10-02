var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('Polls', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'Polls' database");
    }
});
 
exports.findAll = function(req, res) {
    var pollName = req.params.pollName;
     console.log('Results request for poll ' + pollName);
    db.collection(pollName, function(err, collection) {
        collection.find({},{_id: 0, option:1, votes:1}).toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addVote = function(req, res) {

    var pollName = req.params.pollName;
    var vote = req.body.vote;

    console.log('Adding vote ' + vote + ' to poll ' + pollName);
    db.collection(pollName, function(err, collection) {
        collection.update({option:vote}, {$inc:{votes:1}}, {upsert: true}, function(err, result) {
            if (err) {
               res.send({'error':'An error has occurred'});
            } else {
                res.send('done');
            }
        });
    });
}
 
