import React from 'react'
import PropTypes from 'prop-types'

function Input({ type, onChange, value, ...props }) {
  const handleChange = (e) => {
    const val = e.target.value
    if (type === 'number') {
      if (/^\d+$/.test(val) || val === '') {
        onChange(val)
      } else {
        onChange(val)
      }
    }
  }
  return <input type={type === 'number' ? 'text ' : type} value={value} onChange={handleChange} {...props} />
}
Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default Input
