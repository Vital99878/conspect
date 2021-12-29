import React, { DependencyList, useEffect } from 'react'

/**
 * @example
 * const Component = () => {
 *      const headerRef = useRef(null);
 *      useOutsideClickCallback(headerRef, () => console.log('Кто-то кликнул не по h1'));
 *
 *      return (
 *          <div>
 *              <h1 ref={headerRef}>
 *                  Заголовок
 *              </div>
 *          </div>
 *      );
 * };
 *
 * вызывает @see callback когда происходит клик не по элементу, полезно для всяких модалок, выпадашек и.т.д.
 * @param {HTMLElement} element
 * @param {(event: MouseEvent) => void} callback
 * @param [deps = []]: Array<any>
 * @return void
 */

export const useOutsideClickCallback = (
  element: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
  deps: DependencyList = []
): void => {
  useEffect((): VoidFunction => {
    const outsideClickHandler = (event: MouseEvent): void => {
      if (element.current instanceof Node && event.target instanceof Node && !element.current.contains(event.target)) {
        callback(event)
      }
    }

    document.addEventListener('click', outsideClickHandler)

    return (): void => document.removeEventListener('click', outsideClickHandler)
  }, deps)
}
