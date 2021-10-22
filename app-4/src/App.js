import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
    super(props)
    this.state= {
        usernameInput: "",
        passwordInput: ""
    }
};

inputChange = (input) => {
    this.setState({ usernameInput: input})
}
;
passwordChange = (password) => {
    this.setState({ passwordInput: password})
};

handleClick = () => {
  alert(`Username: ${this.state.usernameInput}  Password: ${this.state.passwordInput}`)
};

render() {
    return (
        <div
        style={{
          margin:"auto",
          height:"25px",
          width:"450px",
          display:"flex",
          flexDirection:"row"          
        }}>
          <form>
              <input
              placeholder="Username"
              type="text"
              onChange={ (e) => this.inputChange( e.target.value ) }
              />
              <input
              placeholder="Password"
              type="password"
              onChange={ (e) => this.passwordChange( e.target.value ) }
              />
              <button
              onClick={ () => this.handleClick() }
              >Login</button>
            </form>
        </div>
      )
  }
}
