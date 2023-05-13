import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/headers/Header'
import InputLogin from '../../components/login/InputLogin'
import Navbar from '../../components/navbar/Navbar'

import './login.css'

const Login = () => {
  return (
    <div className='login-page'>
      <Header/>
        <Navbar/>
        <div className='login-card'>
            <InputLogin/>
        </div>
        <Footer/>
    </div>
  )
}

export default Login
