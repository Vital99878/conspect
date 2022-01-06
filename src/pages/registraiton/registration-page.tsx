import React from 'react'
import Layout from '../../components/Layout/Layout'
import { RegistrationForm } from './components/registration-form'

const RegistrationPage: React.FC = () => {
  return (
    <Layout pageHeading="Registration">
      <main className="registration-page">
        <RegistrationForm />
      </main>
    </Layout>
  )
}

export default RegistrationPage
