import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiChevronDown, FiDownload, FiTrash2 } from '../icons/icons';

import '../App.css'


const SettingsPanel = ({
  theme,
  setTheme,
  soundEnabled,
  setSoundEnabled,
  setShowSettings,
  todos,
  clearCompleted
}) => {
  return (
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
  style={{background: 'rgba(0, 0, 0, 0.5)'}}
>
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    className="card rounded-2xl p-6 w-full max-w-md backdrop-blur-sm"
    style={{background: 'var(--card)', color: 'var(--text)'}}
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold" style={{color: 'var(--text)'}}>Settings</h2>
      <button onClick={() => setShowSettings(false)} className="p-1 rounded-md transition-colors" style={{background: 'var(--input)', color: 'var(--text)'}}>
        <FiX />
      </button>
    </div>
    
    <div className="space-y-4">
      <div>
        <label className="block mb-2 font-medium" style={{color: 'var(--text)'}}>Theme</label>
        <div className="relative">
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border appearance-none transition-all"
            style={{
              background: 'var(--input)',
              color: 'var(--text)',
              borderColor: 'var(--accent)'
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2" style={{color: 'var(--text)'}}>
            <FiChevronDown />
          </div>
        </div>
      </div>
      
      <div className="p-3 rounded-lg" style={{background: 'var(--input)'}}>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={() => setSoundEnabled(!soundEnabled)}
            className="rounded"
            style={{color: 'var(--accent)'}}
          />
          <span style={{color: 'var(--text)'}}>Enable Sounds</span>
        </label>
      </div>
      
      <div className="pt-4" style={{borderColor: 'var(--accent)'}}>
        <h3 className="font-medium mb-2" style={{color: 'var(--text)'}}>Data Management</h3>
        <div className="flex gap-2">
          <button
            onClick={() => {
              const dataStr = JSON.stringify(todos);
              const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
              const linkElement = document.createElement('a');
              linkElement.setAttribute('href', dataUri);
              linkElement.setAttribute('download', 'todos.json');
              linkElement.click();
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all hover:shadow-md"
            style={{
              background: 'var(--input)',
              color: 'var(--text)',
              borderColor: 'var(--accent)'
            }}
          >
            <FiDownload />
            <span>Export</span>
          </button>
          
          <button
            onClick={clearCompleted}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all hover:shadow-md"
            style={{
              background: 'var(--input)',
              color: 'var(--text)',
              borderColor: 'var(--accent)'
            }}
          >
            <FiTrash2 />
            <span>Clear Completed</span>
          </button>
        </div>
      </div>
    </div>
  </motion.div>
</motion.div>
  );
};

export default SettingsPanel;