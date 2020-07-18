const express = require('express');
require('dotenv').config();

const app = express();



app.use(express.json());



app.use('/', require('./routes'));


const port = process.env.PORT || 3005;
app.listen(port,()=>{console.log(`listening on ${port}`)});