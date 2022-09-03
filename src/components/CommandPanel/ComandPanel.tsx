import React, { FormEvent, useEffect, useRef, useState } from 'react';
import './ComandPanel.scss';
import { useClickOutside } from '../../hooks/useClickOutside';

/**
 * @description Командная панель для вызова функций через сокращения.
 * компонетн помощник
 */

export default function CommandPanel() {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  useClickOutside(inputRef, () => setIsShow(false));

  function show(evt: KeyboardEvent) {
    const isChar = evt.keyCode >= 48 && evt.keyCode <= 90;
    if (evt.key === 'Escape') return setIsShow(false);

    if (isChar || evt.key === 'Enter') setIsShow(true);
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    handleAction();
    setValue('');
    setIsShow(false);
  }

  function handleAction() {
    if (value === 'la') console.log('change lang fn');
    if (value === 'th') console.log('change theme fn');
  }

  useEffect(() => {
    if (isShow && inputRef.current) inputRef.current.focus();
  }, [isShow]);

  useEffect(() => {
    document.addEventListener('keydown', show);
    return () => document.removeEventListener('keydown', show);
  }, []);

  useEffect(() => {
    if (document.activeElement !== inputRef.current) setIsShow(false);
  }, [document.activeElement === inputRef.current]);

  if (!isShow) return null;

  return (
    <form onSubmit={onSubmit}>
      <input
        className={'actionPanel'}
        ref={inputRef}
        autoComplete={'on'}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </form>
  );
}
