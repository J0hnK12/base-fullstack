const fs = require('fs');

let students = [];
fs.readFile('assignments.json', async (err, data) => {
students = await JSON.parse(data);
let event = "Just Dance";

console.log("List of students in Just Dance"); 
})