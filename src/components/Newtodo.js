import { Button, Input } from 'antd'
import React, { Component } from 'react'

const buttoncss = {
    color: 'white',
    height: '50px',
    fontWeight:'bold',
    border: 0,
    width: 100,
    margin: '10px 0',
    fontSize: '1.5rem'
}
const buttoncsss = {
    color: 'white',
    fontWeight:'bold',
    height: '50px',
    border: 0,
    margin: '10px 40px',
    fontSize: '1.5rem',
    backgroundColor:'red'
}

const inputcss = {
    color: '#ffffff',
    backgroundColor: '#292929',
    border: 0,
    width: 700,
    height: 50,
    fontSize: '2rem',
    margin: '10px 0'

}

export default class Newtodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: ''
        }
    }

    handleClick = () => {
        this.props.onNewTodo(this.state.todo);
        this.state.todo=''
    }
    handleClickk = (todo) => {
        this.props.onNewTodoo(todo);
    }

    onNewTodo(todo){
        this.setState({todo});
    }

    

    render() {
        


        return (
            <div>
                <div>Newtodo</div>
                <Input
                    value={this.state.todo}
                    onChange={event => this.onNewTodo(event.target.value)}
                    style={inputcss} />
                <br />
                <Button type='primary' style={buttoncss} onClick={this.handleClick} >Add</Button>
                <Button type='primary' style={buttoncsss} onClick={this.handleClickk}>Delete All</Button>
                {/* your input is {this.state.todo} */}
            </div>
        )
    }

}
