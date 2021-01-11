const {db,conn, spAsync}= require('../../db/index');
let spGetArchivedNotes = `Call getAllArchivedNotes ()`;

//get all archived notes
const getAllArchivedNotes = (req,res)=>{
    
    spAsync(spGetArchivedNotes).then(result=>{
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



module.exports.getAllArchivedNotes= getAllArchivedNotes