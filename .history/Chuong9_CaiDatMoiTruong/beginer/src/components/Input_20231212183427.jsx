import React from 'react'

function Input({ type, onChange, value, ...props }) {
  return (
    <input
      type='text'
      id='name'
      className='form-control'
      placeholder='Nhập tên '
      value={name}
      onChange={handleChange(setNAme)}
    />
  )
}

export default Input
