const express = require('express');
const app = express();

//readfile;
let eventsData1 = []; 
let eventList1 = eventsData1.map(eventsData1 => eventsData1.Event);
let eventsData2 = []; 
let eventList2 = eventsData2.map(eventsData2 => eventsData2.Event);
let firstNom = [];
let lastNom = [];
let SID = [];
let grade = [];

/* fs.readFile('db.json', (err, data) => {
    eventsData = JSON.parse(data);
});
*/

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
    /*fs.writeFile('db.json', JSON.stringify(eventsData), (err) => {
        console.log(events);
        console.warn(err);
        console.log(db.json);
    });
    */
    
})

app.listen(3000, () => {
    console.log('Server started...');
});
