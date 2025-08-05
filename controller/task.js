const taskSchema = require('../MODELS/task')

const getAllTask = async (req, res) => {
    try {
        const task = await taskSchema.find({})
        res.status(200).json({ tasks: task })
    } catch (e) {
        res.status(500).json({ msg: e })
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await taskSchema.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json("No Task with this id")
        }
        res.status(200).json({ task })
    } catch (e) {
        res.status(500).json({ msg: e })
    }

}

const createTask = async (req, res) => {
    try {
        const task = await taskSchema.create(req.body)
        res.status(201).json({ task })
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: e })

    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        //    const task= await taskSchema.findOneAndDelete({_id: taskID})
        if (!task) {
            return res.status(404).json("No Task with this id")
        }
        res.status(200).json({ id: taskID, data: req.body })
    } catch (e) {
        res.status(500).json({ msg: e })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await taskSchema.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json("No Task with this id")
        }
        res.status(200).json({ task })
    } catch (e) {
        res.status(500).json({ msg: e })
    }
}



module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask
}