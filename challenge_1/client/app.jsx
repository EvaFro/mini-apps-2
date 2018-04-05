import React from 'react';
import {render} from 'react-dom';
import Graph from './graph.jsx'
import data from '../database/exampleData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>;
        <Graph data={this.props.data} />
      </div>
    )
  }
}

render(<App data={data}/>, document.getElementById('app'));

