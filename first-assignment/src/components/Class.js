import React from "react";
import ChildComponent from "./ChildComponent";

class Class extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
    };

    this.x1 = React.createRef();
  }

  f1() {
    console.log("function called", this.x1.current.value);
    this.setState({ category: this.x1.current.value });
  }

  componentDidMount() {
    console.log("Did Mount ");
  }
  componentDidUpdate() {
    console.log("Did Update");
  }
  componentWillUnmount() {
    console.log("Did will unmount");
  }

  render() {
    console.log("render called");
    return (
      <div className="container-sm border">
        <br />
        <input type="text" ref={this.x1} />

        <button
          onClick={() => {
            this.f1();
          }}
        >
          click
        </button>

        <hr />
        <ChildComponent p1={this.state.category} />
        
      </div>
    );
  }
}
export default Class;
