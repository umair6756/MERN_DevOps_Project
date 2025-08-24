// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiSearch, FiGrid, FiList, FiFilter, 
//   FiBarChart2, FiPlus, FiClipboard, 
//   FiCheckCircle, FiAlertTriangle, FiTrendingUp 
// } from '../icons/icons';
// import StatsCard from './StatsCard';
// import AdvancedFilters from './AdvancedFilters';
// import TodoItem from './TodoItem';

// import '../App.css'


// const TodoList = ({
//   todos,
//   filteredTodos,
//   searchQuery,
//   setSearchQuery,
//   viewMode,
//   setViewMode,
//   showFilterPanel,
//   setShowFilterPanel,
//   setIsFormOpen,
//   stats,
//   activeTab,
//   advancedFilters,
//   setAdvancedFilters,
//   tags,
//   categories,
//   toggleComplete,
//   toggleFavorite,
//   startEdit,
//   deleteTodo,
//   toggleSubtask,
//   getPriorityIcon,
//   getCategoryIcon,
//   isOverdue
// }) => {
//   return (
//     <>
//      <div className="card rounded-2xl p-5 mb-6 shadow-lg" style={{background: 'var(--card)'}}>
//   <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
//     <div className="flex-1 w-full">
//       <div className="relative">
//         <FiSearch className="absolute left-3 top-3 opacity-50" style={{color: 'var(--text)'}} />
//         <input
//           type="text"
//           placeholder="Search todos..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="input w-full pl-10 pr-4 py-3 rounded-xl border transition-all"
//           style={{
//             background: 'var(--input)',
//             color: 'var(--text)',
//             borderColor: 'var(--accent)'
//           }}
//         />
//       </div>
//     </div>
    
//     <div className="flex gap-2">
//       <button
//         onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
//         className="btn-secondary p-3 rounded-xl border transition-all hover:shadow-md"
//         style={{
//           background: 'var(--input)',
//           color: 'var(--text)',
//           borderColor: 'var(--accent)'
//         }}
//       >
//         {viewMode === 'list' ? <FiGrid /> : <FiList />}
//       </button>
      
//       <button
//         onClick={() => setShowFilterPanel(!showFilterPanel)}
//         className={`btn-secondary p-3 rounded-xl border transition-all hover:shadow-md ${showFilterPanel ? 'bg-blue-500 text-white' : ''}`}
//         style={{
//           background: showFilterPanel ? 'var(--accent)' : 'var(--input)',
//           color: showFilterPanel ? 'white' : 'var(--text)',
//           borderColor: 'var(--accent)'
//         }}
//       >
//         <FiFilter />
//       </button>
      
//       <button
//         className="btn-secondary p-3 rounded-xl border transition-all hover:shadow-md"
//         style={{
//           background: 'var(--input)',
//           color: 'var(--text)',
//           borderColor: 'var(--accent)'
//         }}
//       >
//         <FiBarChart2 />
//       </button>

//       <button
//         onClick={() => setIsFormOpen(true)}
//         className="btn-primary p-3 rounded-xl transition-all shadow-md hover:shadow-lg"
//         style={{background: 'var(--button)', color: 'white'}}
//       >
//         <FiPlus />
//       </button>
//     </div>
//   </div>
  
//   {showFilterPanel && (
//     <AdvancedFilters 
//       advancedFilters={advancedFilters}
//       setAdvancedFilters={setAdvancedFilters}
//       tags={tags}
//       categories={categories}
//     />
//   )}
  
//   <div className="flex flex-wrap gap-4 mt-4 pt-4" style={{borderColor: 'var(--accent)'}}>
//     <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{background: 'var(--input)'}}>
//       <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Total:</div>
//       <div className="text-sm px-2 py-0.5 rounded-full" style={{background: 'var(--card)'}}>{stats.total}</div>
//     </div>
    
//     <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{background: 'var(--input)'}}>
//       <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Active:</div>
//       <div className="text-sm px-2 py-0.5 rounded-full" style={{background: 'var(--card)'}}>{stats.active}</div>
//     </div>
    
//     <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{background: 'var(--input)'}}>
//       <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Completed:</div>
//       <div className="text-sm px-2 py-0.5 rounded-full" style={{background: 'var(--card)'}}>{stats.completed}</div>
//     </div>
    
//     <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{background: 'var(--input)'}}>
//       <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Overdue:</div>
//       <div className="text-sm px-2 py-0.5 rounded-full" style={{background: 'var(--card)'}}>{stats.overdue}</div>
//     </div>
//   </div>
// </div>

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//   <StatsCard 
//     title="Total Tasks" 
//     value={stats.total} 
//     icon={<FiClipboard className="text-xl" />} 
//     color="bg-blue-100 text-blue-500 dark:bg-blue-900/20" 
//     onClick={() => setActiveTab('all')}
//   />
//   <StatsCard 
//     title="Completed" 
//     value={stats.completed} 
//     icon={<FiCheckCircle className="text-xl" />} 
//     color="bg-green-100 text-green-500 dark:bg-green-900/20" 
//     change={12}
//     onClick={() => setActiveTab('completed')}
//   />
//   <StatsCard 
//     title="Overdue" 
//     value={stats.overdue} 
//     icon={<FiAlertTriangle className="text-xl" />} 
//     color="bg-red-100 text-red-500 dark:bg-red-900/20" 
//     change={-5}
//   />
//   <StatsCard 
//     title="Productivity" 
//     // value={`${productivityScore}%`} 
//     icon={<FiTrendingUp className="text-xl" />} 
//     color="bg-purple-100 text-purple-500 dark:bg-purple-900/20" 
//     change={8}
//   />
// </div>

// <div className="mb-20">
//   {filteredTodos.length > 0 ? (
//     viewMode === 'list' ? (
//       <div className="space-y-4">
//         <AnimatePresence>
//           {filteredTodos.map(todo => (
//             <TodoItem
//               key={todo.id}
//               todo={todo}
//               toggleComplete={toggleComplete}
//               toggleFavorite={toggleFavorite}
//               startEdit={startEdit}
//               deleteTodo={deleteTodo}
//               toggleSubtask={toggleSubtask}
//               getPriorityIcon={getPriorityIcon}
//               getCategoryIcon={getCategoryIcon}
//               isOverdue={isOverdue}
//               viewMode="list"
//             />
//           ))}
//         </AnimatePresence>
//       </div>
//     ) : (
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <AnimatePresence>
//           {filteredTodos.map(todo => (
//             <TodoItem
//               key={todo.id}
//               todo={todo}
//               toggleComplete={toggleComplete}
//               toggleFavorite={toggleFavorite}
//               startEdit={startEdit}
//               deleteTodo={deleteTodo}
//               getPriorityIcon={getPriorityIcon}
//               getCategoryIcon={getCategoryIcon}
//               isOverdue={isOverdue}
//               viewMode="grid"
//             />
//           ))}
//         </AnimatePresence>
//       </div>
//     )
//   ) : (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="card rounded-2xl p-8 text-center"
//       style={{background: 'var(--card)', color: 'var(--text)'}}
//     >
//       <div className="text-6xl mb-4">📝</div>
//       <h3 className="text-xl font-semibold mb-2">No todos found</h3>
//       <p className="opacity-75 mb-6">Try changing your search or add a new todo</p>
//       <button
//         onClick={() => setIsFormOpen(true)}
//         className="btn-primary px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
//         style={{background: 'var(--button)', color: 'white'}}
//       >
//         Add Your First Todo
//       </button>
//     </motion.div>
//   )}
// </div>
//     </>
//   );
// };

// export default TodoList;































import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, FiGrid, FiList, FiFilter, 
  FiBarChart2, FiPlus, FiClipboard, 
  FiCheckCircle, FiAlertTriangle, FiTrendingUp,
  FiX, FiChevronDown, FiChevronUp
} from '../icons/icons';
import StatsCard from './StatsCard';
import AdvancedFilters from './AdvancedFilters';
import TodoItem from './TodoItem';
import '../App.css';

const TodoList = ({
  todos,
  filteredTodos,
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
  showFilterPanel,
  setShowFilterPanel,
  setIsFormOpen,
  stats,
  activeTab,
  advancedFilters,
  setAdvancedFilters,
  tags,
  categories,
  toggleComplete,
  toggleFavorite,
  startEdit,
  deleteTodo,
  toggleSubtask,
  getPriorityIcon,
  getCategoryIcon,
  isOverdue
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [statsVisible, setStatsVisible] = useState(true);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFormOpen(true)}
        className="fixed z-40 bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center md:hidden"
        style={{ background: 'var(--button)', color: 'white' }}
        aria-label="Add new todo"
      >
        <FiPlus className="text-xl" />
      </motion.button>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed z-40 bottom-6 left-6 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border"
            style={{ 
              background: 'var(--card)', 
              color: 'var(--text)',
              borderColor: 'var(--accent)'
            }}
            aria-label="Scroll to top"
          >
            <FiChevronUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Header Card with Search and Controls */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`card rounded-2xl p-5 mb-6 shadow-xl top-4 z-30 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-opacity-90' : ''}`}
        style={{ 
          background: scrolled ? 'var(--card-translucent)' : 'var(--card)',
          border: '1px solid var(--accent)'
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1 w-full">
            <motion.div 
              className="relative"
              whileFocusWithin={{ scale: 1.01 }}
            >
              <FiSearch className="absolute left-3 top-3 opacity-50" style={{color: 'var(--text)'}} />
              <input
                type="text"
                placeholder="Search todos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input w-full pl-10 pr-4 py-3 rounded-xl border transition-all backdrop-blur-sm"
                style={{
                  background: 'var(--input)',
                  color: 'var(--text)',
                  borderColor: 'var(--accent)'
                }}
              />
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 opacity-50 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--text)' }}
                  aria-label="Clear search"
                >
                  <FiX />
                </motion.button>
              )}
            </motion.div>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
              className="btn-secondary p-3 rounded-xl border transition-all hover:shadow-md backdrop-blur-sm"
              style={{
                background: 'var(--input)',
                color: 'var(--text)',
                borderColor: 'var(--accent)'
              }}
              aria-label={`Switch to ${viewMode === 'list' ? 'grid' : 'list'} view`}
            >
              {viewMode === 'list' ? <FiGrid /> : <FiList />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className={`btn-secondary p-3 rounded-xl border transition-all hover:shadow-md backdrop-blur-sm ${showFilterPanel ? 'active-filter' : ''}`}
              style={{
                background: showFilterPanel ? 'var(--accent)' : 'var(--input)',
                color: showFilterPanel ? 'white' : 'var(--text)',
                borderColor: 'var(--accent)'
              }}
              aria-label="Toggle filters"
            >
              <FiFilter />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStatsVisible(!statsVisible)}
              className="btn-secondary p-3 rounded-xl border transition-all hover:shadow-md backdrop-blur-sm"
              style={{
                background: 'var(--input)',
                color: 'var(--text)',
                borderColor: 'var(--accent)'
              }}
              aria-label="Toggle statistics"
            >
              <FiBarChart2 />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="btn-primary p-3 rounded-xl transition-all shadow-md hover:shadow-lg hidden md:flex items-center gap-2"
              style={{background: 'var(--button)', color: 'white'}}
            >
              <FiPlus />
              <span className="hidden lg:inline">New Task</span>
            </motion.button>
          </div>
        </div>
        
        <AnimatePresence>
          {showFilterPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AdvancedFilters 
                advancedFilters={advancedFilters}
                setAdvancedFilters={setAdvancedFilters}
                tags={tags}
                categories={categories}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex flex-wrap gap-4 mt-4 pt-4" style={{borderTop: '1px solid var(--accent)'}}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm"
            style={{background: 'var(--input)'}}
          >
            <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Total:</div>
            <div className="text-sm px-2 py-0.5 rounded-full" style={{background: 'var(--card)'}}>{stats.total}</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm"
            style={{background: 'var(--input)'}}
          >
            <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Active:</div>
            <div className="text-sm px-2 py-0.5 rounded-full" style={{background: 'var(--card)'}}>{stats.active}</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm"
            style={{background: 'var(--input)'}}
          >
            <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Completed:</div>
            <div className="text-sm px-2 py-0.5 rounded-full" style={{background: 'var(--card)'}}>{stats.completed}</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm"
            style={{background: 'var(--input)'}}
          >
            <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Overdue:</div>
            <div className="text-sm px-2 py-0.5 rounded-full" style={{background: 'var(--card)'}}>{stats.overdue}</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Statistics Cards with Toggle */}
      <AnimatePresence>
        {statsVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          >
            <StatsCard 
              title="Total Tasks" 
              value={stats.total} 
              icon={<FiClipboard className="text-xl" />} 
              color="bg-blue-100 text-blue-500 dark:bg-blue-900/20" 
              onClick={() => setActiveTab('all')}
              active={activeTab === 'all'}
            />
            <StatsCard 
              title="Completed" 
              value={stats.completed} 
              icon={<FiCheckCircle className="text-xl" />} 
              color="bg-green-100 text-green-500 dark:bg-green-900/20" 
              change={12}
              onClick={() => setActiveTab('completed')}
              active={activeTab === 'completed'}
            />
            <StatsCard 
              title="Overdue" 
              value={stats.overdue} 
              icon={<FiAlertTriangle className="text-xl" />} 
              color="bg-red-100 text-red-500 dark:bg-red-900/20" 
              change={-5}
              onClick={() => setActiveTab('overdue')}
              active={activeTab === 'overdue'}
            />
            <StatsCard 
              title="Productivity" 
              value={`${Math.round((stats.completed / Math.max(stats.total, 1)) * 100)}%`} 
              icon={<FiTrendingUp className="text-xl" />} 
              color="bg-purple-100 text-purple-500 dark:bg-purple-900/20" 
              change={8}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* View Toggle for smaller screens */}
      <div className="flex justify-center mb-6 md:hidden">
        <div className="flex rounded-xl p-1" style={{ background: 'var(--input)' }}>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-md' : ''}`}
            style={{ color: viewMode === 'list' ? 'var(--text)' : 'var(--text-secondary)' }}
          >
            <FiList className="inline mr-2" />
            List
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-md' : ''}`}
            style={{ color: viewMode === 'grid' ? 'var(--text)' : 'var(--text-secondary)' }}
          >
            <FiGrid className="inline mr-2" />
            Grid
          </button>
        </div>
      </div>

      {/* Todo Items */}
      <div className="mb-20">
        {filteredTodos.length > 0 ? (
          viewMode === 'list' ? (
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <AnimatePresence mode="popLayout">
                {filteredTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    toggleFavorite={toggleFavorite}
                    startEdit={startEdit}
                    deleteTodo={deleteTodo}
                    toggleSubtask={toggleSubtask}
                    getPriorityIcon={getPriorityIcon}
                    getCategoryIcon={getCategoryIcon}
                    isOverdue={isOverdue}
                    viewMode="list"
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <AnimatePresence mode="popLayout">
                {filteredTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    toggleFavorite={toggleFavorite}
                    startEdit={startEdit}
                    deleteTodo={deleteTodo}
                    getPriorityIcon={getPriorityIcon}
                    getCategoryIcon={getCategoryIcon}
                    isOverdue={isOverdue}
                    viewMode="grid"
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card rounded-2xl p-8 text-center backdrop-blur-md"
            style={{background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--accent)'}}
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">No todos found</h3>
            <p className="opacity-75 mb-6">Try changing your search or add a new todo</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="btn-primary px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
              style={{background: 'var(--button)', color: 'white'}}
            >
              Add Your First Todo
            </motion.button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default TodoList;