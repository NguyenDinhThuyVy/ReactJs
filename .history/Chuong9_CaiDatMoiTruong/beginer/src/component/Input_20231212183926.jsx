import React from 'react'

function Input({ type, onChange, value, ...props }) {
  const handleChange = (e) => {
    const val = e.target.value
  }
  return <input type={type === 'number' ? 'text ' : type} value={value} onChange={handleChange} />
}

export default Input
