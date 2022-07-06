import { TBallPos } from './models/ball.model'
import { fromEvent } from 'rxjs'
import { map, switchMap, takeUntil } from 'rxjs/operators'
import { useEffect, useState } from 'react'

export type PositionPx = { left: `${number}px`; right: `${number}px` }

export const usePosition = (initialPosition: PositionPx): TBallPos => {
  const [position, setPosition] = useState({ left: '100px', top: '300px' })

  useEffect(() => {
    const $up = fromEvent(document, 'mouseup')
    const $down = fromEvent(document.getElementsByClassName('ball'), 'mousedown')
    const $move = fromEvent(document, 'mousemove').pipe(
      map((event: MouseEventInit) => {
        return { left: `${event.clientX}px`, top: `${event.clientY}px` }
      })
    )

    $down.pipe(
      switchMap(
        () => $move
        .pipe(takeUntil($up))))
      .subscribe((position) => setPosition(position))
  }, [])

  return position
}


