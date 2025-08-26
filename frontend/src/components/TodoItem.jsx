



























import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheckSquare, FiSquare, FiStar, FiEdit, 
  FiTrash2, FiFlag, FiCalendar, FiTag, 
  FiClock, FiZap, FiLock, FiPaperclip, 
  FiUser, FiReminder, FiRepeat, FiChevronDown,
  FiChevronUp, FiEye, FiEyeOff, FiLink, FiMoreVertical
} from '../icons/icons';

const TodoItem = ({
  todo,
  toggleComplete,
  toggleFavorite,
  startEdit,
  deleteTodo,
  toggleSubtask,
  getPriorityIcon,
  getCategoryIcon,
  isOverdue,
  viewMode = 'list'
}) => {
  const [expanded, setExpanded] = useState(false);
  const [showActions, setShowActions] = useState(false);
  
  const priorityInfo = getPriorityIcon(todo.priority);
  const categoryInfo = getCategoryIcon(todo.category);
  
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const toggleExpanded = () => setExpanded(!expanded);

  if (viewMode === 'list') {
    return (
      <motion.div
        layout
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`card rounded-2xl p-5 shadow-lg transition-all duration-300 ${todo.completed ? 'opacity-70' : 'hover:shadow-xl'} border border-opacity-10`}
        style={{
          background: 'var(--card)',
          borderColor: todo.completed ? 'var(--accent)' : 'var(--input)'
        }}
      >
        <div className="flex items-start gap-4">
          {/* Checkbox with nice animation */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleComplete(todo._id)}
            className={`mt-1 p-2 rounded-full transition-all duration-200 ${todo.completed ? 'text-green-600' : 'text-gray-400 hover:scale-110'}`}
            style={{
              background: todo.completed ? 'var(--accent)' : 'var(--input)',
              color: todo.completed ? 'white' : 'var(--text)'
            }}
            aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {todo.completed ? <FiCheckSquare size={20} /> : <FiSquare size={20} />}
          </motion.button>
          
          <div className="flex-1 min-w-0">
            {/* Main content area */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className={`font-semibold text-lg truncate ${todo.completed ? 'line-through' : ''}`} style={{color: 'var(--text)'}}>
                {todo.text}
              </h3>
              
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2">
                {todo.isPrivate && (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="badge px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium"
                    style={{background: 'var(--input)', color: 'var(--accent)'}}
                  >
                    <FiLock size={12} /> Private
                  </motion.span>
                )}
                
                {todo.isFavorite && (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="badge px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium"
                    style={{background: 'var(--input)', color: 'var(--accent)'}}
                  >
                    <FiStar size={12} className="text-yellow-500" /> Favorite
                  </motion.span>
                )}

                {todo.reminderTime && (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="badge px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium"
                    style={{background: 'var(--input)', color: 'var(--accent)'}}
                  >
                    <FiReminder size={12} /> Reminder
                  </motion.span>
                )}

                {todo.recurring !== 'none' && (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="badge px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium"
                    style={{background: 'var(--input)', color: 'var(--accent)'}}
                  >
                    <FiRepeat size={12} /> {todo.recurring}
                  </motion.span>
                )}
              </div>
            </div>
            
            {/* Notes with expandable feature */}
            {todo.notes && (
              <motion.div 
                className="notes-container mb-4"
                initial={false}
                animate={{ height: expanded ? 'auto' : '3.6rem' }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="text-sm opacity-85 p-3 rounded-xl cursor-pointer"
                  style={{background: 'var(--input)', color: 'var(--text)'}}
                  onClick={toggleExpanded}
                >
                  <p className={expanded ? '' : 'line-clamp-2'}>
                    {todo.notes}
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="text-xs flex items-center gap-1 opacity-70">
                      {expanded ? (
                        <>Show less <FiChevronUp size={12} /></>
                      ) : (
                        <>Show more <FiChevronDown size={12} /></>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Metadata chips */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium`} 
                style={{background: 'var(--input)', color: 'var(--text)'}}
              >
                {React.createElement(priorityInfo.icon, { size: 14, style: { color: priorityInfo.color } })}
                <span className="capitalize">{todo.priority}</span>
              </motion.div>
              
              {todo.dueDate && (
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${isOverdue(todo.dueDate) && !todo.completed ? 'ring-1 ring-red-400' : ''}`} 
                  style={{background: 'var(--input)', color: isOverdue(todo.dueDate) && !todo.completed ? '#f87171' : 'var(--text)'}}
                >
                  <FiCalendar size={14} style={{color: 'var(--accent)'}} />
                  <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
                </motion.div>
              )}
              
              {todo.category && (
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium" 
                  style={{background: 'var(--input)', color: 'var(--text)'}}
                >
                  {React.createElement(categoryInfo.icon, { size: 14, style: { color: 'var(--accent)' } })}
                  <span>{todo.category}</span>
                </motion.div>
              )}

              {todo.estimatedTime > 0 && (
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium" 
                  style={{background: 'var(--input)', color: 'var(--text)'}}
                >
                  <FiClock size={14} style={{color: 'var(--accent)'}} />
                  <span>{todo.estimatedTime}m</span>
                </motion.div>
              )}

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium" 
                style={{background: 'var(--input)', color: 'var(--text)'}}
              >
                <FiZap size={14} style={{color: 'var(--accent)'}} />
                <span>Energy: {todo.energyRequired}/5</span>
              </motion.div>
            </div>
            
            {/* Progress bars for subtasks */}
            {todo.subtasks && todo.subtasks.length > 0 && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium uppercase tracking-wide" style={{color: 'var(--text)'}}>
                    Subtasks
                  </span>
                  <span className="text-sm opacity-70" style={{color: 'var(--text)'}}>
                    {todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length}
                  </span>
                </div>
                <div className="w-full rounded-full h-2 mb-3" style={{background: 'var(--input)'}}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(todo.subtasks.filter(st => st.completed).length / todo.subtasks.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                </div>
                <div className="space-y-2">
                  {todo.subtasks.slice(0, expanded ? todo.subtasks.length : 3).map(subtask => (
                    <motion.div 
                      key={subtask.id} 
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-opacity-20 transition-colors"
                      style={{background: 'var(--input)'}}
                      whileHover={{ x: 5 }}
                    >
                      <button
                        onClick={() => toggleSubtask(todo._id, subtask._id)}
                        className={`p-1.5 rounded-full flex-shrink-0 ${subtask.completed ? 'text-green-600' : 'text-gray-400'}`}
                        style={{
                          background: subtask.completed ? 'var(--accent)' : 'var(--input)',
                          color: subtask.completed ? 'white' : 'var(--text)'
                        }}
                      >
                        {subtask.completed ? <FiCheckSquare size={16} /> : <FiSquare size={16} />}
                      </button>
                      <span className={`text-sm flex-1 ${subtask.completed ? 'line-through opacity-70' : ''}`} style={{color: 'var(--text)'}}>
                        {subtask.text}
                      </span>
                    </motion.div>
                  ))}
                  {todo.subtasks.length > 3 && (
                    <button 
                      onClick={toggleExpanded}
                      className="text-xs flex items-center gap-1 opacity-70 mt-2"
                      style={{color: 'var(--text)'}}
                    >
                      {expanded ? (
                        <>Show less <FiChevronUp size={12} /></>
                      ) : (
                        <>+{todo.subtasks.length - 3} more <FiChevronDown size={12} /></>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Additional sections (attachments, collaborators) */}
            <AnimatePresence>
              {(todo.attachments?.length > 0 || todo.collaborators?.length > 0) && expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {todo.attachments && todo.attachments.length > 0 && (
                    <div>
                      <div className="text-sm font-medium mb-2 flex items-center gap-2" style={{color: 'var(--text)'}}>
                        <FiPaperclip size={14} style={{color: 'var(--accent)'}} />
                        Attachments ({todo.attachments.length})
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {todo.attachments.map((attachment, index) => (
                          <motion.a 
                            key={index}
                            href={attachment.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                            style={{background: 'var(--input)', color: 'var(--text)'}}
                          >
                            <FiLink size={12} style={{color: 'var(--accent)'}} />
                            <span className="max-w-[120px] truncate">{attachment.name}</span>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}

                  {todo.collaborators && todo.collaborators.length > 0 && (
                    <div>
                      <div className="text-sm font-medium mb-2 flex items-center gap-2" style={{color: 'var(--text)'}}>
                        <FiUser size={14} style={{color: 'var(--accent)'}} />
                        Collaborators ({todo.collaborators.length})
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {todo.collaborators.map((collaborator, index) => (
                          <motion.div 
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium"
                            style={{background: 'var(--input)', color: 'var(--text)'}}
                          >
                            <FiUser size={12} style={{color: 'var(--accent)'}} />
                            <span>{collaborator}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Action buttons with dropdown on mobile */}
          <div className="relative">
            <div className="flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleFavorite(todo._id)}
                className="p-2.5 rounded-xl transition-all duration-200"
                style={{
                  background: 'var(--input)',
                  color: todo.isFavorite ? 'var(--accent)' : 'var(--text)'
                }}
                aria-label={todo.isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <FiStar className={todo.isFavorite ? "text-yellow-500" : ""} size={18} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => startEdit(todo)}
                className="p-2.5 rounded-xl transition-all duration-200"
                style={{background: 'var(--input)', color: 'var(--text)'}}
                aria-label="Edit task"
              >
                <FiEdit size={18} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => deleteTodo(todo._id)}
                className="p-2.5 rounded-xl transition-all duration-200"
                style={{background: 'var(--input)', color: 'var(--text)'}}
                aria-label="Delete task"
              >
                <FiTrash2 size={18} />
              </motion.button>

              {/* Mobile dropdown trigger (hidden on desktop) */}
              <button 
                className="p-2.5 rounded-xl md:hidden transition-all duration-200"
                style={{background: 'var(--input)', color: 'var(--text)'}}
                onClick={() => setShowActions(!showActions)}
              >
                <FiMoreVertical size={18} />
              </button>
            </div>

            {/* Mobile actions dropdown */}
            <AnimatePresence>
              {showActions && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 py-2 rounded-xl shadow-lg z-10 md:hidden"
                  style={{background: 'var(--card)'}}
                >
                  <button
                    onClick={() => { toggleFavorite(todo._id); setShowActions(false); }}
                    className="w-full px-4 py-2 text-left flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{color: 'var(--text)'}}
                  >
                    <FiStar size={16} className={todo.isFavorite ? "text-yellow-500" : ""} />
                    {todo.isFavorite ? "Remove from favorites" : "Add to favorites"}
                  </button>
                  <button
                    onClick={() => { startEdit(todo); setShowActions(false); }}
                    className="w-full px-4 py-2 text-left flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{color: 'var(--text)'}}
                  >
                    <FiEdit size={16} />
                    Edit Task
                  </button>
                  <button
                    onClick={() => { deleteTodo(todo.id); setShowActions(false); }}
                    className="w-full px-4 py-2 text-left flex items-center gap-2 text-red-500 hover:opacity-80 transition-opacity"
                  >
                    <FiTrash2 size={16} />
                    Delete Task
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Date and expand/collapse footer */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-opacity-20" style={{borderColor: 'var(--input)'}}>
          <div className="text-xs opacity-70" style={{color: 'var(--text)'}}>
            Created: {new Date(todo.date).toLocaleDateString()}
          </div>
          <button 
            onClick={toggleExpanded}
            className="text-xs flex items-center gap-1 opacity-70 transition-opacity hover:opacity-100"
            style={{color: 'var(--text)'}}
          >
            {expanded ? (
              <>Collapse <FiChevronUp size={12} /></>
            ) : (
              <>Expand <FiChevronDown size={12} /></>
            )}
          </button>
        </div>
      </motion.div>
    );
  } else {
    // Grid view implementation would go here
    // (Similar enhancements applied to grid view)
    return (
      <motion.div
        layout
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={` p-5  shadow-lg transition-all duration-300 ${todo.completed ? 'opacity-70' : 'hover:shadow-xl'} border border-opacity-10 h-full flex flex-col`}
        style={{
          background: 'var(--card)',
          borderColor: todo.completed ? 'var(--accent)' : 'var(--input)'
        }}
      >
        {/* Grid view content with similar enhancements */}
        <div className="flex justify-between items-start mb-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleComplete(todo._id)}
            className={`p-2.5 rounded-full transition-all duration-200 ${todo.completed ? 'text-green-600' : 'text-gray-400 hover:scale-110'}`}
            style={{
              background: todo.completed ? 'var(--accent)' : 'var(--input)',
              color: todo.completed ? 'white' : 'var(--text)'
            }}
          >
            {todo.completed ? <FiCheckSquare size={20} /> : <FiSquare size={20} />}
          </motion.button>
          
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleFavorite(todo._id)}
              className="p-2 rounded-lg transition-colors"
              style={{
                background: 'var(--input)',
                color: todo.isFavorite ? 'var(--accent)' : 'var(--text)'
              }}
            >
              {todo.isFavorite ? (
                <FiStar className="text-yellow-500" size={16} />
              ) : (
                <FiStar size={16} />
              )}
            </motion.button>


                          <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => deleteTodo(todo._id)}
                className="p-2 rounded-lg transition-colors"
                style={{background: 'var(--input)', color: 'var(--text)'}}
                aria-label="Delete task"
              >
                <FiTrash2 size={18} />
              </motion.button>
          </div>
        </div>
        
        <div className="mb-4 flex-1">
          <h3 className={`font-semibold text-lg mb-2 ${todo.completed ? 'line-through' : ''}`} style={{color: 'var(--text)'}}>
            {todo.text}
          </h3>
          
          {todo.notes && (
            <p className="text-sm opacity-75 line-clamp-3 p-2 rounded-lg" style={{background: 'var(--input)', color: 'var(--text)'}}>
              {todo.notes}
            </p>
          )}
        </div>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-medium`} style={{background: 'var(--input)', color: 'var(--text)'}}>
            <FiFlag style={{color: 'var(--accent)'}} />
            <span className="capitalize">{todo.priority}</span>
          </div>
          
          {todo.dueDate && (
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-medium ${isOverdue(todo.dueDate) && !todo.completed ? 'ring-1 ring-red-400' : ''}`} style={{background: 'var(--input)'}}>
              <FiCalendar size={14} style={{color: 'var(--accent)'}} />
              <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>
        
        {todo.subtasks && todo.subtasks.length > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1 text-xs">
              <span style={{color: 'var(--text)'}}>Progress</span>
              <span className="opacity-70" style={{color: 'var(--text)'}}>
                {todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length}
              </span>
            </div>
            <div className="w-full rounded-full h-2" style={{background: 'var(--input)'}}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(todo.subtasks.filter(st => st.completed).length / todo.subtasks.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-2 rounded-full"
                style={{ background: 'var(--accent)' }}
              ></motion.div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center text-xs" style={{color: 'var(--text)'}}>
          <div className="opacity-70">
            {new Date(todo.date).toLocaleDateString()}
          </div>
          
          {todo.isPrivate && (
            <div className="flex items-center gap-1 opacity-70">
              <FiLock size={12} style={{color: 'var(--accent)'}} />
            </div>
          )}
        </div>
      </motion.div>
    );
  }
};

export default TodoItem;