import React from 'react'

const Modal = ({children,id}) => {
  return (
    <div className="modalContainer" id={id}>
    <div className="modal">
    {children}
    </div>
    </div>
  )
}

export default Modal