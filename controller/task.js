const taskSchema = require('../MODELS/task')
const asyncWrapper = require('../middleware/async')
const {customError }= require('../errors/custom-error')

const getAllTask = asyncWrapper(
    async (req, res) => {
        const task = await taskSchema.find({})
        res.status(200).json({ tasks: task })
    }
)

const getTask = asyncWrapper(async (req, res,next) => {
    const { id: taskID } = req.params
    const task = await taskSchema.findOne({ _id: taskID })
    if (!task) {
        // const error=new Error('Not Found')
        // error.status=404
        // return next(error)
        return next(customError(`No Task with this id ${taskID}`,404))
        // return res.status(404).json("No Task with this id")
    }
    res.status(200).json({ task });
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await taskSchema.create(req.body)
    res.status(201).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    console.log(taskID);
    const task = await taskSchema.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(customError(`No Task with this id ${taskID}`,404))
        // return res.status(404).json("No Task with this id")
    }
    res.status(200).json({ task })
}
)


const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        console.log(taskID);

        const task = await taskSchema.findOneAndDelete({ _id: taskID })
        if (!task) {
            return next(customError(`No Task with this id ${taskID}`,404))
            // return res.status(404).json("No Task with this id")
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