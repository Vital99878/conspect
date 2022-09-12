import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import './Select.scss';
import { useClickOutside } from '../../hooks/useClickOutside';

const Arrow = ({ className }: { className: string }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ marginLeft: '1.6rem' }}
    >
      <path
        d="M10.9 1.19999C10.5 0.799994 9.90005 0.799994 9.50005 1.19999L6.00005 4.69999L2.50005 1.19999C2.10005 0.799994 1.50005 0.799994 1.10005 1.19999C0.700049 1.59999 0.700049 2.19999 1.10005 2.59999L5.30005 6.79999C5.50005 6.99999 5.70005 7.09999 6.00005 7.09999C6.30005 7.09999 6.50005 6.99999 6.70005 6.79999L10.9 2.59999C11.3 2.19999 11.3 1.59999 10.9 1.19999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default function Select() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);

  const optionsList = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const buttonText = selectedOption < 0 ? 'select option' : optionsList[selectedOption];

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
      <div
        className={clsx('select__buttonWrapper', isOptionsOpen && 'select__buttonWrapper--open')}
        onClick={toggleOptions}
      >
        <button className={clsx('select__button')} type="button" aria-haspopup="listbox" aria-expanded={isOptionsOpen}>
          {buttonText}
        </button>
        <Arrow className={clsx('select__arrow', isOptionsOpen && 'select__arrow--open')} />
      </div>

      {isOptionsOpen && (
        <ul
          className={'select__options'}
          role="options"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
        >
          {selectedOption > -1 && (
            <li
              className={'select__options__item select__options__item--disabled'}
              style={{ pointerEvents: 'none' }}
              role="placeholder"
            >
              select option
            </li>
          )}
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
