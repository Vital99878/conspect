import {CSSProperties} from 'react';

export type TSides = 'top' | 'left' | 'right' | 'bottom';
export type TBallPos = Pick<CSSProperties, TSides>
