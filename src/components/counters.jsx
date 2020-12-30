import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, onDelete, onIncrement, counters } = this.props; // destructure our this.props object

    return (
      <div>
        <button 
          className="btn btn-primary btn-sm m-2"
          onClick={() => onReset()}>
          Reset
        </button>
        {counters.map(counter => {
          // return a counter component with attributes accessed via props
          return (
            <Counter 
              key={counter.id}
              onDelete={onDelete} 
              onIncrement={onIncrement}
              counter={counter}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
