import React from 'react'

function Input({ type, onChange, value, ...props }) {
  return (
    <input
      type={type === 'number' ? 'text ' : type}
      id='name'
      className='form-control'
      placeholder='Nhập tên '
      value={name}
      onChange={handleChange(setNAme)}
    />
  )
}

export default Input
