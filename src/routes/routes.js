const express = require('express');
const router = express.Router();
const getAllNotesController = require('../controllers/getAllNotes.controller');

router.get('/getAllNotes',(req,res)=>{
    getAllNotesController.getAllNotes(req,res)
})


module.exports=router;