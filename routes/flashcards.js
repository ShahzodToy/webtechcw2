const express = require('express');
const router = express.Router();
const flashcardsController = require('../controllers/flashcards');

// only flashcards
router.get('/', flashcardsController.list); // list of flashcards
router.get('/create', flashcardsController.createForm);  // adding flashcard form
router.post('/create', flashcardsController.create);  // adding flashcard
router.get('/update/:id', flashcardsController.updateForm); // update flashcard for form 
router.post('/update/:id', flashcardsController.update);  // update flashcard real
router.post('/delete/:id', flashcardsController.delete);  // delete flashcard

module.exports = router;
