import { useEffect, useRef } from 'react';
// import _ from 'lodash';

/**
 * @description hook для создания action для быстрого вызова функций через клавиатуру
 */
export function useAction() {
  const st = useRef('');

  function actionHandler(evt: KeyboardEvent) {
    st.current += evt.key;
    if (st.current.length > 2) return (st.current = '');

    // console.log('st.current: ', st.current)

    if (st.current === 'la') console.log('change lang');
    if (st.current === 'th') console.log('change theme');
  }

  useEffect((): VoidFunction => {
    document.addEventListener('keydown', actionHandler);
    return () => document.removeEventListener('keydown', actionHandler);
  }, []);
}
