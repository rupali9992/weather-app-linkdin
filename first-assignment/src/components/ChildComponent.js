import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
    };
  }
  componentDidUpdate(prevprops) {
    if (this.props.p1 !== prevprops.p1) {
      var api = `https://fakestoreapi.com/products/category/${this.props.p1}`;
      console.log(api);
      fetch(api)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({ api:json });
        });
    }
  }
  render() {
    var result = this.state.api;
    return (
      <div className="container border">
        {this.props.p1}
        <div className="row">
          {result &&
            result.length > 0 &&
            result.map((obj,index) => (
              <div className="col-3" key={index}>
                <img src={obj.image} className="img-fluid" alt="" />
                <p>{obj.title}</p>
                <p>{obj.price}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
