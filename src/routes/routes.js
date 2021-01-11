const express = require('express');
const router = express.Router();
const getAllNotesController = require('../controllers/getAllNotes.controller');
const addNoteController = require('../controllers/addNote.controller');

router.get('/getAllNotes',(req,res)=>{
    getAllNotesController.getAllNotes(req,res)
})
router.post('/addNote',(req,res)=>{
    addNoteController.addNote(req,res)
})

module.exports=router;