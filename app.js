const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('./db/connect')
//MIDDLEWARE

// This allows us to get the request body
app.use(express.json())


app.use('/api/v1/tasks' , tasks)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
})