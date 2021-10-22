import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props){
      super(props)
      this.state={
        array: ["Jake","Jeremy","Justin"]
      }
  };

  render() {
      return (
          <div>
            <h2>
              {this.state.array.map((index) =>
              <li key={index}
              style={{listStyleType:"none"}}
              >{index}</li>)}
            </h2>
          </div>
      )
  }
}
