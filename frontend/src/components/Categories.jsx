import React, { useState } from 'react';

const Categories = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select onChange={handleDropdownChange} value={selectedOption}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* Render components based on selected option */}
      {selectedOption === 'option1' && <Component1 />}
      {selectedOption === 'option2' && <Component2 />}
      {selectedOption === 'option3' && <Component3 />}
    </div>
  );
};

export default Categories;