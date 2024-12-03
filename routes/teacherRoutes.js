

// routes/teacherRoutes.js
const express = require('express');
const router = express.Router();
const Teacher = require('../model/teacher');
const {
    createItem,
    getItemById,
    getAllItems,
    updateItem,
    deleteItem,
  } = require('../refuctoringFunctions/ReusableFunctions')

// Add a new teacher
router.post('/', async (req, res) => {
  try {
    const teacher = await createItem(Teacher, req.body);
 
  res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a teacher by ID
router.get('/:id', async (req, res) => {
  try {
    const teacher = await getItemById(Teacher, req.params.id);
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await getAllItems(Teacher);
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a teacher
router.put('/:id', async (req, res) => {
  try {
    const teacher = await updateItem(Teacher, req.params.id, req.body);
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a teacher
router.delete('/:id', async (req, res) => {
  try {
    const teacher = await deleteItem(Teacher, req.params.id);
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
    res.json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

