import React, { useEffect, useRef, useState } from 'react';
import './WrapperHiddenButton.scss';

type Props = {
  children?: JSX.Element;
};

/**
 * util комопонент, который добавляется первым в родительский тег компонента.
 * Добавляет position absolute menu для работы с основынм тегом компонета.
 * ! Должен быть хотя-бы один дочерний элемент.
 */

const AbsolutePositionMenu: React.FC<Props> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mainTag, setMainTag] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const mainElement = buttonRef.current.parentElement as HTMLElement;
      setMainTag(mainElement);
    }
  }, []);

  function hideMenuSiblings() {
    if (mainTag) {
      const children = mainTag.children;
      for (let i = 1; i < children.length; i++) {
        children[i].classList.toggle('hidden');
      }
    }
  }
  function hideMainTag() {
    if (mainTag) {
      mainTag.style.height = '0';
    }
  }

  return (
    <button className="wrapper-hidden" onClick={hideMenuSiblings} ref={buttonRef}>
      hide
    </button>
  );
};

export default AbsolutePositionMenu;
