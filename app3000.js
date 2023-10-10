const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('ISEC6000, Assignment2, Testing js application in Jenkis Pipeline'));

app.listen(port);
console.log(`App running for 30 seconds on http://localhost:${port}`);

setTimeout((function() {  
    return process.exit(0);
    }), 30000);
