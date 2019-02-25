const express = require('express');
const app = express();

let eventsData = []; //readfile;
let eventList = eventsData.map(eventsData => eventsData.Event);

fs.readFile('db.json', (err, data) => {
    videoGame = JSON.parse(data);
});

app.use(express.static('public'));
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Hello!');
});

app.post('/answer',(req, res) => {
    res.send("Thank you for your answer!");
    console.log(`IP address ${req.ip} voted for ${req.body.events}`); //Have the console save the first name, last name, student ID, grade, and event
    events.push(req.body.events);
    fs.writeFile('db.json', JSON.stringify(events), (err) => {
        console.log(events);
        console.warn(err);
        console.log(db.json);
    });
    
})

app.listen(3000, () => {
    console.log('Server started...');
});
