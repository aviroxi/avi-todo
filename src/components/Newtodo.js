import { Button, Input } from 'antd'
import React, { Component } from 'react'

import {PlusOutlined,DeleteOutlined} from '@ant-design/icons'

const buttoncss = {
    color: 'white',
    height: '50px',
    fontWeight: 'bold',
    border: 0,
    margin: '10px 0',
    fontSize: '1.5rem'
}
const buttoncsss = {
    color: 'white',
    fontWeight: 'bold',
    height: '50px',
    border: 0,
    margin: '10px 40px',
    fontSize: '1.5rem',
    backgroundColor: 'red'
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
            todo: '',
            time: ''
        }
    }

    handleClick = () => {

        if (this.state.todo === "") {
            alert("Please enter Todo");
        }
        else {
            var now = new Date();
            const t = now.toString()
            const time = t.slice(4, 25)

            console.log(time)
            this.props.onNewTodo(this.state.todo, time);
            this.state.todo = ''
        }



    }
    handleClickk = (todo, time) => {
        this.props.onNewTodoo(todo, time);
    }

    onNewTodo(todo, time) {
        this.setState({ todo, time });
    }



    render() {



        return (
            <div>
                <div>Newtodo</div>
                <Input
                    value={this.state.todo}
                    onChange={event => this.onNewTodo(event.target.value, this.state.time)}
                    style={inputcss} required />
                <br />
                <Button type='primary' style={buttoncss} onClick={this.handleClick} ><PlusOutlined />Add</Button>
                <Button type='primary' style={buttoncsss} onClick={this.handleClickk}><DeleteOutlined />Delete All</Button>
                
            </div>
        )
    }

}
