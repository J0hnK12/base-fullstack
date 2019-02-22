const express = require('express');
const app = express();

let eventsData = []; //readfile;
let eventList = eventsData.map(eventData => eventData.Event);

app.use(express.static('public'));
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Hello!');
});

app.post('/answer',(req, res) => {
    res.send("Thank you for your answer!");
    console.log(`IP address ${req.ip} voted for ${req.body.events}`);    
})

app.listen(3000, () => {
    console.log('Server started...');
});
