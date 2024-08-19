import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(categories[0] || '');

  function handleSubmit(e) {
    e.preventDefault();
    if (taskText.trim()) {
      onTaskFormSubmit({ id: Date.now(), text: taskText, category: taskCategory });
      setTaskText('');
      setTaskCategory(categories[0] || '');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="New task"
      />
      <select 
        value={taskCategory} 
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        {categories.filter(category => category !== 'All').map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;