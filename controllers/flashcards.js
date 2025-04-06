const flashcardService = require('../services/flashcards');

//calling all flashcards
exports.list = (req, res) => {
    const flashcards = flashcardService.getFlashcards();
    res.render('flashcards/list', { title: 'All Flashcards', flashcards });
};

//creating flashcard form
exports.createForm = (req, res) => {
    res.render('flashcards/create', { title: 'Create Flashcard' });
};

//creating form flashcard
exports.create = (req, res) => {
    const { word, translation, topic } = req.body;
    flashcardService.addFlashcard(word, translation, topic);
    res.redirect('/flashcards');
};

//creating update form
exports.updateForm = (req, res) => {
    const card = flashcardService.getFlashcards().find(f => f.id == req.params.id);
    res.render('flashcards/update', { title: 'Update Flashcard', card });
};

//update api for real update
exports.update = (req, res) => {
    const { word, translation, topic } = req.body;
    flashcardService.updateFlashcard(req.params.id, word, translation, topic);
    res.redirect('/flashcards');
};

exports.delete = (req, res) => {
    const { id } = req.params; 
    
    const success = flashcardService.deleteFlashcard(id);
    
    if (success) {
        res.redirect('/flashcards'); // redirecting to flashcards
    } else {
        res.status(404).send('Flashcard not found'); // if not return text
    }
};