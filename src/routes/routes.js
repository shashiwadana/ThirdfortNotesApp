const express = require('express');
const router = express.Router();
const getAllNotesController = require('../controllers/getAllNotes.controller');
const addNoteController = require('../controllers/addNote.controller');
const updateNoteController = require('../controllers/updateNote.controller');
const deleteNoteController = require('../controllers/deleteNote.controller');

router.get('/getAllNotes',(req,res)=>{
    getAllNotesController.getAllNotes(req,res)
})
router.post('/addNote',(req,res)=>{
    addNoteController.addNote(req,res)
})
router.put('/updateNote/:id',(req,res)=>{
    updateNoteController.updateNote(req,res)
})
router.delete('/deleteNote/:id',(req,res)=>{
    deleteNoteController.deleteNote(req,res)
})
module.exports=router;