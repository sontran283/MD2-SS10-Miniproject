import React from 'react';
import Sidebar from '../../layouts/admin/sidebar/Sidebar';
import Header from '../../layouts/admin/header/Header';

export default function HomeAdmin() {
  return (
    <div>
      <div className='d-flex'>
        <Sidebar />

        <div className='d-flex flex-column ' style={{ flex: 1 }}>
          <Header />
          <h1>trang chủ admin</h1>
        </div>
      </div>
    </div>
  )
}
