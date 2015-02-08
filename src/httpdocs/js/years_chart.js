d3.json('/data/mpu-years/mpu-1-years.json', function(error, data){
  var btn_group = document.getElementById('year-selector');
  var dropdown_menu = document.getElementById('university-selector');
  current_university = 'GVSU';
  current_category = 'Revenues';

  for (category in data[current_university]) {
    var b = document.createElement('button');
    var btn = $(b);
    btn.addClass('btn btn-default');
    b.type = 'button';
    btn.text(category);
    btn_group.appendChild(b);
  };

  for (university in data) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    $(a).text(university);
    li.appendChild(a);
    $('ul', dropdown_menu).append(li);
  }


  function updateData (category, university) {
    category = current_category;
    university = current_university;
    var sub_data = data[university];
    nv.addGraph(function() {
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
      .tickFormat(d3.format(',9.0f'));

      d3.select('#years-chart svg')
      .datum(sub_data[category])
      .transition().duration(500).call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
  };
  updateData();

  $('#year-selector button').click(function() {
      current_category = $(this).text();
      $(this).addClass('active').siblings().removeClass('active');
      updateData(category=current_category);
    });

  $('#university-selector li').click(function() {
    current_university = jQuery('a', this).text();
    $(this).addClass('active').siblings().removeClass('active');
    updateData(university=current_university);
  });

});
