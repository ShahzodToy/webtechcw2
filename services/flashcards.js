// creating static database for it
let flashcards = []; 

// exporting flashcard
exports.getFlashcards = () => flashcards;

// creating flashcard and save it to flashcards
exports.addFlashcard = (word, translation, topic) => {
    const newFlashcard = { id: flashcards.length + 1, word, translation, topic };
    flashcards.push(newFlashcard);
    return newFlashcard;
};

// updating specific flashcard with word, tanslation, topic
exports.updateFlashcard = (id, word, translation, topic) => {
    const flashcard = flashcards.find(f => f.id === parseInt(id));
    if (!flashcard) return null;
    flashcard.word = word || flashcard.word;
    flashcard.translation = translation || flashcard.translation;
    flashcard.topic = topic || flashcard.topic;
    return flashcard;
};

// deleting with id from array
exports.deleteFlashcard = (id) => {
    const index = flashcards.findIndex(f => f.id === parseInt(id));
    if (index === -1) return false;
    flashcards.splice(index, 1);
    return true;
};
