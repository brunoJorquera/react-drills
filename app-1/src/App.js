import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
      super(props)
      this.state={
        userInput: ''
      }
  };

  handleChange = (input) => {
    this.setState({ userInput: input })
};
 
  render() {
      return (
          <div>
             <input 
             onChange={ (e) => this.handleChange( e.target.value ) }
              />
              <span>
                {this.state.userInput}
              </span>
          </div>
      )
  }
}
