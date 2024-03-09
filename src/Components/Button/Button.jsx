import React from 'react'

import styles from "./Button.module.css"

const Button = (props,...rest) => {
  console.log(props);
  
  return (
   <button 
   {...rest}
   className = {props.isOutline ? styles.outline_btn : styles.primary_btn }>
    
    {props.icon}
    {props.text}
   </button>
   
   
  )
}

export default Button;
