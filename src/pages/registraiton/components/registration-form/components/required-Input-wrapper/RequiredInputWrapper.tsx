import React, { useEffect, useRef } from 'react'
import './RequiredInputWrapper.scss'

type Props = {
  props?: {
    isRequired: boolean
    message: string
  }
  children: JSX.Element
}

const Required: React.FC<Props> = ({ children, props = { isRequired: false, message: '' } }) => {
  const labelRef = useRef<HTMLLabelElement>(null)
  useEffect(() => {
    if (labelRef.current) {
      const mainElement = labelRef.current.children[0] as HTMLElement
      const appendElement = document.createElement('div')
      appendElement.textContent = 'added div'
      mainElement.appendChild(appendElement)
      appendElement.style.backgroundColor = 'red'
      appendElement.style.position = 'absolute'
      appendElement.style.top = '1rem'
      appendElement.style.left = '10rem'
      appendElement.style.opacity = '50%'
    }
  }, [])
  return (
    <label className="label" ref={labelRef}>
      input
      {children}
      {props.isRequired ? <span>{props.message}</span> : null}
    </label>
  )
}

export default Required
