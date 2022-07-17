import React from 'react';
import './registration-form.scss';
import RequiredMessage from './components/requiredMessage/RequiredMessage';
import { useRegistrationFormStateLogic } from './hooks/useRegistrationFormStateLogic';

/**
 * @description Форма регистрации с валидаыцией данных перед отправкой на сервер.
 */

const RegistrationForm: React.FC = () => {
  const {
    firstName,
    lastName,
    phone,
    email,
    isSubmitDisabled,
    onChangeFirstName,
    onChangeLastName,
    onChangeEmail,
    onChangePhone,
    onSubmit,
    requiredFirstNameProps,
    requiredLastNameProps,
    requiredPhoneProps,
    requiredEmailProps,
  } = useRegistrationFormStateLogic();

  return (
    <form className="registrationForm" onSubmit={onSubmit}>
      <div className={'item'}>
        <input type="text" required value={firstName} id={'firstName'} onChange={onChangeFirstName}/>
        <label className={firstName && 'hasValue'}>First name</label>
        <RequiredMessage className={'requiredMessage'} props={requiredFirstNameProps} />
      </div>
      <label>
        Last name
        <input type="text" value={lastName} onChange={onChangeLastName} placeholder={'Last name'}/>
        <RequiredMessage className={'requiredMessage'} props={requiredLastNameProps} />
      </label>
      <label>
        Email
        <input type="email" required onChange={onChangeEmail} value={email} />
        <RequiredMessage className={'requiredMessage'} props={requiredEmailProps} />
      </label>
      <label>
        Phone
        <input type="tel" required onChange={onChangePhone} value={phone} />
        <RequiredMessage className={'requiredMessage'} props={requiredPhoneProps} />
      </label>
      <button disabled={isSubmitDisabled} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
