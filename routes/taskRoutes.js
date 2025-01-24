const express = require('express');
const router = express.Router();
const { addTask } = require('../controllers/taskControllers');
const { validations, handleValidationErrors } = require('../utils/validator');

router.post('/tasks', validations.tagValidation, handleValidationErrors, addTask);
router.get('/tasks', getTask);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', validations.tagValidation, handleValidationErrors, updateTask);
router.delete('/tasks/:taskId', deleteTask);
