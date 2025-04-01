const express = require("express");
const bodyParser = require("body-parser");
const flashcardRoutes = require("./routes/flashcards");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "pug");

// Routes
app.use("/flashcards", flashcardRoutes);

app.get("/", (req, res) => {
    res.render("index", { title: "Language Learning App" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
