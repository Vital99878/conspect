import React, { useState } from 'react';
import './withNumber.scss';

type Gradient = 'current' | 'checked' | 'hidden';

type Props = {
  step: number;
  title: string;
  Comp: React.FC;
};

export default function WithNumber({ step, title, Comp }: Props) {
  const [status, setStatus] = useState<Gradient>('hidden');

  return (
    <div className={'withNumber'}>
      <span className={'withNumber--step'}>{step}</span>

      <h2 className={'withNumber--title'}>{title}</h2>
      <div className={'withNumber--component'}>
        <Comp />
      </div>
    </div>
  );
}
