import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import Newtodo from './components/Newtodo';
import Todolist from './components/Todolist';
import { Component } from 'react';
import { Divider } from 'antd';

const titlecss = {
  textAlign: 'center',
  color: 'white'
}

const dividercss = {
  background: '#494949',
  margin: '40px 0px 20px 0px'
}

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      todoListArray: [],
      todoTimeArray: [],
      selectedTodo: null,
      todo: '',
      time: ''
    }
  }

  deletetodo(todo) {
    this.setState({ todoListArray: [], todoTimeArray: [] })
  }

  addtodo(todo, time) {
    this.setState({ todo, time });
    this.setState(previousState => ({
      todoListArray: [...previousState.todoListArray, todo]
    }), () => { console.log(this.state.todoListArray); });

    this.setState(previousState => ({
      todoTimeArray: [...previousState.todoTimeArray, time]
    }), () => { console.log(this.state.todoTimeArray); });

  }

  onClickDelete(selectedTodo) {
    const a = this.state.todoListArray
    const b = this.state.todoTimeArray
    console.log("selected index is " + selectedTodo)
    const temp = a.splice(selectedTodo, 1)
    const ttemp = b.splice(selectedTodo,1)
    console.log("deleted " + temp)
    console.log("deleted " + ttemp)

    this.setState({ todoListArray: a ,todoTimeArray:b});
    console.log("after delete " + this.state.todoListArray)
    console.log("after delete " + this.state.todoTimeArray)

  }

  dowork(selectedTodo) {
    this.setState({ selectedTodo })
    console.log("button has been clicked and showing it in app.js " + selectedTodo)
    this.onClickDelete(selectedTodo)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 style={titlecss}>Avi-Todo {this.props.uname}</h2>
          <Newtodo
            onNewTodo={(todo, time) => this.addtodo(todo, time)}
            onNewTodoo={todo => this.deletetodo(todo)}
          />
          <Divider style={dividercss} orientationMargin='4' />
          <Todolist
            list={this.state.todoListArray}
            timelist={this.state.todoTimeArray}
            onTodoSelect={selectedTodo => { this.dowork(selectedTodo) }}
            ptodo={this.state.todo}
            ptime={this.state.time}
          />
        </header>
      </div>
    );

  }

}

