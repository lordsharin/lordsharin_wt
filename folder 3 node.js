Before starting: Install Node.js on your computer. You can check whether it is installed by opening the terminal and typing:
node -v
npm -v



1.Basic Node.js HTTP Server
Filename: server.js


const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url == '/') {
        res.end("Welcome to Home Page");
    }
    else if(req.url == '/about') {
        res.end("This is About Page");
    }
    else if(req.url == '/contact') {
        res.end("Contact Us");
    }
    else {
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running at port 3000");
});


How to execute:
1. Save the code as server.js.
2. Open the terminal in that folder.
3. Execute: node server.js




2.Node.js Routing
Filename: routing.js



const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url == '/') {
        res.end("Home Page");
    }
    else if(req.url == '/about') {
        res.end("About Page");
    }
    else if(req.url == '/services') {
        res.end("Our Services");
    }
    else if(req.url == '/contact') {
        res.end("Contact Page");
    }
    else {
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server started");
});


How to execute:
node routing.js

Open these URLs in your browser:
- localhost:3000/
- localhost:3000/about
- localhost:3000/services
- localhost:3000/contact





3.Student REST API using Node.js and Express
Filename: student.js


First, install Express.
Open the terminal and type:
npm init -y
npm install express



const express = require('express');
const app = express();

app.use(express.json());

let students = [];

// Add student
app.post('/students', (req, res) => {
    students.push(req.body);
    res.send("Student Added Successfully");
});

// Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


How to execute:
1. Create a folder named StudentAPI.
2. Open terminal in that folder.
3. Run:
npm init -y
npm install express

http://localhost:3000/students







