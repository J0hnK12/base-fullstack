const express = require('express');
const fs = require('fs');
const app = express();

//readfile;
let events = []; 
let firstNom = [];
let lastNom = [];
let SID = [];
let grade = [];

fs.readFile('events.json', async (err, data) => {
    events = await JSON.parse(data);
    console.log(events.find(event =>
        event['Event'] == "3 on 3 Basketball"
    ))
});

fs.readFile('students.json', async (err, data) => {
    students = await JSON.parse(data);
    students.find(student =>
        student.SID == req.body
    ))
});

app.use(express.static('public'));
app.use(express.json());

app.get('/events', (req, res) => {
    res.send(events);
});

app.post('/signUp1', (req, res) => {
    //Have the console save the first name, last name, student ID, grade, and the first event
    console.log(`IP address ${req.ip} voted for ${req.body.event1}`); 
    event1.push(req.body.event1);
    console.log(`IP address ${req.ip} voted for ${req.body.firstNom}`); 
    firstNom.push(req.body.firstNom);
    console.log(`IP address ${req.ip} voted for ${req.body.lastNom}`); 
    lastNom.push(req.body.lastNom);
    console.log(`IP address ${req.ip} voted for ${req.body.SID}`); 
    SID.push(req.body.SID);
    console.log(`IP address ${req.ip} voted for ${req.body.grade}`); 
    grade.push(req.body.grade);
});
         
app.post('/signUp2', (req, res) => {
    //Have the console save the first name, last name, student ID, grade, and the second event
    console.log(`IP address ${req.ip} voted for ${req.body.event2}`); 
    event2.push(req.body.event2);
    console.log(`IP address ${req.ip} voted for ${req.body.firstNom}`); 
    firstNom.push(req.body.firstNom);
    console.log(`IP address ${req.ip} voted for ${req.body.lastNom}`); 
    lastNom.push(req.body.lastNom);
    console.log(`IP address ${req.ip} voted for ${req.body.SID}`); 
    SID.push(req.body.SID);
    console.log(`IP address ${req.ip} voted for ${req.body.grade}`); 
    grade.push(req.body.grade);
})

fs.writeFile('events.json', JSON.stringify(eventsData), (err) => {
        console.log(eventsData);
        console.warn(err);
        console.log(events.json);
});
    
fs.writeFile('students.json', JSON.stringify(firstNom), JSON.stringify(lastNom), JSON.stringify(SID), JSON.stringify(grade), (err) => {
        console.log(firstNom);
        console.log(lastNom);
        console.log(SID);
        console.log(grade);
        console.warn(err);
        console.log(students.json);
});

app.listen(3000, () => {
    console.log('Server started...');
});
