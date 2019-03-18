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
});

fs.readFile('students.json', async (err, data) => {
    students = await JSON.parse(data);
});

app.use(express.static('public'));
app.use(express.json());

app.get('/events', (req, res) => {
    res.send(events);
});

app.post('/signUp1', (req, res) => {
    console.log(`IP address ${req.ip} voted for ${req.body.event1}`); 
    event1.push(req.body.event1);
    
    let event = events.find(event =>
        event['Event'] == req.body.event1;
    )
    
    let student = students.find(student =>
        student.grade == req.body.grade;
    )
    
    let spotsLeft = events.spots[student.grade];
    
    if (spotsLeft > 0) {
        student.Event = req.body.event1;
        res.send("Congratulations, you have signed up for this event!");
        event1.push(req.body.event1);
    }
    
    else {
        res.status(401).send("Sorry, the event that you signed up for is full. Try signing up again, but use your second choice.");
    }
    
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
    console.log(`IP address ${req.ip} voted for ${req.body.event2}`); 
    event2.push(req.body.event2);
    
    let event = events.find(event =>
        event['Event'] == req.body.event2;
    )
    
    let student = students.find(student =>
        student.grade == req.body.grade;
    )
    
    let spotsLeft = events.spots[student.grade];
    
    if (spotsLeft > 0) {
        student.Event = req.body.event2;
        res.send("Congratulations, you have signed up for this event!");
        event2.push(req.body.event2);
    }
    
    else {
        res.status(401).send("Sorry, the event that you signed up for is full.");
    }
    
    console.log(`IP address ${req.ip} voted for ${req.body.firstNom}`); 
    firstNom.push(req.body.firstNom);
    console.log(`IP address ${req.ip} voted for ${req.body.lastNom}`); 
    lastNom.push(req.body.lastNom);
    console.log(`IP address ${req.ip} voted for ${req.body.SID}`); 
    SID.push(req.body.SID);
    console.log(`IP address ${req.ip} voted for ${req.body.grade}`); 
    grade.push(req.body.grade);
})

fs.writeFile('events.json', JSON.stringify(events), (err) => {
        console.log(events);
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
