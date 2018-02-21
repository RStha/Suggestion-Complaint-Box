var express = require('express');
var router = express.Router();
var schema = require('../schema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  schema.User.find((err, data) => {
      if(err){
          res.send('error');
          return;
      }
     res.send(data)
  })
});

router.post('/', function(req, res, next) {
  schema.User.findOne({userName:req.body.userName}, (err, data) => {
    if (err) {
      res.send('error');
    return
    } 
    var message 
    if (data) {
      message = 'Username already used'
      alreadyExists = true
      res.send({alreadyExists: true})
    } else {
      var user = req.body
      var newUser = new schema.User(user)
      newUser.save(function (err, data) {
        res.send(data)
      })
    }
  }) 
});

router.post('/login', function(req, res, next) {
  console.log(req.body.username)
  schema.User.find(function(err, data) {
    if(err) {
      res.status(400).json({message:'Something went wrong'})
    }
    const ifUser = data.filter(user => {
      return user.userName == req.body.username
    });
    if(ifUser[0]) {
      if(req.body.password == ifUser[0].password){
        console.log("login success")
      res.status(200).json(ifUser[0])

      } else{
      res.status(403).json({message:'password wrong'})

      }
    } else{
      res.status(403).json({message:'user not found'})

    }
  });
})
module.exports = router;
