// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser, getUser } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');

// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/user', protect, getUser);

// module.exports = router;














// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  updatePreferences
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.put('/preferences', protect, updatePreferences);

module.exports = router;