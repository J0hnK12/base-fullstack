const fs = require('fs');

let students = [];
fs.readFile('assignments.json', async (err, data) => {
    students = await JSON.parse(data);
    let event = "Just Dance";
    for (let i = 0; i < students.length; i++) {
        if (students == justDance) {
            events.append("Just Dance");
        }
        
        else {
            
        }
    }
    
    console.log("List of students in Just Dance"); 
})
