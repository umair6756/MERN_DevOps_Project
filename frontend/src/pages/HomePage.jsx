




// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// import { 
//   FiPlus, FiTrash2, FiEdit, FiCheck, FiSun, FiMoon, 
//   FiFlag, FiCalendar, FiClock, FiSearch, FiFilter,
//   FiChevronDown, FiChevronUp, FiStar, FiArchive, FiRefreshCw,
//   FiGrid, FiList, FiEye, FiEyeOff, FiLock, FiUnlock, FiAward,
//   FiBell, FiBellOff, FiShare2, FiDownload, FiUpload, FiHeart,
//   FiBarChart2, FiPieChart, FiTrendingUp, FiSettings, FiUser,
//   FiBookmark, FiTag, FiLayers, FiBox, FiDatabase, FiCoffee,
//   FiX, FiMenu, FiCheckSquare, FiSquare, FiHome, FiBriefcase,
//   FiActivity, FiDollarSign, FiBook, FiShoppingBag, FiPhone,
//   FiMessageSquare, FiVideo, FiMusic, FiImage, FiFileText,FiChevronLeft,FiChevronRight 
// } from 'react-icons/fi';

// const HomePage = () => {
//   // State management with localStorage persistence
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem('todos');
//     return saved ? JSON.parse(saved) : [];
//   });
  
//   const [inputValue, setInputValue] = useState('');
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState('');
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('date');
//   const [theme, setTheme] = useState(() => {
//     const saved = localStorage.getItem('theme');
//     return saved || 'dark';
//   });
  
//   const [tags] = useState([
//     'work', 'personal', 'urgent', 'shopping', 'health', 
//     'finance', 'education', 'travel', 'home', 'food'
//   ]);
  
//   const [selectedTag, setSelectedTag] = useState('');
//   const [priority, setPriority] = useState('medium');
//   const [dueDate, setDueDate] = useState('');
//   const [notes, setNotes] = useState('');
//   const [viewMode, setViewMode] = useState('list');
//   const [showCompleted, setShowCompleted] = useState(true);
  
//   const [categories] = useState([
//     { id: 1, name: 'Personal', color: 'blue', icon: <FiUser className="text-blue-500" /> },
//     { id: 2, name: 'Work', color: 'green', icon: <FiBriefcase className="text-green-500" /> },
//     { id: 3, name: 'Health', color: 'red', icon: <FiHeart className="text-red-500" /> },
//     { id: 4, name: 'Education', color: 'purple', icon: <FiBook className="text-purple-500" /> },
//     { id: 5, name: 'Finance', color: 'orange', icon: <FiDollarSign className="text-orange-500" /> },
//     { id: 6, name: 'Shopping', color: 'pink', icon: <FiShoppingBag className="text-pink-500" /> },
//     { id: 7, name: 'Home', color: 'indigo', icon: <FiHome className="text-indigo-500" /> },
//     { id: 8, name: 'Entertainment', color: 'yellow', icon: <FiVideo className="text-yellow-500" /> }
//   ]);
  
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isPrivate, setIsPrivate] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showArchived, setShowArchived] = useState(false);
//   const [showStats, setShowStats] = useState(false);
//   const [productivityScore, setProductivityScore] = useState(0);
//   const [achievements, setAchievements] = useState([]);
//   const [showAchievements, setShowAchievements] = useState(false);
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [showSettings, setShowSettings] = useState(false);
//   const [activeTab, setActiveTab] = useState('all');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   // Save to localStorage whenever todos or theme changes
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   // Initialize with sample todos if empty
//   useEffect(() => {
//     if (todos.length === 0) {
//       const sampleTodos = [
//         {
//           id: 1,
//           text: 'Welcome to your advanced todo app',
//           completed: false,
//           priority: 'high',
//           date: new Date(),
//           tag: 'work',
//           dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
//           notes: 'This is a sample todo to get you started',
//           category: 'Work',
//           isPrivate: false,
//           isFavorite: true,
//           isArchived: false,
//           timeSpent: 0,
//           estimatedTime: 30,
//           subtasks: [
//             { id: 1, text: 'Explore features', completed: true },
//             { id: 2, text: 'Customize settings', completed: false }
//           ]
//         },
//         {
//           id: 2,
//           text: 'Click on the + button to add a new todo',
//           completed: false,
//           priority: 'medium',
//           date: new Date(),
//           tag: 'personal',
//           dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
//           notes: '',
//           category: 'Personal',
//           isPrivate: false,
//           isFavorite: false,
//           isArchived: false,
//           timeSpent: 0,
//           estimatedTime: 15,
//           subtasks: []
//         }
//       ];
//       setTodos(sampleTodos);
//     }
    
//     calculateProductivityScore(todos);
//     checkAchievements(todos);
//   }, []);

//   // Calculate productivity score
//   const calculateProductivityScore = useCallback((todosArray) => {
//     const totalTodos = todosArray.length;
//     const completedTodos = todosArray.filter(todo => todo.completed).length;
//     const overdueTodos = todosArray.filter(todo => 
//       todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed
//     ).length;
    
//     let score = 0;
//     if (totalTodos > 0) {
//       score = Math.round((completedTodos / totalTodos) * 100);
//       score -= overdueTodos * 5;
      
//       const earlyCompleted = todosArray.filter(todo => 
//         todo.completed && todo.dueDate && new Date(todo.dueDate) > new Date()
//       ).length;
      
//       score += earlyCompleted * 2;
//       score = Math.max(0, Math.min(100, score));
//     }
    
//     setProductivityScore(score);
//   }, []);

//   // Check for achievements
//   const checkAchievements = useCallback((todosArray) => {
//     const newAchievements = [];
    
//     if (todosArray.length > 0) {
//       newAchievements.push({
//         id: 1,
//         name: 'Getting Started',
//         description: 'Added your first todo',
//         icon: <FiAward />,
//         color: 'gold',
//         unlocked: true,
//         date: new Date()
//       });
//     }
    
//     const completedCount = todosArray.filter(todo => todo.completed).length;
//     if (completedCount >= 5) {
//       newAchievements.push({
//         id: 2,
//         name: 'Completionist',
//         description: 'Completed 5 todos',
//         icon: <FiCheck />,
//         color: 'silver',
//         unlocked: true,
//         date: new Date()
//       });
//     }
    
//     setAchievements(newAchievements);
//   }, []);

//   // Theme classes
//   const themes = {
//     light: {
//       bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
//       card: 'bg-white shadow-xl border border-gray-100',
//       text: 'text-gray-800',
//       input: 'bg-white border-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
//       button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg',
//       accent: 'text-blue-500',
//       header: 'bg-gradient-to-r from-blue-600 to-blue-700',
//       sidebar: 'bg-gradient-to-b from-blue-50 to-indigo-50 border-r border-gray-200',
//     },
//     dark: {
//       bg: 'bg-gradient-to-br from-gray-900 to-gray-800',
//       card: 'bg-gray-800 shadow-xl border border-gray-700',
//       text: 'text-gray-100',
//       input: 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
//       button: 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg',
//       accent: 'text-indigo-400',
//       header: 'bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700',
//       sidebar: 'bg-gradient-to-b from-gray-800 to-gray-900 border-r border-gray-700',
//     }
//   };

//   const currentTheme = themes[theme];

//   // Add a new todo
//   const addTodo = () => {
//     if (inputValue.trim() !== '') {
//       const newTodo = {
//         id: Date.now(),
//         text: inputValue,
//         completed: false,
//         priority,
//         date: new Date(),
//         tag: selectedTag,
//         dueDate,
//         notes,
//         category: selectedCategory,
//         isPrivate,
//         isFavorite,
//         isArchived: false,
//         timeSpent: 0,
//         estimatedTime: 0,
//         subtasks: []
//       };
      
//       setTodos([newTodo, ...todos]);
//       resetForm();
//       setIsFormOpen(false);
      
//       calculateProductivityScore([newTodo, ...todos]);
//       checkAchievements([newTodo, ...todos]);
//     }
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setInputValue('');
//     setPriority('medium');
//     setSelectedTag('');
//     setDueDate('');
//     setNotes('');
//     setSelectedCategory('');
//     setIsPrivate(false);
//     setIsFavorite(false);
//   };

//   // Edit a todo
//   const updateTodo = () => {
//     if (editValue.trim() !== '') {
//       const updatedTodos = todos.map(todo =>
//         todo.id === editId
//           ? { 
//             ...todo, 
//             text: editValue, 
//             priority, 
//             tag: selectedTag, 
//             dueDate,
//             notes,
//             category: selectedCategory,
//             isPrivate,
//             isFavorite
//           }
//           : todo
//       );
      
//       setTodos(updatedTodos);
//       setEditId(null);
//       resetForm();
      
//       calculateProductivityScore(updatedTodos);
//       checkAchievements(updatedTodos);
//     }
//   };

//   // Delete a todo
//   const deleteTodo = id => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//     calculateProductivityScore(updatedTodos);
//   };

//   // Toggle completion status
//   const toggleComplete = id => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
    
//     setTodos(updatedTodos);
//     calculateProductivityScore(updatedTodos);
//     checkAchievements(updatedTodos);
//   };

//   // Archive a todo
//   const archiveTodo = id => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, isArchived: !todo.isArchived } : todo
//     );
    
//     setTodos(updatedTodos);
//   };

//   // Toggle favorite status
//   const toggleFavorite = id => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
//     );
    
//     setTodos(updatedTodos);
//   };

//   // Start editing a todo
//   const startEdit = todo => {
//     setEditId(todo.id);
//     setEditValue(todo.text);
//     setPriority(todo.priority || 'medium');
//     setSelectedTag(todo.tag || '');
//     setDueDate(todo.dueDate || '');
//     setNotes(todo.notes || '');
//     setSelectedCategory(todo.category || '');
//     setIsPrivate(todo.isPrivate || false);
//     setIsFavorite(todo.isFavorite || false);
//     setIsFormOpen(true);
//   };

//   // Cancel editing
//   const cancelEdit = () => {
//     setEditId(null);
//     resetForm();
//   };

//   // Clear all completed todos
//   const clearCompleted = () => {
//     const updatedTodos = todos.filter(todo => !todo.completed);
//     setTodos(updatedTodos);
//     calculateProductivityScore(updatedTodos);
//   };

//   // Add a subtask
//   const addSubtask = (todoId, text) => {
//     if (text.trim() !== '') {
//       const updatedTodos = todos.map(todo =>
//         todo.id === todoId
//           ? {
//             ...todo,
//             subtasks: [
//               ...todo.subtasks,
//               {
//                 id: Date.now(),
//                 text,
//                 completed: false
//               }
//             ]
//           }
//           : todo
//       );
      
//       setTodos(updatedTodos);
//     }
//   };

//   // Toggle subtask completion
//   const toggleSubtask = (todoId, subtaskId) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === todoId
//         ? {
//           ...todo,
//           subtasks: todo.subtasks.map(subtask =>
//             subtask.id === subtaskId
//               ? { ...subtask, completed: !subtask.completed }
//               : subtask
//           )
//         }
//         : todo
//     );
    
//     setTodos(updatedTodos);
//   };

//   // Delete a subtask
//   const deleteSubtask = (todoId, subtaskId) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === todoId
//         ? {
//           ...todo,
//           subtasks: todo.subtasks.filter(subtask => subtask.id !== subtaskId)
//         }
//         : todo
//     );
    
//     setTodos(updatedTodos);
//   };

//   // Filter todos based on filter and search query
//   const filteredTodos = todos
//     .filter(todo => {
//       if (activeTab === 'active') return !todo.completed && !todo.isArchived;
//       if (activeTab === 'completed') return todo.completed && !todo.isArchived;
//       if (activeTab === 'favorites') return todo.isFavorite && !todo.isArchived;
//       if (activeTab === 'archived') return todo.isArchived;
//       return !todo.isArchived;
//     })
//     .filter(todo =>
//       todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (todo.notes && todo.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
//       (todo.tag && todo.tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
//       (todo.category && todo.category.toLowerCase().includes(searchQuery.toLowerCase()))
//     )
//     .sort((a, b) => {
//       if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
//       if (sortBy === 'priority') {
//         const priorityOrder = { high: 3, medium: 2, low: 1 };
//         return priorityOrder[b.priority] - priorityOrder[a.priority];
//       }
//       if (sortBy === 'dueDate') {
//         if (!a.dueDate) return 1;
//         if (!b.dueDate) return -1;
//         return new Date(a.dueDate) - new Date(b.dueDate);
//       }
//       return 0;
//     });

//   // Get priority icon and color
//   const getPriorityIcon = (priority) => {
//     switch (priority) {
//       case 'high':
//         return { icon: <FiFlag className="text-red-500" />, color: 'red', bg: 'bg-red-100 dark:bg-red-900/20' };
//       case 'medium':
//         return { icon: <FiFlag className="text-yellow-500" />, color: 'yellow', bg: 'bg-yellow-100 dark:bg-yellow-900/20' };
//       case 'low':
//         return { icon: <FiFlag className="text-green-500" />, color: 'green', bg: 'bg-green-100 dark:bg-green-900/20' };
//       default:
//         return { icon: <FiFlag className="text-gray-500" />, color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/20' };
//     }
//   };

//   // Get category icon and color
//   const getCategoryIcon = (categoryName) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     if (category) {
//       return {
//         icon: category.icon,
//         color: category.color,
//         bg: `bg-${category.color}-100 dark:bg-${category.color}-900/20`
//       };
//     }
//     return { icon: <FiBox />, color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/20' };
//   };

//   // Check if a due date is overdue
//   const isOverdue = (dueDate) => {
//     if (!dueDate) return false;
//     return new Date(dueDate) < new Date() && dueDate !== '';
//   };

//   // Calculate stats
//   const calculateStats = () => {
//     const total = todos.length;
//     const completed = todos.filter(t => t.completed).length;
//     const active = total - completed;
//     const overdue = todos.filter(t => isOverdue(t.dueDate) && !t.completed).length;
//     const favorites = todos.filter(t => t.isFavorite).length;
    
//     return {
//       total,
//       completed,
//       active,
//       overdue,
//       favorites,
//       completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
//     };
//   };

//   const stats = calculateStats();

//   return (
//     <div className={`min-h-screen py-4 px-4 transition-colors duration-300 ${currentTheme.bg} ${currentTheme.text}`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.header 
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className={`rounded-2xl p-4 mb-6 ${currentTheme.header} text-white shadow-lg backdrop-blur-sm bg-opacity-90`}
//         >
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <button 
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm"
//               >
//                 <FiMenu />
//               </button>
//               <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
//                 <FiList className="text-xl" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold">Advanced Todo</h1>
//                 <p className="text-sm opacity-90">Stay organized and productive</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                 className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
//               >
//                 {theme === 'dark' ? <FiSun /> : <FiMoon />}
//               </button>
              
//               <button
//                 onClick={() => setShowSettings(!showSettings)}
//                 className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
//               >
//                 <FiSettings />
//               </button>
//             </div>
//           </div>
//         </motion.header>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className={`md:hidden rounded-xl p-4 mb-6 shadow-lg ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
//             >
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   onClick={() => { setActiveTab('all'); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center transition-all ${activeTab === 'all' ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
//                 >
//                   All Tasks
//                 </button>
//                 <button
//                   onClick={() => { setActiveTab('active'); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center transition-all ${activeTab === 'active' ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
//                 >
//                   Active
//                 </button>
//                 <button
//                   onClick={() => { setActiveTab('completed'); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center transition-all ${activeTab === 'completed' ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
//                 >
//                   Completed
//                 </button>
//                 <button
//                   onClick={() => { setActiveTab('favorites'); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center transition-all ${activeTab === 'favorites' ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
//                 >
//                   Favorites
//                 </button>
//                 <button
//                   onClick={() => { setShowStats(!showStats); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center col-span-2 transition-all ${showStats ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
//                 >
//                   Statistics
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Main Content */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Sidebar for desktop */}
//           <div className={`hidden md:block ${sidebarCollapsed ? 'w-20' : 'w-full lg:w-1/4'} transition-all duration-300`}>
//             <div className={`rounded-2xl p-5 shadow-lg sticky top-6 ${currentTheme.sidebar} backdrop-blur-sm bg-opacity-95 h-[calc(100vh-120px)] overflow-y-auto`}>
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className={`text-lg font-semibold ${sidebarCollapsed ? 'hidden' : ''}`}>Navigation</h2>
//                 <button 
//                   onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//                   className="p-1 rounded-md hover:bg-white/20 transition-colors"
//                 >
//                   {sidebarCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
//                 </button>
//               </div>
              
//               <div className="space-y-2 mb-6">
//                 <button
//                   onClick={() => setActiveTab('all')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'all' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiList className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>All Tasks</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.isArchived).length}</span>}
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('active')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'active' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiCheckSquare className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>Active</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.completed && !t.isArchived).length}</span>}
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('completed')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'completed' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiCheck className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>Completed</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.completed && !t.isArchived).length}</span>}
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('favorites')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'favorites' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiStar className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>Favorites</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.isFavorite && !t.isArchived).length}</span>}
//                 </button>
//               </div>
              
//               {!sidebarCollapsed && (
//                 <>
//                   <h2 className="text-lg font-semibold mb-4">Categories</h2>
//                   <div className="space-y-2">
//                     {categories.map(category => (
//                       <button
//                         key={category.id}
//                         onClick={() => setSelectedCategory(selectedCategory === category.name ? '' : category.name)}
//                         className={`w-full text-left px-4 py-2 rounded-xl flex items-center gap-3 transition-all ${selectedCategory === category.name ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'}`}
//                       >
//                         <span className="flex-shrink-0">{category.icon}</span>
//                         <span>{category.name}</span>
//                         <span className="ml-auto text-sm opacity-70">
//                           {todos.filter(t => t.category === category.name && !t.isArchived).length}
//                         </span>
//                       </button>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className={`w-full ${sidebarCollapsed ? 'lg:w-[calc(100%-80px)]' : 'lg:w-3/4'} transition-all duration-300`}>
//             {/* Search and Stats Bar */}
//             <div className={`rounded-2xl p-5 mb-6 shadow-lg ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}>
//               <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
//                 <div className="flex-1 w-full">
//                   <div className="relative">
//                     <FiSearch className="absolute left-3 top-3 opacity-50" />
//                     <input
//                       type="text"
//                       placeholder="Search todos..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                     />
//                   </div>
//                 </div>
                
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
//                     className={`p-3 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                   >
//                     {viewMode === 'list' ? <FiGrid /> : <FiList />}
//                   </button>
                  
//                   <button
//                     onClick={() => setShowStats(!showStats)}
//                     className={`p-3 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                   >
//                     <FiBarChart2 />
//                   </button>
                  
//                   <button
//                     onClick={() => setIsFormOpen(true)}
//                     className={`p-3 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
//                   >
//                     <FiPlus />
//                   </button>
//                 </div>
//               </div>
              
//               {/* Quick Stats */}
//               <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 px-3 py-1 rounded-full">
//                   <div className="text-sm font-medium">Total:</div>
//                   <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full">{stats.total}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
//                   <div className="text-sm font-medium">Active:</div>
//                   <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full">{stats.active}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-full">
//                   <div className="text-sm font-medium">Completed:</div>
//                   <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full text-green-500">{stats.completed}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2 bg-red-100 dark:bg-red-900/20 px-3 py-1 rounded-full">
//                   <div className="text-sm font-medium">Overdue:</div>
//                   <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full text-red-500">{stats.overdue}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Panel */}
//             {showStats && (
//               <motion.div 
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className={`rounded-2xl p-5 mb-6 shadow-lg ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold">Statistics</h2>
//                   <button onClick={() => setShowStats(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
//                     <FiX />
//                   </button>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className={`p-4 rounded-xl ${currentTheme.input} backdrop-blur-sm bg-opacity-50 border-0`}>
//                     <div className="text-2xl font-bold">{stats.completionRate}%</div>
//                     <div className="text-sm opacity-75">Completion Rate</div>
//                   </div>
                  
//                   <div className={`p-4 rounded-xl ${currentTheme.input} backdrop-blur-sm bg-opacity-50 border-0`}>
//                     <div className="text-2xl font-bold">{stats.favorites}</div>
//                     <div className="text-sm opacity-75">Favorites</div>
//                   </div>
                  
//                   <div className={`p-4 rounded-xl ${currentTheme.input} backdrop-blur-sm bg-opacity-50 border-0`}>
//                     <div className="text-2xl font-bold">
//                       {todos.filter(t => t.priority === 'high').length}
//                     </div>
//                     <div className="text-sm opacity-75">High Priority</div>
//                   </div>
                  
//                   <div className={`p-4 rounded-xl ${currentTheme.input} backdrop-blur-sm bg-opacity-50 border-0`}>
//                     <div className="text-2xl font-bold">
//                       {todos.reduce((acc, todo) => acc + (todo.subtasks?.length || 0), 0)}
//                     </div>
//                     <div className="text-sm opacity-75">Total Subtasks</div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}

//             {/* Todo List */}
//             <div className="mb-20">
//               {filteredTodos.length > 0 ? (
//                 viewMode === 'list' ? (
//                   <div className="space-y-4">
//                     <AnimatePresence>
//                       {filteredTodos.map(todo => {
//                         const priorityInfo = getPriorityIcon(todo.priority);
//                         const categoryInfo = getCategoryIcon(todo.category);
                        
//                         return (
//                           <motion.div
//                             key={todo.id}
//                             layout
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.2 }}
//                             className={`rounded-2xl p-5 shadow-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95 ${todo.completed ? 'opacity-70' : ''}`}
//                           >
//                             <div className="flex items-start gap-4">
//                               <button
//                                 onClick={() => toggleComplete(todo.id)}
//                                 className={`mt-1 p-2 rounded-full ${todo.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
//                               >
//                                 {todo.completed ? <FiCheckSquare size={18} /> : <FiSquare size={18} />}
//                               </button>
                              
//                               <div className="flex-1">
//                                 <div className="flex flex-wrap items-center gap-2 mb-2">
//                                   <span className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
//                                     {todo.text}
//                                   </span>
                                  
//                                   {todo.isPrivate && (
//                                     <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 flex items-center gap-1">
//                                       <FiLock size={10} /> Private
//                                     </span>
//                                   )}
                                  
//                                   {todo.isFavorite && (
//                                     <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 flex items-center gap-1">
//                                       <FiStar size={10} /> Favorite
//                                     </span>
//                                   )}
//                                 </div>
                                
//                                 {todo.notes && (
//                                   <div className="text-sm opacity-75 mb-3 bg-gray-100 dark:bg-gray-700/50 p-3 rounded-lg">
//                                     {todo.notes}
//                                   </div>
//                                 )}
                                
//                                 <div className="flex flex-wrap items-center gap-3 text-sm">
//                                   <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${priorityInfo.bg}`}>
//                                     {priorityInfo.icon}
//                                     <span className="capitalize">{todo.priority}</span>
//                                   </div>
                                  
//                                   {todo.dueDate && (
//                                     <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${isOverdue(todo.dueDate) && !todo.completed ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700/50'}`}>
//                                       <FiCalendar size={14} />
//                                       <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
//                                     </div>
//                                   )}
                                  
//                                   {todo.tag && (
//                                     <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
//                                       <FiTag size={14} />
//                                       <span>{todo.tag}</span>
//                                     </div>
//                                   )}
                                  
//                                   {todo.category && (
//                                     <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${categoryInfo.bg}`}>
//                                       {categoryInfo.icon}
//                                       <span>{todo.category}</span>
//                                     </div>
//                                   )}
//                                 </div>
                                
//                                 {/* Subtasks */}
//                                 {todo.subtasks && todo.subtasks.length > 0 && (
//                                   <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                                     <div className="text-xs font-medium mb-2 uppercase tracking-wide">
//                                       Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
//                                     </div>
//                                     <div className="space-y-2">
//                                       {todo.subtasks.map(subtask => (
//                                         <div key={subtask.id} className="flex items-center gap-2">
//                                           <button
//                                             onClick={() => toggleSubtask(todo.id, subtask.id)}
//                                             className={`p-1 rounded-full ${subtask.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
//                                           >
//                                             {subtask.completed ? <FiCheckSquare size={14} /> : <FiSquare size={14} />}
//                                           </button>
//                                           <span className={`text-sm ${subtask.completed ? 'line-through opacity-70' : ''}`}>
//                                             {subtask.text}
//                                           </span>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 )}
//                               </div>
                              
//                               <div className="flex flex-col gap-2">
//                                 <button
//                                   onClick={() => toggleFavorite(todo.id)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   {todo.isFavorite ? (
//                                     <FiStar className="text-yellow-500" />
//                                   ) : (
//                                     <FiStar />
//                                   )}
//                                 </button>
                                
//                                 <button
//                                   onClick={() => startEdit(todo)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   <FiEdit size={16} />
//                                 </button>
                                
//                                 <button
//                                   onClick={() => deleteTodo(todo.id)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   <FiTrash2 size={16} />
//                                 </button>
//                               </div>
//                             </div>
//                           </motion.div>
//                         );
//                       })}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <AnimatePresence>
//                       {filteredTodos.map(todo => {
//                         const priorityInfo = getPriorityIcon(todo.priority);
//                         const categoryInfo = getCategoryIcon(todo.category);
                        
//                         return (
//                           <motion.div
//                             key={todo.id}
//                             layout
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.9 }}
//                             transition={{ duration: 0.2 }}
//                             className={`rounded-2xl p-5 shadow-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95 ${todo.completed ? 'opacity-70' : ''}`}
//                           >
//                             <div className="flex justify-between items-start mb-4">
//                               <button
//                                 onClick={() => toggleComplete(todo.id)}
//                                 className={`p-2 rounded-full ${todo.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
//                               >
//                                 {todo.completed ? <FiCheckSquare size={18} /> : <FiSquare size={18} />}
//                               </button>
                              
//                               <div className="flex gap-1">
//                                 <button
//                                   onClick={() => toggleFavorite(todo.id)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   {todo.isFavorite ? (
//                                     <FiStar className="text-yellow-500" size={16} />
//                                   ) : (
//                                     <FiStar size={16} />
//                                   )}
//                                 </button>
                                
//                                 <button
//                                   onClick={() => startEdit(todo)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   <FiEdit size={16} />
//                                 </button>
//                               </div>
//                             </div>
                            
//                             <div className="mb-4">
//                               <h3 className={`font-medium mb-2 ${todo.completed ? 'line-through' : ''}`}>
//                                 {todo.text}
//                               </h3>
                              
//                               {todo.notes && (
//                                 <p className="text-sm opacity-75 line-clamp-2 bg-gray-100 dark:bg-gray-700/50 p-2 rounded-lg">
//                                   {todo.notes}
//                                 </p>
//                               )}
//                             </div>
                            
//                             <div className="space-y-2 mb-4 text-sm">
//                               <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${priorityInfo.bg}`}>
//                                 {priorityInfo.icon}
//                                 <span className="capitalize">{todo.priority} priority</span>
//                               </div>
                              
//                               {todo.dueDate && (
//                                 <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${isOverdue(todo.dueDate) && !todo.completed ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700/50'}`}>
//                                   <FiCalendar size={14} />
//                                   <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
//                                 </div>
//                               )}
                              
//                               {todo.category && (
//                                 <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${categoryInfo.bg}`}>
//                                   {categoryInfo.icon}
//                                   <span>{todo.category}</span>
//                                 </div>
//                               )}
//                             </div>
                            
//                             {todo.subtasks && todo.subtasks.length > 0 && (
//                               <div className="mb-4">
//                                 <div className="text-xs font-medium mb-1 uppercase tracking-wide">
//                                   Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
//                                 </div>
//                                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                                   <div 
//                                     className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
//                                     style={{ width: `${(todo.subtasks.filter(st => st.completed).length / todo.subtasks.length) * 100}%` }}
//                                   ></div>
//                                 </div>
//                               </div>
//                             )}
                            
//                             <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
//                               <div>
//                                 {new Date(todo.date).toLocaleDateString()}
//                               </div>
                              
//                               {todo.isPrivate && (
//                                 <div className="flex items-center gap-1">
//                                   <FiLock size={12} className="text-blue-500" />
//                                   <span>Private</span>
//                                 </div>
//                               )}
//                             </div>
//                           </motion.div>
//                         );
//                       })}
//                     </AnimatePresence>
//                   </div>
//                 )
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className={`rounded-2xl p-8 text-center ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
//                 >
//                   <div className="text-6xl mb-4">📝</div>
//                   <h3 className="text-xl font-semibold mb-2">No todos found</h3>
//                   <p className="opacity-75 mb-6">Try changing your search or add a new todo</p>
//                   <button
//                     onClick={() => setIsFormOpen(true)}
//                     className={`px-5 py-3 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
//                   >
//                     Add Your First Todo
//                   </button>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Add Todo Form */}
//         <AnimatePresence>
//           {isFormOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className={`rounded-2xl p-6 w-full max-w-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-semibold">{editId ? 'Edit Todo' : 'Add New Todo'}</h2>
//                   <button onClick={editId ? cancelEdit : () => setIsFormOpen(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
//                     <FiX />
//                   </button>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block mb-2 font-medium">Task Description</label>
//                     <textarea
//                       value={editId ? editValue : inputValue}
//                       onChange={(e) => editId ? setEditValue(e.target.value) : setInputValue(e.target.value)}
//                       className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                       placeholder="What needs to be done?"
//                       rows={2}
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block mb-2 font-medium">Priority</label>
//                       <div className="relative">
//                         <select
//                           value={priority}
//                           onChange={(e) => setPriority(e.target.value)}
//                           className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                         >
//                           <option value="high">High</option>
//                           <option value="medium">Medium</option>
//                           <option value="low">Low</option>
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                           <FiChevronDown />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block mb-2 font-medium">Category</label>
//                       <div className="relative">
//                         <select
//                           value={selectedCategory}
//                           onChange={(e) => setSelectedCategory(e.target.value)}
//                           className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                         >
//                           <option value="">Select Category</option>
//                           {categories.map(category => (
//                             <option key={category.id} value={category.name}>{category.name}</option>
//                           ))}
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                           <FiChevronDown />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block mb-2 font-medium">Tag</label>
//                       <div className="relative">
//                         <select
//                           value={selectedTag}
//                           onChange={(e) => setSelectedTag(e.target.value)}
//                           className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                         >
//                           <option value="">Select Tag</option>
//                           {tags.map(tag => (
//                             <option key={tag} value={tag}>{tag}</option>
//                           ))}
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                           <FiChevronDown />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block mb-2 font-medium">Due Date</label>
//                       <input
//                         type="date"
//                         value={dueDate}
//                         onChange={(e) => setDueDate(e.target.value)}
//                         className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                       />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label className="block mb-2 font-medium">Notes</label>
//                     <textarea
//                       value={notes}
//                       onChange={(e) => setNotes(e.target.value)}
//                       className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                       placeholder="Additional notes..."
//                       rows={2}
//                     />
//                   </div>
                  
//                   <div className="flex gap-4">
//                     <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">
//                       <input
//                         type="checkbox"
//                         checked={isPrivate}
//                         onChange={() => setIsPrivate(!isPrivate)}
//                         className="rounded text-blue-500 focus:ring-blue-500"
//                       />
//                       <span>Private Task</span>
//                     </label>
                    
//                     <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">
//                       <input
//                         type="checkbox"
//                         checked={isFavorite}
//                         onChange={() => setIsFavorite(!isFavorite)}
//                         className="rounded text-blue-500 focus:ring-blue-500"
//                       />
//                       <span>Favorite</span>
//                     </label>
//                   </div>
                  
//                   <div className="flex justify-end gap-3 pt-4">
//                     <button
//                       onClick={editId ? cancelEdit : () => setIsFormOpen(false)}
//                       className={`px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                     >
//                       Cancel
//                     </button>
                    
//                     <button
//                       onClick={editId ? updateTodo : addTodo}
//                       className={`px-4 py-2 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
//                     >
//                       {editId ? 'Update' : 'Add'} Todo
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Settings Panel */}
//         <AnimatePresence>
//           {showSettings && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className={`rounded-2xl p-6 w-full max-w-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-semibold">Settings</h2>
//                   <button onClick={() => setShowSettings(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
//                     <FiX />
//                   </button>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block mb-2 font-medium">Theme</label>
//                     <div className="relative">
//                       <select
//                         value={theme}
//                         onChange={(e) => setTheme(e.target.value)}
//                         className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                       >
//                         <option value="light">Light</option>
//                         <option value="dark">Dark</option>
//                       </select>
//                       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                         <FiChevronDown />
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50">
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={soundEnabled}
//                         onChange={() => setSoundEnabled(!soundEnabled)}
//                         className="rounded text-blue-500 focus:ring-blue-500"
//                       />
//                       <span>Enable Sounds</span>
//                     </label>
//                   </div>
                  
//                   <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
//                     <h3 className="font-medium mb-2">Data Management</h3>
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => {
//                           const dataStr = JSON.stringify(todos);
//                           const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
//                           const linkElement = document.createElement('a');
//                           linkElement.setAttribute('href', dataUri);
//                           linkElement.setAttribute('download', 'todos.json');
//                           linkElement.click();
//                         }}
//                         className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                       >
//                         <FiDownload />
//                         <span>Export</span>
//                       </button>
                      
//                       <button
//                         onClick={clearCompleted}
//                         className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                       >
//                         <FiTrash2 />
//                         <span>Clear Completed</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Add Todo Button */}
//         {!isFormOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="fixed bottom-6 right-6"
//           >
//             <button
//               onClick={() => setIsFormOpen(true)}
//               className={`p-5 rounded-full shadow-xl text-white text-xl transition-all ${currentTheme.button} hover:scale-110`}
//             >
//               <FiPlus />
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


































// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiPlus, FiTrash2, FiEdit, FiCheck, FiSun, FiMoon, 
//   FiFlag, FiCalendar, FiClock, FiSearch, FiFilter,
//   FiChevronDown, FiChevronUp, FiStar, FiArchive, FiRefreshCw,
//   FiGrid, FiList, FiEye, FiEyeOff, FiLock, FiUnlock, FiAward,
//   FiBell, FiBellOff, FiShare2, FiDownload, FiUpload, FiHeart,
//   FiBarChart2, FiSettings, FiUser,
//   FiBookmark, FiTag, FiLayers, FiBox, FiDatabase, FiCoffee,
//   FiX, FiMenu, FiCheckSquare, FiSquare, FiHome, FiBriefcase,
//   FiActivity, FiDollarSign, FiBook, FiShoppingBag, FiPhone,
//   FiMessageSquare, FiVideo, FiMusic, FiImage, FiFileText, 
//   FiChevronLeft, FiChevronRight, FiTarget,
//   FiBarChart, FiPieChart, FiTrendingUp, FiInbox, FiFolder,
//   FiClipboard, FiCheckCircle, FiAlertCircle, FiAlertTriangle
// } from 'react-icons/fi';

// const HomePage = () => {
//   // State management with localStorage persistence
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem('todos');
//     return saved ? JSON.parse(saved) : [];
//   });
  
//   const [inputValue, setInputValue] = useState('');
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState('');
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('date');
//   const [theme, setTheme] = useState(() => {
//     const saved = localStorage.getItem('theme');
//     return saved || 'dark';
//   });
  
//   const [tags] = useState([
//     'work', 'personal', 'urgent', 'shopping', 'health', 
//     'finance', 'education', 'travel', 'home', 'food'
//   ]);
  
//   const [selectedTag, setSelectedTag] = useState('');
//   const [priority, setPriority] = useState('medium');
//   const [dueDate, setDueDate] = useState('');
//   const [notes, setNotes] = useState('');
//   const [viewMode, setViewMode] = useState('list');
//   const [showCompleted, setShowCompleted] = useState(true);
  
//   const [categories] = useState([
//     { id: 1, name: 'Personal', color: 'blue', icon: <FiUser /> },
//     { id: 2, name: 'Work', color: 'green', icon: <FiBriefcase /> },
//     { id: 3, name: 'Health', color: 'red', icon: <FiHeart /> },
//     { id: 4, name: 'Education', color: 'purple', icon: <FiBook /> },
//     { id: 5, name: 'Finance', color: 'orange', icon: <FiDollarSign /> },
//     { id: 6, name: 'Shopping', color: 'pink', icon: <FiShoppingBag /> },
//     { id: 7, name: 'Home', color: 'indigo', icon: <FiHome /> },
//     { id: 8, name: 'Entertainment', color: 'yellow', icon: <FiVideo /> }
//   ]);
  
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isPrivate, setIsPrivate] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showArchived, setShowArchived] = useState(false);
//   const [showStats, setShowStats] = useState(true); // Show stats by default
//   const [productivityScore, setProductivityScore] = useState(0);
//   const [achievements, setAchievements] = useState([]);
//   const [showAchievements, setShowAchievements] = useState(false);
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [showSettings, setShowSettings] = useState(false);
//   const [activeTab, setActiveTab] = useState('all');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [advancedFilters, setAdvancedFilters] = useState({
//     priority: '',
//     dueDateRange: '',
//     withNotes: false,
//     withSubtasks: false
//   });
//   const [reminderTime, setReminderTime] = useState('');
//   const [recurring, setRecurring] = useState('none');
//   const [timeEstimate, setTimeEstimate] = useState(0);
//   const [attachments, setAttachments] = useState([]);
//   const [collaborators, setCollaborators] = useState([]);
//   const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

//   // Save to localStorage whenever todos or theme changes
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   // Initialize with sample todos if empty
//   useEffect(() => {
//     if (todos.length === 0) {
//       const sampleTodos = [
//         {
//           id: 1,
//           text: 'Welcome to your advanced todo app',
//           completed: false,
//           priority: 'high',
//           date: new Date(),
//           tag: 'work',
//           dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
//           notes: 'This is a sample todo to get you started',
//           category: 'Work',
//           isPrivate: false,
//           isFavorite: true,
//           isArchived: false,
//           timeSpent: 0,
//           estimatedTime: 30,
//           reminderTime: '',
//           recurring: 'none',
//           attachments: [],
//           collaborators: [],
//           subtasks: [
//             { id: 1, text: 'Explore features', completed: true },
//             { id: 2, text: 'Customize settings', completed: false }
//           ]
//         },
//         {
//           id: 2,
//           text: 'Click on the + button to add a new todo',
//           completed: false,
//           priority: 'medium',
//           date: new Date(),
//           tag: 'personal',
//           dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
//           notes: '',
//           category: 'Personal',
//           isPrivate: false,
//           isFavorite: false,
//           isArchived: false,
//           timeSpent: 0,
//           estimatedTime: 15,
//           reminderTime: '',
//           recurring: 'none',
//           attachments: [],
//           collaborators: [],
//           subtasks: []
//         }
//       ];
//       setTodos(sampleTodos);
//     }
    
//     calculateProductivityScore(todos);
//     checkAchievements(todos);
//   }, []);

//   // Calculate productivity score
//   const calculateProductivityScore = useCallback((todosArray) => {
//     const totalTodos = todosArray.length;
//     const completedTodos = todosArray.filter(todo => todo.completed).length;
//     const overdueTodos = todosArray.filter(todo => 
//       todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed
//     ).length;
    
//     let score = 0;
//     if (totalTodos > 0) {
//       score = Math.round((completedTodos / totalTodos) * 100);
//       score -= overdueTodos * 5;
      
//       const earlyCompleted = todosArray.filter(todo => 
//         todo.completed && todo.dueDate && new Date(todo.dueDate) > new Date()
//       ).length;
      
//       score += earlyCompleted * 2;
//       score = Math.max(0, Math.min(100, score));
//     }
    
//     setProductivityScore(score);
//   }, []);

//   // Check for achievements
//   const checkAchievements = useCallback((todosArray) => {
//     const newAchievements = [];
    
//     if (todosArray.length > 0) {
//       newAchievements.push({
//         id: 1,
//         name: 'Getting Started',
//         description: 'Added your first todo',
//         icon: <FiAward />,
//         color: 'gold',
//         unlocked: true,
//         date: new Date()
//       });
//     }
    
//     const completedCount = todosArray.filter(todo => todo.completed).length;
//     if (completedCount >= 5) {
//       newAchievements.push({
//         id: 2,
//         name: 'Completionist',
//         description: 'Completed 5 todos',
//         icon: <FiCheck />,
//         color: 'silver',
//         unlocked: true,
//         date: new Date()
//       });
//     }
    
//     // Add more achievements here
//     if (completedCount >= 20) {
//       newAchievements.push({
//         id: 3,
//         name: 'Productivity Master',
//         description: 'Completed 20 todos',
//         icon: <FiTrendingUp />,
//         color: 'bronze',
//         unlocked: true,
//         date: new Date()
//       });
//     }
    
//     setAchievements(newAchievements);
//   }, []);

//   // Theme classes
//   const themes = {
//     light: {
//       bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
//       card: 'bg-white shadow-xl border border-gray-100',
//       text: 'text-gray-800',
//       input: 'bg-white border-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
//       button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg',
//       accent: 'text-blue-500',
//       header: 'bg-gradient-to-r from-blue-600 to-blue-700',
//       sidebar: 'bg-gradient-to-b from-blue-50 to-indigo-50 border-r border-gray-200',
//     },
//     dark: {
//       bg: 'bg-gradient-to-br from-gray-900 to-gray-800',
//       card: 'bg-gray-800 shadow-xl border border-gray-700',
//       text: 'text-gray-100',
//       input: 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
//       button: 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg',
//       accent: 'text-indigo-400',
//       header: 'bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700',
//       sidebar: 'bg-gradient-to-b from-gray-800 to-gray-900 border-r border-gray-700',
//     }
//   };

//   const currentTheme = themes[theme];

//   // Add a new todo
//   const addTodo = () => {
//     if (inputValue.trim() !== '') {
//       const newTodo = {
//         id: Date.now(),
//         text: inputValue,
//         completed: false,
//         priority,
//         date: new Date(),
//         tag: selectedTag,
//         dueDate,
//         notes,
//         category: selectedCategory,
//         isPrivate,
//         isFavorite,
//         isArchived: false,
//         timeSpent: 0,
//         estimatedTime: timeEstimate,
//         reminderTime,
//         recurring,
//         attachments,
//         collaborators,
//         subtasks: []
//       };
      
//       setTodos([newTodo, ...todos]);
//       resetForm();
//       setIsFormOpen(false);
      
//       calculateProductivityScore([newTodo, ...todos]);
//       checkAchievements([newTodo, ...todos]);
//     }
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setInputValue('');
//     setPriority('medium');
//     setSelectedTag('');
//     setDueDate('');
//     setNotes('');
//     setSelectedCategory('');
//     setIsPrivate(false);
//     setIsFavorite(false);
//     setReminderTime('');
//     setRecurring('none');
//     setTimeEstimate(0);
//     setAttachments([]);
//     setCollaborators([]);
//     setShowAdvancedOptions(false);
//   };

//   // Edit a todo
//   const updateTodo = () => {
//     if (editValue.trim() !== '') {
//       const updatedTodos = todos.map(todo =>
//         todo.id === editId
//           ? { 
//             ...todo, 
//             text: editValue, 
//             priority, 
//             tag: selectedTag, 
//             dueDate,
//             notes,
//             category: selectedCategory,
//             isPrivate,
//             isFavorite,
//             reminderTime,
//             recurring,
//             estimatedTime: timeEstimate,
//             attachments,
//             collaborators
//           }
//           : todo
//       );
      
//       setTodos(updatedTodos);
//       setEditId(null);
//       resetForm();
      
//       calculateProductivityScore(updatedTodos);
//       checkAchievements(updatedTodos);
//     }
//   };

//   // Delete a todo
//   const deleteTodo = id => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//     calculateProductivityScore(updatedTodos);
//   };

//   // Toggle completion status
//   const toggleComplete = id => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
    
//     setTodos(updatedTodos);
//     calculateProductivityScore(updatedTodos);
//     checkAchievements(updatedTodos);
//   };

//   // Archive a todo
//   const archiveTodo = id => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, isArchived: !todo.isArchived } : todo
//     );
    
//     setTodos(updatedTodos);
//   };

//   // Toggle favorite status
//   const toggleFavorite = id => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
//     );
    
//     setTodos(updatedTodos);
//   };

//   // Start editing a todo
//   const startEdit = todo => {
//     setEditId(todo.id);
//     setEditValue(todo.text);
//     setPriority(todo.priority || 'medium');
//     setSelectedTag(todo.tag || '');
//     setDueDate(todo.dueDate || '');
//     setNotes(todo.notes || '');
//     setSelectedCategory(todo.category || '');
//     setIsPrivate(todo.isPrivate || false);
//     setIsFavorite(todo.isFavorite || false);
//     setReminderTime(todo.reminderTime || '');
//     setRecurring(todo.recurring || 'none');
//     setTimeEstimate(todo.estimatedTime || 0);
//     setAttachments(todo.attachments || []);
//     setCollaborators(todo.collaborators || []);
//     setIsFormOpen(true);
//   };

//   // Cancel editing
//   const cancelEdit = () => {
//     setEditId(null);
//     resetForm();
//   };

//   // Clear all completed todos
//   const clearCompleted = () => {
//     const updatedTodos = todos.filter(todo => !todo.completed);
//     setTodos(updatedTodos);
//     calculateProductivityScore(updatedTodos);
//   };

//   // Add a subtask
//   const addSubtask = (todoId, text) => {
//     if (text.trim() !== '') {
//       const updatedTodos = todos.map(todo =>
//         todo.id === todoId
//           ? {
//             ...todo,
//             subtasks: [
//               ...todo.subtasks,
//               {
//                 id: Date.now(),
//                 text,
//                 completed: false
//               }
//             ]
//           }
//           : todo
//       );
      
//       setTodos(updatedTodos);
//     }
//   };

//   // Toggle subtask completion
//   const toggleSubtask = (todoId, subtaskId) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === todoId
//         ? {
//           ...todo,
//           subtasks: todo.subtasks.map(subtask =>
//             subtask.id === subtaskId
//               ? { ...subtask, completed: !subtask.completed }
//               : subtask
//           )
//         }
//         : todo
//     );
    
//     setTodos(updatedTodos);
//   };

//   // Delete a subtask
//   const deleteSubtask = (todoId, subtaskId) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === todoId
//         ? {
//           ...todo,
//           subtasks: todo.subtasks.filter(subtask => subtask.id !== subtaskId)
//         }
//         : todo
//     );
    
//     setTodos(updatedTodos);
//   };

//   // Apply advanced filters
//   const applyAdvancedFilters = (todosArray) => {
//     return todosArray.filter(todo => {
//       if (advancedFilters.priority && todo.priority !== advancedFilters.priority) return false;
      
//       if (advancedFilters.dueDateRange) {
//         const today = new Date();
//         const todoDueDate = new Date(todo.dueDate);
        
//         switch(advancedFilters.dueDateRange) {
//           case 'today':
//             if (!todo.dueDate || todoDueDate.toDateString() !== today.toDateString()) return false;
//             break;
//           case 'week':
//             const weekEnd = new Date(today);
//             weekEnd.setDate(today.getDate() + 7);
//             if (!todo.dueDate || todoDueDate < today || todoDueDate > weekEnd) return false;
//             break;
//           case 'month':
//             const monthEnd = new Date(today);
//             monthEnd.setMonth(today.getMonth() + 1);
//             if (!todo.dueDate || todoDueDate < today || todoDueDate > monthEnd) return false;
//             break;
//           case 'overdue':
//             if (!todo.dueDate || todoDueDate >= today || todo.completed) return false;
//             break;
//           default:
//             break;
//         }
//       }
      
//       if (advancedFilters.withNotes && !todo.notes) return false;
//       if (advancedFilters.withSubtasks && (!todo.subtasks || todo.subtasks.length === 0)) return false;
      
//       return true;
//     });
//   };

//   // Filter todos based on filter and search query
//   const filteredTodos = applyAdvancedFilters(
//     todos
//       .filter(todo => {
//         if (activeTab === 'active') return !todo.completed && !todo.isArchived;
//         if (activeTab === 'completed') return todo.completed && !todo.isArchived;
//         if (activeTab === 'favorites') return todo.isFavorite && !todo.isArchived;
//         if (activeTab === 'archived') return todo.isArchived;
//         return !todo.isArchived;
//       })
//       .filter(todo =>
//         todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         (todo.notes && todo.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (todo.tag && todo.tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (todo.category && todo.category.toLowerCase().includes(searchQuery.toLowerCase()))
//       )
//       .sort((a, b) => {
//         if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
//         if (sortBy === 'priority') {
//           const priorityOrder = { high: 3, medium: 2, low: 1 };
//           return priorityOrder[b.priority] - priorityOrder[a.priority];
//         }
//         if (sortBy === 'dueDate') {
//           if (!a.dueDate) return 1;
//           if (!b.dueDate) return -1;
//           return new Date(a.dueDate) - new Date(b.dueDate);
//         }
//         return 0;
//       })
//   );

//   // Get priority icon and color
//   const getPriorityIcon = (priority) => {
//     switch (priority) {
//       case 'high':
//         return { icon: <FiFlag className="text-red-500" />, color: 'red', bg: 'bg-red-100 dark:bg-red-900/20' };
//       case 'medium':
//         return { icon: <FiFlag className="text-yellow-500" />, color: 'yellow', bg: 'bg-yellow-100 dark:bg-yellow-900/20' };
//       case 'low':
//         return { icon: <FiFlag className="text-green-500" />, color: 'green', bg: 'bg-green-100 dark:bg-green-900/20' };
//       default:
//         return { icon: <FiFlag className="text-gray-500" />, color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/20' };
//     }
//   };

//   // Get category icon and color
//   const getCategoryIcon = (categoryName) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     if (category) {
//       return {
//         icon: category.icon,
//         color: category.color,
//         bg: `bg-${category.color}-100 dark:bg-${category.color}-900/20`
//       };
//     }
//     return { icon: <FiBox />, color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/20' };
//   };

//   // Check if a due date is overdue
//   const isOverdue = (dueDate) => {
//     if (!dueDate) return false;
//     return new Date(dueDate) < new Date() && dueDate !== '';
//   };

//   // Calculate stats
//   const calculateStats = () => {
//     const total = todos.length;
//     const completed = todos.filter(t => t.completed).length;
//     const active = total - completed;
//     const overdue = todos.filter(t => isOverdue(t.dueDate) && !t.completed).length;
//     const favorites = todos.filter(t => t.isFavorite).length;
//     const highPriority = todos.filter(t => t.priority === 'high').length;
//     const withSubtasks = todos.filter(t => t.subtasks && t.subtasks.length > 0).length;
//     const privateTasks = todos.filter(t => t.isPrivate).length;
    
//     return {
//       total,
//       completed,
//       active,
//       overdue,
//       favorites,
//       highPriority,
//       withSubtasks,
//       privateTasks,
//       completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
//     };
//   };

//   const stats = calculateStats();

//   // Stats Cards Component
//   const StatsCard = ({ title, value, icon, color, change }) => (
//     <div className={`rounded-xl p-4 ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}>
//       <div className="flex justify-between items-start">
//         <div>
//           <p className="text-sm opacity-75 mb-1">{title}</p>
//           <h3 className="text-2xl font-bold">{value}</h3>
//         </div>
//         <div className={`p-3 rounded-lg ${color} bg-opacity-20 text-${color.split('-')[1]}-500`}>
//           {icon}
//         </div>
//       </div>
//       {change && (
//         <p className={`text-xs mt-2 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
//           {change > 0 ? '↑' : '↓'} {Math.abs(change)}% from last week
//         </p>
//       )}
//     </div>
//   );

//   // Advanced Filter Component
//   const AdvancedFilters = () => (
//     <div className={`rounded-xl p-4 mb-6 ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}>
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-semibold">Advanced Filters</h3>
//         <button 
//           onClick={() => setAdvancedFilters({
//             priority: '',
//             dueDateRange: '',
//             withNotes: false,
//             withSubtasks: false
//           })}
//           className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
//         >
//           Clear All
//         </button>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Priority</label>
//           <select
//             value={advancedFilters.priority}
//             onChange={(e) => setAdvancedFilters({...advancedFilters, priority: e.target.value})}
//             className={`w-full px-3 py-2 rounded-lg border transition-all ${currentTheme.input}`}
//           >
//             <option value="">All Priorities</option>
//             <option value="high">High</option>
//             <option value="medium">Medium</option>
//             <option value="low">Low</option>
//           </select>
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium mb-1">Due Date</label>
//           <select
//             value={advancedFilters.dueDateRange}
//             onChange={(e) => setAdvancedFilters({...advancedFilters, dueDateRange: e.target.value})}
//             className={`w-full px-3 py-2 rounded-lg border transition-all ${currentTheme.input}`}
//           >
//             <option value="">Any Date</option>
//             <option value="today">Today</option>
//             <option value="week">Next 7 Days</option>
//             <option value="month">Next 30 Days</option>
//             <option value="overdue">Overdue</option>
//           </select>
//         </div>
        
//         <div className="flex items-end">
//           <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">
//             <input
//               type="checkbox"
//               checked={advancedFilters.withNotes}
//               onChange={() => setAdvancedFilters({...advancedFilters, withNotes: !advancedFilters.withNotes})}
//               className="rounded text-blue-500 focus:ring-blue-500"
//             />
//             <span>With Notes</span>
//           </label>
//         </div>
        
//         <div className="flex items-end">
//           <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">
//             <input
//               type="checkbox"
//               checked={advancedFilters.withSubtasks}
//               onChange={() => setAdvancedFilters({...advancedFilters, withSubtasks: !advancedFilters.withSubtasks})}
//               className="rounded text-blue-500 focus:ring-blue-500"
//             />
//             <span>With Subtasks</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className={`min-h-screen py-4 px-4 transition-colors duration-300 ${currentTheme.bg} ${currentTheme.text}`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.header 
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className={`rounded-2xl p-4 mb-6 ${currentTheme.header} text-white shadow-lg backdrop-blur-sm bg-opacity-90`}
//         >
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <button 
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm"
//               >
//                 <FiMenu />
//               </button>
//               <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
//                 <FiList className="text-xl" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold">Advanced Todo</h1>
//                 <p className="text-sm opacity-90">Stay organized and productive</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                 className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
//               >
//                 {theme === 'dark' ? <FiSun /> : <FiMoon />}
//               </button>
              
//               <button
//                 onClick={() => setShowSettings(!showSettings)}
//                 className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
//               >
//                 <FiSettings />
//               </button>
//             </div>
//           </div>
//         </motion.header>

//         {/* Statistics Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <StatsCard 
//             title="Total Tasks" 
//             value={stats.total} 
//             icon={<FiClipboard className="text-xl" />} 
//             color="bg-blue-100 text-blue-500 dark:bg-blue-900/20" 
//           />
//           <StatsCard 
//             title="Completed" 
//             value={stats.completed} 
//             icon={<FiCheckCircle className="text-xl" />} 
//             color="bg-green-100 text-green-500 dark:bg-green-900/20" 
//             change={12}
//           />
//           <StatsCard 
//             title="Overdue" 
//             value={stats.overdue} 
//             icon={<FiAlertTriangle className="text-xl" />} 
//             color="bg-red-100 text-red-500 dark:bg-red-900/20" 
//             change={-5}
//           />
//           <StatsCard 
//             title="Productivity" 
//             value={`${productivityScore}%`} 
//             icon={<FiTrendingUp className="text-xl" />} 
//             color="bg-purple-100 text-purple-500 dark:bg-purple-900/20" 
//             change={8}
//           />
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Sidebar for desktop */}
//           <div className={`hidden md:block ${sidebarCollapsed ? 'w-20' : 'w-full lg:w-1/4'} transition-all duration-300`}>
//             <div className={`rounded-2xl p-5 shadow-lg sticky top-6 ${currentTheme.sidebar} backdrop-blur-sm bg-opacity-95 h-[calc(100vh-120px)] overflow-y-auto`}>
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className={`text-lg font-semibold ${sidebarCollapsed ? 'hidden' : ''}`}>Navigation</h2>
//                 <button 
//                   onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//                   className="p-1 rounded-md hover:bg-white/20 transition-colors"
//                 >
//                   {sidebarCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
//                 </button>
//               </div>
              
//               <div className="space-y-2 mb-6">
//                 <button
//                   onClick={() => setActiveTab('all')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'all' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiInbox className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>All Tasks</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.isArchived).length}</span>}
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('active')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'active' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiCheckSquare className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>Active</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.completed && !t.isArchived).length}</span>}
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('completed')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'completed' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiCheck className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>Completed</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.completed && !t.isArchived).length}</span>}
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('favorites')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'favorites' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiStar className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>Favorites</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.isFavorite && !t.isArchived).length}</span>}
//                 </button>

//                 <button
//                   onClick={() => setActiveTab('archived')}
//                   className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'archived' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
//                 >
//                   <FiArchive className="flex-shrink-0" />
//                   {!sidebarCollapsed && <span>Archived</span>}
//                   {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.isArchived).length}</span>}
//                 </button>
//               </div>
              
//               {!sidebarCollapsed && (
//                 <>
//                   <h2 className="text-lg font-semibold mb-4">Categories</h2>
//                   <div className="space-y-2">
//                     {categories.map(category => (
//                       <button
//                         key={category.id}
//                         onClick={() => setSelectedCategory(selectedCategory === category.name ? '' : category.name)}
//                         className={`w-full text-left px-4 py-2 rounded-xl flex items-center gap-3 transition-all ${selectedCategory === category.name ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'}`}
//                       >
//                         <span className={`flex-shrink-0 text-${category.color}-500`}>{category.icon}</span>
//                         <span>{category.name}</span>
//                         <span className="ml-auto text-sm opacity-70">
//                           {todos.filter(t => t.category === category.name && !t.isArchived).length}
//                         </span>
//                       </button>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className={`w-full ${sidebarCollapsed ? 'lg:w-[calc(100%-80px)]' : 'lg:w-3/4'} transition-all duration-300`}>
//             {/* Search and Filters */}
//             <div className={`rounded-2xl p-5 mb-6 shadow-lg ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}>
//               <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
//                 <div className="flex-1 w-full">
//                   <div className="relative">
//                     <FiSearch className="absolute left-3 top-3 opacity-50" />
//                     <input
//                       type="text"
//                       placeholder="Search todos..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                     />
//                   </div>
//                 </div>
                
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
//                     className={`p-3 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                   >
//                     {viewMode === 'list' ? <FiGrid /> : <FiList />}
//                   </button>
                  
//                   <button
//                     onClick={() => setShowStats(!showStats)}
//                     className={`p-3 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                   >
//                     <FiBarChart2 />
//                   </button>

//                   <div className="relative">
//                     <button
//                       onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
//                       className={`p-3 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                     >
//                       <FiFilter />
//                     </button>
//                   </div>
                  
//                   <button
//                     onClick={() => setIsFormOpen(true)}
//                     className={`p-3 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
//                   >
//                     <FiPlus />
//                   </button>
//                 </div>
//               </div>
              
//               {/* Advanced Filters */}
//               {showAdvancedOptions && <AdvancedFilters />}
              
//               {/* Quick Stats */}
//               <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 px-3 py-1 rounded-full">
//                   <div className="text-sm font-medium">Total:</div>
//                   <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full">{stats.total}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
//                   <div className="text-sm font-medium">Active:</div>
//                   <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full">{stats.active}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-full">
//                   <div className="text-sm font-medium">Completed:</div>
//                   <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full text-green-500">{stats.completed}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2 bg-red-100 dark:bg-red-900/20 px-3 py-1 rounded-full">
//                   <div className="text-sm font-medium">Overdue:</div>
//                   <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full text-red-500">{stats.overdue}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Todo List */}
//             <div className="mb-20">
//               {filteredTodos.length > 0 ? (
//                 viewMode === 'list' ? (
//                   <div className="space-y-4">
//                     <AnimatePresence>
//                       {filteredTodos.map(todo => {
//                         const priorityInfo = getPriorityIcon(todo.priority);
//                         const categoryInfo = getCategoryIcon(todo.category);
                        
//                         return (
//                           <motion.div
//                             key={todo.id}
//                             layout
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.2 }}
//                             className={`rounded-2xl p-5 shadow-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95 ${todo.completed ? 'opacity-70' : ''}`}
//                           >
//                             <div className="flex items-start gap-4">
//                               <button
//                                 onClick={() => toggleComplete(todo.id)}
//                                 className={`mt-1 p-2 rounded-full ${todo.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
//                               >
//                                 {todo.completed ? <FiCheckSquare size={18} /> : <FiSquare size={18} />}
//                               </button>
                              
//                               <div className="flex-1">
//                                 <div className="flex flex-wrap items-center gap-2 mb-2">
//                                   <span className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
//                                     {todo.text}
//                                   </span>
                                  
//                                   {todo.isPrivate && (
//                                     <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 flex items-center gap-1">
//                                       <FiLock size={10} /> Private
//                                     </span>
//                                   )}
                                  
//                                   {todo.isFavorite && (
//                                     <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 flex items-center gap-1">
//                                       <FiStar size={10} /> Favorite
//                                     </span>
//                                   )}

//                                   {todo.reminderTime && (
//                                     <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 flex items-center gap-1">
//                                       <FiBell size={10} /> Reminder
//                                     </span>
//                                   )}

//                                   {todo.recurring !== 'none' && (
//                                     <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 flex items-center gap-1">
//                                       <FiRefreshCw size={10} /> {todo.recurring}
//                                     </span>
//                                   )}
//                                 </div>
                                
//                                 {todo.notes && (
//                                   <div className="text-sm opacity-75 mb-3 bg-gray-100 dark:bg-gray-700/50 p-3 rounded-lg">
//                                     {todo.notes}
//                                   </div>
//                                 )}
                                
//                                 <div className="flex flex-wrap items-center gap-3 text-sm">
//                                   <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${priorityInfo.bg}`}>
//                                     {priorityInfo.icon}
//                                     <span className="capitalize">{todo.priority}</span>
//                                   </div>
                                  
//                                   {todo.dueDate && (
//                                     <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${isOverdue(todo.dueDate) && !todo.completed ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700/50'}`}>
//                                       <FiCalendar size={14} />
//                                       <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
//                                     </div>
//                                   )}
                                  
//                                   {todo.tag && (
//                                     <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
//                                       <FiTag size={14} />
//                                       <span>{todo.tag}</span>
//                                     </div>
//                                   )}
                                  
//                                   {todo.category && (
//                                     <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${categoryInfo.bg}`}>
//                                       {categoryInfo.icon}
//                                       <span>{todo.category}</span>
//                                     </div>
//                                   )}

//                                   {todo.estimatedTime > 0 && (
//                                     <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
//                                       <FiClock size={14} />
//                                       <span>{todo.estimatedTime}m</span>
//                                     </div>
//                                   )}
//                                 </div>
                                
//                                 {/* Subtasks */}
//                                 {todo.subtasks && todo.subtasks.length > 0 && (
//                                   <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                                     <div className="text-xs font-medium mb-2 uppercase tracking-wide">
//                                       Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
//                                     </div>
//                                     <div className="space-y-2">
//                                       {todo.subtasks.map(subtask => (
//                                         <div key={subtask.id} className="flex items-center gap-2">
//                                           <button
//                                             onClick={() => toggleSubtask(todo.id, subtask.id)}
//                                             className={`p-1 rounded-full ${subtask.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
//                                           >
//                                             {subtask.completed ? <FiCheckSquare size={14} /> : <FiSquare size={14} />}
//                                           </button>
//                                           <span className={`text-sm ${subtask.completed ? 'line-through opacity-70' : ''}`}>
//                                             {subtask.text}
//                                           </span>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 )}

//                                 {/* Attachments */}
//                                 {todo.attachments && todo.attachments.length > 0 && (
//                                   <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                                     <div className="text-xs font-medium mb-2 uppercase tracking-wide">
//                                       Attachments ({todo.attachments.length})
//                                     </div>
//                                     <div className="flex flex-wrap gap-2">
//                                       {todo.attachments.map((attachment, index) => (
//                                         <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-xs">
//                                           <FiPaperclip size={12} />
//                                           <span>{attachment.name}</span>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 )}

//                                 {/* Collaborators */}
//                                 {todo.collaborators && todo.collaborators.length > 0 && (
//                                   <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                                     <div className="text-xs font-medium mb-2 uppercase tracking-wide">
//                                       Collaborators ({todo.collaborators.length})
//                                     </div>
//                                     <div className="flex flex-wrap gap-2">
//                                       {todo.collaborators.map((collaborator, index) => (
//                                         <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs">
//                                           <FiUser size={12} />
//                                           <span>{collaborator}</span>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 )}
//                               </div>
                              
//                               <div className="flex flex-col gap-2">
//                                 <button
//                                   onClick={() => toggleFavorite(todo.id)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   {todo.isFavorite ? (
//                                     <FiStar className="text-yellow-500" />
//                                   ) : (
//                                     <FiStar />
//                                   )}
//                                 </button>
                                
//                                 <button
//                                   onClick={() => startEdit(todo)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   <FiEdit size={16} />
//                                 </button>
                                
//                                 <button
//                                   onClick={() => deleteTodo(todo.id)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   <FiTrash2 size={16} />
//                                 </button>
//                               </div>
//                             </div>
//                           </motion.div>
//                         );
//                       })}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <AnimatePresence>
//                       {filteredTodos.map(todo => {
//                         const priorityInfo = getPriorityIcon(todo.priority);
//                         const categoryInfo = getCategoryIcon(todo.category);
                        
//                         return (
//                           <motion.div
//                             key={todo.id}
//                             layout
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.9 }}
//                             transition={{ duration: 0.2 }}
//                             className={`rounded-2xl p-5 shadow-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95 ${todo.completed ? 'opacity-70' : ''}`}
//                           >
//                             <div className="flex justify-between items-start mb-4">
//                               <button
//                                 onClick={() => toggleComplete(todo.id)}
//                                 className={`p-2 rounded-full ${todo.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
//                               >
//                                 {todo.completed ? <FiCheckSquare size={18} /> : <FiSquare size={18} />}
//                               </button>
                              
//                               <div className="flex gap-1">
//                                 <button
//                                   onClick={() => toggleFavorite(todo.id)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   {todo.isFavorite ? (
//                                     <FiStar className="text-yellow-500" size={16} />
//                                   ) : (
//                                     <FiStar size={16} />
//                                   )}
//                                 </button>
                                
//                                 <button
//                                   onClick={() => startEdit(todo)}
//                                   className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                                 >
//                                   <FiEdit size={16} />
//                                 </button>
//                               </div>
//                             </div>
                            
//                             <div className="mb-4">
//                               <h3 className={`font-medium mb-2 ${todo.completed ? 'line-through' : ''}`}>
//                                 {todo.text}
//                               </h3>
                              
//                               {todo.notes && (
//                                 <p className="text-sm opacity-75 line-clamp-2 bg-gray-100 dark:bg-gray-700/50 p-2 rounded-lg">
//                                   {todo.notes}
//                                 </p>
//                               )}
//                             </div>
                            
//                             <div className="space-y-2 mb-4 text-sm">
//                               <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${priorityInfo.bg}`}>
//                                 {priorityInfo.icon}
//                                 <span className="capitalize">{todo.priority} priority</span>
//                               </div>
                              
//                               {todo.dueDate && (
//                                 <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${isOverdue(todo.dueDate) && !todo.completed ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700/50'}`}>
//                                   <FiCalendar size={14} />
//                                   <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
//                                 </div>
//                               )}
                              
//                               {todo.category && (
//                                 <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${categoryInfo.bg}`}>
//                                   {categoryInfo.icon}
//                                   <span>{todo.category}</span>
//                                 </div>
//                               )}

//                               {todo.estimatedTime > 0 && (
//                                 <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
//                                   <FiClock size={14} />
//                                   <span>{todo.estimatedTime}m estimate</span>
//                                 </div>
//                               )}
//                             </div>
                            
//                             {todo.subtasks && todo.subtasks.length > 0 && (
//                               <div className="mb-4">
//                                 <div className="text-xs font-medium mb-1 uppercase tracking-wide">
//                                   Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
//                                 </div>
//                                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                                   <div 
//                                     className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
//                                     style={{ width: `${(todo.subtasks.filter(st => st.completed).length / todo.subtasks.length) * 100}%` }}
//                                   ></div>
//                                 </div>
//                               </div>
//                             )}
                            
//                             <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
//                               <div>
//                                 {new Date(todo.date).toLocaleDateString()}
//                               </div>
                              
//                               {todo.isPrivate && (
//                                 <div className="flex items-center gap-1">
//                                   <FiLock size={12} className="text-blue-500" />
//                                   <span>Private</span>
//                                 </div>
//                               )}
//                             </div>
//                           </motion.div>
//                         );
//                       })}
//                     </AnimatePresence>
//                   </div>
//                 )
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className={`rounded-2xl p-8 text-center ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
//                 >
//                   <div className="text-6xl mb-4">📝</div>
//                   <h3 className="text-xl font-semibold mb-2">No todos found</h3>
//                   <p className="opacity-75 mb-6">Try changing your search or add a new todo</p>
//                   <button
//                     onClick={() => setIsFormOpen(true)}
//                     className={`px-5 py-3 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
//                   >
//                     Add Your First Todo
//                   </button>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Add Todo Form */}
//         <AnimatePresence>
//           {isFormOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className={`rounded-2xl p-6 w-full max-w-2xl ${currentTheme.card} backdrop-blur-sm bg-opacity-95 max-h-[90vh] overflow-y-auto`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-semibold">{editId ? 'Edit Todo' : 'Add New Todo'}</h2>
//                   <button onClick={editId ? cancelEdit : () => setIsFormOpen(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
//                     <FiX />
//                   </button>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block mb-2 font-medium">Task Description *</label>
//                     <textarea
//                       value={editId ? editValue : inputValue}
//                       onChange={(e) => editId ? setEditValue(e.target.value) : setInputValue(e.target.value)}
//                       className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                       placeholder="What needs to be done?"
//                       rows={2}
//                       required
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block mb-2 font-medium">Priority</label>
//                       <div className="relative">
//                         <select
//                           value={priority}
//                           onChange={(e) => setPriority(e.target.value)}
//                           className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                         >
//                           <option value="high">High</option>
//                           <option value="medium">Medium</option>
//                           <option value="low">Low</option>
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                           <FiChevronDown />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block mb-2 font-medium">Category</label>
//                       <div className="relative">
//                         <select
//                           value={selectedCategory}
//                           onChange={(e) => setSelectedCategory(e.target.value)}
//                           className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                         >
//                           <option value="">Select Category</option>
//                           {categories.map(category => (
//                             <option key={category.id} value={category.name}>{category.name}</option>
//                           ))}
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                           <FiChevronDown />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block mb-2 font-medium">Tag</label>
//                       <div className="relative">
//                         <select
//                           value={selectedTag}
//                           onChange={(e) => setSelectedTag(e.target.value)}
//                           className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                         >
//                           <option value="">Select Tag</option>
//                           {tags.map(tag => (
//                             <option key={tag} value={tag}>{tag}</option>
//                           ))}
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                           <FiChevronDown />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block mb-2 font-medium">Due Date</label>
//                       <input
//                         type="date"
//                         value={dueDate}
//                         onChange={(e) => setDueDate(e.target.value)}
//                         className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block mb-2 font-medium">Notes</label>
//                     <textarea
//                       value={notes}
//                       onChange={(e) => setNotes(e.target.value)}
//                       className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                       placeholder="Additional notes..."
//                       rows={3}
//                     />
//                   </div>

//                   {/* Advanced Options Toggle */}
//                   <div className="pt-2">
//                     <button
//                       type="button"
//                       onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
//                       className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
//                     >
//                       {showAdvancedOptions ? <FiChevronUp /> : <FiChevronDown />}
//                       <span>Advanced Options</span>
//                     </button>
//                   </div>

//                   {/* Advanced Options */}
//                   <AnimatePresence>
//                     {showAdvancedOptions && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="space-y-4 overflow-hidden"
//                       >
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div>
//                             <label className="block mb-2 font-medium">Set Reminder</label>
//                             <input
//                               type="time"
//                               value={reminderTime}
//                               onChange={(e) => setReminderTime(e.target.value)}
//                               className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                             />
//                           </div>
                          
//                           <div>
//                             <label className="block mb-2 font-medium">Recurring Task</label>
//                             <div className="relative">
//                               <select
//                                 value={recurring}
//                                 onChange={(e) => setRecurring(e.target.value)}
//                                 className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                               >
//                                 <option value="none">No Recurrence</option>
//                                 <option value="daily">Daily</option>
//                                 <option value="weekly">Weekly</option>
//                                 <option value="monthly">Monthly</option>
//                               </select>
//                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                                 <FiChevronDown />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div>
//                           <label className="block mb-2 font-medium">Time Estimate (minutes)</label>
//                           <input
//                             type="number"
//                             value={timeEstimate}
//                             onChange={(e) => setTimeEstimate(parseInt(e.target.value) || 0)}
//                             className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
//                             placeholder="Estimated time to complete"
//                             min="0"
//                           />
//                         </div>

//                         <div className="flex gap-4">
//                           <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">
//                             <input
//                               type="checkbox"
//                               checked={isPrivate}
//                               onChange={() => setIsPrivate(!isPrivate)}
//                               className="rounded text-blue-500 focus:ring-blue-500"
//                             />
//                             <span>Private Task</span>
//                           </label>
                          
//                           <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">
//                             <input
//                               type="checkbox"
//                               checked={isFavorite}
//                               onChange={() => setIsFavorite(!isFavorite)}
//                               className="rounded text-blue-500 focus:ring-blue-500"
//                             />
//                             <span>Favorite</span>
//                           </label>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
                  
//                   <div className="flex justify-end gap-3 pt-4">
//                     <button
//                       onClick={editId ? cancelEdit : () => setIsFormOpen(false)}
//                       className={`px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                     >
//                       Cancel
//                     </button>
                    
//                     <button
//                       onClick={editId ? updateTodo : addTodo}
//                       className={`px-4 py-2 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
//                     >
//                       {editId ? 'Update' : 'Add'} Todo
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Settings Panel */}
//         <AnimatePresence>
//           {showSettings && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className={`rounded-2xl p-6 w-full max-w-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-semibold">Settings</h2>
//                   <button onClick={() => setShowSettings(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
//                     <FiX />
//                   </button>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block mb-2 font-medium">Theme</label>
//                     <div className="relative">
//                       <select
//                         value={theme}
//                         onChange={(e) => setTheme(e.target.value)}
//                         className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
//                       >
//                         <option value="light">Light</option>
//                         <option value="dark">Dark</option>
//                       </select>
//                       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
//                         <FiChevronDown />
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50">
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={soundEnabled}
//                         onChange={() => setSoundEnabled(!soundEnabled)}
//                         className="rounded text-blue-500 focus:ring-blue-500"
//                       />
//                       <span>Enable Sounds</span>
//                     </label>
//                   </div>
                  
//                   <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
//                     <h3 className="font-medium mb-2">Data Management</h3>
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => {
//                           const dataStr = JSON.stringify(todos);
//                           const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
//                           const linkElement = document.createElement('a');
//                           linkElement.setAttribute('href', dataUri);
//                           linkElement.setAttribute('download', 'todos.json');
//                           linkElement.click();
//                         }}
//                         className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                       >
//                         <FiDownload />
//                         <span>Export</span>
//                       </button>
                      
//                       <button
//                         onClick={clearCompleted}
//                         className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
//                       >
//                         <FiTrash2 />
//                         <span>Clear Completed</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Add Todo Button */}
//         {!isFormOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="fixed bottom-6 right-6"
//           >
//             <button
//               onClick={() => setIsFormOpen(true)}
//               className={`p-5 rounded-full shadow-xl text-white text-xl transition-all ${currentTheme.button} hover:scale-110`}
//             >
//               <FiPlus />
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;









































import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPlus, FiTrash2, FiEdit, FiCheck, FiSun, FiMoon, 
  FiFlag, FiCalendar, FiClock, FiSearch, FiFilter,
  FiChevronDown, FiChevronUp, FiStar, FiArchive, FiRefreshCw,
  FiGrid, FiList, FiEye, FiEyeOff, FiLock, FiUnlock, FiAward,
  FiBell, FiBellOff, FiShare2, FiDownload, FiUpload, FiHeart,
  FiBarChart2, FiPieChart, FiTrendingUp, FiSettings, FiUser,
  FiBookmark, FiTag, FiLayers, FiBox, FiDatabase, FiCoffee,
  FiX, FiMenu, FiCheckSquare, FiSquare, FiHome, FiBriefcase,
  FiActivity, FiDollarSign, FiBook, FiShoppingBag, FiPhone,
  FiMessageSquare, FiVideo, FiMusic, FiImage, FiFileText, 
  FiChevronLeft, FiChevronRight, FiBell as FiReminder, FiTarget,
  FiInbox, FiFolder, FiClipboard, FiCheckCircle, FiAlertCircle, 
  FiAlertTriangle, FiPaperclip, FiUsers, FiRepeat, FiLayers as FiSubtasks,
  FiPieChart as FiStats, FiSliders, FiZap, FiAperture, FiBarChart,
  FiBookOpen, FiCpu, FiFeather, FiGift, FiGlobe, FiKey,
  FiLifeBuoy, FiMap, FiMic, FiPocket, FiShield, FiTool, FiTrello,
  FiWatch, FiWind, FiXCircle, FiZoomIn, FiZoomOut
} from 'react-icons/fi';

const HomePage = () => {
  // State management with localStorage persistence
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  
  const [tags] = useState([
    'work', 'personal', 'urgent', 'shopping', 'health', 
    'finance', 'education', 'travel', 'home', 'food', 'ideas',
    'meeting', 'project', 'reading', 'learning', 'fitness'
  ]);
  
  const [selectedTag, setSelectedTag] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [showCompleted, setShowCompleted] = useState(true);
  
  const [categories] = useState([
    { id: 1, name: 'Personal', color: 'blue', icon: <FiUser /> },
    { id: 2, name: 'Work', color: 'green', icon: <FiBriefcase /> },
    { id: 3, name: 'Health', color: 'red', icon: <FiHeart /> },
    { id: 4, name: 'Education', color: 'purple', icon: <FiBook /> },
    { id: 5, name: 'Finance', color: 'orange', icon: <FiDollarSign /> },
    { id: 6, name: 'Shopping', color: 'pink', icon: <FiShoppingBag /> },
    { id: 7, name: 'Home', color: 'indigo', icon: <FiHome /> },
    { id: 8, name: 'Entertainment', color: 'yellow', icon: <FiVideo /> },
    { id: 9, name: 'Ideas', color: 'teal', icon: <FiAperture /> },
    { id: 10, name: 'Travel', color: 'cyan', icon: <FiGlobe /> }
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [showStats, setShowStats] = useState(true);
  const [productivityScore, setProductivityScore] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [showAchievements, setShowAchievements] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    priority: '',
    dueDateRange: '',
    withNotes: false,
    withSubtasks: false,
    tags: [],
    categories: []
  });
  const [reminderTime, setReminderTime] = useState('');
  const [recurring, setRecurring] = useState('none');
  const [timeEstimate, setTimeEstimate] = useState(0);
  const [attachments, setAttachments] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(3);
  const [focusMode, setFocusMode] = useState(false);
  const [pomodoroTimer, setPomodoroTimer] = useState(25);
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);

  // Save to localStorage whenever todos or theme changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Initialize with sample todos if empty
  useEffect(() => {
    if (todos.length === 0) {
      const sampleTodos = [
        {
          id: 1,
          text: 'Welcome to your advanced todo app',
          completed: false,
          priority: 'high',
          date: new Date(),
          tag: 'work',
          dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
          notes: 'This is a sample todo to get you started. Try out all the advanced features!',
          category: 'Work',
          isPrivate: false,
          isFavorite: true,
          isArchived: false,
          timeSpent: 0,
          estimatedTime: 30,
          reminderTime: '09:00',
          recurring: 'none',
          attachments: [],
          collaborators: [],
          energyRequired: 3,
          subtasks: [
            { id: 1, text: 'Explore features', completed: true },
            { id: 2, text: 'Customize settings', completed: false },
            { id: 3, text: 'Add your first task', completed: false }
          ]
        },
        {
          id: 2,
          text: 'Click on the + button to add a new todo',
          completed: false,
          priority: 'medium',
          date: new Date(),
          tag: 'personal',
          dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
          notes: 'You can add detailed notes, set priorities, categories and more!',
          category: 'Personal',
          isPrivate: false,
          isFavorite: false,
          isArchived: false,
          timeSpent: 0,
          estimatedTime: 15,
          reminderTime: '',
          recurring: 'none',
          attachments: [],
          collaborators: [],
          energyRequired: 2,
          subtasks: []
        },
        {
          id: 3,
          text: 'Try out the advanced filtering system',
          completed: false,
          priority: 'high',
          date: new Date(),
          tag: 'learning',
          dueDate: new Date(Date.now() + 259200000).toISOString().split('T')[0],
          notes: 'Filter by priority, due date, tags, categories and more!',
          category: 'Education',
          isPrivate: false,
          isFavorite: true,
          isArchived: false,
          timeSpent: 0,
          estimatedTime: 20,
          reminderTime: '14:00',
          recurring: 'none',
          attachments: [],
          collaborators: [],
          energyRequired: 3,
          subtasks: [
            { id: 1, text: 'Test priority filters', completed: false },
            { id: 2, text: 'Try category filters', completed: false }
          ]
        }
      ];
      setTodos(sampleTodos);
    }
    
    calculateProductivityScore(todos);
    checkAchievements(todos);
  }, []);

  // Calculate productivity score
  const calculateProductivityScore = useCallback((todosArray) => {
    const totalTodos = todosArray.length;
    const completedTodos = todosArray.filter(todo => todo.completed).length;
    const overdueTodos = todosArray.filter(todo => 
      todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed
    ).length;
    
    let score = 0;
    if (totalTodos > 0) {
      score = Math.round((completedTodos / totalTodos) * 100);
      score -= overdueTodos * 5;
      
      const earlyCompleted = todosArray.filter(todo => 
        todo.completed && todo.dueDate && new Date(todo.dueDate) > new Date()
      ).length;
      
      score += earlyCompleted * 2;
      score = Math.max(0, Math.min(100, score));
    }
    
    setProductivityScore(score);
  }, []);

  // Check for achievements
  const checkAchievements = useCallback((todosArray) => {
    const newAchievements = [];
    
    if (todosArray.length > 0) {
      newAchievements.push({
        id: 1,
        name: 'Getting Started',
        description: 'Added your first todo',
        icon: <FiAward />,
        color: 'gold',
        unlocked: true,
        date: new Date()
      });
    }
    
    const completedCount = todosArray.filter(todo => todo.completed).length;
    if (completedCount >= 5) {
      newAchievements.push({
        id: 2,
        name: 'Completionist',
        description: 'Completed 5 todos',
        icon: <FiCheck />,
        color: 'silver',
        unlocked: true,
        date: new Date()
      });
    }
    
    // Add more achievements here
    if (completedCount >= 20) {
      newAchievements.push({
        id: 3,
        name: 'Productivity Master',
        description: 'Completed 20 todos',
        icon: <FiTrendingUp />,
        color: 'bronze',
        unlocked: true,
        date: new Date()
      });
    }
    
    setAchievements(newAchievements);
  }, []);

  // Theme classes
  const themes = {
    light: {
      bg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      card: 'bg-white shadow-xl border border-gray-100',
      text: 'text-gray-800',
      input: 'bg-white border-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
      button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg',
      accent: 'text-blue-500',
      header: 'bg-gradient-to-r from-blue-600 to-blue-700',
      sidebar: 'bg-gradient-to-b from-blue-50 to-indigo-50 border-r border-gray-200',
    },
    dark: {
      bg: 'bg-gradient-to-br from-gray-900 to-gray-800',
      card: 'bg-gray-800 shadow-xl border border-gray-700',
      text: 'text-gray-100',
      input: 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
      button: 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-md hover:shadow-lg',
      accent: 'text-indigo-400',
      header: 'bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700',
      sidebar: 'bg-gradient-to-b from-gray-800 to-gray-900 border-r border-gray-700',
    }
  };

  const currentTheme = themes[theme];

  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        priority,
        date: new Date(),
        tag: selectedTag,
        dueDate,
        notes,
        category: selectedCategory,
        isPrivate,
        isFavorite,
        isArchived: false,
        timeSpent: 0,
        estimatedTime: timeEstimate,
        reminderTime,
        recurring,
        attachments,
        collaborators,
        energyRequired: energyLevel,
        subtasks: []
      };
      
      setTodos([newTodo, ...todos]);
      resetForm();
      setIsFormOpen(false);
      
      calculateProductivityScore([newTodo, ...todos]);
      checkAchievements([newTodo, ...todos]);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setInputValue('');
    setPriority('medium');
    setSelectedTag('');
    setDueDate('');
    setNotes('');
    setSelectedCategory('');
    setIsPrivate(false);
    setIsFavorite(false);
    setReminderTime('');
    setRecurring('none');
    setTimeEstimate(0);
    setAttachments([]);
    setCollaborators([]);
    setEnergyLevel(3);
    setShowAdvancedOptions(false);
  };

  // Edit a todo
  const updateTodo = () => {
    if (editValue.trim() !== '') {
      const updatedTodos = todos.map(todo =>
        todo.id === editId
          ? { 
            ...todo, 
            text: editValue, 
            priority, 
            tag: selectedTag, 
            dueDate,
            notes,
            category: selectedCategory,
            isPrivate,
            isFavorite,
            reminderTime,
            recurring,
            estimatedTime: timeEstimate,
            attachments,
            collaborators,
            energyRequired: energyLevel
          }
          : todo
      );
      
      setTodos(updatedTodos);
      setEditId(null);
      resetForm();
      
      calculateProductivityScore(updatedTodos);
      checkAchievements(updatedTodos);
    }
  };

  // Delete a todo
  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    calculateProductivityScore(updatedTodos);
  };

  // Toggle completion status
  const toggleComplete = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    
    setTodos(updatedTodos);
    calculateProductivityScore(updatedTodos);
    checkAchievements(updatedTodos);
  };

  // Archive a todo
  const archiveTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isArchived: !todo.isArchived } : todo
    );
    
    setTodos(updatedTodos);
  };

  // Toggle favorite status
  const toggleFavorite = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
    );
    
    setTodos(updatedTodos);
  };

  // Start editing a todo
  const startEdit = todo => {
    setEditId(todo.id);
    setEditValue(todo.text);
    setPriority(todo.priority || 'medium');
    setSelectedTag(todo.tag || '');
    setDueDate(todo.dueDate || '');
    setNotes(todo.notes || '');
    setSelectedCategory(todo.category || '');
    setIsPrivate(todo.isPrivate || false);
    setIsFavorite(todo.isFavorite || false);
    setReminderTime(todo.reminderTime || '');
    setRecurring(todo.recurring || 'none');
    setTimeEstimate(todo.estimatedTime || 0);
    setAttachments(todo.attachments || []);
    setCollaborators(todo.collaborators || []);
    setEnergyLevel(todo.energyRequired || 3);
    setIsFormOpen(true);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    resetForm();
  };

  // Clear all completed todos
  const clearCompleted = () => {
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos);
    calculateProductivityScore(updatedTodos);
  };

  // Add a subtask
  const addSubtask = (todoId, text) => {
    if (text.trim() !== '') {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId
          ? {
            ...todo,
            subtasks: [
              ...todo.subtasks,
              {
                id: Date.now(),
                text,
                completed: false
              }
            ]
          }
          : todo
      );
      
      setTodos(updatedTodos);
    }
  };

  // Toggle subtask completion
  const toggleSubtask = (todoId, subtaskId) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId
        ? {
          ...todo,
          subtasks: todo.subtasks.map(subtask =>
            subtask.id === subtaskId
              ? { ...subtask, completed: !subtask.completed }
              : subtask
          )
        }
        : todo
    );
    
    setTodos(updatedTodos);
  };

  // Delete a subtask
  const deleteSubtask = (todoId, subtaskId) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId
        ? {
          ...todo,
          subtasks: todo.subtasks.filter(subtask => subtask.id !== subtaskId)
        }
        : todo
    );
    
    setTodos(updatedTodos);
  };

  // Apply advanced filters
  const applyAdvancedFilters = (todosArray) => {
    return todosArray.filter(todo => {
      if (advancedFilters.priority && todo.priority !== advancedFilters.priority) return false;
      
      if (advancedFilters.dueDateRange) {
        const today = new Date();
        const todoDueDate = new Date(todo.dueDate);
        
        switch(advancedFilters.dueDateRange) {
          case 'today':
            if (!todo.dueDate || todoDueDate.toDateString() !== today.toDateString()) return false;
            break;
          case 'tomorrow':
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            if (!todo.dueDate || todoDueDate.toDateString() !== tomorrow.toDateString()) return false;
            break;
          case 'week':
            const weekEnd = new Date(today);
            weekEnd.setDate(today.getDate() + 7);
            if (!todo.dueDate || todoDueDate < today || todoDueDate > weekEnd) return false;
            break;
          case 'month':
            const monthEnd = new Date(today);
            monthEnd.setMonth(today.getMonth() + 1);
            if (!todo.dueDate || todoDueDate < today || todoDueDate > monthEnd) return false;
            break;
          case 'overdue':
            if (!todo.dueDate || todoDueDate >= today || todo.completed) return false;
            break;
          default:
            break;
        }
      }
      
      if (advancedFilters.withNotes && !todo.notes) return false;
      if (advancedFilters.withSubtasks && (!todo.subtasks || todo.subtasks.length === 0)) return false;
      
      if (advancedFilters.tags.length > 0 && todo.tag && !advancedFilters.tags.includes(todo.tag)) return false;
      
      if (advancedFilters.categories.length > 0 && todo.category && !advancedFilters.categories.includes(todo.category)) return false;
      
      return true;
    });
  };

  // Filter todos based on filter and search query
  const filteredTodos = applyAdvancedFilters(
    todos
      .filter(todo => {
        if (activeTab === 'active') return !todo.completed && !todo.isArchived;
        if (activeTab === 'completed') return todo.completed && !todo.isArchived;
        if (activeTab === 'favorites') return todo.isFavorite && !todo.isArchived;
        if (activeTab === 'archived') return todo.isArchived;
        return !todo.isArchived;
      })
      .filter(todo =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (todo.notes && todo.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (todo.tag && todo.tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (todo.category && todo.category.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
        if (sortBy === 'priority') {
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        }
        if (sortBy === 'dueDate') {
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
        if (sortBy === 'energy') {
          return b.energyRequired - a.energyRequired;
        }
        return 0;
      })
  );

  // Get priority icon and color
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return { icon: <FiFlag className="text-red-500" />, color: 'red', bg: 'bg-red-100 dark:bg-red-900/20' };
      case 'medium':
        return { icon: <FiFlag className="text-yellow-500" />, color: 'yellow', bg: 'bg-yellow-100 dark:bg-yellow-900/20' };
      case 'low':
        return { icon: <FiFlag className="text-green-500" />, color: 'green', bg: 'bg-green-100 dark:bg-green-900/20' };
      default:
        return { icon: <FiFlag className="text-gray-500" />, color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/20' };
    }
  };

  // Get category icon and color
  const getCategoryIcon = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    if (category) {
      return {
        icon: category.icon,
        color: category.color,
        bg: `bg-${category.color}-100 dark:bg-${category.color}-900/20`
      };
    }
    return { icon: <FiBox />, color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/20' };
  };

  // Check if a due date is overdue
  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date() && dueDate !== '';
  };

  // Calculate stats
  const calculateStats = () => {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active = total - completed;
    const overdue = todos.filter(t => isOverdue(t.dueDate) && !t.completed).length;
    const favorites = todos.filter(t => t.isFavorite).length;
    const highPriority = todos.filter(t => t.priority === 'high').length;
    const withSubtasks = todos.filter(t => t.subtasks && t.subtasks.length > 0).length;
    const privateTasks = todos.filter(t => t.isPrivate).length;
    
    return {
      total,
      completed,
      active,
      overdue,
      favorites,
      highPriority,
      withSubtasks,
      privateTasks,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  };

  const stats = calculateStats();

  // Stats Cards Component
  const StatsCard = ({ title, value, icon, color, change, onClick }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`rounded-xl p-4 ${currentTheme.card} backdrop-blur-sm bg-opacity-95 cursor-pointer transition-all hover:shadow-lg`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm opacity-75 mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${color} bg-opacity-20 text-${color.split('-')[1]}-500`}>
          {icon}
        </div>
      </div>
      {change && (
        <p className={`text-xs mt-2 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 ? '↑' : '↓'} {Math.abs(change)}% from last week
        </p>
      )}
    </motion.div>
  );

  // Advanced Filter Component
  const AdvancedFiltersPanel = () => (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className={`rounded-xl p-5 mb-6 ${currentTheme.card} backdrop-blur-sm bg-opacity-95 overflow-hidden`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <FiSliders className="text-blue-500" /> Advanced Filters
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
          className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
        >
          <FiRefreshCw size={14} /> Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            value={advancedFilters.priority}
            onChange={(e) => setAdvancedFilters({...advancedFilters, priority: e.target.value})}
            className={`w-full px-3 py-2 rounded-lg border transition-all ${currentTheme.input}`}
          >
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Due Date</label>
          <select
            value={advancedFilters.dueDateRange}
            onChange={(e) => setAdvancedFilters({...advancedFilters, dueDateRange: e.target.value})}
            className={`w-full px-3 py-2 rounded-lg border transition-all ${currentTheme.input}`}
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
          <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 w-full">
            <input
              type="checkbox"
              checked={advancedFilters.withNotes}
              onChange={() => setAdvancedFilters({...advancedFilters, withNotes: !advancedFilters.withNotes})}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <span>With Notes</span>
          </label>
        </div>
        
        <div className="flex items-end">
          <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 w-full">
            <input
              type="checkbox"
              checked={advancedFilters.withSubtasks}
              onChange={() => setAdvancedFilters({...advancedFilters, withSubtasks: !advancedFilters.withSubtasks})}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <span>With Subtasks</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tags</label>
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
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Categories</label>
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
                  ? `bg-${category.color}-500 text-white` 
                  : `bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-800 dark:text-${category.color}-200`}`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Pomodoro Timer Component
  const PomodoroTimer = () => {
    useEffect(() => {
      let interval = null;
      if (timerActive && (timerMinutes > 0 || timerSeconds > 0)) {
        interval = setInterval(() => {
          if (timerSeconds === 0) {
            if (timerMinutes === 0) {
              clearInterval(interval);
              setTimerActive(false);
              // Timer completed logic here
            } else {
              setTimerMinutes(minutes => minutes - 1);
              setTimerSeconds(59);
            }
          } else {
            setTimerSeconds(seconds => seconds - 1);
          }
        }, 1000);
      } else if (!timerActive && timerMinutes === 0 && timerSeconds === 0) {
        setTimerMinutes(25);
        setTimerSeconds(0);
      }
      return () => clearInterval(interval);
    }, [timerActive, timerMinutes, timerSeconds]);

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-xl p-5 mb-6 ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <FiClock className="text-red-500" /> Focus Timer
          </h3>
          <button 
            onClick={() => setShowPomodoro(false)}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FiX />
          </button>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold mb-4">
            {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
          </div>
          
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setTimerActive(!timerActive)}
              className={`px-4 py-2 rounded-lg ${timerActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
            >
              {timerActive ? 'Pause' : 'Start'}
            </button>
            
            <button
              onClick={() => {
                setTimerActive(false);
                setTimerMinutes(25);
                setTimerSeconds(0);
              }}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Reset
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setTimerMinutes(25)}
              className={`px-3 py-1 rounded-lg text-sm ${timerMinutes === 25 ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              25 min
            </button>
            <button
              onClick={() => setTimerMinutes(15)}
              className={`px-3 py-1 rounded-lg text-sm ${timerMinutes === 15 ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              15 min
            </button>
            <button
              onClick={() => setTimerMinutes(5)}
              className={`px-3 py-1 rounded-lg text-sm ${timerMinutes === 5 ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              5 min
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen py-4 px-4 transition-colors duration-300 ${currentTheme.bg} ${currentTheme.text}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`rounded-2xl p-4 mb-6 ${currentTheme.header} text-white shadow-lg backdrop-blur-sm bg-opacity-90`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm"
              >
                <FiMenu />
              </button>
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <FiTarget className="text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Productivity Pro</h1>
                <p className="text-sm opacity-90">Advanced Task Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {showPomodoro && (
                <button
                  onClick={() => setFocusMode(!focusMode)}
                  className={`p-2 rounded-lg ${focusMode ? 'bg-red-500' : 'bg-white/20'} backdrop-blur-sm transition-all`}
                >
                  <FiZap className={focusMode ? 'text-white' : ''} />
                </button>
              )}
              
              <button
                onClick={() => setShowPomodoro(!showPomodoro)}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
              >
                <FiClock />
              </button>
              
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
              
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
              >
                <FiSettings />
              </button>
            </div>
          </div>
        </motion.header>

        {/* Pomodoro Timer */}
        {showPomodoro && <PomodoroTimer />}

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard 
            title="Total Tasks" 
            value={stats.total} 
            icon={<FiClipboard className="text-xl" />} 
            color="bg-blue-100 text-blue-500 dark:bg-blue-900/20" 
            onClick={() => setActiveTab('all')}
          />
          <StatsCard 
            title="Completed" 
            value={stats.completed} 
            icon={<FiCheckCircle className="text-xl" />} 
            color="bg-green-100 text-green-500 dark:bg-green-900/20" 
            change={12}
            onClick={() => setActiveTab('completed')}
          />
          <StatsCard 
            title="Overdue" 
            value={stats.overdue} 
            icon={<FiAlertTriangle className="text-xl" />} 
            color="bg-red-100 text-red-500 dark:bg-red-900/20" 
            change={-5}
          />
          <StatsCard 
            title="Productivity" 
            value={`${productivityScore}%`} 
            icon={<FiTrendingUp className="text-xl" />} 
            color="bg-purple-100 text-purple-500 dark:bg-purple-900/20" 
            change={8}
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar for desktop */}
          <div className={`hidden md:block ${sidebarCollapsed ? 'w-20' : 'w-full lg:w-1/4'} transition-all duration-300`}>
            <div className={`rounded-2xl p-5 shadow-lg sticky top-6 ${currentTheme.sidebar} backdrop-blur-sm bg-opacity-95 h-[calc(100vh-120px)] overflow-y-auto`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-lg font-semibold ${sidebarCollapsed ? 'hidden' : ''}`}>Navigation</h2>
                <button 
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="p-1 rounded-md hover:bg-white/20 transition-colors"
                >
                  {sidebarCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
                </button>
              </div>
              
              <div className="space-y-2 mb-6">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'all' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
                >
                  <FiInbox className="flex-shrink-0" />
                  {!sidebarCollapsed && <span>All Tasks</span>}
                  {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.isArchived).length}</span>}
                </button>
                
                <button
                  onClick={() => setActiveTab('active')}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'active' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
                >
                  <FiCheckSquare className="flex-shrink-0" />
                  {!sidebarCollapsed && <span>Active</span>}
                  {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.completed && !t.isArchived).length}</span>}
                </button>
                
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'completed' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
                >
                  <FiCheck className="flex-shrink-0" />
                  {!sidebarCollapsed && <span>Completed</span>}
                  {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.completed && !t.isArchived).length}</span>}
                </button>
                
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'favorites' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
                >
                  <FiStar className="flex-shrink-0" />
                  {!sidebarCollapsed && <span>Favorites</span>}
                  {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.isFavorite && !t.isArchived).length}</span>}
                </button>

                <button
                  onClick={() => setActiveTab('archived')}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'archived' ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'} ${sidebarCollapsed ? 'justify-center p-3' : ''}`}
                >
                  <FiArchive className="flex-shrink-0" />
                  {!sidebarCollapsed && <span>Archived</span>}
                  {!sidebarCollapsed && <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.isArchived).length}</span>}
                </button>
              </div>
              
              {!sidebarCollapsed && (
                <>
                  <h2 className="text-lg font-semibold mb-4">Categories</h2>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(selectedCategory === category.name ? '' : category.name)}
                        className={`w-full text-left px-4 py-2 rounded-xl flex items-center gap-3 transition-all ${selectedCategory === category.name ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-white/20 backdrop-blur-sm'}`}
                      >
                        <span className={`flex-shrink-0 text-${category.color}-500`}>{category.icon}</span>
                        <span>{category.name}</span>
                        <span className="ml-auto text-sm opacity-70">
                          {todos.filter(t => t.category === category.name && !t.isArchived).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className={`w-full ${sidebarCollapsed ? 'lg:w-[calc(100%-80px)]' : 'lg:w-3/4'} transition-all duration-300`}>
            {/* Search and Filters */}
            <div className={`rounded-2xl p-5 mb-6 shadow-lg ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-3 opacity-50" />
                    <input
                      type="text"
                      placeholder="Search todos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
                    className={`p-3 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
                  >
                    {viewMode === 'list' ? <FiGrid /> : <FiList />}
                  </button>
                  
                  <button
                    onClick={() => setShowFilterPanel(!showFilterPanel)}
                    className={`p-3 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md ${showFilterPanel ? 'bg-blue-500 text-white' : ''}`}
                  >
                    <FiFilter />
                  </button>
                  
                  <button
                    onClick={() => setShowStats(!showStats)}
                    className={`p-3 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
                  >
                    <FiBarChart2 />
                  </button>

                  <button
                    onClick={() => setIsFormOpen(true)}
                    className={`p-3 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              
              {/* Advanced Filters */}
              {showFilterPanel && <AdvancedFiltersPanel />}
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  <div className="text-sm font-medium">Total:</div>
                  <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full">{stats.total}</div>
                </div>
                
                <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
                  <div className="text-sm font-medium">Active:</div>
                  <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full">{stats.active}</div>
                </div>
                
                <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                  <div className="text-sm font-medium">Completed:</div>
                  <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full text-green-500">{stats.completed}</div>
                </div>
                
                <div className="flex items-center gap-2 bg-red-100 dark:bg-red-900/20 px-3 py-1 rounded-full">
                  <div className="text-sm font-medium">Overdue:</div>
                  <div className="text-sm bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full text-red-500">{stats.overdue}</div>
                </div>
              </div>
            </div>

            {/* Todo List */}
            <div className="mb-20">
              {filteredTodos.length > 0 ? (
                viewMode === 'list' ? (
                  <div className="space-y-4">
                    <AnimatePresence>
                      {filteredTodos.map(todo => {
                        const priorityInfo = getPriorityIcon(todo.priority);
                        const categoryInfo = getCategoryIcon(todo.category);
                        
                        return (
                          <motion.div
                            key={todo.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`rounded-2xl p-5 shadow-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95 ${todo.completed ? 'opacity-70' : ''}`}
                          >
                            <div className="flex items-start gap-4">
                              <button
                                onClick={() => toggleComplete(todo.id)}
                                className={`mt-1 p-2 rounded-full ${todo.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
                              >
                                {todo.completed ? <FiCheckSquare size={18} /> : <FiSquare size={18} />}
                              </button>
                              
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
                                    {todo.text}
                                  </span>
                                  
                                  {todo.isPrivate && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 flex items-center gap-1">
                                      <FiLock size={10} /> Private
                                    </span>
                                  )}
                                  
                                  {todo.isFavorite && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 flex items-center gap-1">
                                      <FiStar size={10} /> Favorite
                                    </span>
                                  )}

                                  {todo.reminderTime && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 flex items-center gap-1">
                                      <FiReminder size={10} /> Reminder
                                    </span>
                                  )}

                                  {todo.recurring !== 'none' && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 flex items-center gap-1">
                                      <FiRepeat size={10} /> {todo.recurring}
                                    </span>
                                  )}
                                </div>
                                
                                {todo.notes && (
                                  <div className="text-sm opacity-75 mb-3 bg-gray-100 dark:bg-gray-700/50 p-3 rounded-lg">
                                    {todo.notes}
                                  </div>
                                )}
                                
                                <div className="flex flex-wrap items-center gap-3 text-sm">
                                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${priorityInfo.bg}`}>
                                    {priorityInfo.icon}
                                    <span className="capitalize">{todo.priority}</span>
                                  </div>
                                  
                                  {todo.dueDate && (
                                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${isOverdue(todo.dueDate) && !todo.completed ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700/50'}`}>
                                      <FiCalendar size={14} />
                                      <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
                                    </div>
                                  )}
                                  
                                  {todo.tag && (
                                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
                                      <FiTag size={14} />
                                      <span>{todo.tag}</span>
                                    </div>
                                  )}
                                  
                                  {todo.category && (
                                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${categoryInfo.bg}`}>
                                      {categoryInfo.icon}
                                      <span>{todo.category}</span>
                                    </div>
                                  )}

                                  {todo.estimatedTime > 0 && (
                                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
                                      <FiClock size={14} />
                                      <span>{todo.estimatedTime}m</span>
                                    </div>
                                  )}

                                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
                                    <FiZap size={14} />
                                    <span>Energy: {todo.energyRequired}/5</span>
                                  </div>
                                </div>
                                
                                {/* Subtasks */}
                                {todo.subtasks && todo.subtasks.length > 0 && (
                                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="text-xs font-medium mb-2 uppercase tracking-wide">
                                      Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
                                    </div>
                                    <div className="space-y-2">
                                      {todo.subtasks.map(subtask => (
                                        <div key={subtask.id} className="flex items-center gap-2">
                                          <button
                                            onClick={() => toggleSubtask(todo.id, subtask.id)}
                                            className={`p-1 rounded-full ${subtask.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
                                          >
                                            {subtask.completed ? <FiCheckSquare size={14} /> : <FiSquare size={14} />}
                                          </button>
                                          <span className={`text-sm ${subtask.completed ? 'line-through opacity-70' : ''}`}>
                                            {subtask.text}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Attachments */}
                                {todo.attachments && todo.attachments.length > 0 && (
                                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="text-xs font-medium mb-2 uppercase tracking-wide">
                                      Attachments ({todo.attachments.length})
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {todo.attachments.map((attachment, index) => (
                                        <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-xs">
                                          <FiPaperclip size={12} />
                                          <span>{attachment.name}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Collaborators */}
                                {todo.collaborators && todo.collaborators.length > 0 && (
                                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="text-xs font-medium mb-2 uppercase tracking-wide">
                                      Collaborators ({todo.collaborators.length})
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {todo.collaborators.map((collaborator, index) => (
                                        <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs">
                                          <FiUser size={12} />
                                          <span>{collaborator}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                              
                              <div className="flex flex-col gap-2">
                                <button
                                  onClick={() => toggleFavorite(todo.id)}
                                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                  {todo.isFavorite ? (
                                    <FiStar className="text-yellow-500" />
                                  ) : (
                                    <FiStar />
                                  )}
                                </button>
                                
                                <button
                                  onClick={() => startEdit(todo)}
                                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                  <FiEdit size={16} />
                                </button>
                                
                                <button
                                  onClick={() => deleteTodo(todo.id)}
                                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                  <FiTrash2 size={16} />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AnimatePresence>
                      {filteredTodos.map(todo => {
                        const priorityInfo = getPriorityIcon(todo.priority);
                        const categoryInfo = getCategoryIcon(todo.category);
                        
                        return (
                          <motion.div
                            key={todo.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className={`rounded-2xl p-5 shadow-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95 ${todo.completed ? 'opacity-70' : ''}`}
                          >
                            <div className="flex justify-between items-start mb-4">
                              <button
                                onClick={() => toggleComplete(todo.id)}
                                className={`p-2 rounded-full ${todo.completed ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-gray-100 text-gray-400 dark:bg-gray-700'}`}
                              >
                                {todo.completed ? <FiCheckSquare size={18} /> : <FiSquare size={18} />}
                              </button>
                              
                              <div className="flex gap-1">
                                <button
                                  onClick={() => toggleFavorite(todo.id)}
                                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                  {todo.isFavorite ? (
                                    <FiStar className="text-yellow-500" size={16} />
                                  ) : (
                                    <FiStar size={16} />
                                  )}
                                </button>
                                
                                <button
                                  onClick={() => startEdit(todo)}
                                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                  <FiEdit size={16} />
                                </button>
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <h3 className={`font-medium mb-2 ${todo.completed ? 'line-through' : ''}`}>
                                {todo.text}
                              </h3>
                              
                              {todo.notes && (
                                <p className="text-sm opacity-75 line-clamp-2 bg-gray-100 dark:bg-gray-700/50 p-2 rounded-lg">
                                  {todo.notes}
                                </p>
                              )}
                            </div>
                            
                            <div className="space-y-2 mb-4 text-sm">
                              <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${priorityInfo.bg}`}>
                                {priorityInfo.icon}
                                <span className="capitalize">{todo.priority} priority</span>
                              </div>
                              
                              {todo.dueDate && (
                                <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${isOverdue(todo.dueDate) && !todo.completed ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700/50'}`}>
                                  <FiCalendar size={14} />
                                  <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
                                </div>
                              )}
                              
                              {todo.category && (
                                <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${categoryInfo.bg}`}>
                                  {categoryInfo.icon}
                                  <span>{todo.category}</span>
                                </div>
                              )}

                              {todo.estimatedTime > 0 && (
                                <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
                                  <FiClock size={14} />
                                  <span>{todo.estimatedTime}m estimate</span>
                                </div>
                              )}

                              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50">
                                <FiZap size={14} />
                                <span>Energy: {todo.energyRequired}/5</span>
                              </div>
                            </div>
                            
                            {todo.subtasks && todo.subtasks.length > 0 && (
                              <div className="mb-4">
                                <div className="text-xs font-medium mb-1 uppercase tracking-wide">
                                  Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${(todo.subtasks.filter(st => st.completed).length / todo.subtasks.length) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}
                            
                            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                              <div>
                                {new Date(todo.date).toLocaleDateString()}
                              </div>
                              
                              {todo.isPrivate && (
                                <div className="flex items-center gap-1">
                                  <FiLock size={12} className="text-blue-500" />
                                  <span>Private</span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                )
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`rounded-2xl p-8 text-center ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
                >
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold mb-2">No todos found</h3>
                  <p className="opacity-75 mb-6">Try changing your search or add a new todo</p>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className={`px-5 py-3 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
                  >
                    Add Your First Todo
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Add Todo Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`rounded-2xl p-6 w-full max-w-2xl ${currentTheme.card} backdrop-blur-sm bg-opacity-95 max-h-[90vh] overflow-y-auto`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{editId ? 'Edit Todo' : 'Add New Todo'}</h2>
                  <button onClick={editId ? cancelEdit : () => setIsFormOpen(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    <FiX />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Task Description *</label>
                    <textarea
                      value={editId ? editValue : inputValue}
                      onChange={(e) => editId ? setEditValue(e.target.value) : setInputValue(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
                      placeholder="What needs to be done?"
                      rows={2}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium">Priority</label>
                      <div className="relative">
                        <select
                          value={priority}
                          onChange={(e) => setPriority(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
                        >
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                          <FiChevronDown />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-2 font-medium">Category</label>
                      <div className="relative">
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
                        >
                          <option value="">Select Category</option>
                          {categories.map(category => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                          <FiChevronDown />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium">Tag</label>
                      <div className="relative">
                        <select
                          value={selectedTag}
                          onChange={(e) => setSelectedTag(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
                        >
                          <option value="">Select Tag</option>
                          {tags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                          <FiChevronDown />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-2 font-medium">Due Date</label>
                      <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Notes</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
                      placeholder="Additional notes..."
                      rows={3}
                    />
                  </div>

                  {/* Advanced Options Toggle */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {showAdvancedOptions ? <FiChevronUp /> : <FiChevronDown />}
                      <span>Advanced Options</span>
                    </button>
                  </div>

                  {/* Advanced Options */}
                  <AnimatePresence>
                    {showAdvancedOptions && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block mb-2 font-medium">Set Reminder</label>
                            <input
                              type="time"
                              value={reminderTime}
                              onChange={(e) => setReminderTime(e.target.value)}
                              className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
                            />
                          </div>
                          
                          <div>
                            <label className="block mb-2 font-medium">Recurring Task</label>
                            <div className="relative">
                              <select
                                value={recurring}
                                onChange={(e) => setRecurring(e.target.value)}
                                className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
                              >
                                <option value="none">No Recurrence</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                                <FiChevronDown />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block mb-2 font-medium">Time Estimate (minutes)</label>
                            <input
                              type="number"
                              value={timeEstimate}
                              onChange={(e) => setTimeEstimate(parseInt(e.target.value) || 0)}
                              className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
                              placeholder="Estimated time to complete"
                              min="0"
                            />
                          </div>

                          <div>
                            <label className="block mb-2 font-medium">Energy Required (1-5)</label>
                            <div className="flex items-center gap-2">
                              {[1, 2, 3, 4, 5].map(level => (
                                <button
                                  key={level}
                                  type="button"
                                  onClick={() => setEnergyLevel(level)}
                                  className={`p-2 rounded-full ${energyLevel === level ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
                                >
                                  {level}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">
                            <input
                              type="checkbox"
                              checked={isPrivate}
                              onChange={() => setIsPrivate(!isPrivate)}
                              className="rounded text-blue-500 focus:ring-blue-500"
                            />
                            <span>Private Task</span>
                          </label>
                          
                          <label className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50">
                            <input
                              type="checkbox"
                              checked={isFavorite}
                              onChange={() => setIsFavorite(!isFavorite)}
                              className="rounded text-blue-500 focus:ring-blue-500"
                            />
                            <span>Favorite</span>
                          </label>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      onClick={editId ? cancelEdit : () => setIsFormOpen(false)}
                      className={`px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
                    >
                      Cancel
                    </button>
                    
                    <button
                      onClick={editId ? updateTodo : addTodo}
                      className={`px-4 py-2 rounded-xl transition-all ${currentTheme.button} shadow-md hover:shadow-lg`}
                    >
                      {editId ? 'Update' : 'Add'} Todo
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`rounded-2xl p-6 w-full max-w-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Settings</h2>
                  <button onClick={() => setShowSettings(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    <FiX />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Theme</label>
                    <div className="relative">
                      <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border appearance-none transition-all ${currentTheme.input}`}
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                        <FiChevronDown />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={soundEnabled}
                        onChange={() => setSoundEnabled(!soundEnabled)}
                        className="rounded text-blue-500 focus:ring-blue-500"
                      />
                      <span>Enable Sounds</span>
                    </label>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium mb-2">Data Management</h3>
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
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
                      >
                        <FiDownload />
                        <span>Export</span>
                      </button>
                      
                      <button
                        onClick={clearCompleted}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border transition-all ${currentTheme.input} hover:shadow-md`}
                      >
                        <FiTrash2 />
                        <span>Clear Completed</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Todo Button */}
        {!isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-6 right-6"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className={`p-5 rounded-full shadow-xl text-white text-xl transition-all ${currentTheme.button} hover:scale-110`}
            >
              <FiPlus />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HomePage;