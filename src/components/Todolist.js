import React, { Component } from 'react'
import Todoitem from './Todoitem'
import './s.css'



export default class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {


        //const todoList = this.props.list.map(lis => <h3>{lis}</h3>);
        //const todoList = this.props.list.map(lis => <Todoitem ptodo={{lis}}/>);
        const todoList = this.props.list.map(
            (lis, index) => {
                const time=this.props.timelist[index];
                return <Todoitem onTodoSelect={this.props.onTodoSelect} ptodo={lis} ptime={time} pindex={index}/>
            }
        );

        return (
            <>
                <div >
                    <h1 style={{ color: 'white', fontFamily:'Major Mono Display' }}>Todolist</h1>
                </div>
                {todoList}
            </>
        )
    }
}
