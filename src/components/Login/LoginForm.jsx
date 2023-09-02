import React from 'react'

export default function LoginForm() {
  return (
    <>
        <input type="text" required placeholder='Digite seu nickname' />
        <input type="password" required placeholder='Digite sua senha' />
        <span className='info'>Esqueci minha senha</span>
        <button type="submit">Entrar</button>
    </>
  )
}