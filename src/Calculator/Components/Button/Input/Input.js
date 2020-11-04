import React, {useEffect, useRef} from 'react'
import classes from '../Input/Input.module.css'

const Input = props => {
   
   const input = useRef(null);
   
   useEffect(() => {
      input.current.focus()
   })

   const cls = [
      classes.input,
      props.input.length >= 8 ? classes.inputFS : null
   ]

   return (
      <div 
         ref={input}
         className={cls.join(' ')}
         onKeyDown={props.onKey}
         onKeyUp={props.ofKey}
         tabIndex='0'
      >
         {props.input}
      </div>
   )
}

export default Input