

const express = require('express');
const { readFile } = require('fs');



const app = express();

app.get('/', (req, res) => {
    
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send("Sorry, Error");
        }       
        res.send(html);
    })


}); 


app.listen(process.env.PORT || 3000, () => console.log('listening on localhost port 3000 or (rayanegpt.com)'));