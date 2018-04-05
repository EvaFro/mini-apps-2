
module.exports = {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(224, 224, 235)',
          borderColor: 'rgb(99, 99, 156)',
          data: [0, 10, 5, 4, 20, 30, 45],
      }]
  },
  // Configuration options go here
  options: {}
}
