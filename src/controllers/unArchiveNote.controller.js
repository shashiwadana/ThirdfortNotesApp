const {db,conn, spAsync}= require('../../db/index');
let spUnArchiveNote = `Call unArchiveNote(?)`;

// unb archive a note by id
const unArchiveNote = (req, res) => {
    let id = req.params.id;
    
    spAsync(spUnArchiveNote, [id])
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

  module.exports.unArchiveNote = unArchiveNote