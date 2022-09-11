import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import LinkAsButton from '../../briks/link-as-button/LinkAsButton';
import './buttons-and-links.scss';
import Button from '../../briks/button/Button';
import Select from '../../briks/select/Select';

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode;
};

const Bricks: React.FC<TestPropsChildren> = () => {
  return (
    <PageLayout pageHeading="Buttons and links">
      <div className="bricks">
        <section className={'bricks__select'} >
          <h2>Select</h2>
          <Select />
        </section>
        <section className={'flow'}>
          <h2>Button</h2>
          <div className={'bricks__btn-primary flow-row'}>
            <Button primary>Primary</Button>
            <Button primary disabled>
              Primary disabled
            </Button>
            <LinkAsButton secondary to={''}>
              Go
            </LinkAsButton>
          </div>
          <div className={'bricks__btn-secondary flow-row'}>
            <Button secondary>Secondary</Button>
            <Button secondary disabled>
              Primary disabled
            </Button>
          </div>
          <div className={'bricks__btn-transparent flow-row'}>
            <Button transparent>Transparent</Button>
            <Button transparent disabled>
              Primary disabled
            </Button>
          </div>
        </section>
        <section className={'flow'}>
          <h2>Link as button</h2>
          <div className={'bricks__link-secondary'}>
            <LinkAsButton primary to={''}>
              Primary
            </LinkAsButton>
            <LinkAsButton primary to={''} disabled>
              Primary disabled
            </LinkAsButton>
          </div>
          <div className={'bricks__link-secondary'}>
            <LinkAsButton secondary to={''}>
              Secondary
            </LinkAsButton>
            <LinkAsButton secondary to={''} disabled>
              Secondary disabled
            </LinkAsButton>
          </div>
          <div className={'bricks__link-transparent'}>
            <LinkAsButton transparent to={''}>
              Secondary
            </LinkAsButton>
            <LinkAsButton transparent to={''} disabled>
              Secondary disabled
            </LinkAsButton>
          </div>
        </section>
        <section className={'flow'} style={{ gap: '1rem' }}>
          <Button secondary>Btn</Button>
          <LinkAsButton secondary to={''}>
            Go
          </LinkAsButton>
        </section>

      </div>
    </PageLayout>
  );
};

export default Bricks;
