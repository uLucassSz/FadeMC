import React, {useState} from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/Login/LoginForm';
import RegisterRegister from '../../components/Register/RegisterForm';

import './Login.css';

export default function Login() {

  const [showLogin, setShowLogin] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  }

  return (
    <>
        <Navbar /> 
        <div className="login-container">
            <div className='login-box'>
                <h4>{showLogin ? 'Entrar' : 'Registrar'}</h4>
                <form>
                    {showLogin ? <LoginForm /> : <RegisterRegister />}
                </form>

                {!showLogin && (
                    <span className='info' onClick={toggleForm}>Ainda não possui uma conta?</span>
                )}
                {showLogin && (
                    <span className='info' onClick={toggleForm}>Já possui uma conta?</span>
                )}
            </div>
        </div>

        <Footer />
    </>
  )
}