import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decor: 'not_checked_input'
    }
  }
  handleCheck = (e) => {
    this.setState({
      decor: e.target.checked ? 'checked_input' : 'not_checked_input'
    })
  }
  render() {
    const { iclass, item } = this.props;
    return(
      <div className={`${this.state.decor} ${iclass}`}>
            <input type='checkbox' onChange={this.handleCheck}/>
            {item}
        </div>
    )
  }
}

export default Item
