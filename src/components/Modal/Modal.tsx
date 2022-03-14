import React, { useEffect, useState, useRef, useCallback, MouseEventHandler } from 'react'
import './Modal.scss'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import useBehaviorSubject from '../../pages/rxjs/components/subject/hooks'
import CloseButton from '../CloseButton'
import { modalState } from './modalState'

type Props = {
  onClose?: any
  isUseClickOutside?: boolean
  isUseEscapeKey?: boolean
}

const Modal: React.FC<Props> = ({ isUseClickOutside = true, isUseEscapeKey = true }) => {
  const { field: isShow, updateField: setIsShow } = useBehaviorSubject(modalState, true)
  const modalRef = useRef(null)

  function closeByOverlay(evt: any) {
    if (evt.target !== evt.currentTarget) return
    setIsShow(false)
  }

  // isUseClickOutside ? useClickOutside(modalRef, onClose, [isShow]) : null // !not work
  isUseEscapeKey ? useEscapeKey(() => setIsShow(false)) : null

  if (!isShow) return null

  return (
    <div className={`modal-wrapper`} ref={modalRef} onClick={closeByOverlay}>
      <div className={'modal'}>
        <div className={'modal-heading'}>Modal heading</div>
        <div className={'modal-content'}>Modal Content</div>
        <CloseButton onClose={() => setIsShow(false)} />
      </div>
    </div>
  )
}

export default Modal
