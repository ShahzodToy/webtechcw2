# webtechcw2
# Flashcard Learning App

A simple web application for creating, updating, deleting, and managing flashcards for learning word translations and topics. This app allows users to create flashcards, view a list of their flashcards, and edit or delete them. It's built using **Node.js**, **Express**, and **Pug (template engine)**.

## Features

- Create new flashcards with a word, translation, and topic.
- View a list of existing flashcards.
- Edit flashcards (word, translation, and topic).
- Delete flashcards.
- Clean and responsive design with basic styles.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Pug**: Template engine for rendering HTML pages.
- **CSS**: Basic styling for layout and UI.
- **JavaScript**: Frontend interactivity and backend logic.

## Installation

### Prerequisites

- Node.js installed on your machine.
- NPM (Node Package Manager) to install dependencies.

### Steps to Run the Project Locally

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ShahzodToy/webtechcw2.git
    cd flashcard-learning-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the app:**
    ```bash
    npm start
    ```

    This will start the server on `http://localhost:3000`.

## Folder Structure

```bash
flashcard-learning-app/
├── app.js              # Main entry point for the app
├── package.json        # Project configuration and dependencies
├── .gitignore          # Ignore node_modules folder and other files
├── public/             # Folder for public assets (CSS, images, JS)
│   ├── styles/
│   │   └── style.css   # Main stylesheet for the app
│   ├── javascripts/    # (if any JavaScript files needed on the client-side)
│   └── images/         # (if any images are needed)
├── routes/             # Route files for handling HTTP requests
│   └── flashcards.js   # Routes related to flashcards
├── views/              # Pug templates for rendering HTML
│   ├── layout.pug      # Layout template (common structure for all pages)
│   ├── index.pug       # Homepage
│   ├── flashcards/
│   │   ├── list.pug    # Flashcards list page
│   │   ├── create.pug  # Create new flashcard page
│   │   ├── update.pug  # Update existing flashcard page
│   │   └── delete.pug  # (if needed, but deletion is handled via POST)
├── controllers/        # Controller files for business logic
│   └── flashcards.js   # Logic for managing flashcards
└── services/           # Service layer for CRUD operations
    └── flashcards.js   # Functions for handling flashcard data
