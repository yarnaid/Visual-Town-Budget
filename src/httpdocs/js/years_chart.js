d3.json('/data/mpu-years/mpu-1-years.json', function(error, data){

  var data_types = ['Revenues', 'Expenditures', 'FacultyStaffComp', 'Enrollment', 'Size']

  function updateData (category) {
    category = category || 'Revenues';
  nv.addGraph(function() {
    console.log($('#year-selector button').text())
    var chart = nv.models.stackedAreaChart()
                  .x(function(d) { return d[0] })
                  .y(function(d) { return d[1] })
                  .clipEdge(true)
                  .useInteractiveGuideline(true)
                  ;

    chart.xAxis
        .showMaxMin(false)
        .tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });

    chart.yAxis
        .tickFormat(d3.format(',.2f'));

    d3.select('#years-chart svg')
      .datum(data[category])
        .transition().duration(500).call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
};
  updateData();

    $('#year-selector button').click(function() {
      $(this).addClass('active').siblings().removeClass('active');

      // TODO: insert whatever you want to do with $(this) here
      updateData($(this).text());
  });

})
