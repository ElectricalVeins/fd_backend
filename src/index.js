const express = require('express');
const errorHandlers = require('./middlewares/error_handlers');
const router=require('./router');
const PORT = process.env.NODE_ENV || 3000;

const app = express();
app.use(express.json());
app.use(router);

app.use(errorHandlers.sequelizeErrorHandler);

app.listen(PORT,
           () => console.log(`Server app started on port${PORT}`));
