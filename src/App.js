import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    name: "Contador: ",
    counter: 0,
  };
  handleIncrease = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  handleDecrease = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {name}
            {counter}
          </p>
          <div className="buttons">
            <button title="-" onClick={this.handleDecrease}>
              -
            </button>
            <button title="+" onClick={this.handleIncrease}>
              +
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
