import React from 'react'
import { Alert} from '../../models'
import './Alert.scss'
const AlertInformation = (props: Alert) => {
  return (
    <div className='alert' >
      <div className={props.type}>
      {props.description} !!
      </div>
      <span className='count-down'></span>
    </div>
    
  )
}

export default AlertInformation