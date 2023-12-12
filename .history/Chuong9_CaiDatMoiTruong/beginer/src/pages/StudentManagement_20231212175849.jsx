import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function StudentManagement() {
  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      <form className='mb-3'>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name:
          </label>
          <input type='text' name='name' className='form-control' />
        </div>
      </form>
    </div>
  )
}

export default StudentManagement
