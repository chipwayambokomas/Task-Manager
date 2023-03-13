const Tasks = require('../models/Task')

const getAllTasks = (req,res) => {
    res.send('Get all task')
}

const createTask = async (req,res) => {
    const Task = await Tasks.create(req.body)
    res.status(201).json({Task})
}

const getTask = (req,res) => {
    res.json({id:req.params.id})
}

const editTask = (req,res) => {
    res.send('Edit task')
}

const deleteTask = (req,res) => {
    res.send('Delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    editTask,
    deleteTask
}