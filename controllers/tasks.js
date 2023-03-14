const Tasks = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const Task = await Tasks.find({});
    res.status(201).json({ Task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const Task = await Tasks.create(req.body);
    res.status(201).json({ Task });
  } catch (error) {
    res.status(500).json({ msg: error });
    //500 is a general server error
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const Task = await Tasks.findOne({ _id: taskID });
    if (!Task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ Task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};



const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const Task = await Tasks.findOneAndDelete({ _id: taskID });
    if (!Task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(200).json({ Task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;

    const task = await Tasks.findOneAndUpdate({_id:taskID}, req.body, {
        new: true,
        runValidators: true
    })

    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${taskID}` });
      }

      res.status(200).json({ task });
    
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
};
