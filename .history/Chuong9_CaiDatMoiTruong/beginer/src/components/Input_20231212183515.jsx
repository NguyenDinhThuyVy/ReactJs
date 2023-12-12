import React from 'react'

function Input({ type, onChange, value, ...props }) {
  return (
    <input
      type={type}
      id={props.id}
      className='form-control'
      placeholder='Nhập tên '
      value={value}
      onChange={handleChange(setNAme)}
    />
  )
}

export default Input
