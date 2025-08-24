// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// import { 
//   FiPlus, FiTrash2, FiEdit, FiCheck, FiSun, FiMoon, 
//   FiFlag, FiCalendar, FiClock, FiSearch, FiFilter,
//   FiChevronDown, FiChevronUp, FiStar, FiArchive, FiRefreshCw,
//   FiGrid, FiList, FiEye, FiEyeOff, FiLock, FiUnlock, FiAward,
//   FiBell, FiBellOff, FiShare2, FiDownload, FiUpload, FiHeart,
//   FiBarChart2, FiPieChart, FiTrendingUp, FiSettings, FiUser,
//   FiBookmark, FiTag, FiLayers, FiBox, FiDatabase, FiCoffee
// } from 'react-icons/fi';
// import { 
//   FaRegCircle, FaCircle, FaFire, FaWater, FaLeaf, 
//   FaMountain, FaSun, FaMoon, FaCloud, FaRegStar,
//   FaStar, FaRegHeart, FaHeart, FaCrown, FaRocket,
//   FaMagic, FaPalette, FaRegClock, FaBusinessTime
// } from 'react-icons/fa';
// import { 
//   IoIosAlarm, IoIosTimer, IoIosCalendar, IoIosStats,
//   IoIosFitness, IoIosSchool, IoIosHome, IoIosCart,
//   IoIosRestaurant, IoIosCar, IoIosAirplane, IoIosCash,
//   IoIosCard, IoIosMedical, IoIosFitness as IoIosFitness2
// } from 'react-icons/io';
// import { 
//   GiAchievement, GiCardPickup, GiCrystalBars,
//   GiStoneBlock, GiSpiralShell, GiAbstract024
// } from 'react-icons/gi';
// import { MdWork } from 'react-icons/md';

// const HomePage = () => {
//   // State management
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState('');
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('date');
//   const [theme, setTheme] = useState('dark');
//   const [showSortOptions, setShowSortOptions] = useState(false);
//   const [tags, setTags] = useState([
//     'work', 'personal', 'urgent', 'shopping', 'health', 
//     'finance', 'education', 'travel', 'home', 'food',
//     'fitness', 'career', 'ideas', 'goals', 'errands'
//   ]);
//   const [selectedTag, setSelectedTag] = useState('');
//   const [priority, setPriority] = useState('medium');
//   const [dueDate, setDueDate] = useState('');
//   const [reminder, setReminder] = useState('');
//   const [notes, setNotes] = useState('');
//   const [viewMode, setViewMode] = useState('list');
//   const [showCompleted, setShowCompleted] = useState(true);
//   const [categories, setCategories] = useState([
//     { id: 1, name: 'Personal', color: 'blue', icon: <FiUser /> },
//     { id: 2, name: 'Work', color: 'green', icon: <MdWork /> },
//     { id: 3, name: 'Health', color: 'red', icon: <IoIosFitness /> },
//     { id: 4, name: 'Education', color: 'purple', icon: <IoIosSchool /> },
//     { id: 5, name: 'Finance', color: 'orange', icon: <IoIosCash /> }
//   ]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
//   const [isPrivate, setIsPrivate] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showArchived, setShowArchived] = useState(false);
//   const [showStats, setShowStats] = useState(false);
//   const [productivityScore, setProductivityScore] = useState(0);
//   const [streak, setStreak] = useState(0);
//   const [achievements, setAchievements] = useState([]);
//   const [showAchievements, setShowAchievements] = useState(false);
//   const [pomodoroTimer, setPomodoroTimer] = useState(0);
//   const [isPomodoroActive, setIsPomodoroActive] = useState(false);
//   const [pomodoroMode, setPomodoroMode] = useState('work');
//   const [pomodoroCycles, setPomodoroCycles] = useState(0);
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
//   const [showTutorial, setShowTutorial] = useState(false);
//   const [watermark, setWatermark] = useState(false);
//   const [customBackground, setCustomBackground] = useState('');
//   const [fontSize, setFontSize] = useState('normal');
//   const [density, setDensity] = useState('comfortable');
//   const [showImportExport, setShowImportExport] = useState(false);
//   const [importData, setImportData] = useState('');

//   // Initialize with sample todos
//   useEffect(() => {
//     const sampleTodos = [
//       {
//         id: 1,
//         text: 'Welcome to your advanced todo app',
//         completed: false,
//         priority: 'high',
//         date: new Date(),
//         tag: 'work',
//         dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
//         reminder: new Date(Date.now() + 43200000).toISOString(),
//         notes: 'This is a sample todo to get you started',
//         category: 'Work',
//         isPrivate: false,
//         isFavorite: true,
//         isArchived: false,
//         timeSpent: 0,
//         estimatedTime: 30,
//         subtasks: [
//           { id: 1, text: 'Explore features', completed: true },
//           { id: 2, text: 'Customize settings', completed: false }
//         ]
//       },
//       {
//         id: 2,
//         text: 'Click on the + button to add a new todo',
//         completed: false,
//         priority: 'medium',
//         date: new Date(),
//         tag: 'personal',
//         dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
//         reminder: '',
//         notes: '',
//         category: 'Personal',
//         isPrivate: false,
//         isFavorite: false,
//         isArchived: false,
//         timeSpent: 0,
//         estimatedTime: 15,
//         subtasks: []
//       },
//       {
//         id: 3,
//         text: 'Try changing themes using the theme switcher',
//         completed: true,
//         priority: 'low',
//         date: new Date(),
//         tag: 'urgent',
//         dueDate: new Date(Date.now() - 86400000).toISOString().split('T')[0],
//         reminder: '',
//         notes: 'Themes can significantly change the look and feel of the app',
//         category: 'Personal',
//         isPrivate: false,
//         isFavorite: false,
//         isArchived: false,
//         timeSpent: 45,
//         estimatedTime: 30,
//         subtasks: []
//       },
//       {
//         id: 4,
//         text: 'Complete project proposal',
//         completed: false,
//         priority: 'high',
//         date: new Date(),
//         tag: 'work',
//         dueDate: new Date(Date.now() + 259200000).toISOString().split('T')[0],
//         reminder: new Date(Date.now() + 216000000).toISOString(),
//         notes: 'Make sure to include budget and timeline estimates',
//         category: 'Work',
//         isPrivate: true,
//         isFavorite: true,
//         isArchived: false,
//         timeSpent: 120,
//         estimatedTime: 180,
//         subtasks: [
//           { id: 1, text: 'Research competitors', completed: true },
//           { id: 2, text: 'Draft initial proposal', completed: true },
//           { id: 3, text: 'Create budget', completed: false },
//           { id: 4, text: 'Review with team', completed: false }
//         ]
//       },
//       {
//         id: 5,
//         text: 'Buy groceries for the week',
//         completed: false,
//         priority: 'medium',
//         date: new Date(),
//         tag: 'shopping',
//         dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
//         reminder: new Date(Date.now() + 43200000).toISOString(),
//         notes: 'Milk, eggs, bread, fruits, vegetables, chicken',
//         category: 'Home',
//         isPrivate: false,
//         isFavorite: false,
//         isArchived: false,
//         timeSpent: 0,
//         estimatedTime: 60,
//         subtasks: [
//           { id: 1, text: 'Check pantry', completed: true },
//           { id: 2, text: 'Make shopping list', completed: true },
//           { id: 3, text: 'Go to store', completed: false }
//         ]
//       }
//     ];
//     setTodos(sampleTodos);
    
//     // Calculate initial productivity score
//     calculateProductivityScore(sampleTodos);
    
//     // Check for achievements
//     checkAchievements(sampleTodos);
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
      
//       // Deduct points for overdue tasks
//       score -= overdueTodos * 5;
      
//       // Add points for tasks completed before due date
//       const earlyCompleted = todosArray.filter(todo => 
//         todo.completed && todo.dueDate && new Date(todo.dueDate) > new Date()
//       ).length;
      
//       score += earlyCompleted * 2;
      
//       // Ensure score is between 0 and 100
//       score = Math.max(0, Math.min(100, score));
//     }
    
//     setProductivityScore(score);
//   }, []);

//   // Check for achievements
//   const checkAchievements = useCallback((todosArray) => {
//     const newAchievements = [];
    
//     // First Todo achievement
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
    
//     // Completionist achievement
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
    
//     // Productivity master achievement
//     if (productivityScore >= 80) {
//       newAchievements.push({
//         id: 3,
//         name: 'Productivity Master',
//         description: 'Reached 80% productivity score',
//         icon: <FiTrendingUp />,
//         color: 'bronze',
//         unlocked: true,
//         date: new Date()
//       });
//     }
    
//     // Early bird achievement
//     const earlyCompleted = todosArray.filter(todo => 
//       todo.completed && todo.dueDate && new Date(todo.dueDate) > new Date()
//     ).length;
    
//     if (earlyCompleted >= 3) {
//       newAchievements.push({
//         id: 4,
//         name: 'Early Bird',
//         description: 'Completed 3 tasks before their due date',
//         icon: <FiClock />,
//         color: 'blue',
//         unlocked: true,
//         date: new Date()
//       });
//     }
    
//     setAchievements(newAchievements);
//   }, [productivityScore]);

//   // Theme classes
//   const themes = {
//     light: {
//       bg: 'bg-gradient-to-br from-blue-50 to-indigo-100',
//       card: 'bg-white shadow-lg',
//       text: 'text-gray-800',
//       input: 'bg-white border-gray-300 text-gray-800',
//       button: 'bg-blue-500 hover:bg-blue-600 text-white',
//       accent: 'text-blue-500',
//       header: 'from-blue-500 to-indigo-600',
//       stats: 'from-blue-400 to-indigo-500'
//     },
//     dark: {
//       bg: 'bg-gradient-to-br from-gray-800 to-gray-900',
//       card: 'bg-gray-800 shadow-xl',
//       text: 'text-gray-100',
//       input: 'bg-gray-700 border-gray-600 text-gray-100',
//       button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
//       accent: 'text-indigo-400',
//       header: 'from-gray-800 to-gray-900',
//       stats: 'from-indigo-600 to-purple-700'
//     },
//     nature: {
//       bg: 'bg-gradient-to-br from-green-50 to-teal-100',
//       card: 'bg-white shadow-lg',
//       text: 'text-gray-800',
//       input: 'bg-white border-gray-300 text-gray-800',
//       button: 'bg-green-500 hover:bg-green-600 text-white',
//       accent: 'text-green-500',
//       header: 'from-green-500 to-teal-600',
//       stats: 'from-green-400 to-teal-500'
//     },
//     ocean: {
//       bg: 'bg-gradient-to-br from-blue-50 to-cyan-100',
//       card: 'bg-white shadow-lg',
//       text: 'text-gray-800',
//       input: 'bg-white border-gray-300 text-gray-800',
//       button: 'bg-cyan-500 hover:bg-cyan-600 text-white',
//       accent: 'text-cyan-500',
//       header: 'from-blue-500 to-cyan-600',
//       stats: 'from-blue-400 to-cyan-500'
//     },
//     sunset: {
//       bg: 'bg-gradient-to-br from-orange-50 to-pink-100',
//       card: 'bg-white shadow-lg',
//       text: 'text-gray-800',
//       input: 'bg-white border-gray-300 text-gray-800',
//       button: 'bg-orange-500 hover:bg-orange-600 text-white',
//       accent: 'text-orange-500',
//       header: 'from-orange-500 to-pink-600',
//       stats: 'from-orange-400 to-pink-500'
//     },
//     night: {
//       bg: 'bg-gradient-to-br from-indigo-900 to-purple-900',
//       card: 'bg-gray-800 shadow-xl',
//       text: 'text-gray-100',
//       input: 'bg-gray-700 border-gray-600 text-gray-100',
//       button: 'bg-purple-600 hover:bg-purple-700 text-white',
//       accent: 'text-purple-400',
//       header: 'from-indigo-900 to-purple-900',
//       stats: 'from-purple-600 to-indigo-700'
//     },
//     coffee: {
//       bg: 'bg-gradient-to-br from-amber-50 to-brown-100',
//       card: 'bg-white shadow-lg',
//       text: 'text-gray-800',
//       input: 'bg-white border-gray-300 text-gray-800',
//       button: 'bg-amber-600 hover:bg-amber-700 text-white',
//       accent: 'text-amber-500',
//       header: 'from-amber-600 to-brown-700',
//       stats: 'from-amber-500 to-brown-600'
//     },
//     galaxy: {
//       bg: 'bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900',
//       card: 'bg-gray-900 shadow-xl',
//       text: 'text-gray-100',
//       input: 'bg-gray-800 border-gray-700 text-gray-100',
//       button: 'bg-indigo-700 hover:bg-indigo-800 text-white',
//       accent: 'text-indigo-400',
//       header: 'from-purple-900 to-blue-900',
//       stats: 'from-indigo-700 to-purple-800'
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
//         reminder,
//         notes,
//         category: selectedCategory,
//         isPrivate,
//         isFavorite,
//         isArchived: false,
//         timeSpent: 0,
//         estimatedTime: parseInt(pomodoroTimer) || 0,
//         subtasks: []
//       };
//       setTodos([newTodo, ...todos]);
//       setInputValue('');
//       setPriority('medium');
//       setSelectedTag('');
//       setDueDate('');
//       setReminder('');
//       setNotes('');
//       setSelectedCategory('');
//       setIsPrivate(false);
//       setIsFavorite(false);
//       setPomodoroTimer(0);
//       setIsFormOpen(false);
      
//       // Recalculate productivity score
//       calculateProductivityScore([newTodo, ...todos]);
      
//       // Check for new achievements
//       checkAchievements([newTodo, ...todos]);
//     }
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
//             reminder,
//             notes,
//             category: selectedCategory,
//             isPrivate,
//             isFavorite
//           }
//           : todo
//       );
//       setTodos(updatedTodos);
//       setEditId(null);
//       setEditValue('');
//       setPriority('medium');
//       setSelectedTag('');
//       setDueDate('');
//       setReminder('');
//       setNotes('');
//       setSelectedCategory('');
//       setIsPrivate(false);
//       setIsFavorite(false);
      
//       // Recalculate productivity score
//       calculateProductivityScore(updatedTodos);
      
//       // Check for new achievements
//       checkAchievements(updatedTodos);
//     }
//   };

//   // Delete a todo
//   const deleteTodo = id => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
    
//     // Recalculate productivity score
//     calculateProductivityScore(updatedTodos);
//   };

//   // Toggle completion status
//   const toggleComplete = id => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
    
//     // Recalculate productivity score
//     calculateProductivityScore(updatedTodos);
    
//     // Check for new achievements
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
//     setReminder(todo.reminder || '');
//     setNotes(todo.notes || '');
//     setSelectedCategory(todo.category || '');
//     setIsPrivate(todo.isPrivate || false);
//     setIsFavorite(todo.isFavorite || false);
//     setIsFormOpen(true);
//   };

//   // Cancel editing
//   const cancelEdit = () => {
//     setEditId(null);
//     setEditValue('');
//     setPriority('medium');
//     setSelectedTag('');
//     setDueDate('');
//     setReminder('');
//     setNotes('');
//     setSelectedCategory('');
//     setIsPrivate(false);
//     setIsFavorite(false);
//   };

//   // Clear all completed todos
//   const clearCompleted = () => {
//     const updatedTodos = todos.filter(todo => !todo.completed);
//     setTodos(updatedTodos);
    
//     // Recalculate productivity score
//     calculateProductivityScore(updatedTodos);
//   };

//   // Archive all completed todos
//   const archiveCompleted = () => {
//     const updatedTodos = todos.map(todo =>
//       todo.completed ? { ...todo, isArchived: true } : todo
//     );
//     setTodos(updatedTodos);
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

//   // Start Pomodoro timer
//   const startPomodoro = (minutes) => {
//     setPomodoroTimer(minutes * 60);
//     setIsPomodoroActive(true);
//     setPomodoroMode('work');
//   };

//   // Filter todos based on filter and search query
//   const filteredTodos = todos
//     .filter(todo => {
//       if (filter === 'active') return !todo.completed && !todo.isArchived;
//       if (filter === 'completed') return todo.completed && !todo.isArchived;
//       if (filter === 'overdue') {
//         if (!todo.dueDate) return false;
//         return new Date(todo.dueDate) < new Date() && !todo.completed && !todo.isArchived;
//       }
//       if (filter === 'favorites') return todo.isFavorite && !todo.isArchived;
//       if (filter === 'private') return todo.isPrivate && !todo.isArchived;
//       if (filter === 'archived') return todo.isArchived;
//       if (filter === 'with-subtasks') return todo.subtasks.length > 0 && !todo.isArchived;
//       return !todo.isArchived;
//     })
//     .filter(todo =>
//       todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       todo.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
//       if (sortBy === 'alphabetical') {
//         return a.text.localeCompare(b.text);
//       }
//       if (sortBy === 'category') {
//         if (!a.category) return 1;
//         if (!b.category) return -1;
//         return a.category.localeCompare(b.category);
//       }
//       if (sortBy === 'time-estimate') {
//         return (b.estimatedTime || 0) - (a.estimatedTime || 0);
//       }
//       return 0;
//     });

//   // Get priority icon and color
//   const getPriorityIcon = (priority) => {
//     switch (priority) {
//       case 'high':
//         return { icon: <FaFire className="text-red-500" />, color: 'red', bg: 'bg-red-100 dark:bg-red-900/30' };
//       case 'medium':
//         return { icon: <FaWater className="text-blue-500" />, color: 'blue', bg: 'bg-blue-100 dark:bg-blue-900/30' };
//       case 'low':
//         return { icon: <FaLeaf className="text-green-500" />, color: 'green', bg: 'bg-green-100 dark:bg-green-900/30' };
//       default:
//         return { icon: <FaCircle className="text-gray-500" />, color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/30' };
//     }
//   };

//   // Get category icon and color
//   const getCategoryIcon = (categoryName) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     if (category) {
//       return {
//         icon: category.icon,
//         color: category.color,
//         bg: `bg-${category.color}-100 dark:bg-${category.color}-900/30`
//       };
//     }
//     return { icon: <FiBox />, color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/30' };
//   };

//   // Get theme icon
//   const getThemeIcon = () => {
//     switch (theme) {
//       case 'light': return <FiSun />;
//       case 'dark': return <FiMoon />;
//       case 'nature': return <FaLeaf />;
//       case 'ocean': return <FaWater />;
//       case 'sunset': return <FaSun />;
//       case 'night': return <FaMoon />;
//       case 'coffee': return <FiCoffee />;
//       case 'galaxy': return <GiAbstract024 />;
//       default: return <FiSun />;
//     }
//   };

//   // Check if a due date is overdue
//   const isOverdue = (dueDate) => {
//     if (!dueDate) return false;
//     return new Date(dueDate) < new Date() && dueDate !== '';
//   };

//   // Export todos to JSON
//   const exportTodos = () => {
//     const dataStr = JSON.stringify(todos);
//     const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
//     const exportFileDefaultName = 'todos.json';
    
//     const linkElement = document.createElement('a');
//     linkElement.setAttribute('href', dataUri);
//     linkElement.setAttribute('download', exportFileDefaultName);
//     linkElement.click();
//   };

//   // Import todos from JSON
//   const importTodos = () => {
//     try {
//       const parsedData = JSON.parse(importData);
//       if (Array.isArray(parsedData)) {
//         setTodos(parsedData);
//         setImportData('');
//         setShowImportExport(false);
//       }
//     } catch (error) {
//       alert('Invalid JSON format');
//     }
//   };

//   // Calculate stats
//   const calculateStats = () => {
//     const total = todos.length;
//     const completed = todos.filter(t => t.completed).length;
//     const active = total - completed;
//     const overdue = todos.filter(t => isOverdue(t.dueDate) && !t.completed).length;
//     const withSubtasks = todos.filter(t => t.subtasks.length > 0).length;
//     const favorites = todos.filter(t => t.isFavorite).length;
//     const privateCount = todos.filter(t => t.isPrivate).length;
//     const archived = todos.filter(t => t.isArchived).length;
    
//     return {
//       total,
//       completed,
//       active,
//       overdue,
//       withSubtasks,
//       favorites,
//       privateCount,
//       archived,
//       completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
//     };
//   };

//   const stats = calculateStats();

//   return (
//     <div className={`min-h-screen py-8 px-4 transition-colors duration-300 ${currentTheme.bg} ${currentTheme.text}`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.header 
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className={`rounded-2xl p-6 mb-8 bg-gradient-to-r ${currentTheme.header} text-white shadow-xl`}
//         >
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
//                 <FiList className="text-2xl" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold">Advanced Todo</h1>
//                 <p className="opacity-90">Stay organized and boost your productivity</p>
//               </div>
//             </div>
            
//             <div className="flex flex-wrap gap-2">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setShowStats(!showStats)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30"
//               >
//                 <IoIosStats />
//                 <span>Stats</span>
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setShowAchievements(!showAchievements)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30"
//               >
//                 <GiAchievement />
//                 <span>Achievements</span>
//                 {achievements.length > 0 && (
//                   <span className="bg-yellow-500 text-yellow-900 text-xs px-2 py-1 rounded-full">
//                     {achievements.length}
//                   </span>
//                 )}
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setShowImportExport(!showImportExport)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30"
//               >
//                 <FiDatabase />
//                 <span>Data</span>
//               </motion.button>
              
//               <div className="relative">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setTheme(
//                     theme === 'dark' ? 'light' : 
//                     theme === 'light' ? 'nature' : 
//                     theme === 'nature' ? 'ocean' :
//                     theme === 'ocean' ? 'sunset' :
//                     theme === 'sunset' ? 'night' :
//                     theme === 'night' ? 'coffee' :
//                     theme === 'coffee' ? 'galaxy' : 'dark'
//                   )}
//                   className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30"
//                 >
//                   {getThemeIcon()}
//                   <span className="capitalize">{theme}</span>
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.header>

//         {/* Stats Overview */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className={`rounded-2xl p-6 mb-8 shadow-lg ${currentTheme.card}`}
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
//             <div className={`text-center p-4 rounded-xl bg-gradient-to-br ${currentTheme.stats} text-white`}>
//               <div className="text-2xl font-bold">{stats.total}</div>
//               <div className="text-sm opacity-90">Total</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
//               <div className="text-2xl font-bold text-green-500">{stats.completed}</div>
//               <div className="text-sm opacity-75">Completed</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
//               <div className="text-2xl font-bold text-blue-500">{stats.active}</div>
//               <div className="text-sm opacity-75">Active</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
//               <div className="text-2xl font-bold text-red-500">{stats.overdue}</div>
//               <div className="text-sm opacity-75">Overdue</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
//               <div className="text-2xl font-bold">{stats.favorites}</div>
//               <div className="text-sm opacity-75">Favorites</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
//               <div className="text-2xl font-bold">{stats.withSubtasks}</div>
//               <div className="text-sm opacity-75">With Subtasks</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
//               <div className="text-2xl font-bold">{stats.privateCount}</div>
//               <div className="text-sm opacity-75">Private</div>
//             </div>
//             <div className="text-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
//               <div className="text-2xl font-bold">{stats.archived}</div>
//               <div className="text-sm opacity-75">Archived</div>
//             </div>
//           </div>
          
//           {/* Productivity Score */}
//           <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
//             <div className="flex items-center justify-between mb-2">
//               <div className="font-semibold">Productivity Score</div>
//               <div className="font-bold">{productivityScore}%</div>
//             </div>
//             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
//               <div 
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500 ease-out"
//                 style={{ width: `${productivityScore}%` }}
//               ></div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Search and Filter Section */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className={`rounded-2xl p-6 mb-8 shadow-lg ${currentTheme.card}`}
//         >
//           <div className="flex flex-col lg:flex-row gap-6">
//             <div className="flex-1">
//               <div className="relative">
//                 <FiSearch className="absolute left-3 top-3 opacity-50" />
//                 <input
//                   type="text"
//                   placeholder="Search todos..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className={`w-full pl-10 pr-4 py-3 rounded-xl border ${currentTheme.input}`}
//                 />
//               </div>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <div className="flex gap-2">
//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className={`px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                 >
//                   <option value="all">All Tasks</option>
//                   <option value="active">Active</option>
//                   <option value="completed">Completed</option>
//                   <option value="overdue">Overdue</option>
//                   <option value="favorites">Favorites</option>
//                   <option value="private">Private</option>
//                   <option value="with-subtasks">With Subtasks</option>
//                   <option value="archived">Archived</option>
//                 </select>
                
//                 <div className="relative">
//                   <button
//                     onClick={() => setShowSortOptions(!showSortOptions)}
//                     className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                   >
//                     <FiFilter />
//                     <span>Sort</span>
//                     {showSortOptions ? <FiChevronUp /> : <FiChevronDown />}
//                   </button>
                  
//                   {showSortOptions && (
//                     <div className={`absolute right-0 mt-2 py-2 w-48 rounded-xl shadow-lg z-10 ${currentTheme.card} border ${currentTheme.input}`}>
//                       <button
//                         onClick={() => { setSortBy('date'); setShowSortOptions(false); }}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                       >
//                         By Date (Newest)
//                       </button>
//                       <button
//                         onClick={() => { setSortBy('priority'); setShowSortOptions(false); }}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                       >
//                         By Priority
//                       </button>
//                       <button
//                         onClick={() => { setSortBy('dueDate'); setShowSortOptions(false); }}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                       >
//                         By Due Date
//                       </button>
//                       <button
//                         onClick={() => { setSortBy('alphabetical'); setShowSortOptions(false); }}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                       >
//                         Alphabetical
//                       </button>
//                       <button
//                         onClick={() => { setSortBy('category'); setShowSortOptions(false); }}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                       >
//                         By Category
//                       </button>
//                       <button
//                         onClick={() => { setSortBy('time-estimate'); setShowSortOptions(false); }}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                       >
//                         By Time Estimate
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
              
//               <div className="flex gap-2">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
//                   className={`p-3 rounded-xl border ${currentTheme.input}`}
//                 >
//                   {viewMode === 'list' ? <FiGrid /> : <FiList />}
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={clearCompleted}
//                   className={`flex items-center gap-2 px-4 py-3 rounded-xl ${currentTheme.button}`}
//                 >
//                   <FiRefreshCw size={16} />
//                   <span className="hidden sm:inline">Clear Completed</span>
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={archiveCompleted}
//                   className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                 >
//                   <FiArchive size={16} />
//                 </motion.button>
//               </div>
//             </div>
//           </div>
          
//           {/* Advanced Filters */}
//           <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
//             <div className="flex flex-wrap gap-4">
//               <div>
//                 <label className="block mb-1 text-sm">Category</label>
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className={`px-3 py-2 rounded-lg border ${currentTheme.input}`}
//                 >
//                   <option value="">All Categories</option>
//                   {categories.map(category => (
//                     <option key={category.id} value={category.name}>{category.name}</option>
//                   ))}
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm">Priority</label>
//                 <select
//                   value={priority}
//                   onChange={(e) => setPriority(e.target.value)}
//                   className={`px-3 py-2 rounded-lg border ${currentTheme.input}`}
//                 >
//                   <option value="">All Priorities</option>
//                   <option value="high">High</option>
//                   <option value="medium">Medium</option>
//                   <option value="low">Low</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm">Tag</label>
//                 <select
//                   value={selectedTag}
//                   onChange={(e) => setSelectedTag(e.target.value)}
//                   className={`px-3 py-2 rounded-lg border ${currentTheme.input}`}
//                 >
//                   <option value="">All Tags</option>
//                   {tags.map(tag => (
//                     <option key={tag} value={tag}>{tag}</option>
//                   ))}
//                 </select>
//               </div>
              
//               <div className="flex items-end">
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={showCompleted}
//                     onChange={() => setShowCompleted(!showCompleted)}
//                     className="rounded"
//                   />
//                   <span className="text-sm">Show Completed</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Stats Panel */}
//         {showStats && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className={`rounded-2xl p-6 mb-8 shadow-lg ${currentTheme.card}`}
//           >
//             <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//               <IoIosStats />
//               <span>Detailed Statistics</span>
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="font-medium mb-4">Completion Rate</h3>
//                 <div className="relative w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full">
//                   <div 
//                     className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
//                     style={{ width: `${stats.completionRate}%` }}
//                   ></div>
//                 </div>
//                 <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                   {stats.completionRate}% of tasks completed
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="font-medium mb-4">Priority Distribution</h3>
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <span className="flex items-center gap-2">
//                       <FaFire className="text-red-500" />
//                       <span>High</span>
//                     </span>
//                     <span>{todos.filter(t => t.priority === 'high').length}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="flex items-center gap-2">
//                       <FaWater className="text-blue-500" />
//                       <span>Medium</span>
//                     </span>
//                     <span>{todos.filter(t => t.priority === 'medium').length}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="flex items-center gap-2">
//                       <FaLeaf className="text-green-500" />
//                       <span>Low</span>
//                     </span>
//                     <span>{todos.filter(t => t.priority === 'low').length}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="font-medium mb-4">Category Distribution</h3>
//                 <div className="space-y-2">
//                   {categories.map(category => (
//                     <div key={category.id} className="flex items-center justify-between">
//                       <span className="flex items-center gap-2">
//                         <span className={`text-${category.color}-500`}>{category.icon}</span>
//                         <span>{category.name}</span>
//                       </span>
//                       <span>{todos.filter(t => t.category === category.name).length}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="font-medium mb-4">Time Tracking</h3>
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <span>Total Time Estimated</span>
//                     <span>{todos.reduce((acc, todo) => acc + (todo.estimatedTime || 0), 0)} min</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span>Total Time Spent</span>
//                     <span>{todos.reduce((acc, todo) => acc + (todo.timeSpent || 0), 0)} min</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span>Average per Task</span>
//                     <span>{todos.length > 0 ? Math.round(todos.reduce((acc, todo) => acc + (todo.timeSpent || 0), 0) / todos.length) : 0} min</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Achievements Panel */}
//         {showAchievements && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className={`rounded-2xl p-6 mb-8 shadow-lg ${currentTheme.card}`}
//           >
//             <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//               <GiAchievement />
//               <span>Achievements</span>
//             </h2>
            
//             {achievements.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {achievements.map(achievement => (
//                   <div key={achievement.id} className={`p-4 rounded-xl border-l-4 border-${achievement.color}-500 bg-${achievement.color}-50 dark:bg-${achievement.color}-900/20`}>
//                     <div className="flex items-start gap-3">
//                       <div className={`text-${achievement.color}-500 text-xl`}>
//                         {achievement.icon}
//                       </div>
//                       <div>
//                         <h3 className="font-semibold">{achievement.name}</h3>
//                         <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
//                         <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                           Unlocked on {new Date(achievement.date).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-8">
//                 <GiAchievement className="text-4xl mx-auto text-gray-400 mb-4" />
//                 <p className="text-gray-500 dark:text-gray-400">No achievements yet. Complete tasks to unlock achievements!</p>
//               </div>
//             )}
            
//             <div className="mt-8">
//               <h3 className="font-medium mb-4">Potential Achievements</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 opacity-70">
//                   <div className="flex items-center gap-3">
//                     <div className="text-gray-400 text-xl">
//                       <FiStar />
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Task Master</h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Create 10 tasks</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 opacity-70">
//                   <div className="flex items-center gap-3">
//                     <div className="text-gray-400 text-xl">
//                       <FaRocket />
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Speed Runner</h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Complete 5 tasks in one day</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 opacity-70">
//                   <div className="flex items-center gap-3">
//                     <div className="text-gray-400 text-xl">
//                       <FaCrown />
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Consistency King</h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Use the app for 7 consecutive days</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 opacity-70">
//                   <div className="flex items-center gap-3">
//                     <div className="text-gray-400 text-xl">
//                       <GiCardPickup />
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Organizer</h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Use all 5 categories</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Import/Export Panel */}
//         {showImportExport && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className={`rounded-2xl p-6 mb-8 shadow-lg ${currentTheme.card}`}
//           >
//             <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//               <FiDatabase />
//               <span>Data Management</span>
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="font-medium mb-4">Export Data</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                   Export your todos as a JSON file to backup or transfer your data.
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={exportTodos}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg ${currentTheme.button}`}
//                 >
//                   <FiDownload />
//                   <span>Export Todos</span>
//                 </motion.button>
//               </div>
              
//               <div>
//                 <h3 className="font-medium mb-4">Import Data</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                   Import todos from a JSON file. This will replace your current todos.
//                 </p>
//                 <textarea
//                   value={importData}
//                   onChange={(e) => setImportData(e.target.value)}
//                   placeholder="Paste JSON data here"
//                   className={`w-full h-24 px-3 py-2 rounded-lg border ${currentTheme.input} mb-2`}
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={importTodos}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg ${currentTheme.button}`}
//                 >
//                   <FiUpload />
//                   <span>Import Todos</span>
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Add Todo Form */}
//         <AnimatePresence>
//           {isFormOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className={`rounded-2xl p-6 mb-8 shadow-lg ${currentTheme.card}`}
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-semibold">{editId ? 'Edit Todo' : 'Add New Todo'}</h2>
//                 <button
//                   onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
//                   className={`flex items-center gap-2 px-3 py-1 rounded-lg ${currentTheme.input}`}
//                 >
//                   <FiSettings size={16} />
//                   <span>{showAdvancedOptions ? 'Less' : 'More'} Options</span>
//                 </button>
//               </div>
              
//               <div className="space-y-6">
//                 <div>
//                   <label className="block mb-2 font-medium">Task Description</label>
//                   <textarea
//                     value={editId ? editValue : inputValue}
//                     onChange={(e) => editId ? setEditValue(e.target.value) : setInputValue(e.target.value)}
//                     className={`w-full px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                     placeholder="What needs to be done?"
//                     rows={3}
//                   />
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                   <div>
//                     <label className="block mb-2 font-medium">Priority</label>
//                     <select
//                       value={priority}
//                       onChange={(e) => setPriority(e.target.value)}
//                       className={`w-full px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                     >
//                       <option value="high">High</option>
//                       <option value="medium">Medium</option>
//                       <option value="low">Low</option>
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block mb-2 font-medium">Category</label>
//                     <select
//                       value={selectedCategory}
//                       onChange={(e) => setSelectedCategory(e.target.value)}
//                       className={`w-full px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                     >
//                       <option value="">Select Category</option>
//                       {categories.map(category => (
//                         <option key={category.id} value={category.name}>{category.name}</option>
//                       ))}
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block mb-2 font-medium">Tag</label>
//                     <select
//                       value={selectedTag}
//                       onChange={(e) => setSelectedTag(e.target.value)}
//                       className={`w-full px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                     >
//                       <option value="">Select Tag</option>
//                       {tags.map(tag => (
//                         <option key={tag} value={tag}>{tag}</option>
//                       ))}
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block mb-2 font-medium">Due Date</label>
//                     <input
//                       type="date"
//                       value={dueDate}
//                       onChange={(e) => setDueDate(e.target.value)}
//                       className={`w-full px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                     />
//                   </div>
//                 </div>
                
//                 {showAdvancedOptions && (
//                   <>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block mb-2 font-medium">Reminder</label>
//                         <input
//                           type="datetime-local"
//                           value={reminder}
//                           onChange={(e) => setReminder(e.target.value)}
//                           className={`w-full px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                         />
//                       </div>
                      
//                       <div>
//                         <label className="block mb-2 font-medium">Time Estimate (minutes)</label>
//                         <input
//                           type="number"
//                           value={pomodoroTimer}
//                           onChange={(e) => setPomodoroTimer(e.target.value)}
//                           className={`w-full px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                           placeholder="e.g. 30"
//                         />
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block mb-2 font-medium">Notes</label>
//                       <textarea
//                         value={notes}
//                         onChange={(e) => setNotes(e.target.value)}
//                         className={`w-full px-4 py-3 rounded-xl border ${currentTheme.input}`}
//                         placeholder="Additional notes..."
//                         rows={2}
//                       />
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="flex items-center gap-3">
//                         <label className="flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             checked={isPrivate}
//                             onChange={() => setIsPrivate(!isPrivate)}
//                             className="rounded"
//                           />
//                           <span>Private Task</span>
//                         </label>
//                         <FiLock className={isPrivate ? 'text-blue-500' : 'text-gray-400'} />
//                       </div>
                      
//                       <div className="flex items-center gap-3">
//                         <label className="flex items-center gap-2">
//                           <input
//                             type="checkbox"
//                             checked={isFavorite}
//                             onChange={() => setIsFavorite(!isFavorite)}
//                             className="rounded"
//                           />
//                           <span>Mark as Favorite</span>
//                         </label>
//                         {isFavorite ? (
//                           <FaHeart className="text-red-500" />
//                         ) : (
//                           <FaRegHeart className="text-gray-400" />
//                         )}
//                       </div>
//                     </div>
                    
//                     <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
//                       <h3 className="font-medium mb-3">Pomodoro Timer</h3>
//                       <div className="flex gap-2">
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => startPomodoro(25)}
//                           className={`px-4 py-2 rounded-lg ${currentTheme.button}`}
//                         >
//                           25 min Work
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => startPomodoro(5)}
//                           className={`px-4 py-2 rounded-lg border ${currentTheme.input}`}
//                         >
//                           5 min Break
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => startPomodoro(15)}
//                           className={`px-4 py-2 rounded-lg border ${currentTheme.input}`}
//                         >
//                           15 min Break
//                         </motion.button>
//                       </div>
//                     </div>
//                   </>
//                 )}
                
//                 <div className="flex justify-end gap-3">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={editId ? updateTodo : addTodo}
//                     className={`px-6 py-3 rounded-xl ${currentTheme.button}`}
//                   >
//                     {editId ? 'Update' : 'Add'} Todo
//                   </motion.button>
                  
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={editId ? cancelEdit : () => setIsFormOpen(false)}
//                     className={`px-6 py-3 rounded-xl border ${currentTheme.input}`}
//                   >
//                     Cancel
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Pomodoro Timer */}
//         {isPomodoroActive && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`rounded-2xl p-6 mb-8 shadow-lg ${currentTheme.card}`}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold">
//                 {pomodoroMode === 'work' ? 'Work Time' : 'Break Time'}
//               </h3>
//               <div className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
//                 Cycle {pomodoroCycles + 1}
//               </div>
//             </div>
            
//             <div className="text-center">
//               <div className="text-4xl font-bold mb-4">
//                 {Math.floor(pomodoroTimer / 60)}:{(pomodoroTimer % 60).toString().padStart(2, '0')}
//               </div>
              
//               <div className="flex justify-center gap-3">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setIsPomodoroActive(false)}
//                   className={`px-4 py-2 rounded-lg ${currentTheme.button}`}
//                 >
//                   Stop
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setPomodoroTimer(0)}
//                   className={`px-4 py-2 rounded-lg border ${currentTheme.input}`}
//                 >
//                   Skip
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Todo List */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="mb-20"
//         >
//           {filteredTodos.length > 0 ? (
//             viewMode === 'list' ? (
//               <div className="space-y-4">
//                 <AnimatePresence>
//                   {filteredTodos.map(todo => (
//                     <motion.div
//                       key={todo.id}
//                       layout
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className={`rounded-2xl p-5 shadow-lg ${currentTheme.card} ${todo.completed ? 'opacity-70' : ''}`}
//                     >
//                       <div className="flex items-start gap-4">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => toggleComplete(todo.id)}
//                           className={`mt-1 ${todo.completed ? currentTheme.accent : 'text-gray-400'}`}
//                         >
//                           {todo.completed ? <FaCircle /> : <FaRegCircle />}
//                         </motion.button>
                        
//                         <div className="flex-1">
//                           <div className="flex flex-wrap items-center gap-2 mb-3">
//                             <span className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
//                               {todo.text}
//                             </span>
                            
//                             {todo.isPrivate && (
//                               <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 flex items-center gap-1">
//                                 <FiLock size={12} />
//                                 <span>Private</span>
//                               </span>
//                             )}
                            
//                             {todo.isFavorite && (
//                               <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 flex items-center gap-1">
//                                 <FiStar size={12} />
//                                 <span>Favorite</span>
//                               </span>
//                             )}
                            
//                             {todo.tag && (
//                               <span className={`text-xs px-2 py-1 rounded-full ${currentTheme.input} flex items-center gap-1`}>
//                                 <FiTag size={12} />
//                                 <span>{todo.tag}</span>
//                               </span>
//                             )}
                            
//                             {todo.category && (
//                               <span className={`text-xs px-2 py-1 rounded-full ${getCategoryIcon(todo.category).bg} text-${getCategoryIcon(todo.category).color}-800 dark:text-${getCategoryIcon(todo.category).color}-200 flex items-center gap-1`}>
//                                 {getCategoryIcon(todo.category).icon}
//                                 <span>{todo.category}</span>
//                               </span>
//                             )}
//                           </div>
                          
//                           {todo.notes && (
//                             <div className="text-sm opacity-75 mb-3 pl-2 border-l-2 border-gray-300 dark:border-gray-600">
//                               {todo.notes}
//                             </div>
//                           )}
                          
//                           <div className="flex flex-wrap items-center gap-4 text-sm opacity-75">
//                             <div className="flex items-center gap-1">
//                               {getPriorityIcon(todo.priority).icon}
//                               <span className="capitalize">{todo.priority}</span>
//                             </div>
                            
//                             {todo.dueDate && (
//                               <div className={`flex items-center gap-1 ${isOverdue(todo.dueDate) && !todo.completed ? 'text-red-500' : ''}`}>
//                                 <FiCalendar size={14} />
//                                 <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
//                                 {isOverdue(todo.dueDate) && !todo.completed && (
//                                   <span className="text-xs bg-red-500 text-white px-1 rounded">Overdue</span>
//                                 )}
//                               </div>
//                             )}
                            
//                             {todo.estimatedTime > 0 && (
//                               <div className="flex items-center gap-1">
//                                 <FiClock size={14} />
//                                 <span>{todo.estimatedTime} min</span>
//                               </div>
//                             )}
                            
//                             <div className="flex items-center gap-1">
//                               <FiClock size={14} />
//                               <span>{new Date(todo.date).toLocaleDateString()}</span>
//                             </div>
//                           </div>
                          
//                           {/* Subtasks */}
//                           {todo.subtasks && todo.subtasks.length > 0 && (
//                             <div className="mt-4 pl-2 border-l-2 border-gray-200 dark:border-gray-700">
//                               <div className="text-xs font-medium mb-2 uppercase tracking-wide">
//                                 Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
//                               </div>
//                               <div className="space-y-2">
//                                 {todo.subtasks.map(subtask => (
//                                   <div key={subtask.id} className="flex items-center gap-2">
//                                     <input
//                                       type="checkbox"
//                                       checked={subtask.completed}
//                                       onChange={() => toggleSubtask(todo.id, subtask.id)}
//                                       className="rounded"
//                                     />
//                                     <span className={`text-sm ${subtask.completed ? 'line-through opacity-70' : ''}`}>
//                                       {subtask.text}
//                                     </span>
//                                     <button
//                                       onClick={() => deleteSubtask(todo.id, subtask.id)}
//                                       className="ml-auto text-red-500 opacity-70 hover:opacity-100"
//                                     >
//                                       <FiTrash2 size={14} />
//                                     </button>
//                                   </div>
//                                 ))}
//                               </div>
                              
//                               <div className="mt-2 flex">
//                                 <input
//                                   type="text"
//                                   placeholder="Add a subtask..."
//                                   onKeyPress={(e) => {
//                                     if (e.key === 'Enter') {
//                                       addSubtask(todo.id, e.target.value);
//                                       e.target.value = '';
//                                     }
//                                   }}
//                                   className={`flex-1 text-sm px-2 py-1 rounded-l border ${currentTheme.input}`}
//                                 />
//                                 <button
//                                   onClick={(e) => {
//                                     const input = e.target.previousSibling;
//                                     addSubtask(todo.id, input.value);
//                                     input.value = '';
//                                   }}
//                                   className={`px-2 py-1 rounded-r ${currentTheme.button} text-sm`}
//                                 >
//                                   Add
//                                 </button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
                        
//                         <div className="flex flex-col gap-2">
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => toggleFavorite(todo.id)}
//                             className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                           >
//                             {todo.isFavorite ? (
//                               <FaHeart className="text-red-500" />
//                             ) : (
//                               <FaRegHeart />
//                             )}
//                           </motion.button>
                          
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => startEdit(todo)}
//                             className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                           >
//                             <FiEdit size={18} />
//                           </motion.button>
                          
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => archiveTodo(todo.id)}
//                             className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                           >
//                             <FiArchive size={18} />
//                           </motion.button>
                          
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => deleteTodo(todo.id)}
//                             className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                           >
//                             <FiTrash2 size={18} />
//                           </motion.button>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//                 <AnimatePresence>
//                   {filteredTodos.map(todo => (
//                     <motion.div
//                       key={todo.id}
//                       layout
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.2 }}
//                       className={`rounded-2xl p-5 shadow-lg ${currentTheme.card} ${todo.completed ? 'opacity-70' : ''}`}
//                     >
//                       <div className="flex items-start justify-between mb-3">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => toggleComplete(todo.id)}
//                           className={`mt-1 ${todo.completed ? currentTheme.accent : 'text-gray-400'}`}
//                         >
//                           {todo.completed ? <FaCircle /> : <FaRegCircle />}
//                         </motion.button>
                        
//                         <div className="flex gap-1">
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => toggleFavorite(todo.id)}
//                             className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                           >
//                             {todo.isFavorite ? (
//                               <FaHeart className="text-red-500" size={16} />
//                             ) : (
//                               <FaRegHeart size={16} />
//                             )}
//                           </motion.button>
                          
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => startEdit(todo)}
//                             className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                           >
//                             <FiEdit size={16} />
//                           </motion.button>
//                         </div>
//                       </div>
                      
//                       <div className="mb-4">
//                         <h3 className={`font-medium mb-2 ${todo.completed ? 'line-through' : ''}`}>
//                           {todo.text}
//                         </h3>
                        
//                         {todo.notes && (
//                           <p className="text-sm opacity-75 line-clamp-2">
//                             {todo.notes}
//                           </p>
//                         )}
//                       </div>
                      
//                       <div className="space-y-2 mb-4">
//                         <div className="flex items-center gap-2 text-sm">
//                           {getPriorityIcon(todo.priority).icon}
//                           <span className="capitalize">{todo.priority} priority</span>
//                         </div>
                        
//                         {todo.category && (
//                           <div className="flex items-center gap-2 text-sm">
//                             {getCategoryIcon(todo.category).icon}
//                             <span>{todo.category}</span>
//                           </div>
//                         )}
                        
//                         {todo.dueDate && (
//                           <div className={`flex items-center gap-2 text-sm ${isOverdue(todo.dueDate) && !todo.completed ? 'text-red-500' : ''}`}>
//                             <FiCalendar size={14} />
//                             <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
//                             {isOverdue(todo.dueDate) && !todo.completed && (
//                               <span className="text-xs bg-red-500 text-white px-1 rounded ml-auto">Overdue</span>
//                             )}
//                           </div>
//                         )}
//                       </div>
                      
//                       {todo.subtasks && todo.subtasks.length > 0 && (
//                         <div className="mb-4">
//                           <div className="text-xs font-medium mb-1 uppercase tracking-wide">
//                             Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
//                           </div>
//                           <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                             <div 
//                               className="bg-green-500 h-2 rounded-full"
//                               style={{ width: `${(todo.subtasks.filter(st => st.completed).length / todo.subtasks.length) * 100}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       )}
                      
//                       <div className="flex justify-between items-center">
//                         <div className="text-xs text-gray-500 dark:text-gray-400">
//                           {new Date(todo.date).toLocaleDateString()}
//                         </div>
                        
//                         <div className="flex gap-1">
//                           {todo.isPrivate && (
//                             <FiLock size={14} className="text-blue-500" />
//                           )}
//                           {todo.tag && (
//                             <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700">
//                               {todo.tag}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             )
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className={`rounded-2xl p-12 text-center ${currentTheme.card}`}
//             >
//               <div className="text-6xl mb-4">🎯</div>
//               <h3 className="text-2xl font-semibold mb-2">No todos found</h3>
//               <p className="opacity-75 mb-6">Try changing your search or filter, or add a new todo</p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsFormOpen(true)}
//                 className={`px-6 py-3 rounded-xl ${currentTheme.button}`}
//               >
//                 Add Your First Todo
//               </motion.button>
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Add Todo Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="fixed bottom-6 right-6"
//         >
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => {
//               if (editId) cancelEdit();
//               setIsFormOpen(!isFormOpen);
//             }}
//             className={`p-5 rounded-full shadow-xl text-white text-2xl ${currentTheme.button}`}
//           >
//             {isFormOpen ? <FiChevronDown /> : <FiPlus />}
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;









































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
//   FiX, FiMenu, FiCheckSquare, FiSquare
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
//     { id: 2, name: 'Work', color: 'green', icon: <FiBox /> },
//     { id: 3, name: 'Health', color: 'red', icon: <FiHeart /> },
//     { id: 4, name: 'Education', color: 'purple', icon: <FiBookmark /> },
//     { id: 5, name: 'Finance', color: 'orange', icon: <FiTrendingUp /> }
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
//       bg: 'bg-gray-50',
//       card: 'bg-white shadow-md',
//       text: 'text-gray-800',
//       input: 'bg-white border-gray-300 text-gray-800',
//       button: 'bg-blue-500 hover:bg-blue-600 text-white',
//       accent: 'text-blue-500',
//       header: 'bg-blue-600',
//     },
//     dark: {
//       bg: 'bg-gray-900',
//       card: 'bg-gray-800 shadow-lg',
//       text: 'text-gray-100',
//       input: 'bg-gray-700 border-gray-600 text-gray-100',
//       button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
//       accent: 'text-indigo-400',
//       header: 'bg-gray-800',
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
//         return { icon: <FiFlag className="text-red-500" />, color: 'red' };
//       case 'medium':
//         return { icon: <FiFlag className="text-yellow-500" />, color: 'yellow' };
//       case 'low':
//         return { icon: <FiFlag className="text-green-500" />, color: 'green' };
//       default:
//         return { icon: <FiFlag className="text-gray-500" />, color: 'gray' };
//     }
//   };

//   // Get category icon and color
//   const getCategoryIcon = (categoryName) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     if (category) {
//       return {
//         icon: category.icon,
//         color: category.color,
//       };
//     }
//     return { icon: <FiBox />, color: 'gray' };
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
//           className={`rounded-2xl p-4 mb-6 ${currentTheme.header} text-white shadow-lg`}
//         >
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <button 
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="md:hidden p-2 rounded-lg bg-white/20"
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
//                 className="p-2 rounded-lg bg-white/20 hover:bg-white/30"
//               >
//                 {theme === 'dark' ? <FiSun /> : <FiMoon />}
//               </button>
              
//               <button
//                 onClick={() => setShowSettings(!showSettings)}
//                 className="p-2 rounded-lg bg-white/20 hover:bg-white/30"
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
//               className={`md:hidden rounded-xl p-4 mb-6 shadow-lg ${currentTheme.card}`}
//             >
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   onClick={() => { setActiveTab('all'); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center ${activeTab === 'all' ? currentTheme.button : currentTheme.input}`}
//                 >
//                   All Tasks
//                 </button>
//                 <button
//                   onClick={() => { setActiveTab('active'); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center ${activeTab === 'active' ? currentTheme.button : currentTheme.input}`}
//                 >
//                   Active
//                 </button>
//                 <button
//                   onClick={() => { setActiveTab('completed'); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center ${activeTab === 'completed' ? currentTheme.button : currentTheme.input}`}
//                 >
//                   Completed
//                 </button>
//                 <button
//                   onClick={() => { setActiveTab('favorites'); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center ${activeTab === 'favorites' ? currentTheme.button : currentTheme.input}`}
//                 >
//                   Favorites
//                 </button>
//                 <button
//                   onClick={() => { setShowStats(!showStats); setMobileMenuOpen(false); }}
//                   className={`p-3 rounded-lg text-center col-span-2 ${showStats ? currentTheme.button : currentTheme.input}`}
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
//           <div className="hidden md:block w-full lg:w-1/4">
//             <div className={`rounded-2xl p-5 shadow-lg sticky top-6 ${currentTheme.card}`}>
//               <h2 className="text-lg font-semibold mb-4">Navigation</h2>
              
//               <div className="space-y-2 mb-6">
//                 <button
//                   onClick={() => setActiveTab('all')}
//                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === 'all' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
//                 >
//                   <FiList />
//                   <span>All Tasks</span>
//                   <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.isArchived).length}</span>
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('active')}
//                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === 'active' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
//                 >
//                   <FiCheckSquare />
//                   <span>Active</span>
//                   <span className="ml-auto text-sm opacity-70">{todos.filter(t => !t.completed && !t.isArchived).length}</span>
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('completed')}
//                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === 'completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
//                 >
//                   <FiCheck />
//                   <span>Completed</span>
//                   <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.completed && !t.isArchived).length}</span>
//                 </button>
                
//                 <button
//                   onClick={() => setActiveTab('favorites')}
//                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${activeTab === 'favorites' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
//                 >
//                   <FiStar />
//                   <span>Favorites</span>
//                   <span className="ml-auto text-sm opacity-70">{todos.filter(t => t.isFavorite && !t.isArchived).length}</span>
//                 </button>
//               </div>
              
//               <h2 className="text-lg font-semibold mb-4">Categories</h2>
//               <div className="space-y-2">
//                 {categories.map(category => (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(selectedCategory === category.name ? '' : category.name)}
//                     className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${selectedCategory === category.name ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
//                   >
//                     <span className={`text-${category.color}-500`}>{category.icon}</span>
//                     <span>{category.name}</span>
//                     <span className="ml-auto text-sm opacity-70">
//                       {todos.filter(t => t.category === category.name && !t.isArchived).length}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="w-full lg:w-3/4">
//             {/* Search and Stats Bar */}
//             <div className={`rounded-2xl p-5 mb-6 shadow-lg ${currentTheme.card}`}>
//               <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
//                 <div className="flex-1 w-full">
//                   <div className="relative">
//                     <FiSearch className="absolute left-3 top-3 opacity-50" />
//                     <input
//                       type="text"
//                       placeholder="Search todos..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className={`w-full pl-10 pr-4 py-2 rounded-xl border ${currentTheme.input}`}
//                     />
//                   </div>
//                 </div>
                
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
//                     className={`p-2 rounded-xl border ${currentTheme.input}`}
//                   >
//                     {viewMode === 'list' ? <FiGrid /> : <FiList />}
//                   </button>
                  
//                   <button
//                     onClick={() => setShowStats(!showStats)}
//                     className={`p-2 rounded-xl border ${currentTheme.input}`}
//                   >
//                     <FiBarChart2 />
//                   </button>
                  
//                   <button
//                     onClick={() => setIsFormOpen(true)}
//                     className={`p-2 rounded-xl ${currentTheme.button}`}
//                   >
//                     <FiPlus />
//                   </button>
//                 </div>
//               </div>
              
//               {/* Quick Stats */}
//               <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <div className="flex items-center gap-2">
//                   <div className="text-sm font-medium">Total:</div>
//                   <div className="text-sm">{stats.total}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2">
//                   <div className="text-sm font-medium">Active:</div>
//                   <div className="text-sm">{stats.active}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2">
//                   <div className="text-sm font-medium">Completed:</div>
//                   <div className="text-sm text-green-500">{stats.completed}</div>
//                 </div>
                
//                 <div className="flex items-center gap-2">
//                   <div className="text-sm font-medium">Overdue:</div>
//                   <div className="text-sm text-red-500">{stats.overdue}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Panel */}
//             {showStats && (
//               <motion.div 
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className={`rounded-2xl p-5 mb-6 shadow-lg ${currentTheme.card}`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold">Statistics</h2>
//                   <button onClick={() => setShowStats(false)}>
//                     <FiX />
//                   </button>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className={`p-4 rounded-xl ${currentTheme.input}`}>
//                     <div className="text-2xl font-bold">{stats.completionRate}%</div>
//                     <div className="text-sm opacity-75">Completion Rate</div>
//                   </div>
                  
//                   <div className={`p-4 rounded-xl ${currentTheme.input}`}>
//                     <div className="text-2xl font-bold">{stats.favorites}</div>
//                     <div className="text-sm opacity-75">Favorites</div>
//                   </div>
                  
//                   <div className={`p-4 rounded-xl ${currentTheme.input}`}>
//                     <div className="text-2xl font-bold">
//                       {todos.filter(t => t.priority === 'high').length}
//                     </div>
//                     <div className="text-sm opacity-75">High Priority</div>
//                   </div>
                  
//                   <div className={`p-4 rounded-xl ${currentTheme.input}`}>
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
//                       {filteredTodos.map(todo => (
//                         <motion.div
//                           key={todo.id}
//                           layout
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.2 }}
//                           className={`rounded-2xl p-4 shadow-md ${currentTheme.card} ${todo.completed ? 'opacity-70' : ''}`}
//                         >
//                           <div className="flex items-start gap-3">
//                             <button
//                               onClick={() => toggleComplete(todo.id)}
//                               className={`mt-1 ${todo.completed ? 'text-green-500' : 'text-gray-400'}`}
//                             >
//                               {todo.completed ? <FiCheckSquare /> : <FiSquare />}
//                             </button>
                            
//                             <div className="flex-1">
//                               <div className="flex flex-wrap items-center gap-2 mb-2">
//                                 <span className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
//                                   {todo.text}
//                                 </span>
                                
//                                 {todo.isPrivate && (
//                                   <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
//                                     <FiLock size={10} />
//                                   </span>
//                                 )}
                                
//                                 {todo.isFavorite && (
//                                   <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
//                                     <FiStar size={10} />
//                                   </span>
//                                 )}
//                               </div>
                              
//                               {todo.notes && (
//                                 <div className="text-sm opacity-75 mb-2">
//                                   {todo.notes}
//                                 </div>
//                               )}
                              
//                               <div className="flex flex-wrap items-center gap-3 text-sm opacity-75">
//                                 <div className="flex items-center gap-1">
//                                   {getPriorityIcon(todo.priority).icon}
//                                   <span className="capitalize">{todo.priority}</span>
//                                 </div>
                                
//                                 {todo.dueDate && (
//                                   <div className={`flex items-center gap-1 ${isOverdue(todo.dueDate) && !todo.completed ? 'text-red-500' : ''}`}>
//                                     <FiCalendar size={14} />
//                                     <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
//                                   </div>
//                                 )}
                                
//                                 {todo.tag && (
//                                   <div className="flex items-center gap-1">
//                                     <FiTag size={14} />
//                                     <span>{todo.tag}</span>
//                                   </div>
//                                 )}
//                               </div>
                              
//                               {/* Subtasks */}
//                               {todo.subtasks && todo.subtasks.length > 0 && (
//                                 <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
//                                   <div className="text-xs font-medium mb-2 uppercase tracking-wide">
//                                     Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
//                                   </div>
//                                   <div className="space-y-2">
//                                     {todo.subtasks.map(subtask => (
//                                       <div key={subtask.id} className="flex items-center gap-2">
//                                         <input
//                                           type="checkbox"
//                                           checked={subtask.completed}
//                                           onChange={() => toggleSubtask(todo.id, subtask.id)}
//                                           className="rounded"
//                                         />
//                                         <span className={`text-sm ${subtask.completed ? 'line-through opacity-70' : ''}`}>
//                                           {subtask.text}
//                                         </span>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
                            
//                             <div className="flex flex-col gap-2">
//                               <button
//                                 onClick={() => toggleFavorite(todo.id)}
//                                 className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                               >
//                                 {todo.isFavorite ? (
//                                   <FiStar className="text-yellow-500" />
//                                 ) : (
//                                   <FiStar />
//                                 )}
//                               </button>
                              
//                               <button
//                                 onClick={() => startEdit(todo)}
//                                 className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                               >
//                                 <FiEdit size={16} />
//                               </button>
                              
//                               <button
//                                 onClick={() => deleteTodo(todo.id)}
//                                 className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                               >
//                                 <FiTrash2 size={16} />
//                               </button>
//                             </div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <AnimatePresence>
//                       {filteredTodos.map(todo => (
//                         <motion.div
//                           key={todo.id}
//                           layout
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           exit={{ opacity: 0, scale: 0.9 }}
//                           transition={{ duration: 0.2 }}
//                           className={`rounded-2xl p-4 shadow-md ${currentTheme.card} ${todo.completed ? 'opacity-70' : ''}`}
//                         >
//                           <div className="flex justify-between items-start mb-3">
//                             <button
//                               onClick={() => toggleComplete(todo.id)}
//                               className={`mt-1 ${todo.completed ? 'text-green-500' : 'text-gray-400'}`}
//                             >
//                               {todo.completed ? <FiCheckSquare /> : <FiSquare />}
//                             </button>
                            
//                             <div className="flex gap-1">
//                               <button
//                                 onClick={() => toggleFavorite(todo.id)}
//                                 className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                               >
//                                 {todo.isFavorite ? (
//                                   <FiStar className="text-yellow-500" size={16} />
//                                 ) : (
//                                   <FiStar size={16} />
//                                 )}
//                               </button>
                              
//                               <button
//                                 onClick={() => startEdit(todo)}
//                                 className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//                               >
//                                 <FiEdit size={16} />
//                               </button>
//                             </div>
//                           </div>
                          
//                           <div className="mb-4">
//                             <h3 className={`font-medium mb-2 ${todo.completed ? 'line-through' : ''}`}>
//                               {todo.text}
//                             </h3>
                            
//                             {todo.notes && (
//                               <p className="text-sm opacity-75 line-clamp-2">
//                                 {todo.notes}
//                               </p>
//                             )}
//                           </div>
                          
//                           <div className="space-y-2 mb-4 text-sm">
//                             <div className="flex items-center gap-2">
//                               {getPriorityIcon(todo.priority).icon}
//                               <span className="capitalize">{todo.priority} priority</span>
//                             </div>
                            
//                             {todo.dueDate && (
//                               <div className={`flex items-center gap-2 ${isOverdue(todo.dueDate) && !todo.completed ? 'text-red-500' : ''}`}>
//                                 <FiCalendar size={14} />
//                                 <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
//                               </div>
//                             )}
//                           </div>
                          
//                           {todo.subtasks && todo.subtasks.length > 0 && (
//                             <div className="mb-4">
//                               <div className="text-xs font-medium mb-1 uppercase tracking-wide">
//                                 Subtasks ({todo.subtasks.filter(st => st.completed).length}/{todo.subtasks.length})
//                               </div>
//                               <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                                 <div 
//                                   className="bg-green-500 h-2 rounded-full"
//                                   style={{ width: `${(todo.subtasks.filter(st => st.completed).length / todo.subtasks.length) * 100}%` }}
//                                 ></div>
//                               </div>
//                             </div>
//                           )}
                          
//                           <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
//                             <div>
//                               {new Date(todo.date).toLocaleDateString()}
//                             </div>
                            
//                             {todo.isPrivate && (
//                               <FiLock size={12} className="text-blue-500" />
//                             )}
//                           </div>
//                         </motion.div>
//                       ))}
//                     </AnimatePresence>
//                   </div>
//                 )
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className={`rounded-2xl p-8 text-center ${currentTheme.card}`}
//                 >
//                   <div className="text-4xl mb-4">📝</div>
//                   <h3 className="text-xl font-semibold mb-2">No todos found</h3>
//                   <p className="opacity-75 mb-6">Try changing your search or add a new todo</p>
//                   <button
//                     onClick={() => setIsFormOpen(true)}
//                     className={`px-5 py-2 rounded-xl ${currentTheme.button}`}
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
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className={`rounded-2xl p-6 w-full max-w-md ${currentTheme.card}`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-semibold">{editId ? 'Edit Todo' : 'Add New Todo'}</h2>
//                   <button onClick={editId ? cancelEdit : () => setIsFormOpen(false)}>
//                     <FiX />
//                   </button>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block mb-2 font-medium">Task Description</label>
//                     <textarea
//                       value={editId ? editValue : inputValue}
//                       onChange={(e) => editId ? setEditValue(e.target.value) : setInputValue(e.target.value)}
//                       className={`w-full px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                       placeholder="What needs to be done?"
//                       rows={2}
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block mb-2 font-medium">Priority</label>
//                       <select
//                         value={priority}
//                         onChange={(e) => setPriority(e.target.value)}
//                         className={`w-full px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                       >
//                         <option value="high">High</option>
//                         <option value="medium">Medium</option>
//                         <option value="low">Low</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block mb-2 font-medium">Category</label>
//                       <select
//                         value={selectedCategory}
//                         onChange={(e) => setSelectedCategory(e.target.value)}
//                         className={`w-full px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                       >
//                         <option value="">Select Category</option>
//                         {categories.map(category => (
//                           <option key={category.id} value={category.name}>{category.name}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block mb-2 font-medium">Tag</label>
//                       <select
//                         value={selectedTag}
//                         onChange={(e) => setSelectedTag(e.target.value)}
//                         className={`w-full px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                       >
//                         <option value="">Select Tag</option>
//                         {tags.map(tag => (
//                           <option key={tag} value={tag}>{tag}</option>
//                         ))}
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block mb-2 font-medium">Due Date</label>
//                       <input
//                         type="date"
//                         value={dueDate}
//                         onChange={(e) => setDueDate(e.target.value)}
//                         className={`w-full px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                       />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label className="block mb-2 font-medium">Notes</label>
//                     <textarea
//                       value={notes}
//                       onChange={(e) => setNotes(e.target.value)}
//                       className={`w-full px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                       placeholder="Additional notes..."
//                       rows={2}
//                     />
//                   </div>
                  
//                   <div className="flex gap-4">
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={isPrivate}
//                         onChange={() => setIsPrivate(!isPrivate)}
//                         className="rounded"
//                       />
//                       <span>Private Task</span>
//                     </label>
                    
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={isFavorite}
//                         onChange={() => setIsFavorite(!isFavorite)}
//                         className="rounded"
//                       />
//                       <span>Favorite</span>
//                     </label>
//                   </div>
                  
//                   <div className="flex justify-end gap-3 pt-4">
//                     <button
//                       onClick={editId ? cancelEdit : () => setIsFormOpen(false)}
//                       className={`px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                     >
//                       Cancel
//                     </button>
                    
//                     <button
//                       onClick={editId ? updateTodo : addTodo}
//                       className={`px-4 py-2 rounded-xl ${currentTheme.button}`}
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
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className={`rounded-2xl p-6 w-full max-w-md ${currentTheme.card}`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-semibold">Settings</h2>
//                   <button onClick={() => setShowSettings(false)}>
//                     <FiX />
//                   </button>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block mb-2 font-medium">Theme</label>
//                     <select
//                       value={theme}
//                       onChange={(e) => setTheme(e.target.value)}
//                       className={`w-full px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                     >
//                       <option value="light">Light</option>
//                       <option value="dark">Dark</option>
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={soundEnabled}
//                         onChange={() => setSoundEnabled(!soundEnabled)}
//                         className="rounded"
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
//                         className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border ${currentTheme.input}`}
//                       >
//                         <FiDownload />
//                         <span>Export</span>
//                       </button>
                      
//                       <button
//                         onClick={clearCompleted}
//                         className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border ${currentTheme.input}`}
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
//               className={`p-4 rounded-full shadow-xl text-white text-xl ${currentTheme.button}`}
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
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
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
  FiMessageSquare, FiVideo, FiMusic, FiImage, FiFileText,FiChevronLeft,FiChevronRight 
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
    'finance', 'education', 'travel', 'home', 'food'
  ]);
  
  const [selectedTag, setSelectedTag] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [showCompleted, setShowCompleted] = useState(true);
  
  const [categories] = useState([
    { id: 1, name: 'Personal', color: 'blue', icon: <FiUser className="text-blue-500" /> },
    { id: 2, name: 'Work', color: 'green', icon: <FiBriefcase className="text-green-500" /> },
    { id: 3, name: 'Health', color: 'red', icon: <FiHeart className="text-red-500" /> },
    { id: 4, name: 'Education', color: 'purple', icon: <FiBook className="text-purple-500" /> },
    { id: 5, name: 'Finance', color: 'orange', icon: <FiDollarSign className="text-orange-500" /> },
    { id: 6, name: 'Shopping', color: 'pink', icon: <FiShoppingBag className="text-pink-500" /> },
    { id: 7, name: 'Home', color: 'indigo', icon: <FiHome className="text-indigo-500" /> },
    { id: 8, name: 'Entertainment', color: 'yellow', icon: <FiVideo className="text-yellow-500" /> }
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [productivityScore, setProductivityScore] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [showAchievements, setShowAchievements] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
          notes: 'This is a sample todo to get you started',
          category: 'Work',
          isPrivate: false,
          isFavorite: true,
          isArchived: false,
          timeSpent: 0,
          estimatedTime: 30,
          subtasks: [
            { id: 1, text: 'Explore features', completed: true },
            { id: 2, text: 'Customize settings', completed: false }
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
          notes: '',
          category: 'Personal',
          isPrivate: false,
          isFavorite: false,
          isArchived: false,
          timeSpent: 0,
          estimatedTime: 15,
          subtasks: []
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
    
    setAchievements(newAchievements);
  }, []);

  // Theme classes
  const themes = {
    light: {
      bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
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
        estimatedTime: 0,
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
            isFavorite
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

  // Filter todos based on filter and search query
  const filteredTodos = todos
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
      return 0;
    });

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
    
    return {
      total,
      completed,
      active,
      overdue,
      favorites,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  };

  const stats = calculateStats();

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
                <FiList className="text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Advanced Todo</h1>
                <p className="text-sm opacity-90">Stay organized and productive</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden rounded-xl p-4 mb-6 shadow-lg ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
            >
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setActiveTab('all'); setMobileMenuOpen(false); }}
                  className={`p-3 rounded-lg text-center transition-all ${activeTab === 'all' ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
                >
                  All Tasks
                </button>
                <button
                  onClick={() => { setActiveTab('active'); setMobileMenuOpen(false); }}
                  className={`p-3 rounded-lg text-center transition-all ${activeTab === 'active' ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
                >
                  Active
                </button>
                <button
                  onClick={() => { setActiveTab('completed'); setMobileMenuOpen(false); }}
                  className={`p-3 rounded-lg text-center transition-all ${activeTab === 'completed' ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
                >
                  Completed
                </button>
                <button
                  onClick={() => { setActiveTab('favorites'); setMobileMenuOpen(false); }}
                  className={`p-3 rounded-lg text-center transition-all ${activeTab === 'favorites' ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
                >
                  Favorites
                </button>
                <button
                  onClick={() => { setShowStats(!showStats); setMobileMenuOpen(false); }}
                  className={`p-3 rounded-lg text-center col-span-2 transition-all ${showStats ? 'bg-blue-500 text-white shadow-md' : currentTheme.input}`}
                >
                  Statistics
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
                  <FiList className="flex-shrink-0" />
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
                        <span className="flex-shrink-0">{category.icon}</span>
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
            {/* Search and Stats Bar */}
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

            {/* Stats Panel */}
            {showStats && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`rounded-2xl p-5 mb-6 shadow-lg ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Statistics</h2>
                  <button onClick={() => setShowStats(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    <FiX />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl ${currentTheme.input} backdrop-blur-sm bg-opacity-50 border-0`}>
                    <div className="text-2xl font-bold">{stats.completionRate}%</div>
                    <div className="text-sm opacity-75">Completion Rate</div>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${currentTheme.input} backdrop-blur-sm bg-opacity-50 border-0`}>
                    <div className="text-2xl font-bold">{stats.favorites}</div>
                    <div className="text-sm opacity-75">Favorites</div>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${currentTheme.input} backdrop-blur-sm bg-opacity-50 border-0`}>
                    <div className="text-2xl font-bold">
                      {todos.filter(t => t.priority === 'high').length}
                    </div>
                    <div className="text-sm opacity-75">High Priority</div>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${currentTheme.input} backdrop-blur-sm bg-opacity-50 border-0`}>
                    <div className="text-2xl font-bold">
                      {todos.reduce((acc, todo) => acc + (todo.subtasks?.length || 0), 0)}
                    </div>
                    <div className="text-sm opacity-75">Total Subtasks</div>
                  </div>
                </div>
              </motion.div>
            )}

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
                className={`rounded-2xl p-6 w-full max-w-md ${currentTheme.card} backdrop-blur-sm bg-opacity-95`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{editId ? 'Edit Todo' : 'Add New Todo'}</h2>
                  <button onClick={editId ? cancelEdit : () => setIsFormOpen(false)} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    <FiX />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Task Description</label>
                    <textarea
                      value={editId ? editValue : inputValue}
                      onChange={(e) => editId ? setEditValue(e.target.value) : setInputValue(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border transition-all ${currentTheme.input}`}
                      placeholder="What needs to be done?"
                      rows={2}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
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
                  
                  <div className="grid grid-cols-2 gap-4">
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
                      rows={2}
                    />
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