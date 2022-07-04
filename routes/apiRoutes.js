const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = require('./htmlRoutes');
const savedNotes = require('./Develop/db/db.json');

app.get('/api/notes', (req, res) => {
    res.json(savedNotes.slice(1));
});

function createNote(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
    notesArray=[];

    if (notesArray.length === 0)
    notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}

app.post('/api/notes', (req, res) => {
    const newNote = createNote(req.body, allNotes);
    res.json(newNote);
});



