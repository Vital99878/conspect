import React from 'react';
import '../../../../style/index.scss';

export const PrototypeTest: React.FC = () => {
  return (
    <div className="PrototypeTest">
      <div className={'my-buttons'}>
        <button onClick={() => console.log('')}>Set state Done</button>
        <button onClick={() => console.log('')}>Set state to Doing</button>
        <button onClick={() => console.log('')}>Request 1 from object</button>
        <button onClick={() => console.log('')}>Request 2 from object</button>
      </div>
    </div>
  );
};

export default PrototypeTest;
