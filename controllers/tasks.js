const getAllTasks = (req,res) => {
    res.send('Get all task')
}

const createTask = (req,res) => {
    res.json(req.body)
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