import React,{useState} from 'react'
import AuthPage from './AuthPage'
import axios from 'axios'

  const Register = () => {


    const[form, setForm] = useState({
      email:'',
      password:''
    })
  
    const handleChange = (e) => {
       setForm({...form,[e.target.name]: e.target.value
      })
    }
  
   const registerHandler = async ()=>{
      try{
        await axios.post('/api/auth/registration', {...form},{
          headers: {
            'Content-Type': 'application/json'
          }
        }) 
      }
      catch(err){
        console.log(err)
      }
    }
  
  return (
    
    

    <div className="container register">
    <h3>Регистрация</h3>
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
    <button onClick={registerHandler()}>Регистрация</button>
    <a href="/login">Есть аккаунт?</a>
</div>

  )
}

export default Register