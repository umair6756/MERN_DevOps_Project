import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTarget, FiMenu, FiZap, FiClock, FiSun, 
  FiMoon, FiSettings 
} from '../icons/icons';

import '../App.css'


const Header = ({
  theme,
  setTheme,
  showPomodoro,
  setShowPomodoro,
  focusMode,
  setFocusMode,
  setShowSettings,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
<motion.header 
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="header p-4 mb-6 bg-transparent "
  // style={{background: 'var(--header)'}}
>
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-lg transition-colors"
        style={{background: 'var(--input)', color: 'var(--text)'}}
      >
        <FiMenu />
      </button>
      <div className="p-2 rounded-lg" style={{background: 'var(--input)', color: 'var(--accent)'}}>
        <FiTarget className="text-xl" />
      </div>
      <div>
        <h1 className="text-xl font-bold" style={{color: 'var(--text)'}}>Productivity Pro</h1>
        <p className="text-sm opacity-90" style={{color: 'var(--text)'}}>Advanced Task Management</p>
      </div>
    </div>
    
    <div className="flex items-center gap-2">
      {showPomodoro && (
        <button
          onClick={() => setFocusMode(!focusMode)}
          className="p-2 rounded-lg transition-colors"
          style={{
            background: focusMode ? 'var(--accent)' : 'var(--input)',
            color: focusMode ? 'white' : 'var(--text)'
          }}
        >
          <FiZap />
        </button>
      )}
      
      <button
        onClick={() => setShowPomodoro(!showPomodoro)}
        className="p-2 rounded-lg transition-colors"
        style={{background: 'var(--input)', color: 'var(--text)'}}
      >
        <FiClock />
      </button>
      
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded-lg transition-colors"
        style={{background: 'var(--input)', color: 'var(--text)'}}
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
      
      <button
        onClick={() => setShowSettings(true)}
        className="p-2 rounded-lg transition-colors"
        style={{background: 'var(--input)', color: 'var(--text)'}}
      >
        <FiSettings />
      </button>
    </div>
  </div>
</motion.header>
  );
};

export default Header;