import React, { Component } from 'react';
import update from 'immutability-helper';
import math from 'mathjs';
import './App.css';
import Display from './Display'
import Button from './Button'
import Buttons from './Buttons'

class App extends Component {
  constructor() {
    super()
  this.state = {
    operations: [
      // {label: "C", value: "clear"},
      // {label: "7", value: 7},
      // {label: "1", value: 1},
      // {label: "0", value: 0},
      // {label: "/", value: "/"},
      // {label: "8", value: 8},
      // {label: "5", value: 5},
      // {label: "2", value: 2},
      // {label: ".", value: "."},
      // {label: "x", value: "*"},
      // {label: "9", value: 9},
      // {label: "6", value: 6},
      // {label: "3", value: 3},
      // {label: "", value: "null"},
      // {label: "-", value: "-"},
      // {label: "+", size: "2", value: "+"},
      // {label: "=", size: "2", value: "equal"},
    ]
  }
}

  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
        break
    }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  } /* This line of code will calculate the answer of the operation */

  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />
        <Buttons>
          <Button onClick={this.handleClick} label="C" value="clear" />             {/* this will clear the text on the calculator */}
          <Button onClick={this.handleClick} label="7" value="7" />                 {/* this will display 7 on calculator */}
          <Button onClick={this.handleClick} label="4" value="4" />                 {/* this will display 4 on calculator */}
          <Button onClick={this.handleClick} label="1" value="1" />                 {/* this will display 1 on calculator */}
          <Button onClick={this.handleClick} label="0" value="0" />                 {/* this will display 0 on calculator */}

          <Button onClick={this.handleClick} label="÷" value="/" />                 {/* this will form a division function */}
          <Button onClick={this.handleClick} label="8" value="8" />                 {/* this will display 8 on calculator */}
          <Button onClick={this.handleClick} label="5" value="5" />                 {/* this will display 5 on calculator */}
          <Button onClick={this.handleClick} label="2" value="2" />                 {/* this will display 2 on calculator */}
          <Button onClick={this.handleClick} label="." value="." />                 {/* this will display a decimal on calculator */}

          <Button onClick={this.handleClick} label="×" value="*" />                 {/* this will form a multiplication function */}
          <Button onClick={this.handleClick} label="9" value="9" />                 {/* this will display 9 on calculator */}
          <Button onClick={this.handleClick} label="6" value="6" />                 {/* this will display 6 on calculator */}
          <Button onClick={this.handleClick} label="3" value="3" />                 {/* this will display 3 on calculator */}
          <Button label="" value="null" />

          <Button onClick={this.handleClick} label="-" value="-" />                 {/* this will form a subtract function */}
          <Button onClick={this.handleClick} label="+" size="2" value="+" />        {/* this will form a addition function */}
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />    {/* this will form a equals function */}
        </Buttons>
      </div>
    );
  }
}

export default App;
