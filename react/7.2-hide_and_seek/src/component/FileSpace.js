import React from "react";

class FileSpace extends React.Component {
 state={status:"block"};
  IsOnClick=()=> {
    this.state.status === "block" ? this.setState({status: "none"}) : this.setState({status: "block"});
    console.log(this.state.status);
  }
  render() {
    return (
      <div className="container">
        <button onClick={this.IsOnClick}>show/hidden</button>
        <div className="color" style={{display:this.state.status}}></div>
      </div>
    );
  }
}
export default FileSpace;
