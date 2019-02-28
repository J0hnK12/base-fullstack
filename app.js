const express = require('express');
const fs = require('fs');
const app = express();

//readfile;
let eventsData1 = []; 
let eventList1 = []; //eventsData1.map(eventsData1 => eventsData1.Event);
let eventsData2 = []; 
let eventList2 = []; //eventsData2.map(eventsData2 => eventsData2.Event);
let firstNom = [];
let lastNom = [];
let SID = [];
let grade = [];

fs.readFile('events.json', (err, data) => {
    eventsData1 = JSON.parse(data);
    eventsData2 = JSON.parse(data);
});

fs.readFile('students.json', (err, data) => {
    firstNom = JSON.parse(data);
    lastNom = JSON.parse(data);
    SID = JSON.parse(data);
    grade = JSON.parse(data);
});

fs.readFile('assignments.json', (err, data) => {
    firstNom = JSON.parse(data);
    lastNom = JSON.parse(data);
    SID = JSON.parse(data);
    grade = JSON.parse(data);
    eventsData1 = JSON.parse(data);
    eventsData2 = JSON.parse(data);
});

app.use(express.static('public'));
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Hello!');
});

app.post('/answer',(req, res) => {
    res.send("Thank you for your answer!");
    //Have the console save the first name, last name, student ID, grade, and event
    console.log(`IP address ${req.ip} voted for ${req.body.eventsData1}`); 
    event1.push(req.body.eventsData1);
    console.log(`IP address ${req.ip} voted for ${req.body.eventsData2}`); 
    event2.push(req.body.eventsData2);
    console.log(`IP address ${req.ip} voted for ${req.body.firstNom}`); 
    firstNom.push(req.body.firstNom);
    console.log(`IP address ${req.ip} voted for ${req.body.lastNom}`); 
    lastNom.push(req.body.lastNom);
    console.log(`IP address ${req.ip} voted for ${req.body.SID}`); 
    SID.push(req.body.SID);
    console.log(`IP address ${req.ip} voted for ${req.body.grade}`); 
    grade.push(req.body.grade);
    fs.writeFile('events.json', JSON.stringify(eventsData1), JSON.stringify(eventsData2) (err) => {
        console.log(eventsData1);
        console.log(eventsData2);
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
    
    fs.writeFile('assignments.json', JSON.stringify(firstNom), JSON.stringify(lastNom), JSON.stringify(SID), JSON.stringify(grade), JSON.stringify(eventsData1), JSON.stringify(eventsData2), (err) => {
        console.log(eventsData1);
        console.log(eventsData2);
        console.log(firstNom);
        console.log(lastNom);
        console.log(SID);
        console.log(grade);
        console.warn(err);
        console.log(assignments.json);
    });
    
})

app.listen(3000, () => {
    console.log('Server started...');
});
