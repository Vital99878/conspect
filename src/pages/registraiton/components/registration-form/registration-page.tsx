import React, { useEffect, useState } from 'react'
import { RequiredInputWrapper } from './components'
import { of } from 'rxjs'
import Layout from '../../../../components/Layout/Layout';

const RegistrationPage = () => {
  return (
    <Layout pageHeading="Registration">
      <main className="registration-page">Registration form page</main>
    </Layout>
  )
}

export default RegistrationPage
