import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      value: 1
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  increase() {
    this.setState({
      count: this.state.count + this.state.value
    });
  }

  decrease() {
    this.setState({
      count: this.state.count - this.state.value
    });
  }

  handleValueChange(e) {
    this.setState({
      value: +e.target.value
    });
  }

  reset() {
    this.setState({
      count: (this.state.reset = 0)
    });
  }

  render() {
    return (
      <div>
        <h1>react counter</h1>
        <h1>{this.state.count}</h1>
        <form>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.reset} />
          <input
            type="number"
            onChange={this.handleValueChange}
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}

export default App;
