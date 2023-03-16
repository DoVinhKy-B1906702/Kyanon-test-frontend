import React, {useEffect, useState} from 'react'
import './Profile.scss'
import { Information, Alert } from '../../models';
import AlertInformation from '../Alert/AlertInformation';

const Profile = () => {
  const [information, setInformation] = useState<Information>({
    fullname: '',
    dateOfBirth: '',
    email: '',
    phone: '',
  });

  // alert
  const [alert, setAlert] = useState<Alert>({
    type: '',
    description: ''
  });
  const {type, description} = alert;
  const [showAlert, setShowAlert] = useState<Boolean>(false);

  const [validateEmailShow, setValidateEmailShow] = useState<Boolean>(false);
  const [validatePhoneShow, setValidatePhoneShow] = useState<Boolean>(false);
  const {fullname, dateOfBirth, email, phone} = information;


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  },[type, showAlert])

  const handleChangeInformation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      setInformation({
        ...information,
        [name]: value
      })
      console.log(value)
   }
  const handleCancelInformation = (e: React.FormEvent) => {
      e.preventDefault();
      setInformation({
        fullname: '',
        dateOfBirth: '',
        email: '',
        phone: '',
      })
      setValidateEmailShow(false);
      setValidatePhoneShow(false);
  }
  const handleBlurEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
     
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (!regEx.test(e.target.value)) {
        setValidateEmailShow(true);

        if(!e.target.value) {
          setValidateEmailShow(false)
         }
        return;
      }else {
        setValidateEmailShow(false);
      }
  }

  const handleBlurPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!regPhone.test(e.target.value)) {
      setValidatePhoneShow(true);
      if(!e.target.value) {
        setValidatePhoneShow(false)
       }
      return;
    }else {
      setValidatePhoneShow(false);
    }
}
  const handleSubmitInformation = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      const regPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;


     if (!regEx.test(information.email)) {
          setValidateEmailShow(true);
          setAlert({type:'error', description:'Email is incorrect'});
          setShowAlert(true);
  
          return
      }

      if (!regPhone.test(information.phone)) {
        setValidatePhoneShow(true);
        setAlert({type:'error', description:'Phone is incorrect'});
        setShowAlert(true);
       
        return;
    }

    setAlert({type:'success', description:'OK'});
    setInformation({
      fullname: '',
      dateOfBirth: '',
      email: '',
      phone: '',
    })
    setShowAlert(true);
    

    

      console.log(information)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='profile'>
      {showAlert &&<div>
         
            <AlertInformation type={type} description={description} />
          
        </div> }
      <form>
        <div className='title-profile'>
          Profile
        </div>
        <div className='d-flex mg-24'>
          <label htmlFor='fullname' className='title-label'>Full name:</label>
          <input 
            className='input-value'
            type='text'
            id='fullname'
            name='fullname'
            value={fullname}
            onChange={handleChangeInformation}
          />
        </div>
        <div className='d-flex mg-24'>
          <label className='title-label' htmlFor='dateOfBirth'>Day Of Birth:</label>
          <input 
           type='text'
            className='input-value'
            id='dateOfBirth'
            name='dateOfBirth'
            value={dateOfBirth}
            onChange={handleChangeInformation}
          />
        </div>
        <div className='d-flex mg-24'>
          <label className='title-label' htmlFor='emailInfo'>Email:</label>
          <input
            type='email'
            className={validateEmailShow ? 'input-value-danger' : 'input-value'}
            id='emailInfo'
            name='email'
            value={email}
            onChange={handleChangeInformation}
            onBlur={handleBlurEmail}
            />
            {validateEmailShow && <div className='dangerous'>This syntax is incorrect!</div> }
        </div>
        <div className='d-flex'>
          <label className='title-label' htmlFor='phone'>Phone:</label>
          <input 
             className={validatePhoneShow ? 'input-value-danger' : 'input-value'}
             id='phone'
             name='phone'
             type='text'
             value={phone}
             onChange={handleChangeInformation} 
             onBlur={handleBlurPhone}
            />
            {validatePhoneShow && 
            <div>
              <div className='dangerous'>Phone Number must begin with 0 || 84 then 3, 5, 7, 8, 9 and must have length is 10. </div>
            </div>
            }
        </div>
        <div className='layout-handle'>
          <div className='layout-btn'>
            <button className='btn-update' type='submit' onClick={handleSubmitInformation}>Update</button>
            <button className='btn-cancel' onClick={handleCancelInformation}>Cancel</button>
          </div>
         
        </div>
      </form>
      
    </div>
  )
}

export default Profile