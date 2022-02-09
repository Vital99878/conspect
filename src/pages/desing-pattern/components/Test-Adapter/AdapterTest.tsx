import React from 'react'
import '../../../../index.scss'
import { Target, TargetB, Adapter } from './adapter_2'
import { LightningToMicroUSBAdapter, IPhone7 } from './phoneAdapter'

export const AdapterTest: React.FC = () => {
  // example 1
  const target = new Target()
  const adaptee = new TargetB()
  const adapter = new Adapter(adaptee)
  // console.log('target: ', target)
  // console.log('adapter: ', adapter)

  // example 2 - Phone adapter
  const iphone = new IPhone7()
  const chargeAdaptor = new LightningToMicroUSBAdapter(iphone)
  chargeAdaptor.useMicroUSB()
  console.log('chargeAdaptor: ', chargeAdaptor)
  console.log('iphone: ', iphone)
  chargeAdaptor.iphoneDevice.useLightning()
  console.log(iphone === chargeAdaptor.iphoneDevice)

  return (
    <div className="AdapterTest">
      <h2>Example 1</h2>
      <div className={'my-buttons'}>
        <button onClick={() => target.request()}>without adapter</button>
        <button onClick={() => adapter.request()}>with adapter</button>
      </div>

      <h2>Phone adapter</h2>
      <div className={'my-buttons'}>
        <button onClick={() => iphone.useLightning()}>Iphone</button>
        <button onClick={() => chargeAdaptor.useMicroUSB()}>Iphone with adapter</button>
        <button onClick={() => chargeAdaptor.iphoneDevice.useLightning()}>Iphone with adapter</button>
      </div>
    </div>
  )
}

export default AdapterTest
