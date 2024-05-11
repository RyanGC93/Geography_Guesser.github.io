import React from 'react'

const Modal = ({ isOpen, close, isCorrect, children }) => {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          padding: '20px',
          background: 'white',
          borderRadius: '5px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        {children}
        <button onClick={close} style={{ marginTop: '10px' }}>
          Close
        </button>
        {isCorrect =>{
        <button onClick={close} style={{ marginTop: '10px' }}>
          Next
        </button>

        }}
      </div>
    </div>
  )
}

export default Modal
