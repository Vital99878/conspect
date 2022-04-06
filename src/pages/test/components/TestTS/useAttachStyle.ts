import { CSSProperties, useEffect, useState, RefObject, useLayoutEffect } from 'react'

function updateTranslate(position: Position): Pick<CSSProperties, 'transform'> {
  let translateCssProp: Pick<CSSProperties, 'transform'> = {}

  switch (position.toString()) {
    case ['top', 'left'].toString():
      translateCssProp = { transform: 'translateX(-100%)' }
      break

    case ['bottom', 'left'].toString():
      translateCssProp = { transform: 'translate(-100%, -100%)' }
      break

    case ['bottom', 'right'].toString():
      translateCssProp = { transform: 'translateY(-100%)' }
      break
    default:
      translateCssProp = {}
  }
  return translateCssProp
}

type Position = ['top' | 'bottom', 'left' | 'right']

const initialPosition: Position = ['top', 'right']

/**
 * 1. Закрепляет элемент снаружи  от Таргет элемента.
 * 2. При resize страницы остается прилепленным к таргету элементу.
 * 2. При скролле остаётся на месте (position: fixed)
 */
export function useAttachStyle(targetElRef: RefObject<Element>, fixedTo: Position = initialPosition): CSSProperties {
  const [leftTopFixedPosition, setLeftTopFixedPosition] = useState<CSSProperties>({
    position: 'fixed',
    left: `${Math.random() * -500}px`,
    top: `${Math.random() * -500}0px`,
    opacity: 0.2,
    transition: 'all .4s ease-in-out',
  })
  const [up, side] = fixedTo

  const translateCssProp = updateTranslate(fixedTo)

  const setPos = () =>
    setLeftTopFixedPosition((position) => {
      if (targetElRef.current) {
        const domRect = targetElRef.current.getBoundingClientRect()

        return {
          position: 'fixed',
          left: `${domRect[side]}px`,
          top: `${domRect[up] + window.scrollY}px`,
        }
      }

      return position
    })

  useEffect(() => {
    window.addEventListener('resize', setPos)
    return () => {
      window.removeEventListener('resize', setPos)
      resize_ob.disconnect()
    }
  }, [])

  const resize_ob = new ResizeObserver(function () {
    setPos()
  })

  useLayoutEffect(() => {
    setTimeout(() => resize_ob.observe(targetElRef.current as Element), 1000)
  }, [])

  useEffect(() => {
    setLeftTopFixedPosition((position) => {
      const domRect = targetElRef.current!.getBoundingClientRect()

      return {
        position: 'fixed',
        left: `${domRect[side]}px`,
        top: `${domRect[up] + window.scrollY}px`,
        opacity: 1,
        transition: 'all .8s ease-in-out',
      }
    })
  }, [targetElRef.current])

  return { ...leftTopFixedPosition, ...translateCssProp }
}
