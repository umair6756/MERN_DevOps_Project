// controllers/taskController.js
const Task = require('../models/Task');
const asyncHandler = require('express-async-handler');

//    Get all tasks for a user

const getTasks = asyncHandler(async (req, res) => {
  const { 
    completed, 
    priority, 
    category, 
    tag, 
    isFavorite,
    dueDateFrom,
    dueDateTo,
    search 
  } = req.query;
  
  let query = { user: req.user.id };
  
  // Apply filters if provided
  if (completed !== undefined) {
    query.completed = completed === 'true';
  }
  
  if (priority) {
    query.priority = priority;
  }
  
  if (category) {
    query.category = category;
  }
  
  if (tag) {
    query.tag = tag;
  }
  
  if (isFavorite !== undefined) {
    query.isFavorite = isFavorite === 'true';
  }
  
  if (dueDateFrom || dueDateTo) {
    query.dueDate = {};
    if (dueDateFrom) query.dueDate.$gte = new Date(dueDateFrom);
    if (dueDateTo) query.dueDate.$lte = new Date(dueDateTo);
  }
  
  if (search) {
    query.$text = { $search: search };
  }
  
  const tasks = await Task.find(query).sort({ createdAt: -1 });
  res.status(200).json(tasks);
});

//     Get a single task

const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
  
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  
  res.status(200).json(task);
});

//     Create a new task

const createTask = asyncHandler(async (req, res) => {
  const {
    text,
    completed,
    priority,
    tag,
    dueDate,
    notes,
    category,
    isPrivate,
    isFavorite,
    timeSpent,
    estimatedTime,
    reminderTime,
    recurring,
    energyRequired,
    subtasks
  } = req.body;
  
  // Validation
  if (!text) {
    res.status(400);
    throw new Error('Please add a task text');
  }
  
  const task = await Task.create({
    user: req.user.id,
    text,
    completed: completed || false,
    priority: priority || 'medium',
    tag: tag || '',
    dueDate: dueDate || null,
    notes: notes || '',
    category: category || 'General',
    isPrivate: isPrivate || false,
    isFavorite: isFavorite || false,
    timeSpent: timeSpent || 0,
    estimatedTime: estimatedTime || 0,
    reminderTime: reminderTime || null,
    recurring: recurring || 'none',
    energyRequired: energyRequired || 3,
    subtasks: subtasks || []
  });
  
  res.status(201).json(task);
});

//     Update a task

const updateTask = asyncHandler(async (req, res) => {
  let task = await Task.findOne({ _id: req.params.id, user: req.user.id });
  
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  
  // Check if user is authorized to update this task
  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized to update this task');
  }
  
  task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  
  res.status(200).json(task);
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  let task = await Task.findOne({ _id: req.params.id, user: req.user.id });

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  
  // Check if user is authorized to delete this task
  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized to delete this task');
  }
  
  task = await Task.findByIdAndDelete(req.params.id);
  
  res.status(200).json(task);

});


const addSubtask = asyncHandler(async (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    res.status(400);
    throw new Error('Please add a subtask text');
  }
  
  const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
  
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  
  // Generate a unique ID for the subtask
  const newSubtask = {
    id: task.subtasks.length > 0 ? Math.max(...task.subtasks.map(s => s.id)) + 1 : 1,
    text,
    completed: false
  };
  
  task.subtasks.push(newSubtask);
  await task.save();
  
  res.status(201).json(task);
});

//   Toggle subtask completion

const toggleSubtaskCompletion = asyncHandler(async (req, res) => {
  const { taskId, subtaskId } = req.params;
  
  const task = await Task.findOne({ _id: taskId, user: req.user.id });
  
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  
  const subtask = task.subtasks.id(subtaskId);
  if (!subtask) {
    res.status(404);
    throw new Error('Subtask not found');
  }
  
  subtask.completed = !subtask.completed;
  await task.save();
  
  res.status(200).json(task);
});

//    Delete a subtask

const deleteSubtask = asyncHandler(async (req, res) => {
  const { taskId, subtaskId } = req.params;
  
  const task = await Task.findOne({ _id: taskId, user: req.user.id });
  
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  
  task.subtasks.id(subtaskId).remove();
  await task.save();
  
  res.status(200).json(task);
});






const toggleTaskFavorite = asyncHandler(async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user owns the task
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Toggle the favorite status
    task.isFavorite = !task.isFavorite;
    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    console.error('Error toggling favorite:', error);
    res.status(500).json({ message: 'Server error while toggling favorite' });
  }
});

//    Archive a task

const archiveTask = asyncHandler(async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user owns the task
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Toggle archive status
    task.isArchived = !task.isArchived;
    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    console.error('Error archiving task:', error);
    res.status(500).json({ message: 'Server error while archiving task' });
  }
});

//    Toggle task completion status

const toggleTaskCompletion = asyncHandler(async (req, res) => {
  try {
      let task = await Task.findOne({ _id: req.params.id, user: req.user.id });


    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user owns the task
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Toggle completion status
    task.completed = !task.completed;
    const updatedTask = await task.save();

    res.json(updatedTask);


      if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized to update this task');
  }
  
  task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  
  res.status(200).json(task);


  } catch (error) {
    console.error('Error toggling task completion:', error);
    res.status(500).json({ message: 'Server error while toggling completion' });
  }
});
module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompletion,
  addSubtask,
  toggleSubtaskCompletion,
  deleteSubtask,
  archiveTask,
  toggleTaskFavorite
};