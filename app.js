const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const flashcardsRoutes = require('./routes/flashcards');
app.use('/flashcards', flashcardsRoutes);

// Default route (home)
app.get('/', (req, res) => {
    res.render('index', { title: 'Flashcard Learning App' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
