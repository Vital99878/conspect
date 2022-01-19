import React, { useEffect, useState } from 'react'
import './Modal.scss'
type Props = {
  props: {
    show: boolean
  }
}

const Modal: React.FC<Props> = ({ props }) => {
  const [shouldShow, setShouldShow] = useState(props.show)
  // useEffect(() => {
  //     const data$ = of([1, 2, 3])
  //     data$.subscribe((data) => setData(data))
  // })
  if (!shouldShow) null

  return (
    <div className={`modal-wrapper`}>
      <div className={'modal'}>Modal window</div>
    </div>
  )
}

export default Modal
