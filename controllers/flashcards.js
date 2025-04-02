const flashcardService = require('../services/flashcards');

exports.list = (req, res) => {
    const flashcards = flashcardService.getFlashcards();
    res.render('flashcards/list', { title: 'All Flashcards', flashcards });
};

exports.createForm = (req, res) => {
    res.render('flashcards/create', { title: 'Create Flashcard' });
};

exports.create = (req, res) => {
    const { word, translation, topic } = req.body;
    flashcardService.addFlashcard(word, translation, topic);
    res.redirect('/flashcards');
};

exports.updateForm = (req, res) => {
    const card = flashcardService.getFlashcards().find(f => f.id == req.params.id);
    res.render('flashcards/update', { title: 'Update Flashcard', card });
};

exports.update = (req, res) => {
    const { word, translation, topic } = req.body;
    flashcardService.updateFlashcard(req.params.id, word, translation, topic);
    res.redirect('/flashcards');
};

exports.delete = (req, res) => {
    const { id } = req.params; // Get the ID from the URL parameter
    
    // Call the delete service to delete the flashcard
    const success = flashcardService.deleteFlashcard(id);
    
    if (success) {
        res.redirect('/flashcards'); // Redirect to the list of flashcards if deletion is successful
    } else {
        res.status(404).send('Flashcard not found'); // Send error if flashcard is not found
    }
};