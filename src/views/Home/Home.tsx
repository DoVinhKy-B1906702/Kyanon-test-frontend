import React from 'react'
import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='grid wide'>
        <div className='row no-gutters layout-center'>
          <div className='col l-6 m-12 c-12'>
            <div className='home-login'>
                  <Login />
              </div>
            </div>
            <div className='col l-6 m-12 c-12 col-profile'>
              <div className='home-profile'>
                  <Profile />
              </div>
            </div>
            
          
          
        </div>
      </div>
      
    </div>
  )
}

export default Home