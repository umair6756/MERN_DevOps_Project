// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiSliders, FiRefreshCw } from '../icons/icons';

// import '../App.css'

// import * as FiIcons from "react-icons/fi";


// const AdvancedFilters = ({
//   advancedFilters,
//   setAdvancedFilters,
//   tags,
//   categories
// }) => {
//   return (
// <motion.div 
//   initial={{ opacity: 0, height: 0 }}
//   animate={{ opacity: 1, height: 'auto' }}
//   exit={{ opacity: 0, height: 0 }}
//   className="card rounded-xl p-5 mb-6 overflow-hidden"
//   style={{background: 'var(--card)'}}
// >
//   <div className="flex justify-between items-center mb-4">
//     <h3 className="font-semibold flex items-center gap-2" style={{color: 'var(--text)'}}>
//       <FiSliders style={{color: 'var(--accent)'}} /> Advanced Filters
//     </h3>
//     <button 
//       onClick={() => setAdvancedFilters({
//         priority: '',
//         dueDateRange: '',
//         withNotes: false,
//         withSubtasks: false,
//         tags: [],
//         categories: []
//       })}
//       className="text-sm flex items-center gap-1 transition-colors"
//       style={{color: 'var(--accent)'}}
//     >
//       <FiRefreshCw size={14} /> Clear All
//     </button>
//   </div>
  
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//     <div>
//       <label className="block text-sm font-medium mb-1" style={{color: 'var(--text)'}}>Priority</label>
//       <select
//         value={advancedFilters.priority}
//         onChange={(e) => setAdvancedFilters({...advancedFilters, priority: e.target.value})}
//         className="w-full px-3 py-2 rounded-lg border transition-all"
//         style={{
//           background: 'var(--input)',
//           color: 'var(--text)',
//           borderColor: 'var(--accent)'
//         }}
//       >
//         <option value="">All Priorities</option>
//         <option value="high">High</option>
//         <option value="medium">Medium</option>
//         <option value="low">Low</option>
//       </select>
//     </div>
    
//     <div>
//       <label className="block text-sm font-medium mb-1" style={{color: 'var(--text)'}}>Due Date</label>
//       <select
//         value={advancedFilters.dueDateRange}
//         onChange={(e) => setAdvancedFilters({...advancedFilters, dueDateRange: e.target.value})}
//         className="w-full px-3 py-2 rounded-lg border transition-all"
//         style={{
//           background: 'var(--input)',
//           color: 'var(--text)',
//           borderColor: 'var(--accent)'
//         }}
//       >
//         <option value="">Any Date</option>
//         <option value="today">Today</option>
//         <option value="tomorrow">Tomorrow</option>
//         <option value="week">Next 7 Days</option>
//         <option value="month">Next 30 Days</option>
//         <option value="overdue">Overdue</option>
//       </select>
//     </div>
    
//     <div className="flex items-end">
//       <label className="flex items-center gap-2 p-2 rounded-lg w-full transition-colors" style={{background: 'var(--input)'}}>
//         <input
//           type="checkbox"
//           checked={advancedFilters.withNotes}
//           onChange={() => setAdvancedFilters({...advancedFilters, withNotes: !advancedFilters.withNotes})}
//           className="rounded"
//           style={{color: 'var(--accent)'}}
//         />
//         <span style={{color: 'var(--text)'}}>With Notes</span>
//       </label>
//     </div>
    
//     <div className="flex items-end">
//       <label className="flex items-center gap-2 p-2 rounded-lg w-full transition-colors" style={{background: 'var(--input)'}}>
//         <input
//           type="checkbox"
//           checked={advancedFilters.withSubtasks}
//           onChange={() => setAdvancedFilters({...advancedFilters, withSubtasks: !advancedFilters.withSubtasks})}
//           className="rounded"
//           style={{color: 'var(--accent)'}}
//         />
//         <span style={{color: 'var(--text)'}}>With Subtasks</span>
//       </label>
//     </div>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <div>
//       <label className="block text-sm font-medium mb-1" style={{color: 'var(--text)'}}>Tags</label>
//       <div className="flex flex-wrap gap-2">
//         {tags.map(tag => (
//           <button
//             key={tag}
//             onClick={() => {
//               const newTags = advancedFilters.tags.includes(tag)
//                 ? advancedFilters.tags.filter(t => t !== tag)
//                 : [...advancedFilters.tags, tag];
//               setAdvancedFilters({...advancedFilters, tags: newTags});
//             }}
//             className={`px-3 py-1 rounded-full text-xs transition-all ${advancedFilters.tags.includes(tag) 
//               ? 'text-white' 
//               : ''}`}
//             style={{
//               background: advancedFilters.tags.includes(tag) 
//                 ? 'var(--accent)' 
//                 : 'var(--input)',
//               color: advancedFilters.tags.includes(tag) 
//                 ? 'white' 
//                 : 'var(--text)'
//             }}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>
//     </div>

//     <div>
//       <label className="block text-sm font-medium mb-1" style={{color: 'var(--text)'}}>Categories</label>
//       <div className="flex flex-wrap gap-2">
//        {categories.map(category => {
//   const IconComponent = FiIcons[category.icon]; // 👈 string se real icon ban gaya

//   return (
//     <button
//       key={category.id}
//       onClick={() => {
//         const newCategories = advancedFilters.categories.includes(category.name)
//           ? advancedFilters.categories.filter(c => c !== category.name)
//           : [...advancedFilters.categories, category.name];
//         setAdvancedFilters({ ...advancedFilters, categories: newCategories });
//       }}
//       className={`px-3 py-1 rounded-full text-xs transition-all flex items-center gap-1 ${
//         advancedFilters.categories.includes(category.name) ? "text-white" : ""
//       }`}
//       style={{
//         background: advancedFilters.categories.includes(category.name)
//           ? "var(--accent)"
//           : "var(--input)",
//         color: advancedFilters.categories.includes(category.name)
//           ? "white"
//           : "var(--text)"
//       }}
//     >
//       {/* 👇 Real icon render hoga */}
//       {IconComponent && <IconComponent />}
//       {category.name}
//     </button>
//   );
// })}
//       </div>
//     </div>
//   </div>
// </motion.div>
//   );
// };

// export default AdvancedFilters;
























import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSliders, FiRefreshCw, FiChevronDown, FiChevronUp, FiCheck } from '../icons/icons';
import '../App.css';
import * as FiIcons from "react-icons/fi";

const AdvancedFilters = ({
  advancedFilters,
  setAdvancedFilters,
  tags,
  categories
}) => {
  const [expandedSections, setExpandedSections] = useState({
    priority: true,
    dueDate: true,
    features: true,
    tags: true,
    categories: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const priorities = [
    { value: 'high', label: 'High', color: 'var(--priority-high)' },
    { value: 'medium', label: 'Medium', color: 'var(--priority-medium)' },
    { value: 'low', label: 'Low', color: 'var(--priority-low)' }
  ];

  const dueDateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'week', label: 'Next 7 Days' },
    { value: 'month', label: 'Next 30 Days' },
    { value: 'overdue', label: 'Overdue' }
  ];

  const handlePriorityChange = (priorityValue) => {
    if (advancedFilters.priority === priorityValue) {
      setAdvancedFilters({...advancedFilters, priority: ''});
    } else {
      setAdvancedFilters({...advancedFilters, priority: priorityValue});
    }
  };

  const handleDueDateChange = (dateValue) => {
    if (advancedFilters.dueDateRange === dateValue) {
      setAdvancedFilters({...advancedFilters, dueDateRange: ''});
    } else {
      setAdvancedFilters({...advancedFilters, dueDateRange: dateValue});
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="card rounded-xl p-5 mb-6 overflow-hidden"
      style={{background: 'var(--card)'}}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold flex items-center gap-2 text-lg" style={{color: 'var(--text)'}}>
          <FiSliders style={{color: 'var(--accent)'}} /> Advanced Filters
        </h3>
        <button 
          onClick={() => setAdvancedFilters({
            priority: '',
            dueDateRange: '',
            withNotes: false,
            withSubtasks: false,
            tags: [],
            categories: []
          })}
          className="text-sm flex items-center gap-1 transition-colors hover:opacity-80 px-3 py-1 rounded-lg"
          style={{color: 'var(--accent)', background: 'var(--input)'}}
        >
          <FiRefreshCw size={14} /> Clear All
        </button>
      </div>
      
      {/* Priority Section */}
      <div className="mb-4">
        <button 
          onClick={() => toggleSection('priority')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <span className="font-medium" style={{color: 'var(--text)'}}>Priority</span>
          {expandedSections.priority ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.priority && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2"
            >
              {priorities.map(priority => (
                <label 
                  key={priority.value}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${advancedFilters.priority === priority.value ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                  style={{
                    background: advancedFilters.priority === priority.value ? priority.color : 'var(--input)',
                    color: advancedFilters.priority === priority.value ? 'white' : 'var(--text)',
                    border: `1px solid ${advancedFilters.priority === priority.value ? priority.color : 'transparent'}`
                  }}
                >
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={advancedFilters.priority === priority.value}
                      onChange={() => handlePriorityChange(priority.value)}
                      className="absolute opacity-0 h-0 w-0"
                    />
                    <span className={`checkmark flex items-center justify-center w-5 h-5 rounded mr-3 ${advancedFilters.priority === priority.value ? 'bg-white text-gray-800' : 'bg-gray-300'}`}>
                      {advancedFilters.priority === priority.value && <FiCheck size={14} />}
                    </span>
                  </div>
                  {priority.label}
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Due Date Section */}
      <div className="mb-4">
        <button 
          onClick={() => toggleSection('dueDate')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <span className="font-medium" style={{color: 'var(--text)'}}>Due Date</span>
          {expandedSections.dueDate ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.dueDate && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2"
            >
              {dueDateOptions.map(option => (
                <label 
                  key={option.value}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${advancedFilters.dueDateRange === option.value ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                  style={{
                    background: advancedFilters.dueDateRange === option.value ? 'var(--accent)' : 'var(--input)',
                    color: advancedFilters.dueDateRange === option.value ? 'white' : 'var(--text)',
                    border: `1px solid ${advancedFilters.dueDateRange === option.value ? 'var(--accent)' : 'transparent'}`
                  }}
                >
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={advancedFilters.dueDateRange === option.value}
                      onChange={() => handleDueDateChange(option.value)}
                      className="absolute opacity-0 h-0 w-0"
                    />
                    <span className={`checkmark flex items-center justify-center w-5 h-5 rounded mr-3 ${advancedFilters.dueDateRange === option.value ? 'bg-white text-gray-800' : 'bg-gray-300'}`}>
                      {advancedFilters.dueDateRange === option.value && <FiCheck size={14} />}
                    </span>
                  </div>
                  {option.label}
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Features Section */}
      <div className="mb-4">
        <button 
          onClick={() => toggleSection('features')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <span className="font-medium" style={{color: 'var(--text)'}}>Features</span>
          {expandedSections.features ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        <AnimatePresence>
          {expandedSections.features && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2"
            >
              <label 
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${advancedFilters.withNotes ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                style={{
                  background: advancedFilters.withNotes ? 'var(--accent)' : 'var(--input)',
                  color: advancedFilters.withNotes ? 'white' : 'var(--text)',
                  border: `1px solid ${advancedFilters.withNotes ? 'var(--accent)' : 'transparent'}`
                }}
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={advancedFilters.withNotes}
                    onChange={() => setAdvancedFilters({...advancedFilters, withNotes: !advancedFilters.withNotes})}
                    className="absolute opacity-0 h-0 w-0"
                  />
                  <span className={`checkmark flex items-center justify-center w-5 h-5 rounded mr-3 ${advancedFilters.withNotes ? 'bg-white text-gray-800' : 'bg-gray-300'}`}>
                    {advancedFilters.withNotes && <FiCheck size={14} />}
                  </span>
                </div>
                With Notes
              </label>
              
              <label 
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${advancedFilters.withSubtasks ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                style={{
                  background: advancedFilters.withSubtasks ? 'var(--accent)' : 'var(--input)',
                  color: advancedFilters.withSubtasks ? 'white' : 'var(--text)',
                  border: `1px solid ${advancedFilters.withSubtasks ? 'var(--accent)' : 'transparent'}`
                }}
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={advancedFilters.withSubtasks}
                    onChange={() => setAdvancedFilters({...advancedFilters, withSubtasks: !advancedFilters.withSubtasks})}
                    className="absolute opacity-0 h-0 w-0"
                  />
                  <span className={`checkmark flex items-center justify-center w-5 h-5 rounded mr-3 ${advancedFilters.withSubtasks ? 'bg-white text-gray-800' : 'bg-gray-300'}`}>
                    {advancedFilters.withSubtasks && <FiCheck size={14} />}
                  </span>
                </div>
                With Subtasks
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tags Section */}
        <div>
          <button 
            onClick={() => toggleSection('tags')}
            className="flex items-center justify-between w-full py-2 text-left"
          >
            <span className="font-medium" style={{color: 'var(--text)'}}>Tags</span>
            {expandedSections.tags ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          
          <AnimatePresence>
            {expandedSections.tags && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2 mt-2"
              >
                {tags.map(tag => (
                  <label 
                    key={tag}
                    className={`px-3 py-2 rounded-full text-xs transition-all flex items-center cursor-pointer ${advancedFilters.tags.includes(tag) ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                    style={{
                      background: advancedFilters.tags.includes(tag) 
                        ? 'var(--accent)' 
                        : 'var(--input)',
                      color: advancedFilters.tags.includes(tag) 
                        ? 'white' 
                        : 'var(--text)'
                    }}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={advancedFilters.tags.includes(tag)}
                        onChange={() => {
                          const newTags = advancedFilters.tags.includes(tag)
                            ? advancedFilters.tags.filter(t => t !== tag)
                            : [...advancedFilters.tags, tag];
                          setAdvancedFilters({...advancedFilters, tags: newTags});
                        }}
                        className="absolute opacity-0 h-0 w-0"
                      />
                      <span className={`checkmark flex items-center justify-center w-4 h-4 rounded mr-2 ${advancedFilters.tags.includes(tag) ? 'bg-white text-gray-800' : 'bg-gray-300'}`}>
                        {advancedFilters.tags.includes(tag) && <FiCheck size={10} />}
                      </span>
                    </div>
                    {tag}
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Categories Section */}
        <div>
          <button 
            onClick={() => toggleSection('categories')}
            className="flex items-center justify-between w-full py-2 text-left"
          >
            <span className="font-medium" style={{color: 'var(--text)'}}>Categories</span>
            {expandedSections.categories ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          
          <AnimatePresence>
            {expandedSections.categories && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2 mt-2"
              >
                {categories.map(category => {
                  const IconComponent = FiIcons[category.icon];
                  
                  return (
                    <label 
                      key={category.id}
                      className={`px-3 py-2 rounded-full text-xs transition-all flex items-center cursor-pointer ${advancedFilters.categories.includes(category.name) ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                      style={{
                        background: advancedFilters.categories.includes(category.name)
                          ? "var(--accent)"
                          : "var(--input)",
                        color: advancedFilters.categories.includes(category.name)
                          ? "white"
                          : "var(--text)"
                      }}
                    >
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={advancedFilters.categories.includes(category.name)}
                          onChange={() => {
                            const newCategories = advancedFilters.categories.includes(category.name)
                              ? advancedFilters.categories.filter(c => c !== category.name)
                              : [...advancedFilters.categories, category.name];
                            setAdvancedFilters({ ...advancedFilters, categories: newCategories });
                          }}
                          className="absolute opacity-0 h-0 w-0"
                        />
                        <span className={`checkmark flex items-center justify-center w-4 h-4 rounded mr-2 ${advancedFilters.categories.includes(category.name) ? 'bg-white text-gray-800' : 'bg-gray-300'}`}>
                          {advancedFilters.categories.includes(category.name) && <FiCheck size={10} />}
                        </span>
                      </div>
                      {IconComponent && <IconComponent className="mr-1" />}
                      {category.name}
                    </label>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AdvancedFilters;