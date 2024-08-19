import React from "react";

function CategoryFilter({ categories, onCategorySelect, selectedCategory }) {
  return (
    <div>
      {categories.map(category => (
        <button 
          key={category} 
          className={selectedCategory === category ? 'selected' : ''} 
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}


export default CategoryFilter;
