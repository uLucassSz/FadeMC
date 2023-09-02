import React from 'react'

export default function RegisterForm() {
  return (
    <>
        <input type="email" required placeholder='Digite seu endereço de e-mail'/>
        <input type="text" required placeholder='Digite seu nickname' />
        <input type="password" required placeholder='Digite sua senha' />
        <button type="submit">Registrar</button>
    </>
  )
}