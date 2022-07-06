import React from 'react';

interface ValueEventTarget<Type> extends EventTarget {
  value: Type;
}

export interface ValueMouseEvent<Type> extends React.MouseEvent<HTMLButtonElement> {
  target: ValueEventTarget<Type>;
}

export type InputChangeEvent = React.MouseEvent<HTMLInputElement>;

export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;
