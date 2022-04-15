import React, { Component } from 'react'

export default class Todoitem extends Component {
  constructor(props) {
    super(props)
  
  }
  render() {
    return (
      <div>
        {this.props.ptodo}
      </div>
    )
  }
}
