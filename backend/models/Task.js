// models/Task.js
const mongoose = require('mongoose');

const SubtaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { _id: true });

const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  date: {
    type: Date,
    default: Date.now
  },
  tag: {
    type: String,
    default: ''
  },
  dueDate: {
    type: Date
  },
  notes: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'General'
  },
  isPrivate: {
    type: Boolean,
    default: false
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  isArchived: {
    type: Boolean,
    default: false
  },
  timeSpent: {
    type: Number, // in minutes
    default: 0
  },
  estimatedTime: {
    type: Number, // in minutes
    default: 0
  },
  reminderTime: {
    type: String // format: "HH:MM"
  },
  recurring: {
    type: String,
    enum: ['none', 'daily', 'weekly', 'monthly', 'yearly'],
    default: 'none'
  },
  attachments: [{
    name: String,
    url: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  collaborators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  energyRequired: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  },
  subtasks: [SubtaskSchema]
}, {
  timestamps: true
});

// Index for better query performance
TaskSchema.index({ user: 1, completed: 1 });
TaskSchema.index({ user: 1, dueDate: 1 });
TaskSchema.index({ user: 1, isFavorite: 1 });

module.exports = mongoose.model('Task', TaskSchema);