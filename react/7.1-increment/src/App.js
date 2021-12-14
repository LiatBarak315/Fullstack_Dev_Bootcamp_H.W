import "./App.css";
import React from 'react';
class App extends React.Component {
  // constructor(props) {
  //   super(props);
    state = { counter: 0 };
  // }
increment=()=>{
  this.setState({counter:this.state.counter+1})
}
  render() {
    return (
      <div>
        <button onClick={this.increment}>increment</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
