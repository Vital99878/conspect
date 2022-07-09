import React from 'react';
import '../../../../style/index.scss';
// import {} from './iterator'
// import {} from './iterator_2'

export const IteratorTest: React.FC = () => {
  // example 1

  return (
    <div className="IteratorTest">
      <h2>Iterator pattern</h2>
      <div className={'my-buttons'}>
        <button onClick={() => console.log('')}>current</button>
        <button onClick={() => console.log('')}>next</button>
        <button onClick={() => console.log('')}>previous</button>
        <button onClick={() => console.log('')}>reverse</button>
      </div>
    </div>
  );
};

export default IteratorTest;
