import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax calls to API's will be made here
    console.log("App - Mounted");
  }

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    colours: [
      { id: 1, colour: { grey: '#e8e8e8' } },
      { id: 2, colour: { green: '#90ee90' } },
      { id: 3, colour: { orange: '#fcd299' } },
      { id: 4, colour: { blue: '#add8e6' } }
    ]
  };

  // make this an arrow function so 'this' is bound to our original object
  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(c => c.id !== counterId); // filter out object with corresponding id
    this.setState({ counters: newCounters }); // update state by setting counters (array of objects) to the filtered array
  };

  handleIncrement = counter => {
    const newCounters = [...this.state.counters]; // clone our state object so we can modify the state indirectly
    newCounters[counter.id - 1].value++;
    this.setState({ counters: newCounters }); // set our newly modified state so React can update its own state to match this
  };

  handleReset = () => {
    const newCounters = this.state.counters.map(c => {
      c.value = 0; // reset value property of each counter
      return c; 
    });
    this.setState({ counters: newCounters }); // update the state for our counters (array of objects)
  };

  handleBackground = () => {
    const { counters, colours } = this.state, { root } = this.props;
    let maxCounter, max = counters[0].value, maxes = [];    

    // iterate over array of counters and find the maximum value
    for (let i = 0; i < counters.length; i++) {
      if (counters[i].value > max) {
        max = counters[i].value;
        maxes.splice(0, maxes.length); // empty previous maximums first
        maxes.push(counters[i]) // push new maximum counter onto array
      } 
      else if (counters[i].value === max) {
        maxes.push(counters[i]);
      }
    }

    // randomly select an array element in the event of multiple maximums
    maxes.length > 1 ? maxCounter = maxes[Math.floor(Math.random() * maxes.length)] : maxCounter = maxes[0];

    const maxColour = colours.filter(c => c.id == maxCounter.id); // filter array of colours down to the colour with a matching id 
    root.style.backgroundColor = this.getColour(maxColour); // set filtered colour as new background colour
  };

  getColour(maxColour) {
    const colourInMaxColour = maxColour[0].colour;   
    // obtain the actual colour within our maxColour object
    for (let c in colourInMaxColour) {
      return colourInMaxColour[c];
    }
  };

  render() {
    console.log("App - Rendered");
    
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          onBackground={this.handleBackground}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
