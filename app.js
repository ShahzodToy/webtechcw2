const express = require('express');
const app = express();
const path = require('path');

// working on the pub for frontend case
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// working on the static files 
app.use(express.static(path.join(__dirname, 'public')));

// importing routes
const flashcardsRoutes = require('./routes/flashcards');
app.use('/flashcards', flashcardsRoutes);

// creating default / page for it
app.get('/', (req, res) => {
    res.render('index', { title: 'Flashcard Learning App' });
});

// working 3000 port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
