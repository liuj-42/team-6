// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Students', 'Percentage'],
    ['', 80],
    ['', 20]
  ]);

  // Chart options
  var options = {
    title:'Around 80% of students say they deal with stress daily',
    width:550,
    height:400,
    colors: ['#e0440e', '#e6693e'],
    is3D: true,
    backgroundColor: '#ea9999',
    fontName: 'Roboto',
    legend: {position: 'none'},
    titleTextStyle: {fontSize: 20}
  };
  
  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('chart1'));
  chart.draw(data, options);