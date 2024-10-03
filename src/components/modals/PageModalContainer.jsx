import React from 'react'

export default function PageModalContainer({id, title, isOpenState, children}) {
  const [isOpen, setIsOpen] = isOpenState;

  return (
    <div id={id} className={`page-modal ${isOpen ? 'is-visible' : ''}`}>
        <header className="modal-header">
            <h3>{title}</h3>
            <i className="fas fa-times" onClick={() => setIsOpen(!isOpen)}></i>
        </header>
        <div className="modal-body">
            {children}
        </div>
    </div>
  )
}
