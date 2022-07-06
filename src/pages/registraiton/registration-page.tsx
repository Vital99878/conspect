import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import { RegistrationForm } from './components/registration-form';

const RegistrationPage: React.FC = () => {
  return (
    <PageLayout pageHeading="Registration">
      <main className="registration-page">
        <RegistrationForm />
      </main>
    </PageLayout>
  );
};

export default RegistrationPage;
