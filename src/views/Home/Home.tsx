import React from 'react'
import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-layout'>
        <div className='home-login'>
              <Login />
          </div>
          <div className='home-profile'>
              <Profile />
          </div>
      </div>
    </div>
  )
}

export default Home