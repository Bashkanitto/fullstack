import React from 'react'

const Login = () => {
  return (
    <div className="container login">
<h3>Авторизация</h3>
<form classname="form form-login" onSubmit={(e)=>{e.preventDefault()}}>

  <div className='input'>
    <input 
      type="email" 
      name='email'
      className='email'
      placeholder='Email'
    />

  <div className='input'>
    <input 
      type="password"  
      name='password'
      className='password'
      placeholder='Password'
    />
  </div> 

  </div>     

</form>
<button>Войти</button>
<a href="/register">Нет аккаунта?</a>
</div>
  )
}

export default Login