// import React from 'react';
// import { motion } from 'framer-motion';

// import '../App.css'


// const StatsCard = ({ title, value, icon, color, change, onClick }) => (
// <motion.div 
//   whileHover={{ y: -5 }}
//   onClick={onClick}
//   className="card rounded-xl p-4 backdrop-blur-sm cursor-pointer transition-all hover:shadow-lg"
//   style={{background: 'var(--card)'}}
// >
//   <div className="flex justify-between items-start">
//     <div>
//       <p className="text-sm opacity-75 mb-1" style={{color: 'var(--text)'}}>{title}</p>
//       <h3 className="text-2xl font-bold" style={{color: 'var(--text)'}}>{value}</h3>
//     </div>
//     <div className="p-3 rounded-lg" style={{background: 'var(--input)'}}>
//       {React.cloneElement(icon, {style: {color: 'var(--accent)'}})}
//     </div>
//   </div>
//   {change && (
//     <p className={`text-xs mt-2 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
//       {change > 0 ? '↑' : '↓'} {Math.abs(change)}% from last week
//     </p>
//   )}
// </motion.div>
// );

// export default StatsCard;


















import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronDown, FiChevronUp, FiInfo, FiAlertCircle, FiTrendingUp, FiTrendingDown } from '../icons/icons';

const StatsCard = ({ 
  title, 
  value, 
  icon, 
  color, 
  change, 
  onClick, 
  description, 
  trendData, 
  isLoading, 
  duration = 2000,
  precision = 0,
  maxValue,
  minValue,
  comparisonValue,
  alerts,
  status = 'normal',
  detailData,
  detailTitle,
  detailDescription
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const cardRef = useRef(null);
  
  // Animated counter for value
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => {
    if (typeof latest === 'number') {
      return precision > 0 ? latest.toFixed(precision) : Math.floor(latest);
    }
    return latest;
  });
  
  // Animation values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  
  // Handle intersection observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Animate value counter when component becomes visible
  useEffect(() => {
    if (isVisible && typeof value === 'number') {
      const controls = animate(count, value, {
        duration: duration / 1000,
        ease: "easeOut",
        onUpdate: (latest) => count.set(latest),
      });
      
      return controls.stop;
    }
  }, [isVisible, value, count, duration]);
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const xPos = mouseX - width / 2;
    const yPos = mouseY - height / 2;
    
    x.set(xPos);
    y.set(yPos);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  const handleCardClick = () => {
    if (detailData) {
      setShowDetail(true);
    } else if (onClick) {
      onClick();
    }
  };

  // Mini advanced trend chart with multiple data points
  const AdvancedTrendChart = ({ data, height = 12, showPoints = true }) => {
    if (!data || data.length === 0) return null;
    
    const chartMax = maxValue || Math.max(...data) * 1.1;
    const chartMin = minValue || Math.min(...data) * 0.9;
    const range = chartMax - chartMin || 1;
    
    return (
      <div className={`h-${height} w-full mt-3 relative`}>
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 0.5, 1].map((pos) => (
            <div 
              key={pos}
              className="w-full h-px opacity-20"
              style={{ background: 'var(--text)' }}
            />
          ))}
        </div>
        
        {/* Data line */}
        <svg className="w-full h-full" viewBox={`0 0 ${data.length} 100`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          {/* Area fill */}
          <path
            d={`M0,100 ${data.map((point, i) => `L${i},${100 - ((point - chartMin) / range) * 100}`).join(' ')} L${data.length - 1},100 Z`}
            fill="url(#gradient)"
            fillOpacity="0.2"
          />
          
          {/* Line */}
          <path
            d={`M0,${100 - ((data[0] - chartMin) / range) * 100} ${data.map((point, i) => `L${i},${100 - ((point - chartMin) / range) * 100}`).join(' ')}`}
            stroke="var(--accent)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Data points */}
          {showPoints && data.map((point, i) => (
            <circle
              key={i}
              cx={i}
              cy={100 - ((point - chartMin) / range) * 100}
              r={i === data.length - 1 ? 2 : 1.5}
              fill="var(--accent)"
            />
          ))}
        </svg>
      </div>
    );
  };

  // Status indicator with different colors based on status
  const statusConfig = {
    normal: { color: 'var(--accent)', pulse: false, icon: <FiInfo /> },
    warning: { color: '#f59e0b', pulse: true, icon: <FiAlertCircle /> },
    critical: { color: '#ef4444', pulse: true, icon: <FiAlertCircle /> },
    success: { color: '#10b981', pulse: false, icon: <FiTrendingUp /> },
  };

  // Detail Modal Component
  const DetailModal = () => {
    if (!detailData) return null;

    return (
      <AnimatePresence>
        {showDetail && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowDetail(false)}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                style={{ background: 'var(--card)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-opacity-20" style={{ borderColor: 'var(--input)' }}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl" style={{ background: 'var(--input)' }}>
                      {React.cloneElement(icon, { size: 24, style: { color: 'var(--accent)' } })}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
                        {detailTitle || title}
                      </h2>
                      {detailDescription && (
                        <p className="text-sm opacity-70 mt-1" style={{ color: 'var(--text)' }}>
                          {detailDescription}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDetail(false)}
                    className="p-2 rounded-full hover:bg-opacity-20 transition-colors"
                    style={{ background: 'var(--input)', color: 'var(--text)' }}
                  >
                    <FiX size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                  {/* Main Value */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                      {value}
                    </div>
                    {change !== undefined && (
                      <div className={`flex items-center justify-center gap-2 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {change > 0 ? <FiTrendingUp /> : <FiTrendingDown />}
                        <span>{Math.abs(change)}% from previous period</span>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Trend Chart */}
                  {trendData && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>Trend Overview</h3>
                      <AdvancedTrendChart data={trendData} height={16} showPoints={true} />
                    </div>
                  )}

                  {/* Detailed Data */}
                  {detailData && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>Detailed Breakdown</h3>
                      <div className="grid gap-3">
                        {detailData.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex justify-between items-center p-3 rounded-xl"
                            style={{ background: 'var(--input)' }}
                          >
                            <div className="flex items-center gap-3">
                              {item.icon && (
                                <div style={{ color: 'var(--accent)' }}>
                                  {item.icon}
                                </div>
                              )}
                              <span style={{ color: 'var(--text)' }}>{item.label}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-semibold" style={{ color: 'var(--text)' }}>
                                {item.value}
                              </span>
                              {item.change !== undefined && (
                                <span className={`text-xs px-2 py-1 rounded-full ${item.change > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                  {item.change > 0 ? '+' : ''}{item.change}%
                                </span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Insights */}
                  <div className="mt-6 p-4 rounded-xl" style={{ background: 'var(--input)' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                      <FiInfo size={16} style={{ color: 'var(--accent)' }} />
                      Insights
                    </h4>
                    <p className="text-sm opacity-80" style={{ color: 'var(--text)' }}>
                      {change > 0 
                        ? `Your ${title.toLowerCase()} has increased by ${Math.abs(change)}% compared to the previous period. Keep up the good work!`
                        : change < 0
                        ? `Your ${title.toLowerCase()} has decreased by ${Math.abs(change)}%. Consider implementing strategies to improve this metric.`
                        : `Your ${title.toLowerCase()} has remained stable. Consistency is key to maintaining good performance.`
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  // Loading skeleton with shimmer effect
  if (isLoading) {
    return (
      <motion.div
        ref={cardRef}
        className="card rounded-2xl p-5 relative overflow-hidden"
        style={{ background: 'var(--card)' }}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-2">
            <div className="h-5 w-24 rounded-md bg-gray-300 animate-pulse"></div>
            <div className="h-9 w-20 rounded-md bg-gray-400 animate-pulse"></div>
          </div>
          <div className="p-3 rounded-xl bg-gray-300 animate-pulse">
            <div className="w-6 h-6"></div>
          </div>
        </div>
        <div className="h-12 w-full bg-gray-300 rounded-md mt-3"></div>
        <div className="h-4 w-32 bg-gray-300 rounded-md mt-3"></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </motion.div>
    );
  }

  return (
    <>
      <motion.div 
        ref={cardRef}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 30, rotateX: 5, rotateY: -5 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15,
          opacity: { duration: 0.4 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleCardClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
                    background: 'var(--card)',
          borderColor: 'var(--input)',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
        }}
        className="card rounded-2xl p-5 cursor-pointer border border-opacity-10 relative overflow-hidden group perspective-1000"
        // style={{ 

        // }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        {/* Status indicator */}
        <motion.div 
          className="absolute top-3 right-3 w-3 h-3 rounded-full"
          style={{ background: statusConfig[status].color }}
          animate={{
            scale: statusConfig[status].pulse ? [1, 1.2, 1] : 1,
            opacity: statusConfig[status].pulse ? [1, 0.7, 1] : 1,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Alert badges */}
        {alerts && alerts > 0 && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-10"
          >
            {alerts}
          </motion.div>
        )}
        
        {/* 3D depth effect */}
        <div className="relative z-10 transform-style-3d">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium opacity-80 mb-1 tracking-wider uppercase" style={{color: 'var(--text)'}}>
                {title}
              </p>
              <motion.h3 
                className="text-3xl font-bold tracking-tight"
                style={{color: 'var(--text)'}}
              >
                {typeof value === 'number' ? rounded : value}
              </motion.h3>
            </div>
            
            <motion.div 
              className="p-3 rounded-xl transition-all duration-500"
              style={{
                background: 'var(--input)',
              }}
              whileHover={{ 
                rotate: 12, 
                scale: 1.1,
                background: 'var(--accent)',
              }}
            >
              {React.cloneElement(icon, {
                size: 24,
                style: { 
                  color: isHovered ? 'white' : 'var(--accent)',
                }
              })}
            </motion.div>
          </div>
          
          {/* Description text */}
          {description && (
            <p className="text-xs opacity-70 mb-3 leading-relaxed" style={{color: 'var(--text)'}}>
              {description}
            </p>
          )}
          
          {/* Comparison value */}
          {comparisonValue !== undefined && (
            <div className="flex items-center gap-2 mb-3 text-xs">
              <span className="opacity-70" style={{color: 'var(--text)'}}>vs target:</span>
              <span className={`font-semibold ${value >= comparisonValue ? 'text-green-500' : 'text-red-500'}`}>
                {comparisonValue}
              </span>
            </div>
          )}
          
          {/* Trend visualization */}
          {trendData && (
            <div className="mb-3">
              <AdvancedTrendChart data={trendData} />
            </div>
          )}
          
          {/* Change indicator with animation */}
          {change !== undefined && change !== null && (
            <motion.div 
              className="flex items-center gap-2 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 0.5, repeat: change !== 0 ? Infinity : 0, repeatDelay: 2 }}
                className={`text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 ${
                  change > 0 ? 'bg-green-100 text-green-800' : change < 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {change > 0 ? (
                  <>
                    <FiTrendingUp size={12} />
                    {Math.abs(change)}%
                  </>
                ) : change < 0 ? (
                  <>
                    <FiTrendingDown size={12} />
                    {Math.abs(change)}%
                  </>
                ) : (
                  <>0%</>
                )}
              </motion.span>
              <span className="text-xs opacity-70" style={{color: 'var(--text)'}}>
                from previous period
              </span>
            </motion.div>
          )}
          
          {/* Progress bar for value relative to max */}
          {maxValue !== undefined && typeof value === 'number' && (
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3 overflow-hidden" style={{background: 'var(--input)'}}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(value / maxValue) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
            </div>
          )}
          
          {/* Interactive hint */}
          <motion.div 
            className="flex items-center gap-1 mt-3 pt-2 border-t border-opacity-20"
            style={{ borderColor: 'var(--input)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.7 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs" style={{color: 'var(--text)'}}>
              {detailData ? 'Click for detailed analytics' : 'Click to explore'}
            </span>
            {detailData ? (
              <FiChevronUp size={12} style={{color: 'var(--accent)'}} />
            ) : (
              <FiChevronDown size={12} style={{color: 'var(--accent)'}} />
            )}
          </motion.div>
        </div>
        
        {/* Hover overlay with subtle gradient */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, var(--accent) 15%, transparent) 0%, transparent 70%)`
          }}
          animate={{
            background: isHovered 
              ? `radial-gradient(circle at ${x.get() + 50}% ${y.get() + 50}%, color-mix(in srgb, var(--accent) 15%, transparent) 0%, transparent 70%)`
              : `radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 15%, transparent) 0%, transparent 70%)`
          }}
        />
        
        {/* Animated border highlight */}
        <motion.div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 0 1px transparent'
          }}
          animate={{
            boxShadow: isHovered 
              ? 'inset 0 0 0 1px var(--accent)'
              : 'inset 0 0 0 1px transparent'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Detail Modal */}
      <DetailModal />
    </>
  );
};

// Add CSS for the grid pattern and shimmer animation
const additionalStyles = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
  
  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, currentColor 1px, transparent 1px),
      linear-gradient(to bottom, currentColor 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .transform-style-3d {
    transform-style: preserve-3d;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = additionalStyles;
  document.head.appendChild(styleSheet);
}

export default StatsCard;