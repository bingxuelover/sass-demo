import React, { Component } from 'react';
import Item from './Item';


class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      list: ['cool stuff']
    }
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  addToList = () => {
    if(this.state.userInput) {
      this.setState({
        list: [...this.state.list, this.state.userInput],
        userInput: ''
      })
    }
  }

  render() {

    const todoList = this.state.list.map((item, index) => {
      return <Item
                    key={index}
                    iclass = {`line-${index}`}
                    item={item}/>
    })

    return(
      <div className='outer_container'>
        <h1> TO DO LIST</h1>

        <span className="circle">scroll circle</span>

        <div className="main_container">

          <ul className="fn">
            <li className="color-blue">color line</li>
            <li className="color-purple">color line</li>
            <li className="color-green">color line</li>
          </ul>

          <div className='input_container'>
            <input
            placeholder='Add a new item...'
            onChange={this.handleInput}
            value={this.state.userInput}/>

            <button onClick={this.addToList}>Add</button>
          </div>

          <div className='list_container'>
            { todoList }
          </div>

        </div>

      </div>
    );
  }
}

export default App;
