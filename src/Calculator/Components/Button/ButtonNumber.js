import React from 'react'
import classes from './ButtonNumber.module.css'

const isOperator = val => {
   return !isNaN(val) || val === '.';
}



const ButtonNumber = props => {

   let cls = [
      classes.ButtonNumber,
      classes.active,
      isOperator(props.button.buttonName) ? null : classes.Operator,
      props.button.buttonName === '0' ? classes.zero : null,
      props.button.buttonName === props.keyPressed 
      || props.button.buttonName === '=' && props.keyPressed === 'Enter' 
      || props.button.buttonName === 'AC' && props.keyPressed === 2 ? classes.activeDown : null,
      props.button.buttonName === 'AC' || props.button.buttonName === '-+' || props.button.buttonName === '%' ? classes.grey : null,
   ]

   function allClick() {
      if (props.button.buttonName === 'AC') {
         return props.handlerClear
      }
      if (props.button.buttonName === '=') {
         return props.handlerEqual
      }
      if (props.button.buttonName === '%') {
         return props.handlerProzent
      }
      else {
         return () => props.handlerClick(props.button.buttonName)
      }
   }
   

   return (
      <li 
         className={cls.join(' ')}
         onClick={allClick()}
      >
         {props.button.buttonName}
      </li>
   )
}

export default ButtonNumber