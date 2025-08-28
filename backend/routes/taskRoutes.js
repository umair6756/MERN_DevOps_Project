// // routes/taskRoutes.js
// const express = require('express');
// const router = express.Router();
// const {
//   getTasks,
//   getTask,
//   createTask,
//   updateTask,
//   deleteTask,
//   toggleTaskCompletion,
//   addSubtask,
//   toggleSubtaskCompletion,
//   deleteSubtask
// } = require('../controllers/TaskController');
// const { protect } = require('../middleware/authMiddleware');

// // All routes are protected and require authentication
// router.route('/')
//   .get(protect, getTasks)
//   .post(protect, createTask);

// router.route('/:id')
//   .get(protect, getTask)
//   .put(protect, updateTask)
//   .delete(protect, deleteTask);

// router.route('/:id/toggle')
//   .patch(protect, toggleTaskCompletion);

// router.route('/:id/subtasks')
//   .post(protect, addSubtask);

// router.route('/:taskId/subtasks/:subtaskId/toggle')
//   .patch(protect, toggleSubtaskCompletion);

// router.route('/:taskId/subtasks/:subtaskId')
//   .delete(protect, deleteSubtask);

// module.exports = router;















// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompletion,
  archiveTask,
  toggleTaskFavorite,
  addSubtask,
  toggleSubtaskCompletion,
  deleteSubtask
} = require('../controllers/TaskController');
const { protect } = require('../middleware/authMiddleware');

// All routes are protected and require authentication
router.route('/')
  .get(protect, getTasks)
  .post(protect, createTask);

router.route('/:id')
  .get(protect, getTask)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

router.route('/:id/toggle')
  .patch(protect, toggleTaskCompletion);

router.route('/:id/archive')
  .patch(protect, archiveTask);

router.route('/:id/favorite')
  .patch(protect, toggleTaskFavorite);

router.route('/:id/subtasks')
  .post(protect, addSubtask);

router.route('/:taskId/subtasks/:subtaskId/toggle')
  .patch(protect, toggleSubtaskCompletion);

router.route('/:taskId/subtasks/:subtaskId')
  .delete(protect, deleteSubtask);

module.exports = router;