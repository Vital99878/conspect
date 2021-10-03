import React, { useEffect, useRef } from 'react'
import { useWindowWidth } from '../../app/customHooks'
import './Test.css'
import { createPortal } from 'react-dom'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const Modal = ({ data }: any) => {
  console.log(data)
  const modal = (
    <div className="modal">
      <div className="modal__content">Modal window</div>
    </div>
  )
  return createPortal(modal, document.getElementById('root') as Element)
}

const ModalWidth = <>Modal Width</>

const Test: React.FC<TestPropsChildren> = () => {
  const windowWidth = useWindowWidth()
  return (
    <div className="list">
      <div>
        <p>{`width: ${windowWidth}`}</p>
      </div>
      <Modal data={'data from outer'} />
      Test component
    </div>
  )
}

export default Test
