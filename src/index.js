const express = require('express');
const errorHandlers = require('./middlewares/error_handlers');
const router = require('./router');
const PORT = process.env.NODE_ENV || 3030;
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api',router);

//app.use(errorHandlers.sequelizeErrorHandler);

app.listen(PORT,
           () => console.log(`Server app started on port ${PORT}`));
