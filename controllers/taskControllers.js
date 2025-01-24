const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const prisma = require('../utils/PrismaClients');
async function addTask(req, res){
    try{
        const data = req.body;
        const task = await prisma.task.create({data})
        res.status(200).json({message:"task added succesfully"})
    }catch(error){
        res.status(500).json({message: "Error adding task", error: error.message})
    }
}
async function getTask (req, res){
    try {
        const tasks = await prisma.task.findMany();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}
async function getTaskById (req, res){
    try {
        const id = req.params.id;
        const task = await prisma.task.findUnique({where: {id}});
        if(task){
            res.status(200).json(task)
        }else{
            res.status(404).json({message: 'task not found'})
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}
async function updateTask(req, res){
    try {
        const {id} = req.params;
        const data = req.body;
        const task = await prisma.task.findUnique({where: {id}});
        if(!task)
            return res.status(404).json({message: 'task not found'})
        const updatetask = await prisma.task.update(
            {where: {id}, data}
        );
        res.status(200).json(updatetask);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}
async function deleteTask(req, res){
    try {
        const {taskId} = req.params;
        const task = await prisma.task.findUnique({where: {id: taskId}});
        if(!task)
            return res.status(404).json({message: 'task not found'})
        const deletedtask = await prisma.task.delete({where: {id: taskId}});
        
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}
module.exports = {
    addTask, 
    getTask, 
    getTaskById, 
    updateTask, 
    deleteTask,
    
}