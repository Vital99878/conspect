import React from 'react'

interface KonvaTextEventTarget<Type> extends EventTarget {
  value: Type
}

export interface ValueMouseEvent<Type> extends React.MouseEvent<HTMLButtonElement> {
  target: KonvaTextEventTarget<Type>
}
