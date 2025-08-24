import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import SettingsPanel from '../components/SettingsPanel';
import AddTodoButton from '../components/AddTodoButton';
import PomodoroTimer from '../components/PomodoroTimer';
import { categories, tags } from '../icons/categories';
// import '../App.css';

import { themes } from '../icons/theme';
const TodoHome = () => {
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
    return saved || 'light';
  });
  
  const [selectedTag, setSelectedTag] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [showCompleted, setShowCompleted] = useState(true);
  
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
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
    localStorage.setItem("theme", theme);

    // remove both then add one (cleaner than toggle)
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
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
        icon: 'FiAward',
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
        icon: 'FiCheck',
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
        icon: 'FiTrendingUp',
        color: 'bronze',
        unlocked: true,
        date: new Date()
      });
    }
    
    setAchievements(newAchievements);
  }, []);

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
        return { icon: 'FiFlag', color: 'red', bg: 'bg-red-100 dark:bg-red-900/20' };
      case 'medium':
        return { icon: 'FiFlag', color: 'yellow', bg: 'bg-yellow-100 dark:bg-yellow-900/20' };
      case 'low':
        return { icon: 'FiFlag', color: 'green', bg: 'bg-green-100 dark:bg-green-900/20' };
      default:
        return { icon: 'FiFlag', color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/20' };
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
    return { icon: 'FiBox', color: 'gray', bg: 'bg-gray-100 dark:bg-gray-900/20' };
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

  return (
    <div className={`min-h-screen transition-colors duration-300 theme-${theme}`} style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className=" ">
        {/* <Header 
          theme={theme}
          setTheme={setTheme}
          showPomodoro={showPomodoro}
          setShowPomodoro={setShowPomodoro}
          focusMode={focusMode}
          setFocusMode={setFocusMode}
          setShowSettings={setShowSettings}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {showPomodoro && (
          <PomodoroTimer 
            timerActive={timerActive}
            setTimerActive={setTimerActive}
            timerMinutes={timerMinutes}
            setTimerMinutes={setTimerMinutes}
            timerSeconds={timerSeconds}
            setTimerSeconds={setTimerSeconds}
            showPomodoro={showPomodoro}
            setShowPomodoro={setShowPomodoro}
          />
        )} */}

        <div className="flex flex-col lg:flex-row gap-6">


          <Sidebar 
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            todos={todos}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

        <div className={`w-full ${sidebarCollapsed ? 'lg:w-[calc(100%-80px)]' : 'lg:w-3/4'} transition-all duration-300`}>
            


        <Header 
          theme={theme}
          setTheme={setTheme}
          showPomodoro={showPomodoro}
          setShowPomodoro={setShowPomodoro}
          focusMode={focusMode}
          setFocusMode={setFocusMode}
          setShowSettings={setShowSettings}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {showPomodoro && (
          <PomodoroTimer 
            timerActive={timerActive}
            setTimerActive={setTimerActive}
            timerMinutes={timerMinutes}
            setTimerMinutes={setTimerMinutes}
            timerSeconds={timerSeconds}
            setTimerSeconds={setTimerSeconds}
            showPomodoro={showPomodoro}
            setShowPomodoro={setShowPomodoro}
          />
        )}

            
            <TodoList 
              todos={todos}
              filteredTodos={filteredTodos}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              viewMode={viewMode}
              setViewMode={setViewMode}
              showFilterPanel={showFilterPanel}
              setShowFilterPanel={setShowFilterPanel}
              setIsFormOpen={setIsFormOpen}
              stats={stats}
              activeTab={activeTab}
              advancedFilters={advancedFilters}
              setAdvancedFilters={setAdvancedFilters}
              tags={tags}
              categories={categories}
              toggleComplete={toggleComplete}
              toggleFavorite={toggleFavorite}
              startEdit={startEdit}
              deleteTodo={deleteTodo}
              toggleSubtask={toggleSubtask}
              getPriorityIcon={getPriorityIcon}
              getCategoryIcon={getCategoryIcon}
              isOverdue={isOverdue}
            />
          </div>
        </div>

        <AnimatePresence>
          {isFormOpen && (
            <TodoForm 
              editId={editId}
              editValue={editValue}
              setEditValue={setEditValue}
              inputValue={inputValue}
              setInputValue={setInputValue}
              priority={priority}
              setPriority={setPriority}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              dueDate={dueDate}
              setDueDate={setDueDate}
              notes={notes}
              setNotes={setNotes}
              reminderTime={reminderTime}
              setReminderTime={setReminderTime}
              recurring={recurring}
              setRecurring={setRecurring}
              timeEstimate={timeEstimate}
              setTimeEstimate={setTimeEstimate}
              energyLevel={energyLevel}
              setEnergyLevel={setEnergyLevel}
              isPrivate={isPrivate}
              setIsPrivate={setIsPrivate}
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
              showAdvancedOptions={showAdvancedOptions}
              setShowAdvancedOptions={setShowAdvancedOptions}
              cancelEdit={cancelEdit}
              updateTodo={updateTodo}
              addTodo={addTodo}
              setIsFormOpen={setIsFormOpen}
              tags={tags}
              categories={categories}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSettings && (
            <SettingsPanel 
              theme={theme}
              setTheme={setTheme}
              soundEnabled={soundEnabled}
              setSoundEnabled={setSoundEnabled}
              setShowSettings={setShowSettings}
              todos={todos}
              clearCompleted={clearCompleted}
            />
          )}
        </AnimatePresence>

        {!isFormOpen && (
          <AddTodoButton 
            setIsFormOpen={setIsFormOpen}
          />
        )}
      </div>
    </div>
  );
};

export default TodoHome;