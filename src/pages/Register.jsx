import React, { useState } from 'react'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
import Button from '../components/base/button/Button';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }



  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: "100vh" }}
        className='d-flex justify-content-center align-items-center'>
        <form className="form-container" onSubmit={handleSubmit}>
          <h3 className='text-center p-3 '>Form Register</h3>
          <div className='form-group'>
            <labe className='form-label' htmlFor="">User name</labe>
            <input name='userName' onChange={handleChange} className='form-input' type="text" id="name" placeholder='nhập họ và tên' />
          </div>
          <div className='form-group'>
            <labe className='form-label' htmlFor="">Email</labe>
            <input name='email' onChange={handleChange} className='form-input' type="text" id="email" placeholder='nhập địa chỉ email' />
          </div>
          <div className='form-group'>
            <labe className='form-label' htmlFor="">Password</labe>
            <input name='password' onChange={handleChange} className='form-input' type="password" id="password" placeholder='nhập mật khẩu' />
          </div>
          <div className='mt-3'>
            <Button size="100%" title='login' type="primary" >Login</Button>
          </div>
          <div className='mt-3 d-flex justify-content-between'>
            <Link to={"/"}>Quay lại trang chủ</Link>
            <Link>Quên mật khẩu</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
