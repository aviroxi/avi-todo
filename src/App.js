import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import Newtodo from './components/Newtodo';
import Todolist from './components/Todolist';
import { Component } from 'react';

const titlecss = {
  textAlign: 'center',
  color: 'white'
}

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      todoListArray: [],
      todo:''
    }
  }

  addtodo(todo) {
    this.setState({todo});
    this.setState(previousState => ({
      todoListArray: [...previousState.todoListArray, todo]
    }), () => { console.log(this.state.todoListArray); });

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 style={titlecss}>Avi-Todo {this.props.uname}</h2>
          <Newtodo onNewTodo={todo => this.addtodo(todo)} />
          <Todolist list={this.state.todoListArray} ptodo={this.state.todo}/>
        </header>
      </div>
    );

  }

}

