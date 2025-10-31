import React, { useState, useRef, useEffect } from 'react';

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.code === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
                                className="bg-void-secondary text-text-primary border border-void-secondary dark:border-white/10 rounded-md py-1 px-2 text-xs flex items-center justify-between"
                              >
                                <div className="flex items-center">
                                  {selectedOption && (
                                    <img src={process.env.PUBLIC_URL + selectedOption.flag} alt={selectedOption.name} className="w-4 h-4 mr-2" />
                                  )}
                                  <span>{selectedOption ? selectedOption.name : 'Select...'}</span>
                                </div>
                                {/* You can add a dropdown icon here if you want, e.g., a chevron */}
                              </button>
                              {isOpen && (
                                <ul className="absolute z-10 mt-1 w-max bg-void-secondary border border-void-secondary dark:border-white/10 rounded-md shadow-lg">          {options.map((option) => (
            <li
              key={option.code}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-void-primary cursor-pointer flex items-center"
            >
              <img src={process.env.PUBLIC_URL + option.flag} alt={option.name} className="w-5 h-5 mr-2" />
              <span>{option.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
