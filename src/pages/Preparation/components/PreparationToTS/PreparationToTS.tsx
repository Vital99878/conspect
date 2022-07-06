import React from 'react';
import PageLayout from '../../../../components/Layout/PageLayout';
import { Person, ITPerson } from '../../../shared/Person.class';

const PreparationToTS: React.FC = () => {
  // Closer
  {
    // console.log(`%cCloser block start`, 'color:darkgreen; font-size: 16px')
    // console.log(`%cCloser block finished`, 'color:tomato; font-size: 14px')
  }
  const person = new Person('Vital', 25, 'pp');
  const itPerson = new ITPerson('Nikaly', 30, 'back');
  person.orientation = 'gay';
  person.orientation = 'hetero';
  console.log('person: ', person.orientation);
  console.log('itPerson: ', itPerson);

  return (
    <PageLayout pageHeading="Preparation To TS">
      <div className="test-components">Preparation to TS</div>
    </PageLayout>
  );
};

export default PreparationToTS;
