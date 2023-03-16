import React, {useState} from 'react'
import './Login.scss'
import { User } from '../../models';
const Login = () => {
   const [showPassword, setShowPassword] = useState<Boolean>(false); 
   const [data, setData] = useState<User>({
    email: '',
    password: ''
   })
  

   const {email, password} = data;
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      setData({
        ...data,
        [name]: value
      })
      console.log(value)
   }

   const handleSubmitLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data)
   }
   const handleShowPass = () => {
        setShowPassword((prev) => !prev)
        
   }
   
  return (
    <div className='login'>
      <form className='form-login'>
        <div>
          <div className='title-text'>Login</div>
        </div>
        <div className='d-flex layout-item'>   
            <label htmlFor='email' className='attri-title'>Email:</label>
            <input 
              type='text' 
              name='email' 
              id='email'
              className='input-email'
              placeholder='example@kyanon.digital' 
              value={email}
              onChange={handleChange}
            />
          
           
        </div>
        <div className='d-flex layout-item'>
            <label htmlFor='password' className='attri-title'>Password:</label>
            <input 
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              className='input-password'
              placeholder='******' 
              value={password}
              onChange={handleChange}
            />
        </div>
        <div className='layout-submit'>
          <div>
            <input 
              className='check-pass' 
              type='checkbox' 
              id='showpass'
              onClick={handleShowPass} 
            />
            <label htmlFor='showpass' className='show-pass'>Show password</label>
          </div>
          <div>
          <button
            type='submit'
            className='btn-sign' 
            onClick={handleSubmitLogin}
          >
            Sign in
          </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login