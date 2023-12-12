import React from 'react'

function Input({ type, onChange, value, ...props }) {
  const handleChange = (e) => {
    const val = e.target.value
    if(type === 'number'){
      if(/^\d+$/.test(val) || val ==='')
    }
  }
  return <input type={type === 'number' ? 'text ' : type} value={value} onChange={handleChange} />
}

export default Input
