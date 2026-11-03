const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// Create
app.post('/add', (req, res) => {
    users.push(req.body);
    res.send("User Added");
});

// Read
app.get('/users', (req, res) => {
    res.json(users);
});

// Update
app.put('/update/:id', (req, res) => {
    users[req.params.id] = req.body;
    res.send("User Updated");
});

// Delete
app.delete('/delete/:id', (req, res) => {
    users.splice(req.params.id, 1);
    res.send("User Deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
