const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = require('./htmlRoutes');
const savedNotes = require('./db/db.json');

app.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(results)
})

app.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, savedNotes)
})

