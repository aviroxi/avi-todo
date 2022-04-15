import React, { Component } from 'react'
import Todoitem from './Todoitem'
let a=1
export default class Todolist extends Component {
    constructor(props){
        super(props);

        this.state={
            
        }
      }

    render() {
        const todoList = this.props.list.map(lis => <h3>{lis}</h3>);

        return (
            <>
                <div>Todolist</div>
                {todoList}
            </>
        )
    }
}
