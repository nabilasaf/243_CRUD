const express = require('express');
let mysql = require('mysql2');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ZaZaR!CH1',
    database: 'biodata',
    port: 3308
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', + err.stack);
        return;
    }
    console.log('Connection Successfully!');
});

app.get('/api/mahasiswa ', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) {
            console.error('Error executing query: ', +err.stack);
            res.status(500).send('Error fetching users');
            return;
        }
        res.json(results);
    });
});


