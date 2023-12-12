import React from 'react'

function Input({ type, onChange, value, ...props }) {
  return <input type={type === 'number' ? 'text ' : type} value={value} onChange={handleChange} />
}

export default Input
