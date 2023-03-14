const express = require('express')
//const bodyParser = require('body-parser');
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require("dotenv").config()
const notfound = require('./middleware/notfound')
//MIDDLEWARE

// This allows us to get the request body

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks' , tasks)

app.use(notfound)

const PORT = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
})
    } catch (error) {
        console.log(error);
    }
}

start()

