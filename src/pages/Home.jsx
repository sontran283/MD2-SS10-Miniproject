import React from 'react'
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Button from '../components/base/button/Button';

export default function Home() {
    return (
        <div>
            <Navbar />
            <h2>đây là trang chủ</h2>
            <Button title="them moi" size={120} type="primary" />
            <Button title="them moi" size={120} type="danger" />
            <Footer />
        </div>
    )
}
