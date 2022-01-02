import React from 'react'
import './registration-form.scss'

type Props = {
  props?: {
    data: string
  }
}

const RegistrationForm: React.FC<Props> = ({ props }) => {
  return <form className="registrationForm">reg Form</form>
}

export default RegistrationForm
