const {db,conn, spAsync}= require('../../db/index');
let spAddNote = `Call addNote (?,?,?)`;

//Add a note to database
const addNote = (req, res) => {
  
    let title=req.body.title;
    let description = req.body.description;
    let archive_status= req.body.archive_status
    
    spAsync(spAddNote, [title,description,archive_status,])
      .then(result => {
        res.status(200).json({
          status: 200,
          result: result,
          message: "OK"
        });
      })
      .catch(err => {
        res.send(500).json({
          status: 500,
          result: err,
          message: "Internal Server Error"
        });
      });
  };

  module.exports.addNote = addNote
  