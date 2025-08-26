






// import React from 'react';
// import { 
//   FiInbox, FiCheckSquare, FiCheck, FiStar, 
//   FiArchive, FiChevronLeft, FiChevronRight,
//   FiCircle, FiBriefcase, FiHome, FiShoppingBag
// } from '../icons/icons';

// const Sidebar = ({
//   sidebarCollapsed,
//   setSidebarCollapsed,
//   activeTab,
//   setActiveTab,
//   todos,
//   categories,
//   selectedCategory,
//   setSelectedCategory
// }) => {
//   // Default categories with icons if none provided
//   const defaultCategories = [
//     { id: 'personal', name: 'Personal', icon: <FiHome className="w-4 h-4" /> },
//     { id: 'work', name: 'Work', icon: <FiBriefcase className="w-4 h-4" /> },
//     { id: 'shopping', name: 'Shopping', icon: <FiShoppingBag className="w-4 h-4" /> },
//     { id: 'misc', name: 'Miscellaneous', icon: <FiCircle className="w-4 h-4" /> },
//   ];

//   // Use provided categories or default ones
//   const displayCategories = categories && categories.length > 0 ? categories : defaultCategories;

//   return (
//     <div className={`hidden md:block ${sidebarCollapsed ? 'w-20' : 'w-full lg:w-72'} transition-all duration-300`}>
//       <div 
//         className="sidebar p-5 shadow-lg fixed  h-[100vh] overflow-y-auto thin-scrollbar"
//         style={{background: 'var(--sidebar)'}}
//       >
//         {/* Header with smooth animation */}
//         <div className="flex justify-between items-center mb-6">
//           {!sidebarCollapsed && (
//             <h2 className="text-lg font-semibold tracking-wide" style={{color: 'var(--text)'}}>
//               Navigation
//             </h2>
//           )}
//           <button 
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             className="p-2 rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-sm"
//             style={{
//               background: 'var(--input)', 
//               color: 'var(--text)'
//             }}
//             aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
//           >
//             {sidebarCollapsed ? <FiChevronRight size={18} /> : <FiChevronLeft size={18} />}
//           </button>
//         </div>
        
//         {/* Task Filters with enhanced hover effects */}
//         <div className="space-y-2 mb-8">
//           <button
//             onClick={() => setActiveTab('all')}
//             className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
//               ${sidebarCollapsed ? 'justify-center' : ''}
//               ${activeTab === 'all' 
//                 ? 'shadow-lg transform scale-[1.02]' 
//                 : 'hover:shadow-md hover:translate-x-1'}`}
//             style={{
//               background: activeTab === 'all' ? 'var(--accent)' : 'var(--input)',
//               color: activeTab === 'all' ? 'white' : 'var(--text)'
//             }}
//           >
//             <FiInbox className="flex-shrink-0" size={18} />
//             {!sidebarCollapsed && (
//               <>
//                 <span className="font-medium">All Tasks</span>
//                 <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
//                   {todos.filter(t => !t.isArchived).length}
//                 </span>
//               </>
//             )}
//           </button>
          
//           <button
//             onClick={() => setActiveTab('active')}
//             className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
//               ${sidebarCollapsed ? 'justify-center' : ''}
//               ${activeTab === 'active' 
//                 ? 'shadow-lg transform scale-[1.02]' 
//                 : 'hover:shadow-md hover:translate-x-1'}`}
//             style={{
//               background: activeTab === 'active' ? 'var(--accent)' : 'var(--input)',
//               color: activeTab === 'active' ? 'white' : 'var(--text)'
//             }}
//           >
//             <FiCheckSquare className="flex-shrink-0" size={18} />
//             {!sidebarCollapsed && (
//               <>
//                 <span className="font-medium">Active</span>
//                 <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
//                   {todos.filter(t => !t.completed && !t.isArchived).length}
//                 </span>
//               </>
//             )}
//           </button>
          
//           <button
//             onClick={() => setActiveTab('completed')}
//             className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
//               ${sidebarCollapsed ? 'justify-center' : ''}
//               ${activeTab === 'completed' 
//                 ? 'shadow-lg transform scale-[1.02]' 
//                 : 'hover:shadow-md hover:translate-x-1'}`}
//             style={{
//               background: activeTab === 'completed' ? 'var(--accent)' : 'var(--input)',
//               color: activeTab === 'completed' ? 'white' : 'var(--text)'
//             }}
//           >
//             <FiCheck className="flex-shrink-0" size={18} />
//             {!sidebarCollapsed && (
//               <>
//                 <span className="font-medium">Completed</span>
//                 <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
//                   {todos.filter(t => t.completed && !t.isArchived).length}
//                 </span>
//               </>
//             )}
//           </button>
          
//           <button
//             onClick={() => setActiveTab('favorites')}
//             className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
//               ${sidebarCollapsed ? 'justify-center' : ''}
//               ${activeTab === 'favorites' 
//                 ? 'shadow-lg transform scale-[1.02]' 
//                 : 'hover:shadow-md hover:translate-x-1'}`}
//             style={{
//               background: activeTab === 'favorites' ? 'var(--accent)' : 'var(--input)',
//               color: activeTab === 'favorites' ? 'white' : 'var(--text)'
//             }}
//           >
//             <FiStar className="flex-shrink-0" size={18} />
//             {!sidebarCollapsed && (
//               <>
//                 <span className="font-medium">Favorites</span>
//                 <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
//                   {todos.filter(t => t.isFavorite && !t.isArchived).length}
//                 </span>
//               </>
//             )}
//           </button>

//           <button
//             onClick={() => setActiveTab('archived')}
//             className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
//               ${sidebarCollapsed ? 'justify-center' : ''}
//               ${activeTab === 'archived' 
//                 ? 'shadow-lg transform scale-[1.02]' 
//                 : 'hover:shadow-md hover:translate-x-1'}`}
//             style={{
//               background: activeTab === 'archived' ? 'var(--accent)' : 'var(--input)',
//               color: activeTab === 'archived' ? 'white' : 'var(--text)'
//             }}
//           >
//             <FiArchive className="flex-shrink-0" size={18} />
//             {!sidebarCollapsed && (
//               <>
//                 <span className="font-medium">Archived</span>
//                 <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
//                   {todos.filter(t => t.isArchived).length}
//                 </span>
//               </>
//             )}
//           </button>
//         </div>
        
//         {/* Categories Section */}
//         {!sidebarCollapsed && (
//           <>
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold tracking-wide" style={{color: 'var(--text)'}}>
//                 Categories
//               </h2>
//               <span className="text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full" style={{color: 'var(--text)'}}>
//                 {displayCategories.length}
//               </span>
//             </div>
//             <div className="space-y-2">
//               {displayCategories.map(category => {
//                 const taskCount = todos.filter(t => t.category === category.name && !t.isArchived).length;
//                 const isSelected = selectedCategory === category.name;
                
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(isSelected ? '' : category.name)}
//                     className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 group
//                       ${isSelected 
//                         ? 'shadow-lg transform scale-[1.02]' 
//                         : 'hover:shadow-md hover:translate-x-1'}`}
//                     style={{
//                       background: isSelected ? 'var(--accent)' : 'var(--input)',
//                       color: isSelected ? 'white' : 'var(--text)'
//                     }}
//                   >
//                     <span 
//                       className={`flex-shrink-0 transition-colors duration-200 ${isSelected ? 'text-white' : 'text-accent group-hover:scale-110'}`}
//                     >
//                       {category.icon}
//                     </span>
//                     <span className="font-medium truncate">{category.name}</span>
//                     <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
//                       {taskCount}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </>
//         )}

//         {/* Quick Stats Footer (only when expanded) */}
//         {!sidebarCollapsed && (
//           <div className="  border-t" style={{borderColor: 'var(--input)'}}>
//             <div className="grid grid-cols-2 gap-3 text-center">
//               <div className="p-2 rounded-lg" style={{background: 'var(--input)'}}>
//                 <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Total</div>
//                 <div className="text-lg font-bold" style={{color: 'var(--accent)'}}>
//                   {todos.length}
//                 </div>
//               </div>
//               <div className="p-2 rounded-lg" style={{background: 'var(--input)'}}>
//                 <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Done</div>
//                 <div className="text-lg font-bold" style={{color: 'var(--accent)'}}>
//                   {todos.filter(t => t.completed).length}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

























import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiInbox, FiCheckSquare, FiCheck, FiStar, 
  FiArchive, FiChevronLeft, FiChevronRight,
  FiCircle, FiBriefcase, FiHome, FiShoppingBag,
  FiTrendingUp, FiAward, FiBarChart2
} from '../icons/icons';

  // import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";

const Sidebar = ({
  sidebarCollapsed,
  setSidebarCollapsed,
  activeTab,
  setActiveTab,
  todos,
  categories,
  selectedCategory,
  setSelectedCategory
}) => {
  // Default categories with icons if none provided
  const defaultCategories = [
    { id: 'personal', name: 'Personal', icon: <FiHome className="w-4 h-4" /> },
    { id: 'work', name: 'Work', icon: <FiBriefcase className="w-4 h-4" /> },
    { id: 'shopping', name: 'Shopping', icon: <FiShoppingBag className="w-4 h-4" /> },
    { id: 'misc', name: 'Miscellaneous', icon: <FiCircle className="w-4 h-4" /> },
  ];

  // Use provided categories or default ones
  const displayCategories = categories && categories.length > 0 ? categories : defaultCategories;

  // Calculate stats
  const totalTasks = todos.length;
  const completedTasks = todos.filter(t => t.completed).length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const NavItem = ({ icon, label, count, isActive, onClick, badgeColor }) => (
    <motion.button
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 group relative overflow-hidden ${
        sidebarCollapsed ? 'justify-center' : ''
      }`}
      style={{
        background: isActive ? 'var(--accent)' : 'var(--input)',
        color: isActive ? '' : 'var(--text)'
      }}
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
          backgroundSize: '200% 100%'
        }}
        whileHover={{
          backgroundPosition: ['0% 0%', '100% 0%'],
          transition: { duration: 1.5, repeat: Infinity }
        }}
      />
      
      <div className="relative z-10 flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="flex-shrink-0"
        >
          {icon}
        </motion.div>
        
        {!sidebarCollapsed && (
          <>
            <span className="font-semibold text-sm tracking-wide flex-1">{label}</span>
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`text-xs font-bold px-2 py-1 rounded-full min-w-[2rem] text-center ${
                isActive ? ' bg-opacity-20' : 'bg-accent bg-opacity-10'
              }`}
              // style={{ color: isActive ? '' : 'var(--accent)' }}
            >
              {count}
            </motion.span>
          </>
        )}
      </div>
    </motion.button>
  );

  // const CategoryItem = ({ category, count, isSelected }) => (
  //   <motion.button
  //     whileHover={{ x: 5 }}
  //     whileTap={{ scale: 0.98 }}
  //     onClick={() => setSelectedCategory(isSelected ? '' : category.name)}
  //     className="w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 group relative overflow-hidden"
  //     style={{
  //       background: isSelected ? 'var(--accent)' : 'var(--input)',
  //       color: isSelected ? 'white' : 'var(--text)'
  //     }}
  //   >
  //     {/* Animated background effect */}
  //     <motion.div
  //       className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  //       style={{
  //         background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
  //         backgroundSize: '200% 100%'
  //       }}
  //       whileHover={{
  //         backgroundPosition: ['0% 0%', '100% 0%'],
  //         transition: { duration: 1.5, repeat: Infinity }
  //       }}
  //     />
      
  //     <div className="relative z-10 flex items-center gap-4 w-full">
  //       <motion.div
  //         whileHover={{ scale: 1.2, rotate: 5 }}
  //         className="flex-shrink-0"
  //         style={{ color: isSelected ? 'white' : 'var(--accent)' }}
  //       >
  //         {category.icon}
  //       </motion.div>
        
  //       <span className="font-medium text-sm truncate flex-1">{category.name}</span>
        
  //       <motion.span
  //         initial={{ scale: 0.8 }}
  //         animate={{ scale: 1 }}
  //         className={`text-xs font-bold px-2 py-1 rounded-full min-w-[2rem] text-center ${
  //           isSelected ? 'bg-white bg-opacity-20' : 'bg-accent bg-opacity-10'
  //         }`}
  //         style={{ color: isSelected ? 'white' : 'var(--accent)' }}
  //       >
  //         {count}
  //       </motion.span>
  //     </div>
  //   </motion.button>
  // );






const CategoryItem = ({ category, count, isSelected, onClick }) => (
  <motion.button
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick} // 👈 simple pass ho gaya
    className="w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 group relative overflow-hidden"
    style={{
      background: isSelected ? "var(--accent)" : "var(--input)",
      color: isSelected ? "white" : "var(--text)"
    }}
  >
    <div className="relative z-10 flex items-center gap-4 w-full">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="flex-shrink-0"
        // style={{ color: isSelected ? "white" : "var(--accent)" }}
      >
        {FiIcons[category.icon] && <>{FiIcons[category.icon]()}</>}
      </motion.div>

      <span className="font-medium text-sm truncate flex-1">{category.name}</span>

      <motion.span
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className={`text-xs font-bold px-2 py-1 rounded-full min-w-[2rem] text-center ${
          isSelected ? " bg-opacity-20" : "bg-accent bg-opacity-10"
        }`}
        // style={{ color: isSelected ? "white" : "var(--accent)" }}
      >
        {count}
      </motion.span>
    </div>
  </motion.button>
);


  return (
    <div className={`hidden md:block ${sidebarCollapsed ? 'w-20' : 'w-full lg:w-80'} transition-all duration-500 ease-in-out`}>
      <motion.div 
        className="sidebar p-6 shadow-2xl fixed h-[100vh] overflow-y-auto thin-scrollbar"
        style={{ background: 'var(--sidebar)' }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-xl font-bold tracking-wide "
                style={{ color: 'var(--text)' }}
              >
                Task Manager
              </motion.h2>
            )}
          </AnimatePresence>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-3 rounded-xl transition-all duration-300 hover:shadow-lg"
            style={{
              background: 'var(--input)', 
              color: 'var(--text)'
            }}
          >
            {sidebarCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
          </motion.button>
        </div>
        
        {/* Task Filters */}
        <div className="space-y-3 mb-8">
          <NavItem
            icon={<FiInbox size={20} />}
            label="All Tasks"
            count={todos.filter(t => !t.isArchived).length}
            isActive={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
          />
          
          <NavItem
            icon={<FiCheckSquare size={20} />}
            label="Active"
            count={todos.filter(t => !t.completed && !t.isArchived).length}
            isActive={activeTab === 'active'}
            onClick={() => setActiveTab('active')}
          />
          
          <NavItem
            icon={<FiCheck size={20} />}
            label="Completed"
            count={todos.filter(t => t.completed && !t.isArchived).length}
            isActive={activeTab === 'completed'}
            onClick={() => setActiveTab('completed')}
          />
          
          <NavItem
            icon={<FiStar size={20} />}
            label="Favorites"
            count={todos.filter(t => t.isFavorite && !t.isArchived).length}
            isActive={activeTab === 'favorites'}
            onClick={() => setActiveTab('favorites')}
          />

          <NavItem
            icon={<FiArchive size={20} />}
            label="Archived"
            count={todos.filter(t => t.isArchived).length}
            isActive={activeTab === 'archived'}
            onClick={() => setActiveTab('archived')}
          />
        </div>
        
        {/* Categories Section */}
        <AnimatePresence>
          {!sidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg font-semibold tracking-wide"
                  style={{ color: 'var(--text)' }}
                >
                  Categories
                </motion.h3>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-sm px-3 py-1 rounded-full font-bold"
                  style={{ background: 'var(--accent)', color: 'white' }}
                >
                  {displayCategories.length}
                </motion.span>
              </div>
              
              <div className="space-y-2">
                {displayCategories.map(category => {
                  const taskCount = todos.filter(t => t.category === category.name && !t.isArchived).length;
                  const isSelected = selectedCategory === category.name;
                    const IconComponent = FiIcons[category.icon]; 
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CategoryItem
                        category={category}
                        count={taskCount}
                        isSelected={isSelected}
                                onClick={() =>
          setSelectedCategory(isSelected ? "" : category.name)
        } 
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Footer */}
        <AnimatePresence>
          {!sidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-auto pt-6 border-t"
              style={{ borderColor: 'var(--input)' }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl"
                  style={{ background: 'var(--input)' }}
                >
                  <FiInbox className="mx-auto mb-2" style={{ color: 'var(--accent)' }} />
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>Total</div>
                  <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>
                    {totalTasks}
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl"
                  style={{ background: 'var(--input)' }}
                >
                  <FiTrendingUp className="mx-auto mb-2" style={{ color: 'var(--accent)' }} />
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>Done</div>
                  <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>
                    {completedTasks}
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl"
                  style={{ background: 'var(--input)' }}
                >
                  <FiBarChart2 className="mx-auto mb-2" style={{ color: 'var(--accent)' }} />
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>Rate</div>
                  <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>
                    {completionRate}%
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Sidebar;