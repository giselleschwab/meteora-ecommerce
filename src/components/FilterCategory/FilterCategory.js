import React, { useState } from 'react';
import Categories from './Categories';
import Products from './Products';

function ParentComponent() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryClick = categoryId => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div>
      <Categories onCategoryClick={handleCategoryClick} />
      <Products selectedCategoryId={selectedCategoryId} />
    </div>
  );
}

export default ParentComponent;