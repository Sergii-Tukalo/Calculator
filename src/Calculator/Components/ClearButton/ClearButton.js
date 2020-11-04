import React from 'react'
import classes from './ClearButton.module.css'

const ClearButton = props => {
   return (
      <div 
      className={classes.ClearButton}
      onClick={props.handlerClear}
      >
         Claer
      </div>
   )
}

export default ClearButton