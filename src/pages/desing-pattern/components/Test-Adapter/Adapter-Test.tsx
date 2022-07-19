import React from 'react';
import '../../../../style/index.scss';
import { Adapter_AtoB, TargetA, TargetB } from './adapter_2';
import { IPhone7, LightningToMicroUSBAdapter } from './phoneAdapter';

export const AdapterTest: React.FC = () => {
  // example 1
  const targetA = new TargetA();
  const targetB = new TargetB();
  const adapter = new Adapter_AtoB(targetB);
  // console.log('targetA: ', targetA)
  // console.log('adapter: ', adapter)

  // example 2 - Phone adapter
  const iphone = new IPhone7();
  const chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
  chargeAdaptor.useMicroUSB();
  console.log('chargeAdaptor: ', chargeAdaptor);
  console.log('iphone: ', iphone);
  chargeAdaptor.iphoneDevice.useLightning();
  console.log(iphone === chargeAdaptor.iphoneDevice);

  return (
    <div className="AdapterTest">
      <h2>Example 1</h2>
      <div className={'my-buttons'}>
        <button onClick={() => targetA.requestA()}>Target A request</button>
        <button onClick={() => adapter.requestA()}>Target A request adapted to Target B</button>
      </div>

      <h2>Phone adapter</h2>
      <div className={'my-buttons'}>
        <button onClick={() => iphone.useLightning()}>Iphone</button>
        <button onClick={() => chargeAdaptor.useMicroUSB()}>Iphone with micro usb adapter</button>
        <button onClick={() => chargeAdaptor.iphoneDevice.useLightning()}>Use IPhone from adapter(obj ref) </button>
      </div>
    </div>
  );
};

export default AdapterTest;
