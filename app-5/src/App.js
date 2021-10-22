import React, { Component } from 'react';
import Image from './Image'

export default class Input extends Component {
render() {
    return (
        <div
        style={{
          height:"500px",
          width:"300px",
          margin:"auto",
          display: "flex"
          }}>
          <Image />
        </div>
      )
  }
}
