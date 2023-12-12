import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import StudentItem from '../component/StudentItem'
import Input from '../component/Input'
function StudentManagement() {
  const [name, setNAme] = useState('')
  const [age, setAge] = useState('')
  const [students, setStudents] = useState([])
  const handleChange = (setFunc) => (e) => setFunc(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '' && age !== '') {
      setStudents((prevStudent) => [
        ...prevStudent,
        {
          id: new Date().toISOString,
          name,
          age
        }
      ])
      setNAme('')
      setAge('')
    }
  }
  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      <form className='mb-3' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name:
          </label>
          <Input
            type='text'
            id='name'
            className='form-control'
            placeholder='Nhập tên '
            value={name}
            onChange={handleChange(setNAme)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='age' className='form-label'>
            Name:
          </label>
          <Input
            type='number'
            id='age'
            className='form-control'
            placeholder='Nhập tuổi '
            value={age}
            onChange={handleChange(setAge)}
          />
        </div>
        <div>
          {' '}
          <button className='btn btn-primary' type='submit'>
            Thêm
          </button>
        </div>
      </form>
      <ul className='list-group'>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
      </ul>
    </div>
  )
}

export default StudentManagement
