import React from 'react'
import './RequiredInputWrapper.scss'

type Props = {
  props: {
    isRequired: boolean
    message: string
  }
  children: JSX.Element
}

const Required: React.FC<Props> = ({ children, props = { isRequired: false, message: '' } }) => {
  return (
    <label className="label">
      input
      {children}
      {props.isRequired ? <span>{props.message}</span> : null}
    </label>
  )
}

export default Required
