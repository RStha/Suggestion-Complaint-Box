var express = require('express');
var router = express.Router();
var schema = require('../schema')

router.get('/', function(req, res, next) {
    // schema.Complaint.find((err, data) => {
    //     if(err){
    //         res.send('error');
    //         return;
    //     }
    //    res.send(data)
    // })

    schema.Complaint.find()
    .sort([['createdDate', -1]])
    .exec()
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        throw err;
    })
});

// router.get('/', function(req, res, next) {
//     schema.Complaint.find({complaint:"This is my complaints"},(err, data) => {
//         if(err){
//             res.send('error');
//             return;
//         }
//        res.send(data)
//     })
// });

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
   schema.Complaint.findOne({_id:id},(err, data)=>{
       if(err){
           res.send('error');
           return;
       }
      res.send(data)
   })
//   res.send('respond with a resource');
});


  router.post('/', function(req, res, next) {
      console.log(req.body)
      var complaint = req.body
      var newComplaint = new schema.Complaint(complaint)
      newComplaint.save(function(err, data){
          res.send(data)
      })
  });

  router.put('/:id', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.delete('/:id', function(req, res, next) {

      schema.Complaint.findByIdAndRemove(req.params.id, (err, response) => {
          if (err) throw err;          
          schema.Complaint.find()
          .sort([['createdDate', -1]])
          .exec()
          .then((data) => {
              res.send(data);
          })
          .catch(err => {
              throw err;
          })
      })
  });

module.exports = router;
