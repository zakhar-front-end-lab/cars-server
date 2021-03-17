const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/cars', (req, resp) => {
    const cars = fs.readFileSync('./cars.json', { encoding: 'utf-8' });

    resp.send(cars);
});

app.post('/cars', (req, resp) => {
    console.log(req.body);

    fs.writeFileSync('./cars.json', JSON.stringify(req.body));

    resp.sendStatus(200);
});


app.listen(8080, () => { console.log('Server started!') });
