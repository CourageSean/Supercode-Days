import React, { Component } from 'react';
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';
import './App.css';


class App extends Component {
  state = {
    counter: 0,
    isLight: false
  }
  handleDecrement = () => {
    console.log('-1')
    // counter=counter-1  //Vanilla javascript doesnot work in Reactjs,
    // ss : setState
    this.setState({ counter: this.state.counter - 1 });
  }
  handleIncrement = () => {
    console.log('+1')
    this.setState({ counter: this.state.counter + 1 });
  }
  toggleMode = () => {
    this.setState({ isLight: !this.state.isLight });
  }
  render() {
    return (
      <div
        className="App"
        style={{
          color: this.state.isLight ? 'black' : 'white',
          backgroundColor: this.state.isLight ? 'white' : 'black'
        }}>
        <button onClick={this.toggleMode}>
          change to {this.state.isLight ? 'Dark Mode' : 'Light Mode'}
        </button>
        <div className="pb2">
          <button onClick={this.handleDecrement}>-1</button>
          <span>{this.state.counter}</span>
          <button onClick={this.handleIncrement}>+1</button>
        </div>
        <ListItem />
        <TodoList />
      </div>);
  }
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <ListItem />
//       <TodoList />
//     </div>
//   );
// }

