import Chart from '../lib/Chart.js';
var ctx = document.getElementById('myChart').getContext('2d');

module.exports = (data) => {
  var chart = new Chart(ctx, data);
  return chart;
}

