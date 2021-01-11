const {db,conn, spAsync}= require('../../db/index');
let spGetAllNotes = `Call selectAllNotes ()`;

//get all notes
const getAllNotes = (req,res)=>{
    
    spAsync(spGetAllNotes).then(result=>{
        res.status(200).json({
            status:200,
            result:result[0],
            message:"Ok"
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:500,
            result:err,
            message:"Internal Server Error"
        })
    })
}



module.exports.getAllNotes = getAllNotes