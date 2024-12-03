

// routes/StudentRoutes.js
const express = require('express');
const router = express.Router();
const Student = require('../model/studentModel');
const {
    createItem,
    getItemById,
    getAllItems,
    updateItem,
    deleteItem,
  } = require('../refuctoringFunctions/ReusableFunctions')

// Add a new Student
router.post('/', async (req, res) => {
  try {
    const student = await createItem(Student, req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a Student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await getItemById(Student, req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all Students
router.get('/', async (req, res) => {
  try {
    const students = await getAllItems(Student);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Student
router.put('/:id', async (req, res) => {
  try {
    const student = await updateItem(Student, req.params.id, req.body);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Student
router.delete('/:id', async (req, res) => {
  try {
    const student = await deleteItem(Student, req.params.id);
    if (!Student) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

