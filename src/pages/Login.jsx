import React from 'react'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Button from '../components/base/button/Button';
import "./login.css"
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <Navbar />
            <div
                style={{ minHeight: "100vh" }}
                className='d-flex justify-content-center align-items-center'>
                <form className="form-container">
                    <h3 className='text-center p-3 '>Form Login</h3>
                    <div className='form-group'>
                        <labe className='form-label' htmlFor="">Email</labe>
                        <input className='form-input' type="text" id="email" placeholder='nhập địa chỉ email' />
                    </div>
                    <div className='form-group'>
                        <labe className='form-label' htmlFor="">Password</labe>
                        <input className='form-input' type="password" id="password" placeholder='nhập mật khẩu' />
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
        </>
    )
}
