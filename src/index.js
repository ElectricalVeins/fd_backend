const {sequelize} = require('./db/models');
const express = require('express');

const PORT = process.env.NODE_ENV || 3000;

const app = express();

app.get('/', (req, res, next) => {

    sequelize
        .authenticate()
        .then(() => {
            res.send('Ok')
        }).catch(() => {
        res.status(404).send('Not ok')
    })
});

app.listen(PORT,
    () => console.log(`Server app started on port${PORT}`));