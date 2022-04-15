import React, { Component } from 'react'
import Todoitem from './Todoitem'
let a=1
export default class Todolist extends Component {
    constructor(props){
        super(props);

        this.state={
            ptodo:''
        }
      }

    render() {
        const todoList = this.props.list.map(todo => <Todoitem ptodo={this.props.list.slice(-1)[0]}/>)

        return (
            <>
                <div>Todolist</div>
                
                {todoList}
            </>
        )
    }
}
