const express = require('express');
const router = express.Router();
const flashcardsController = require('../controllers/flashcards');

// Flashcard Routes
router.get('/', flashcardsController.list);         // List all flashcards
router.get('/create', flashcardsController.createForm);  // Form to create a new flashcard
router.post('/create', flashcardsController.create);  // Create a new flashcard
router.get('/update/:id', flashcardsController.updateForm); // Form to update a flashcard
router.post('/update/:id', flashcardsController.update);  // Update flashcard
router.post('/delete/:id', flashcardsController.delete);  // Delete flashcard

module.exports = router;
