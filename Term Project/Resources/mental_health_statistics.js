// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);
// Draw Charts
function drawCharts() {

  // Chart 1
  var data = google.visualization.arrayToDataTable([
    ['Students', 'Percentage'],
    ['', 80],
    ['', 20]
  ]);

  var options = {
    title:'Around 80% of students say they deal with stress daily.',
    width:550,
    height:400,
    colors: ['#e0440e', '#e6693e'],
    is3D: true,
    backgroundColor: '#ea9999',
    fontName: 'Roboto',
    legend: {position: 'none'},
    titleTextStyle: {fontSize: 20}
  };
  
  var chart1 = new google.visualization.PieChart(document.getElementById('chart1'));
  chart1.draw(data, options);

  // Chart 2
  data = google.visualization.arrayToDataTable([
    ['Students', 'Percentage'],
    ['', 66],
    ['', 33]
  ]);

  options = {
    title:'Almost two-thirds of students experience severe anxiety.',
    width:550,
    height:400,
    colors: ['#e0440e', '#e6693e'],
    is3D: true,
    backgroundColor: '#ea9999',
    fontName: 'Roboto',
    legend: {position: 'none'},
    titleTextStyle: {fontSize: 20}
  };
  
  var chart2 = new google.visualization.PieChart(document.getElementById('chart2'));
  chart2.draw(data, options);

  // Chart 3
  data = google.visualization.arrayToDataTable([
    ['Students', 'Percentage'],
    ['', 60],
    ['', 40]
  ]);

  options = {
    title:'Over 60% of students drop out of college due to mental health reasons.',
    width:550,
    height:400,
    colors: ['#e0440e', '#e6693e'],
    is3D: true,
    backgroundColor: '#ea9999',
    fontName: 'Roboto',
    legend: {position: 'none'},
    titleTextStyle: {fontSize: 20}
  };
  
  var chart3 = new google.visualization.PieChart(document.getElementById('chart3'));
  chart3.draw(data, options);

  // Chart 4
  data = google.visualization.arrayToDataTable([
    ['Students', 'Percentage'],
    ['', 50],
    ['', 50]
  ]);

  options = {
    title:'Around 50% of students say they have had suicidal thoughts while in college.',
    width:550,
    height:400,
    colors: ['#e0440e', '#e6693e'],
    is3D: true,
    backgroundColor: '#ea9999',
    fontName: 'Roboto',
    legend: {position: 'none'},
    titleTextStyle: {fontSize: 20}
  };
  
  var chart4 = new google.visualization.PieChart(document.getElementById('chart4'));
  chart4.draw(data, options);

  // Chart 5
  data = google.visualization.arrayToDataTable([
    ['Students', 'Percentage'],
    ['', 66],
    ['', 33]
  ]);

  options = {
    title:'Over two-thirds of students say they would use mental health services if they could access them at school.',
    width:550,
    height:400,
    colors: ['#e0440e', '#e6693e'],
    is3D: true,
    backgroundColor: '#ea9999',
    fontName: 'Roboto',
    legend: {position: 'none'},
    titleTextStyle: {fontSize: 20}
  };
  
  var chart5 = new google.visualization.PieChart(document.getElementById('chart5'));
  chart5.draw(data, options);
}