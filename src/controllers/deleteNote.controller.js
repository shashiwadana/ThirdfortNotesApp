
const {db,conn, spAsync}= require('../../db/index');
let spDeleteNote = `Call deleteNote(?)`;

const deleteNote = (req, res) => {
    let id = req.params.id;
       
    spAsync(spDeleteNote, [id])
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

  module.exports.deleteNote = deleteNote