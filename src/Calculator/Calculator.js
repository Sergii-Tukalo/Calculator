import React, {Component} from 'react'
import classes from '../Calculator/Calculator.module.css'
import Line from '../Calculator/line/Line.js'
import Input from './Components/Button/Input/Input'

class Calculator extends Component {

   state = {
      lines: [
         [
            {buttonName: 'AC'},
            {buttonName: '-+'},
            {buttonName: '%'},
            {buttonName: '/'},
         ],
         [
            {buttonName: '7'},
            {buttonName: '8'},
            {buttonName: '9'},
            {buttonName: '*'},
         ],
         [
            {buttonName: '4'},
            {buttonName: '5'},
            {buttonName: '6'},
            {buttonName: '-'},
         ],
         [
            {buttonName: '1'},
            {buttonName: '2'},
            {buttonName: '3'},
            {buttonName: '+'},
         ],
         [
            {buttonName: '0'},
            {buttonName: '.'},
            {buttonName: '='},
         ]
      ],
      input: '',
      keyPressed: null,
      textInput: null
   }

   addToInput = e => {
      this.setState({
         input: this.state.input + e
      })
   }
   
   clearInput = () => {
      this.setState ({
         input: '' 
      })
   }

   addMathJs = () => {
      this.setState({
         input: parseFloat(eval(this.state.input).toFixed(2))
      })
   }

   addToProzent = () => {
      this.setState ({
         input: eval(this.state.input / 100)
      })
   }

   onKey = event => {
      let state = this.state.input;
      if(event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5'
      || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0'
      || event.key === '/' || event.key === '*' || event.key === '-' || event.key === '+' || event.key === '.') {
         this.setState({
            input: state + event.key
         })
      }
      if(event.key === 'Enter') {
         this.setState({
            input: parseFloat(eval(this.state.input).toFixed(2))
         })
      }
      if(event.key === '%') {
         this.setState ({
            input: eval(state / 100)
         })
      }
      if(event.key === 'Backspace') {
         this.setState({
            input: state.substring(0, state.length - 1)
         })
      }
      if(event.location === 2) {
         this.setState ({
            input: '' 
         })
      }
      if(event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5'
      || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0'
      || event.key === '/' || event.key === '*' || event.key === '-' || event.key === '+' || event.key === '.' 
      || event.key === 'Enter' || event.key === '%' || event.key === '=') {
         this.setState ({
            keyPressed: event.key 
         })
      }
      if(event.location === 2) {
         this.setState({
            keyPressed: event.location
         })
      }
   }

   ofKey = event =>{
      if(event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5'
      || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0'
      || event.key === '/' || event.key === '*' || event.key === '-' || event.key === '+' || event.key === '.' 
      || event.key === 'Enter' || event.key === '%' || event.key === '=' || event.location === 2 ) {
         this.setState ({
            keyPressed: '' 
         })
      }
   }
  
   
   render() {
      return (
         <div>
            <Input 
               input={this.state.input}
               onKey={this.onKey}
               ofKey={this.ofKey}
            />
            <div className={classes.calculatorStyle}>
               {this.state.lines.map((line, index) => {
                  return (
                     <Line
                        key={index}
                        buttons={line}
                        keyPressed={this.state.keyPressed}
                        handlerClick={this.addToInput}
                        handlerClear={this.clearInput}
                        handlerEqual={this.addMathJs}
                        handlerProzent={this.addToProzent}
                     />
                  )
               })}
            </div>
         </div>
      )
   }
}

export default Calculator