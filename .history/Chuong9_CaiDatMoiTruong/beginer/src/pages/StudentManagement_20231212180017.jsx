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
          <input type='text' id='name' className='form-control' placeholder='Nhập tên ' />
        </div>
        <div className='mb-3'>
          <label htmlFor='age' className='form-label'>
            Name:
          </label>
          <input type='text' id='age' className='form-control' placeholder='Nhập tuổi ' />
        </div>
      </form>
    </div>
  )
}

export default StudentManagement
