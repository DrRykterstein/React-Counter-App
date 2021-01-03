import { button } from "bootstrap";
import React, { Component } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props); // initialise a super constructor
    this.state = {
      // assign current value in counter component to object property
      value: this.props.counter.value,

      user: [
        {
          title: "Dr",
          id: 1
        },
        {
          title: "Dev",
          id: 2
        }
      ]
    };
  }

  // used to implement functionality just after a component has been updated
  componentDidUpdate() {
    console.log("Counter - Update");
  }

  // used to implement functionality just before a component is removed from the DOM
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  handleUser(value) {
    let { user } = this.state;
    let { title } = value % 2 === 0 ? user[0] : user[1];
    console.log(title, value);
  }

  render() {
    console.log("Counter - Rendered");
    const { counter } = this.props;

    return (
      <div
        className="counter-container"
        style={({ margin: ".5rem"})}>
        <h4>Counter #{counter.id}</h4>
        <span className={this.getBadgeClasses(counter)}>{this.formatCount(counter)}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(counter)}>
          Increment Counter
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => {
          this.props.onDelete(counter.id);
        }}>Delete</button>
      </div>
    );
  }

  getBadgeClasses(counter) {
    let classes = "badge m-2 badge-";
    classes += counter.value % 5 === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(counter) {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
