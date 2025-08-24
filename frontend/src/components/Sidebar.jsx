// import React from 'react';
// import { 
//   FiInbox, FiCheckSquare, FiCheck, FiStar, 
//   FiArchive, FiChevronLeft, FiChevronRight 
// } from '../icons/icons';

// import '../App.css'


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
//   return (
// <div className={`hidden md:block ${sidebarCollapsed ? 'w-20' : 'w-full lg:w-1/4'} transition-all duration-300`}>
//   <div className="sidebar rounded-2xl p-5 shadow-lg sticky top-6 h-[calc(100vh-120px)] overflow-y-auto" style={{background: 'var(--sidebar)'}}>
//     <div className="flex justify-between items-center mb-4">
//       <h2 className={`text-lg font-semibold ${sidebarCollapsed ? 'hidden' : ''}`} style={{color: 'var(--text)'}}>Navigation</h2>
//       <button 
//         onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//         className="p-1 rounded-md transition-colors"
//         style={{background: 'var(--input)', color: 'var(--text)'}}
//       >
//         {sidebarCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
//       </button>
//     </div>
    
//     <div className="space-y-2 mb-6">
//       <button
//         onClick={() => setActiveTab('all')}
//         className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//         style={{
//           background: activeTab === 'all' ? 'var(--accent)' : 'var(--input)',
//           color: activeTab === 'all' ? 'white' : 'var(--text)'
//         }}
//       >
//         <FiInbox className="flex-shrink-0" />
//         {!sidebarCollapsed && <span>All Tasks</span>}
//         {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.isArchived).length}</span>}
//       </button>
      
//       <button
//         onClick={() => setActiveTab('active')}
//         className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//         style={{
//           background: activeTab === 'active' ? 'var(--accent)' : 'var(--input)',
//           color: activeTab === 'active' ? 'white' : 'var(--text)'
//         }}
//       >
//         <FiCheckSquare className="flex-shrink-0" />
//         {!sidebarCollapsed && <span>Active</span>}
//         {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.completed && !t.isArchived).length}</span>}
//       </button>
      
//       <button
//         onClick={() => setActiveTab('completed')}
//         className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//         style={{
//           background: activeTab === 'completed' ? 'var(--accent)' : 'var(--input)',
//           color: activeTab === 'completed' ? 'white' : 'var(--text)'
//         }}
//       >
//         <FiCheck className="flex-shrink-0" />
//         {!sidebarCollapsed && <span>Completed</span>}
//         {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.completed && !t.isArchived).length}</span>}
//       </button>
      
//       <button
//         onClick={() => setActiveTab('favorites')}
//         className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//         style={{
//           background: activeTab === 'favorites' ? 'var(--accent)' : 'var(--input)',
//           color: activeTab === 'favorites' ? 'white' : 'var(--text)'
//         }}
//       >
//         <FiStar className="flex-shrink-0" />
//         {!sidebarCollapsed && <span>Favorites</span>}
//         {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.isFavorite && !t.isArchived).length}</span>}
//       </button>

//       <button
//         onClick={() => setActiveTab('archived')}
//         className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//         style={{
//           background: activeTab === 'archived' ? 'var(--accent)' : 'var(--input)',
//           color: activeTab === 'archived' ? 'white' : 'var(--text)'
//         }}
//       >
//         <FiArchive className="flex-shrink-0" />
//         {!sidebarCollapsed && <span>Archived</span>}
//         {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.isArchived).length}</span>}
//       </button>
//     </div>
    
//     {!sidebarCollapsed && (
//       <>
//         <h2 className="text-lg font-semibold mb-4" style={{color: 'var(--text)'}}>Categories</h2>
//         <div className="space-y-2">
//           {categories.map(category => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(selectedCategory === category.name ? '' : category.name)}
//               className={`w-full text-left px-4 py-2 rounded-xl flex items-center gap-3 transition-all`}
//               style={{
//                 background: selectedCategory === category.name ? 'var(--accent)' : 'var(--input)',
//                 color: selectedCategory === category.name ? 'white' : 'var(--text)'
//               }}
//             >
//               <span className="flex-shrink-0" style={{color: selectedCategory === category.name ? 'white' : 'var(--accent)'}}>
//                 {category.icon}
//               </span>
//               <span>{category.name}</span>
//               <span className="ml-auto text-sm opacity-70">
//                 {todos.filter(t => t.category === category.name && !t.isArchived).length}
//               </span>
//             </button>
//           ))}
//         </div>
//       </>
//     )}
//   </div>
// </div>
//   );
// };

// export default Sidebar;



























import React from 'react';
import { 
  FiInbox, FiCheckSquare, FiCheck, FiStar, 
  FiArchive, FiChevronLeft, FiChevronRight,
  FiCircle, FiBriefcase, FiHome, FiShoppingBag
} from '../icons/icons';

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

  return (
    <div className={`hidden md:block ${sidebarCollapsed ? 'w-20' : 'w-full lg:w-72'} transition-all duration-300`}>
      <div 
        className="sidebar p-5 shadow-lg fixed  h-[100vh] overflow-y-auto thin-scrollbar"
        style={{background: 'var(--sidebar)'}}
      >
        {/* Header with smooth animation */}
        <div className="flex justify-between items-center mb-6">
          {!sidebarCollapsed && (
            <h2 className="text-lg font-semibold tracking-wide" style={{color: 'var(--text)'}}>
              Navigation
            </h2>
          )}
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-sm"
            style={{
              background: 'var(--input)', 
              color: 'var(--text)'
            }}
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? <FiChevronRight size={18} /> : <FiChevronLeft size={18} />}
          </button>
        </div>
        
        {/* Task Filters with enhanced hover effects */}
        <div className="space-y-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
              ${sidebarCollapsed ? 'justify-center' : ''}
              ${activeTab === 'all' 
                ? 'shadow-lg transform scale-[1.02]' 
                : 'hover:shadow-md hover:translate-x-1'}`}
            style={{
              background: activeTab === 'all' ? 'var(--accent)' : 'var(--input)',
              color: activeTab === 'all' ? 'white' : 'var(--text)'
            }}
          >
            <FiInbox className="flex-shrink-0" size={18} />
            {!sidebarCollapsed && (
              <>
                <span className="font-medium">All Tasks</span>
                <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
                  {todos.filter(t => !t.isArchived).length}
                </span>
              </>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('active')}
            className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
              ${sidebarCollapsed ? 'justify-center' : ''}
              ${activeTab === 'active' 
                ? 'shadow-lg transform scale-[1.02]' 
                : 'hover:shadow-md hover:translate-x-1'}`}
            style={{
              background: activeTab === 'active' ? 'var(--accent)' : 'var(--input)',
              color: activeTab === 'active' ? 'white' : 'var(--text)'
            }}
          >
            <FiCheckSquare className="flex-shrink-0" size={18} />
            {!sidebarCollapsed && (
              <>
                <span className="font-medium">Active</span>
                <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
                  {todos.filter(t => !t.completed && !t.isArchived).length}
                </span>
              </>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('completed')}
            className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
              ${sidebarCollapsed ? 'justify-center' : ''}
              ${activeTab === 'completed' 
                ? 'shadow-lg transform scale-[1.02]' 
                : 'hover:shadow-md hover:translate-x-1'}`}
            style={{
              background: activeTab === 'completed' ? 'var(--accent)' : 'var(--input)',
              color: activeTab === 'completed' ? 'white' : 'var(--text)'
            }}
          >
            <FiCheck className="flex-shrink-0" size={18} />
            {!sidebarCollapsed && (
              <>
                <span className="font-medium">Completed</span>
                <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
                  {todos.filter(t => t.completed && !t.isArchived).length}
                </span>
              </>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('favorites')}
            className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
              ${sidebarCollapsed ? 'justify-center' : ''}
              ${activeTab === 'favorites' 
                ? 'shadow-lg transform scale-[1.02]' 
                : 'hover:shadow-md hover:translate-x-1'}`}
            style={{
              background: activeTab === 'favorites' ? 'var(--accent)' : 'var(--input)',
              color: activeTab === 'favorites' ? 'white' : 'var(--text)'
            }}
          >
            <FiStar className="flex-shrink-0" size={18} />
            {!sidebarCollapsed && (
              <>
                <span className="font-medium">Favorites</span>
                <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
                  {todos.filter(t => t.isFavorite && !t.isArchived).length}
                </span>
              </>
            )}
          </button>

          <button
            onClick={() => setActiveTab('archived')}
            className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 
              ${sidebarCollapsed ? 'justify-center' : ''}
              ${activeTab === 'archived' 
                ? 'shadow-lg transform scale-[1.02]' 
                : 'hover:shadow-md hover:translate-x-1'}`}
            style={{
              background: activeTab === 'archived' ? 'var(--accent)' : 'var(--input)',
              color: activeTab === 'archived' ? 'white' : 'var(--text)'
            }}
          >
            <FiArchive className="flex-shrink-0" size={18} />
            {!sidebarCollapsed && (
              <>
                <span className="font-medium">Archived</span>
                <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
                  {todos.filter(t => t.isArchived).length}
                </span>
              </>
            )}
          </button>
        </div>
        
        {/* Categories Section */}
        {!sidebarCollapsed && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold tracking-wide" style={{color: 'var(--text)'}}>
                Categories
              </h2>
              <span className="text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full" style={{color: 'var(--text)'}}>
                {displayCategories.length}
              </span>
            </div>
            <div className="space-y-2">
              {displayCategories.map(category => {
                const taskCount = todos.filter(t => t.category === category.name && !t.isArchived).length;
                const isSelected = selectedCategory === category.name;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(isSelected ? '' : category.name)}
                    className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 group
                      ${isSelected 
                        ? 'shadow-lg transform scale-[1.02]' 
                        : 'hover:shadow-md hover:translate-x-1'}`}
                    style={{
                      background: isSelected ? 'var(--accent)' : 'var(--input)',
                      color: isSelected ? 'white' : 'var(--text)'
                    }}
                  >
                    <span 
                      className={`flex-shrink-0 transition-colors duration-200 ${isSelected ? 'text-white' : 'text-accent group-hover:scale-110'}`}
                    >
                      {category.icon}
                    </span>
                    <span className="font-medium truncate">{category.name}</span>
                    <span className="ml-auto text-sm bg-black bg-opacity-20 px-2 py-1 rounded-full">
                      {taskCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* Quick Stats Footer (only when expanded) */}
        {!sidebarCollapsed && (
          <div className="  border-t" style={{borderColor: 'var(--input)'}}>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-2 rounded-lg" style={{background: 'var(--input)'}}>
                <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Total</div>
                <div className="text-lg font-bold" style={{color: 'var(--accent)'}}>
                  {todos.length}
                </div>
              </div>
              <div className="p-2 rounded-lg" style={{background: 'var(--input)'}}>
                <div className="text-sm font-medium" style={{color: 'var(--text)'}}>Done</div>
                <div className="text-lg font-bold" style={{color: 'var(--accent)'}}>
                  {todos.filter(t => t.completed).length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;