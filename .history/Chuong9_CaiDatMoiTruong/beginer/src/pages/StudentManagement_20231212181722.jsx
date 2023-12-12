import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function StudentManagement() {
  const [name, setNAme] = useState('')
  const [age, setAge] = useState('')
  const [students, setStudents] = useState([])
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
        <div>
          {' '}
          <button className='btn btn-primary' type='submit'>
            Thêm
          </button>
        </div>
      </form>
      <ul className='list-group'>
        <li className='list-group-item'>
          <span className='me-3'>Zyzy:21 age</span>
          <div className='btn-group'>
            <button type='button' className='btn btn-info'>
              Edit
            </button>
            <button type='button' className='btn btn-danger'>
              Remove
            </button>
          </div>
        </li>
        <li className='list-group-item'>
          <span className='me-3'>Zyzy:21 age</span>
          <div className='btn-group'>
            <button type='button' className='btn btn-info'>
              Edit
            </button>
            <button type='button' className='btn btn-danger'>
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default StudentManagement
