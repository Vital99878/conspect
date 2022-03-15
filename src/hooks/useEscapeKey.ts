import { DependencyList, useEffect } from 'react'

/**
 * @example
 * function ModalWindow() {
 *  useEscapeKey(closeModalWindow)
 *      return (
 *          <div className='modal'>
                Modal window
 *          </div>
 *      );
 * };
 *
 * вызывает callback когда происходит нажатие по Escape, полезно для всяких модалок, выпадашек и.т.д.
 * @param {(event: MouseEvent) => void} cb
 * @param {deps list} deps
 * @return void
 */

export const useEscapeKey = (cb: () => void, deps: DependencyList = []): void => {
  const test = (evt: KeyboardEvent) => {
    evt.stopPropagation()
    evt.key === 'Escape' ? cb() : null
  }
  useEffect((): VoidFunction => {
    document.addEventListener('keydown', test)
    return () => document.removeEventListener('keydown', test)
  }, deps)
}
