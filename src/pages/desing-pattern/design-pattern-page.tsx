import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import NavCard from '../../components/Navigation/components/NavCard/NavCard';
import './design-pattern-page.scss';

const DesignPatternPage: React.FC = () => {
  return (
    <PageLayout pageHeading="Design patterns">
      <main className="designPattern-page">
        <NavCard title={'singleton'} desc={'desc 2'} />
        <NavCard title={'state'} desc={'desc 2'} />
        <NavCard title={'builder'} desc={'desc 2'} />
        <NavCard title={'adapter'} desc={'desc 2'} />
        <NavCard title={'composite'} desc={'desc 2'} />
        <NavCard title={'command'} desc={'desc 2'} />
        <NavCard title={'iterator'} desc={'desc 2'} />
        <NavCard title={'prototype'} desc={'desc 2'} />
        <NavCard title={'abstractFactory'} desc={'desc 2'} />
      </main>
    </PageLayout>
  );
};

export default DesignPatternPage;
