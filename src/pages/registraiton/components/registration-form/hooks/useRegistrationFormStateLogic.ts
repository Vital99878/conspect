import { ChangeEvent, FormEvent, useState } from 'react'
import { emailChecker, formatPhoneNumber, lengthChecker, phoneChecker, reformatPhoneNumber } from '../utils'

/**
 * @description Вся state logic компонента RegistrationForm.
 * Также здесь все пропсы для компонента RequiredMessage
 * После сабмита блокирует Submit до получения ответа с сервера.
 */

export const useRegistrationFormStateLogic = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('8')
  const [isSubmit, setIsSubmit] = useState(false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const requiredFirstNameProps = lengthChecker(firstName, 3, 'min length 3 ch')
  const requiredLastNameProps = lengthChecker(lastName, 3, 'min length 3 ch')
  const requiredEmailProps = emailChecker(email)
  const requiredPhoneProps = phoneChecker(reformatPhoneNumber(phone))
  const isAllValid =
    !requiredFirstNameProps.isRequired &&
    !requiredLastNameProps.isRequired &&
    !requiredEmailProps.isRequired &&
    !requiredPhoneProps.isRequired

  function onChangeFirstName(evt: ChangeEvent<HTMLInputElement>) {
    const firstName = evt.target.value
    setFirstName(firstName)
  }
  function onChangeLastName(evt: ChangeEvent<HTMLInputElement>) {
    const lastName = evt.target.value
    setLastName(lastName)
  }
  function onChangeEmail(evt: ChangeEvent<HTMLInputElement>) {
    setEmail(evt.target.value)
  }
  function onChangePhone(evt: ChangeEvent<HTMLInputElement>) {
    const reformatNumber = reformatPhoneNumber(evt.target.value)
    setPhone(formatPhoneNumber(reformatNumber))
  }
  function clearAllState() {
    setFirstName('')
    setLastName('')
    setPhone('8')
    setEmail('')
    setIsSubmit(false)
    setIsSubmitDisabled(false)
  }
  function onSubmit(evt: FormEvent) {
    evt.preventDefault()
    setIsSubmit(true)
    if (isAllValid) {
      console.log('submit')
      setIsSubmitDisabled(true)
      fakeResponseFromServer()
      return { firstName, lastName, email, phone: +reformatPhoneNumber(phone) }
    }
  }
  function fakeResponseFromServer() {
    setTimeout(() => {
      clearAllState()
      console.log('need show some notice')
    }, 1000)
    setTimeout(() => {
      console.log('and after some delay push to another route')
    }, 2000)
  }

  return {
    firstName,
    onChangeFirstName,
    lastName,
    onChangeLastName,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
    onSubmit,
    isSubmit,
    isSubmitDisabled,
    requiredFirstNameProps: isSubmit ? requiredFirstNameProps : undefined,
    requiredLastNameProps: isSubmit ? requiredLastNameProps : undefined,
    requiredEmailProps: isSubmit ? requiredEmailProps : undefined,
    requiredPhoneProps: isSubmit ? requiredPhoneProps : undefined,
    isAllValid,
  }
}
