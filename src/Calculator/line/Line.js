import React from 'react'
import classes from './Line.module.css'
import ButtonNumber from '../Components/Button/ButtonNumber'

const Line = props => {
   return (
      <ul className={classes.Line}>
         {props.buttons.map((button1, index) => {
            return (
               <ButtonNumber
                  key={index}
                  button={button1}
                  keyPressed={props.keyPressed}
                  handlerClear={props.handlerClear}
                  handlerClick={props.handlerClick}
                  handlerEqual={props.handlerEqual}
                  handlerProzent={props.handlerProzent}
               />
            )
         })}
      </ul>
   )
}

export default Line