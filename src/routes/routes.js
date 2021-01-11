const express = require('express');
const router = express.Router();
const getAllNotesController = require('../controllers/getAllNotes.controller');
const addNoteController = require('../controllers/addNote.controller');
const updateNoteController = require('../controllers/updateNote.controller');

router.get('/getAllNotes',(req,res)=>{
    getAllNotesController.getAllNotes(req,res)
})
router.post('/addNote',(req,res)=>{
    addNoteController.addNote(req,res)
})
router.put('/updateNote/:id',(req,res)=>{
    updateNoteController.updateNote(req,res)
})

module.exports=router;