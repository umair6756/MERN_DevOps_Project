// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiClock, FiX } from '../icons/icons';

// import '../App.css'


// const PomodoroTimer = ({
//   timerActive,
//   setTimerActive,
//   timerMinutes,
//   setTimerMinutes,
//   timerSeconds,
//   setTimerSeconds,
//   showPomodoro,
//   setShowPomodoro
// }) => {
//   useEffect(() => {
//     let interval = null;
//     if (timerActive && (timerMinutes > 0 || timerSeconds > 0)) {
//       interval = setInterval(() => {
//         if (timerSeconds === 0) {
//           if (timerMinutes === 0) {
//             clearInterval(interval);
//             setTimerActive(false);
//             // Timer completed logic here
//           } else {
//             setTimerMinutes(minutes => minutes - 1);
//             setTimerSeconds(59);
//           }
//         } else {
//           setTimerSeconds(seconds => seconds - 1);
//         }
//       }, 1000);
//     } else if (!timerActive && timerMinutes === 0 && timerSeconds === 0) {
//       setTimerMinutes(25);
//       setTimerSeconds(0);
//     }
//     return () => clearInterval(interval);
//   }, [timerActive, timerMinutes, timerSeconds]);

//   return (
// <motion.div 
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   className="card rounded-xl p-5 mb-6 backdrop-blur-sm"
//   style={{background: 'var(--card)'}}
// >
//   <div className="flex justify-between items-center mb-4">
//     <h3 className="font-semibold flex items-center gap-2" style={{color: 'var(--text)'}}>
//       <FiClock style={{color: 'var(--accent)'}} /> Focus Timer
//     </h3>
//     <button 
//       onClick={() => setShowPomodoro(false)}
//       className="p-1 rounded-md transition-colors"
//       style={{background: 'var(--input)', color: 'var(--text)'}}
//     >
//       <FiX />
//     </button>
//   </div>

//   <div className="text-center">
//     <div className="text-4xl font-bold mb-4" style={{color: 'var(--text)'}}>
//       {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
//     </div>
    
//     <div className="flex justify-center gap-3">
//       <button
//         onClick={() => setTimerActive(!timerActive)}
//         className={`px-4 py-2 rounded-lg text-white transition-colors ${timerActive ? 'hover:bg-red-600' : 'hover:bg-green-600'}`}
//         style={{background: timerActive ? 'var(--accent)' : 'var(--button)'}}
//       >
//         {timerActive ? 'Pause' : 'Start'}
//       </button>
      
//       <button
//         onClick={() => {
//           setTimerActive(false);
//           setTimerMinutes(25);
//           setTimerSeconds(0);
//         }}
//         className="px-4 py-2 rounded-lg transition-colors"
//         style={{
//           background: 'var(--input)',
//           color: 'var(--text)',
//           borderColor: 'var(--accent)'
//         }}
//       >
//         Reset
//       </button>
//     </div>
    
//     <div className="flex justify-center gap-2 mt-4">
//       <button
//         onClick={() => setTimerMinutes(25)}
//         className={`px-3 py-1 rounded-lg text-sm ${timerMinutes === 25 ? 'text-white' : ''}`}
//         style={{
//           background: timerMinutes === 25 ? 'var(--accent)' : 'var(--input)',
//           color: timerMinutes === 25 ? 'white' : 'var(--text)'
//         }}
//       >
//         25 min
//       </button>
//       <button
//         onClick={() => setTimerMinutes(15)}
//         className={`px-3 py-1 rounded-lg text-sm ${timerMinutes === 15 ? 'text-white' : ''}`}
//         style={{
//           background: timerMinutes === 15 ? 'var(--accent)' : 'var(--input)',
//           color: timerMinutes === 15 ? 'white' : 'var(--text)'
//         }}
//       >
//         15 min
//       </button>
//       <button
//         onClick={() => setTimerMinutes(5)}
//         className={`px-3 py-1 rounded-lg text-sm ${timerMinutes === 5 ? 'text-white' : ''}`}
//         style={{
//           background: timerMinutes === 5 ? 'var(--accent)' : 'var(--input)',
//           color: timerMinutes === 5 ? 'white' : 'var(--text)'
//         }}
//       >
//         5 min
//       </button>
//     </div>
//   </div>
// </motion.div>
//   );
// };

// export default PomodoroTimer;
























import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiX, FiPlay, FiPause, FiRotateCw, FiCoffee, FiBell, FiBellOff, FiSettings, FiCheck } from '../icons/icons';
import '../App.css';

const PomodoroTimer = ({
  timerActive,
  setTimerActive,
  timerMinutes,
  setTimerMinutes,
  timerSeconds,
  setTimerSeconds,
  showPomodoro,
  setShowPomodoro
}) => {
  const [sessions, setSessions] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [customTime, setCustomTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [isBreak, setIsBreak] = useState(false);
  const [progress, setProgress] = useState(0);

  // Calculate progress percentage
  useEffect(() => {
    const totalSeconds = isBreak ? breakTime * 60 : timerMinutes * 60 + timerSeconds;
    const elapsedSeconds = (isBreak ? breakTime * 60 : timerMinutes * 60 + timerSeconds) - 
                          (timerMinutes * 60 + timerSeconds);
    const calculatedProgress = (elapsedSeconds / totalSeconds) * 100;
    setProgress(calculatedProgress);
  }, [timerMinutes, timerSeconds, isBreak, breakTime]);

  // Timer logic
  useEffect(() => {
    let interval = null;
    
    if (timerActive) {
      interval = setInterval(() => {
        if (timerSeconds === 0) {
          if (timerMinutes === 0) {
            clearInterval(interval);
            setTimerActive(false);
            
            // Timer completed - switch mode
            if (isBreak) {
              // Break completed, start work session
              setIsBreak(false);
              setTimerMinutes(customTime);
              setTimerSeconds(0);
              if (notifications) new Audio('/notification.mp3').play().catch(() => {});
            } else {
              // Work session completed, start break
              setIsBreak(true);
              setTimerMinutes(breakTime);
              setTimerSeconds(0);
              setSessions(prev => prev + 1);
              if (notifications) new Audio('/notification.mp3').play().catch(() => {});
            }
          } else {
            setTimerMinutes(minutes => minutes - 1);
            setTimerSeconds(59);
          }
        } else {
          setTimerSeconds(seconds => seconds - 1);
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [timerActive, timerMinutes, timerSeconds, isBreak, breakTime, customTime, notifications]);

  const startTimer = (minutes) => {
    setIsBreak(false);
    setTimerMinutes(minutes);
    setTimerSeconds(0);
    setTimerActive(true);
  };

  const startBreak = (minutes) => {
    setIsBreak(true);
    setTimerMinutes(minutes);
    setTimerSeconds(0);
    setTimerActive(true);
  };

  const resetTimer = () => {
    setTimerActive(false);
    if (isBreak) {
      setTimerMinutes(breakTime);
    } else {
      setTimerMinutes(customTime);
    }
    setTimerSeconds(0);
  };

  const toggleTimer = () => {
    setTimerActive(!timerActive);
  };

  const formatTime = (minutes, seconds) => {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {showPomodoro && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="card rounded-2xl p-5 mb-6 backdrop-blur-lg border relative overflow-hidden"
          style={{ 
            background: 'var(--card)',
            borderColor: 'var(--accent)'
          }}
        >
          {/* Progress ring background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-opacity-20" 
               style={{ backgroundColor: 'var(--accent)' }} />
          
          {/* Progress bar */}
          <motion.div 
            className="absolute top-0 left-0 h-1"
            style={{ backgroundColor: 'var(--accent)' }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: timerActive ? 360 : 0 }}
                transition={{ duration: 2, repeat: timerActive ? Infinity : 0, ease: "linear" }}
              >
                <FiClock style={{ color: 'var(--accent)' }} />
              </motion.div>
              <h3 className="font-semibold" style={{ color: 'var(--text)' }}>
                {isBreak ? 'Break Time' : 'Focus Timer'}
              </h3>
              {sessions > 0 && (
                <span className="text-xs px-2 py-1 rounded-full" 
                      style={{ background: 'var(--input)', color: 'var(--text)' }}>
                  {sessions} session{sessions !== 1 ? 's' : ''}
                </span>
              )}
            </div>
            
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setNotifications(!notifications)}
                className="p-2 rounded-lg transition-colors"
                style={{
                  background: notifications ? 'var(--accent)' : 'var(--input)',
                  color: notifications ? 'white' : 'var(--text)'
                }}
                title={notifications ? 'Notifications enabled' : 'Notifications disabled'}
              >
                {notifications ? <FiBell /> : <FiBellOff />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-lg transition-colors"
                style={{
                  background: showSettings ? 'var(--accent)' : 'var(--input)',
                  color: showSettings ? 'white' : 'var(--text)'
                }}
                title="Settings"
              >
                <FiSettings />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowPomodoro(false)}
                className="p-2 rounded-lg transition-colors"
                style={{ background: 'var(--input)', color: 'var(--text)' }}
                title="Close timer"
              >
                <FiX />
              </motion.button>
            </div>
          </div>

          {/* Settings Panel */}
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 rounded-lg"
                style={{ background: 'var(--input)' }}
              >
                <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Timer Settings</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs block mb-1" style={{ color: 'var(--text)' }}>Focus Time</label>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={customTime}
                      onChange={(e) => setCustomTime(parseInt(e.target.value) || 25)}
                      className="w-full p-2 rounded-lg text-center"
                      style={{ 
                        background: 'var(--card)',
                        color: 'var(--text)',
                        border: '1px solid var(--accent)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs block mb-1" style={{ color: 'var(--text)' }}>Break Time</label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={breakTime}
                      onChange={(e) => setBreakTime(parseInt(e.target.value) || 5)}
                      className="w-full p-2 rounded-lg text-center"
                      style={{ 
                        background: 'var(--card)',
                        color: 'var(--text)',
                        border: '1px solid var(--accent)'
                      }}
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSettings(false)}
                  className="w-full mt-3 py-2 rounded-lg flex items-center justify-center gap-2"
                  style={{ background: 'var(--accent)', color: 'white' }}
                >
                  <FiCheck /> Apply Settings
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center">
            {/* Timer display */}
            <motion.div 
              key={`${timerMinutes}-${timerSeconds}-${isBreak}`}
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold mb-4 mx-auto w-max relative"
              style={{ color: 'var(--text)' }}
            >
              {formatTime(timerMinutes, timerSeconds)}
              <motion.span
                animate={timerActive ? { opacity: [0, 1, 0] } : { opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-2 -right-4 text-xs"
                style={{ color: 'var(--accent)' }}
              >
                ●
              </motion.span>
            </motion.div>
            
            {/* Timer controls */}
            <div className="flex justify-center gap-3 mb-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTimer}
                className={`px-5 py-3 rounded-xl flex items-center gap-2 ${timerActive ? 'bg-red-500' : 'bg-green-500'} text-white transition-colors`}
              >
                {timerActive ? (
                  <>
                    <FiPause /> Pause
                  </>
                ) : (
                  <>
                    <FiPlay /> Start
                  </>
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetTimer}
                className="px-4 py-3 rounded-xl flex items-center gap-2 transition-colors"
                style={{
                  background: 'var(--input)',
                  color: 'var(--text)',
                }}
              >
                <FiRotateCw /> Reset
              </motion.button>
            </div>
            
            {/* Quick start buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => startTimer(25)}
                className={`px-3 py-2 rounded-lg text-sm ${!isBreak && timerMinutes === 25 && !timerActive ? 'text-white' : ''}`}
                style={{
                  background: !isBreak && timerMinutes === 25 && !timerActive ? 'var(--accent)' : 'var(--input)',
                  color: !isBreak && timerMinutes === 25 && !timerActive ? 'white' : 'var(--text)'
                }}
              >
                25 min Focus
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => startTimer(15)}
                className={`px-3 py-2 rounded-lg text-sm ${!isBreak && timerMinutes === 15 && !timerActive ? 'text-white' : ''}`}
                style={{
                  background: !isBreak && timerMinutes === 15 && !timerActive ? 'var(--accent)' : 'var(--input)',
                  color: !isBreak && timerMinutes === 15 && !timerActive ? 'white' : 'var(--text)'
                }}
              >
                15 min Focus
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => startBreak(5)}
                className={`px-3 py-2 rounded-lg text-sm ${isBreak && timerMinutes === 5 && !timerActive ? 'text-white' : ''}`}
                style={{
                  background: isBreak && timerMinutes === 5 && !timerActive ? 'var(--accent)' : 'var(--input)',
                  color: isBreak && timerMinutes === 5 && !timerActive ? 'white' : 'var(--text)'
                }}
              >
                <FiCoffee className="inline mr-1" /> 5 min Break
              </motion.button>
            </div>
            
            {/* Mode indicator */}
            <div className="text-xs opacity-75" style={{ color: 'var(--text)' }}>
              {isBreak ? 'Enjoy your break!' : 'Time to focus!'}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PomodoroTimer;