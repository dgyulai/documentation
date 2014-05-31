var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 3, 6, 4, 5, 2, 3, 5, 4], 
  type: "scatter"
};
var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 4, 7, 8, 3, 6, 3, 3, 4], 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {legend: {
    x: 0, 
    y: 1, 
    bgcolor: "#E2E2E2", 
    bordercolor: "#FFFFFF", 
    borderwidth: 2, 
    font: {
      family: "sans-serif", 
      size: 12, 
      color: "#000"
    }, 
    showlegend: true, 
    traceorder: "normal"
  }};

plot_url = plotly.plot(data, layout, function (err, msg) {
    console.log(msg);
});