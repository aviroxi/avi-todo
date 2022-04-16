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
  background:'#494949',
  margin:'40px 0px 20px 0px'
}

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      todoListArray: [],
      todo:''
    }
  }

  deletetodo(todo){
    this.setState({todoListArray:[]})
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
          <Newtodo onNewTodo={todo => this.addtodo(todo)} onNewTodoo={todo=>this.deletetodo(todo)}/>
          <Divider style={dividercss} orientationMargin='4'/>
          <Todolist list={this.state.todoListArray} ptodo={this.state.todo}/>
        </header>
      </div>
    );

  }

}

