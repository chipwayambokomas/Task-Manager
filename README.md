# Task-Manager

This is my first attempt at a nodejs and expressjs project. Here I have built the server and API for a task manager. It allows the user to add a task, delete it as well as edit the name and state of it (complete it).

## What I Learned

* I learnt how to create a server and host it on a local port.
* I learnt how to create a database using mongoDB Atlas, host it on the cloud and use mongoose to connect it to the back-end server.
* I learnt how to create routes that utilize the REST API functionality.
* Implememt CRUD coding and test the functionality using Postman to test the post, get, delete and patch requests.
* How to use middleware to add universal functionality to routes and create my own 404 errors.
* I learnt how to use module.exports to create controllers and routes that clean up the code.
* I learnt how to use dotenv to hide secret variables I do not want people who have access to the code to see.
* I learnt how to use nodemon to help automatically refresh the server everytime we hit save.

## Dependencies 

* "body-parser": "^1.20.2",
* "dotenv": "^8.2.0",
* "express": "^4.17.1",
* "mongoose": "^5.11.10"
* "nodemon": "^2.0.7"
