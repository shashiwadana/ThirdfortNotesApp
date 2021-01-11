const express = require('express');
const router = express.Router();
const getAllNotesController = require('../controllers/getAllNotes.controller');
const addNoteController = require('../controllers/addNote.controller');
const updateNoteController = require('../controllers/updateNote.controller');
const deleteNoteController = require('../controllers/deleteNote.controller');
const unArchieveNoteController = require('../controllers/unArchiveNote.controller');
const getAllArchievedNotesController = require('../controllers/getAllArchivedNotes.controller');
const getAllUnArchievedNotesController = require('../controllers/getAllUnArchivedNotes.controller');

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
router.patch('/archiveNote/:id',(req,res)=>{
    archieveNoteController.archiveNote(req,res)
})
router.patch('/unArchiveNote/:id',(req,res)=>{
    unArchieveNoteController.unArchiveNote(req,res)
})
router.get('/getAllArchivedNotes',(req,res)=>{
    getAllArchievedNotesController.getAllArchivedNotes(req,res)
})
router.get('/getAllUnArchivedNotes',(req,res)=>{
    getAllUnArchievedNotesController.getAllUnArchivedNotes(req,res)
})
module.exports=router;