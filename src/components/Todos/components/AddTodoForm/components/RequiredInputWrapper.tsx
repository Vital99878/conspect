import React, {useEffect, useState} from 'react'
import './RequiredInputWrapper.scss'

type Props = {
  props: {
    isRequired: boolean,
    message: string
  },
  children: JSX.Element
}


const Required: React.FC<Props> = ({ children, props}) => {
  return (
    <label className='label'>
      input
      {children}
       {props.isRequired && <span>{props.message}</span>}
    </label>
  )
}

export default Required
