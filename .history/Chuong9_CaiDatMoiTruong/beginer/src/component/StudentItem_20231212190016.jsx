import React from 'react'
import PropTypes from 'prop-types'
function StudentItem({ student }) {
  return (
    <li className='list-group-item' key={student.id}>
      <span className='me-3'>
        {student.name}:{student.age} age
      </span>
      <div className='btn-group'>
        <button type='button' className='btn btn-info'>
          Edit
        </button>
        <button type='button' className='btn btn-danger'>
          Remove
        </button>
      </div>
    </li>
  )
}

export default StudentItem
