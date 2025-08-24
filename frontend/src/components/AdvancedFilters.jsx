import React from 'react';
import { motion } from 'framer-motion';
import { FiSliders, FiRefreshCw } from '../icons/icons';

import '../App.css'


const AdvancedFilters = ({
  advancedFilters,
  setAdvancedFilters,
  tags,
  categories
}) => {
  return (
<motion.div 
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
  className="card rounded-xl p-5 mb-6 overflow-hidden"
  style={{background: 'var(--card)'}}
>
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-semibold flex items-center gap-2" style={{color: 'var(--text)'}}>
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
      className="text-sm flex items-center gap-1 transition-colors"
      style={{color: 'var(--accent)'}}
    >
      <FiRefreshCw size={14} /> Clear All
    </button>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
    <div>
      <label className="block text-sm font-medium mb-1" style={{color: 'var(--text)'}}>Priority</label>
      <select
        value={advancedFilters.priority}
        onChange={(e) => setAdvancedFilters({...advancedFilters, priority: e.target.value})}
        className="w-full px-3 py-2 rounded-lg border transition-all"
        style={{
          background: 'var(--input)',
          color: 'var(--text)',
          borderColor: 'var(--accent)'
        }}
      >
        <option value="">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
    
    <div>
      <label className="block text-sm font-medium mb-1" style={{color: 'var(--text)'}}>Due Date</label>
      <select
        value={advancedFilters.dueDateRange}
        onChange={(e) => setAdvancedFilters({...advancedFilters, dueDateRange: e.target.value})}
        className="w-full px-3 py-2 rounded-lg border transition-all"
        style={{
          background: 'var(--input)',
          color: 'var(--text)',
          borderColor: 'var(--accent)'
        }}
      >
        <option value="">Any Date</option>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="week">Next 7 Days</option>
        <option value="month">Next 30 Days</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>
    
    <div className="flex items-end">
      <label className="flex items-center gap-2 p-2 rounded-lg w-full transition-colors" style={{background: 'var(--input)'}}>
        <input
          type="checkbox"
          checked={advancedFilters.withNotes}
          onChange={() => setAdvancedFilters({...advancedFilters, withNotes: !advancedFilters.withNotes})}
          className="rounded"
          style={{color: 'var(--accent)'}}
        />
        <span style={{color: 'var(--text)'}}>With Notes</span>
      </label>
    </div>
    
    <div className="flex items-end">
      <label className="flex items-center gap-2 p-2 rounded-lg w-full transition-colors" style={{background: 'var(--input)'}}>
        <input
          type="checkbox"
          checked={advancedFilters.withSubtasks}
          onChange={() => setAdvancedFilters({...advancedFilters, withSubtasks: !advancedFilters.withSubtasks})}
          className="rounded"
          style={{color: 'var(--accent)'}}
        />
        <span style={{color: 'var(--text)'}}>With Subtasks</span>
      </label>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1" style={{color: 'var(--text)'}}>Tags</label>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => {
              const newTags = advancedFilters.tags.includes(tag)
                ? advancedFilters.tags.filter(t => t !== tag)
                : [...advancedFilters.tags, tag];
              setAdvancedFilters({...advancedFilters, tags: newTags});
            }}
            className={`px-3 py-1 rounded-full text-xs transition-all ${advancedFilters.tags.includes(tag) 
              ? 'text-white' 
              : ''}`}
            style={{
              background: advancedFilters.tags.includes(tag) 
                ? 'var(--accent)' 
                : 'var(--input)',
              color: advancedFilters.tags.includes(tag) 
                ? 'white' 
                : 'var(--text)'
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium mb-1" style={{color: 'var(--text)'}}>Categories</label>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              const newCategories = advancedFilters.categories.includes(category.name)
                ? advancedFilters.categories.filter(c => c !== category.name)
                : [...advancedFilters.categories, category.name];
              setAdvancedFilters({...advancedFilters, categories: newCategories});
            }}
            className={`px-3 py-1 rounded-full text-xs transition-all flex items-center gap-1 ${advancedFilters.categories.includes(category.name) 
              ? 'text-white' 
              : ''}`}
            style={{
              background: advancedFilters.categories.includes(category.name) 
                ? 'var(--accent)' 
                : 'var(--input)',
              color: advancedFilters.categories.includes(category.name) 
                ? 'white' 
                : 'var(--text)'
            }}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>
    </div>
  </div>
</motion.div>
  );
};

export default AdvancedFilters;