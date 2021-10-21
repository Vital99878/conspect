import {CSSProperties, useEffect, useState} from 'react';
type Gutters = {
    leftGutter?: number,
    rightGutter?: number
    topGutter?: number
    bottomGutter?: number
}
const initialGutters: Gutters = {leftGutter: 0, rightGutter: 0, bottomGutter: 0, topGutter: 0}

export function useAttachStyle(el: HTMLElement, gutters: Gutters = initialGutters) {
    const {leftGutter = 0, rightGutter = 0, topGutter = 0, bottomGutter = 0} = gutters
    const [position, setPosition] = useState(el.getBoundingClientRect())
    useEffect(() => {
        window.addEventListener('resize', () => {
            setPosition(el.getBoundingClientRect())
        })
    }, [])

    const {top, left, bottom, right} = position
    const style: CSSProperties = {position: 'fixed', left: `${right+rightGutter}px`, top: `${top+topGutter}px`}
    // const style: CSSProperties = {position: 'fixed', left: `${right+rightGutter}px`, top: `${top+topGutter}px`, right: `${right+leftGutter}px`}
    return style;
}
