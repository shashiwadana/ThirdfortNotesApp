const {db,conn, spAsync}= require('../../db/index');
let spUpdateNote = `Call updateNote (?,?,?,?)`;

const updateNote = (req, res) => {
    let id = req.params.id;
    let title=req.body.title;
    let description = req.body.description;
    let archive_status= req.body.archive_status
    
    spAsync(spUpdateNote, [id,title,description,archive_status])
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

  module.exports.updateNote = updateNote