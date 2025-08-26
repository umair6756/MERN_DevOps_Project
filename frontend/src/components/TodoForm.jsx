




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiChevronDown, FiChevronUp, FiClock, 
  FiFlag, FiTag, FiCalendar, FiEdit3, FiLock,
  FiStar, FiZap, FiRepeat, FiBell,FiPlus,FiUser
} from '../icons/icons';
import '../App.css';

const TodoForm = ({
  editId,
  editValue,
  setEditValue,
  inputValue,
  setInputValue,
  priority,
  setPriority,
  selectedCategory,
  setSelectedCategory,
  selectedTag,
  setSelectedTag,
  dueDate,
  setDueDate,
  notes,
  setNotes,
  reminderTime,
  setReminderTime,
  recurring,
  setRecurring,
  timeEstimate,
  setTimeEstimate,
  energyLevel,
  setEnergyLevel,
  isPrivate,
  setIsPrivate,
  isFavorite,
  setIsFavorite,
  showAdvancedOptions,
  setShowAdvancedOptions,
  cancelEdit,
  updateTodo,
  addTodo,
  setIsFormOpen,
  tags,
  categories
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (editId) {
        cancelEdit();
      } else {
        setIsFormOpen(false);
      }
      setIsClosing(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateTodo();
    } else {
      addTodo();
    }
  };

  const PriorityOption = ({ level, label, color }) => (
    <button
      type="button"
      onClick={() => setPriority(level)}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${priority === level ? 'text-white' : ''}`}
      style={{
        background: priority === level ? `var(--${color})` : 'var(--input)',
        color: priority === level ? 'white' : 'var(--text)'
      }}
    >
      <FiFlag className={priority === level ? 'text-white' : `text-${color}-500`} />
      <span>{label}</span>
    </button>
  );

  const EnergyLevel = ({ level }) => (
    <button
      type="button"
      onClick={() => setEnergyLevel(level)}
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${energyLevel === level ? 'scale-110' : ''}`}
      style={{
        background: energyLevel === level ? 'var(--accent)' : 'var(--input)',
        color: energyLevel === level ? 'white' : 'var(--text)'
      }}
    >
      {level}
    </button>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur-md"
        style={{ background: 'rgba(0, 0, 0, 0.7)' }}
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="card rounded-2xl p-6 w-full max-w-2xl backdrop-blur-lg border max-h-[90vh] overflow-y-auto"
          style={{ 
            background: 'var(--card)',
            color: 'var(--text)',
            borderColor: 'var(--accent)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text)' }}>
              {editId ? <FiEdit3 /> : <FiPlus />}
              {editId ? 'Edit Task' : 'Create New Task'}
            </h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="p-2 rounded-full transition-colors"
              style={{ background: 'var(--input)', color: 'var(--text)' }}
              aria-label="Close form"
            >
              <FiX />
            </motion.button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Task Description */}
            <div className="relative">
              <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }}></span>
                Task Description *
              </label>
              <textarea
                value={editId ? editValue : inputValue}
                onChange={(e) => editId ? setEditValue(e.target.value) : setInputValue(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border-2 transition-all focus:ring-2 focus:ring-offset-2 resize-none"
                placeholder="What needs to be done?"
                rows={2}
                required
                style={{
                  background: 'var(--input)',
                  color: 'var(--text)',
                  borderColor: 'var(--accent)',
                  focusBorderColor: 'var(--button)',
                  focusRingColor: 'var(--accent)'
                }}
              />
            </div>
            
            {/* Priority and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <FiFlag />
                  Priority
                </label>
                <div className="flex gap-2">
                  <PriorityOption level="high" label="High" color="red" />
                  <PriorityOption level="medium" label="Medium" color="yellow" />
                  <PriorityOption level="low" label="Low" color="green" />
                </div>
              </div>
              
              <div>
                <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <FiTag />
                  Category
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all appearance-none pl-10"
                    style={{
                      background: 'var(--input)',
                      color: 'var(--text)',
                      borderColor: 'var(--accent)'
                    }}
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                  <FiTag className="absolute left-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                  <FiChevronDown className="absolute right-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                </div>
              </div>
            </div>
            
            {/* Tag and Due Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <FiTag />
                  Tag
                </label>
                <div className="relative">
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all appearance-none pl-10"
                    style={{
                      background: 'var(--input)',
                      color: 'var(--text)',
                      borderColor: 'var(--accent)'
                    }}
                  >
                    <option value="">Select Tag</option>
                    {tags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                  <FiTag className="absolute left-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                  <FiChevronDown className="absolute right-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                </div>
              </div>
              
              <div>
                <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <FiCalendar />
                  Due Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all pl-10"
                    style={{
                      background: 'var(--input)',
                      color: 'var(--text)',
                      borderColor: 'var(--accent)'
                    }}
                  />
                  <FiCalendar className="absolute left-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <FiEdit3 />
                Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all"
                placeholder="Additional notes, details, or context..."
                rows={3}
                style={{
                  background: 'var(--input)',
                  color: 'var(--text)',
                  borderColor: 'var(--accent)'
                }}
              />
            </div>

            {/* Advanced Options Toggle */}
            <motion.div 
              className="pt-4 border-t"
              style={{ borderColor: 'var(--accent)' }}
            >
              <motion.button
                type="button"
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="flex items-center gap-2 p-3 rounded-xl w-full transition-all hover:bg-opacity-10"
                style={{ 
                  background: showAdvancedOptions ? 'var(--accent)' : 'var(--input)',
                  color: 'var(--text)'
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {showAdvancedOptions ? <FiChevronUp /> : <FiChevronDown />}
                <span className="font-semibold">Advanced Options</span>
                <span className="ml-auto text-sm opacity-70">
                  {showAdvancedOptions ? 'Hide' : 'Show'} additional settings
                </span>
              </motion.button>
            </motion.div>

            {/* Advanced Options */}
            <AnimatePresence>
              {showAdvancedOptions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                        <FiBell />
                        Set Reminder
                      </label>
                      <div className="relative">
                        <input
                          type="time"
                          value={reminderTime}
                          onChange={(e) => setReminderTime(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all pl-10"
                          style={{
                            background: 'var(--input)',
                            color: 'var(--text)',
                            borderColor: 'var(--accent)'
                          }}
                        />
                        <FiBell className="absolute left-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                        <FiRepeat />
                        Recurring Task
                      </label>
                      <div className="relative">
                        <select
                          value={recurring}
                          onChange={(e) => setRecurring(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all appearance-none pl-10"
                          style={{
                            background: 'var(--input)',
                            color: 'var(--text)',
                            borderColor: 'var(--accent)'
                          }}
                        >
                          <option value="none">No Recurrence</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                        <FiRepeat className="absolute left-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                        <FiChevronDown className="absolute right-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                        <FiClock />
                        Time Estimate (minutes)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={timeEstimate}
                          onChange={(e) => setTimeEstimate(parseInt(e.target.value) || 0)}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all pl-10"
                          placeholder="Estimated time to complete"
                          min="0"
                          style={{
                            background: 'var(--input)',
                            color: 'var(--text)',
                            borderColor: 'var(--accent)'
                          }}
                        />
                        <FiClock className="absolute left-3 top-3.5 opacity-60" style={{ color: 'var(--text)' }} />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-3 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                        <FiZap />
                        Energy Required
                      </label>
                      <div className="flex items-center gap-2 p-2 rounded-xl" style={{ background: 'var(--input)' }}>
                        {[1, 2, 3, 4, 5].map(level => (
                          <EnergyLevel key={level} level={level} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.label 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer"
                      style={{ 
                        background: isPrivate ? 'var(--accent)' : 'var(--input)',
                        color: isPrivate ? 'white' : 'var(--text)'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isPrivate}
                        onChange={() => setIsPrivate(!isPrivate)}
                        className="hidden"
                      />
                      <FiLock className={isPrivate ? 'text-white' : ''} />
                      <span>Private Task</span>
                    </motion.label>
                    
                    <motion.label 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer"
                      style={{ 
                        background: isFavorite ? 'var(--accent)' : 'var(--input)',
                        color: isFavorite ? 'white' : 'var(--text)'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isFavorite}
                        onChange={() => setIsFavorite(!isFavorite)}
                        className="hidden"
                      />
                      <FiStar className={isFavorite ? 'text-white' : ''} />
                      <span>Favorite</span>
                    </motion.label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-6">
              <motion.button
                type="button"
                onClick={handleClose}
                className="px-5 py-3 rounded-xl border-2 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'var(--input)',
                  color: 'var(--text)',
                  borderColor: 'var(--accent)'
                }}
              >
                <FiX />
                Cancel
              </motion.button>
              
              <motion.button
                type="submit"
                className="px-5 py-3 rounded-xl transition-all flex items-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: 'var(--button)', color: 'white' }}
              >
                {editId ? <FiEdit3 /> : <FiPlus />}
                {editId ? 'Update Task' : 'Create Task'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TodoForm;