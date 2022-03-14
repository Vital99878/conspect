import React from 'react'
import './close-button.scss'
type Props = {
  onClose: () => void
}

const CloseButton: React.FC<Props> = ({onClose}) => {
  return <button className={'btn-close'} onClick={onClose}/>
}

export default CloseButton
