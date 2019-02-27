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

fs.readFile('db.json', (err, data) => {
    eventsData1 = JSON.parse(data);
    eventsData2 = JSON.parse(data);
    firstNom = JSON.parse(data);
    lastNom = JSON.parse(data);
    SID = JSON.parse(data);
    grade = JSON.parse(data);
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
    events.push(req.body.eventsData1);
    console.log(`IP address ${req.ip} voted for ${req.body.eventsData2}`); 
    events.push(req.body.eventsData2);
    console.log(`IP address ${req.ip} voted for ${req.body.firstNom}`); 
    firstNom.push(req.body.firstNom);
    console.log(`IP address ${req.ip} voted for ${req.body.lastNom}`); 
    events.push(req.body.lastNom);
    console.log(`IP address ${req.ip} voted for ${req.body.SID}`); 
    events.push(req.body.SID);
    console.log(`IP address ${req.ip} voted for ${req.body.grade}`); 
    events.push(req.body.grade);
    fs.writeFile('db.json', JSON.stringify(eventsData1), (err) => {
        console.log(eventsData1);
        console.warn(err);
        console.log(db.json);
    });
    
    fs.writeFile('db.json', JSON.stringify(eventsData2), (err) => {
        console.log(eventsData2);
        console.warn(err);
        console.log(db.json);
    });
    
    fs.writeFile('db.json', JSON.stringify(firstNom), (err) => {
        console.log(firstNom);
        console.warn(err);
        console.log(db.json);
    });
    
    fs.writeFile('db.json', JSON.stringify(lastNom), (err) => {
        console.log(lastNom);
        console.warn(err);
        console.log(db.json);
    });
    
    fs.writeFile('db.json', JSON.stringify(SID), (err) => {
        console.log(SID);
        console.warn(err);
        console.log(db.json);
    });
    
    fs.writeFile('db.json', JSON.stringify(grade), (err) => {
        console.log(grade);
        console.warn(err);
        console.log(db.json);
    });
    
})

app.listen(3000, () => {
    console.log('Server started...');
});
