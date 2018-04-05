import React from 'react';
import Chart from '../lib/Chart.js';
import createGraph from './createGraph.js'

var Graph = ({data}) => (
  <div>
    <canvas id="myChart"></canvas>
    {createGraph(data)}
  </div>
);

export default Graph;