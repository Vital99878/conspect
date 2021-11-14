import {CSSProperties, useEffect, useState} from 'react';

type Position = ['left' | 'right', 'top' | 'bottom']
type Side = 'left' | 'right' | 'top' | 'bottom'

const initialPosition: Position = ['right', 'top']
const sideReverse = (side: Side) => {
    if (side === 'left') return 'right'
    if (side === 'right') return 'left'
    return side
}

export function useAttachStyle(el: HTMLElement, fixedTo: Position = initialPosition) {
    const [position, setPosition] = useState(el.getBoundingClientRect())
    console.log(position)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setPosition(el.getBoundingClientRect())
        })
    }, [])

    // return fixedTo.reduce((style, side) => {
    //     style[sideReverse(side)] = `${position[side]}px`
    //     return style
    // }, {position: 'fixed'} as CSSProperties)
    // right - left = left + pos.left

    // const style: CSSProperties = {position: 'fixed', left: `${position.left + position.width}px`, top: `${position.top}px`}
    const style: CSSProperties = {position: 'fixed', left: `${position.right}px`, top: `${position.top}px`}
    return style
}
