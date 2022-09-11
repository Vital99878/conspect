import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import './Select.scss';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function Select() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const optionsList = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const toggleOptions = () => {
    setIsOptionsOpen((s) => !s);
  };
  const handleKeyDown = (index: number) => (e: any) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        setSelectedOption(index);
        setIsOptionsOpen(false);
        break;
      default:
        break;
    }
  };
  const optionsRef = useRef<HTMLDivElement>(null);
  useClickOutside(optionsRef, () => setIsOptionsOpen(false));
  return (
    <div className="select" ref={optionsRef}>
      <button
        className={clsx('select__button', isOptionsOpen && 'select__button--open')}
        // type="button"
        aria-haspopup="listbox"
        aria-expanded={isOptionsOpen}
        onClick={toggleOptions}
      >
        {optionsList[selectedOption]}
      </button>

      {isOptionsOpen && (
        <ul
          className={'select__options'}
          role="options"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
        >
          {optionsList.map((option, index) => (
            <li
              className={'select__options__item'}
              id={option}
              role="option"
              aria-selected={selectedOption == index}
              tabIndex={0}
              key={option}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedOption(index);
                setIsOptionsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
