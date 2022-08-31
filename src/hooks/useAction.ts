import { useEffect, useRef } from 'react';
// import _ from 'lodash';

/**
 * @description hook для создания action для быстрого вызова функций через клавиатуру
 */

export function useAction() {
  const st = useRef('');

  function actionHandler(evt: KeyboardEvent) {
    st.current += evt.key;
    // if (st.current.length > 2) return (st.current = '');

    if (st.current === 'la') {
      console.log('change lang');
      st.current = '';
    }
    if (st.current === 'th') {
      console.log('change theme');
      st.current = '';
    }
  }

  useEffect((): VoidFunction => {
    document.addEventListener('keyup', actionHandler);
    return () => document.removeEventListener('keydown', actionHandler);
  }, []);
}
