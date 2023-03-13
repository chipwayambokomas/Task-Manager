const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require("dotenv").config()
//MIDDLEWARE

// This allows us to get the request body
app.use(express.json())


app.use('/api/v1/tasks' , tasks)


const PORT = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
})
    } catch (error) {
        console.log(err0r);
    }
}

start()

