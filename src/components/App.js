// src/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import data from '../data/tasks';

function App() {
  const [tasks, setTasks] = useState(data.tasks);
  const [categories, setCategories] = useState(data.categories);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleTaskDelete(id) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter 
        categories={categories} 
        onCategorySelect={handleCategorySelect} 
        selectedCategory={selectedCategory} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onTaskDelete={handleTaskDelete} 
      />
      <NewTaskForm 
        categories={categories} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
    </div>
  );
}

export default App;
