import React from 'react';
import '../../../../index.scss';
import { MainBox } from './composite_box';

export const CompositeTest: React.FC = () => {
  {
    // example 1
    const rootBox = new MainBox(100);
    const branchBox_1 = new MainBox(50);
    const branchBox_2 = new MainBox(50);
    const branchBox_3 = new MainBox(50);
    const branchBox_4 = new MainBox(50);
    const box_1 = new MainBox(10);
    const box_2 = new MainBox(10);
    const box_3 = new MainBox(10);
    const box_4 = new MainBox(10);
    const box_5 = new MainBox(10);
    const box_6 = new MainBox(10);
    const box_7 = new MainBox(10);
    const box_8 = new MainBox(10);
    const box_9 = new MainBox(10);
    const box_10 = new MainBox(10);
    const box_11 = new MainBox(1);
    rootBox.add(branchBox_1);
    rootBox.add(branchBox_2);
    rootBox.add(branchBox_3);
    rootBox.add(branchBox_4);
    branchBox_1.add(box_1);
    branchBox_1.add(box_2);
    branchBox_1.add(box_3);
    branchBox_1.add(box_4);
    branchBox_2.add(box_5);
    branchBox_2.add(box_6);
    branchBox_2.add(box_7);
    branchBox_3.add(box_8);
    branchBox_3.add(box_9);
    branchBox_3.add(box_10);
    box_10.add(box_11);

    console.log('rootBox cost: ', rootBox.cost());
    console.log('branchBox 3 cost: ', branchBox_3.cost());
    console.log('box_10: ', box_10.cost());
  }

  return (
    <div className="AdapterTest">
      <h2>Composite boxes cost</h2>
    </div>
  );
};

export default CompositeTest;
