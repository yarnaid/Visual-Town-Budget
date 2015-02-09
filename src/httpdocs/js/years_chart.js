function format_shorten(value) {
    if (value === undefined) {
        return "N/A";
    } else if (value >= 1000000) {
        return "$" + Math.round(value / 1000000).toString() + " M";
    } else if (value < 1000000 && value >= 1000) {
        return "$" + Math.round(value / 1000).toString() + " K";
    } else if (value < 1 && value != 0) {
        return "¢" + Math.round(value * 100).toString();
    } else {
        return value.toString();
    }
}


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
      .interpolate('monotone')
      .x(function(d) { return d[0] })
      .y(function(d) { return d[1] })
      .clipEdge(true)
      .useInteractiveGuideline(true)
      ;

      chart.xAxis
      .showMaxMin(false)
      .tickFormat(function(d) { return d3.time.format('%Y')(new Date(d)) });

      chart.yAxis
      .showMaxMin(false)
      .ticks(4)
      .tickFormat(function(d) { return format_shorten(d);});

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



d3.json('/data/mpu-years/mpu-sum.json', function(error, data){
  var btn_group = document.getElementById('sum-years-selector');
  current_sum_category = 'Revenues';

  for (category in data) {
    var b = document.createElement('button');
    var btn = $(b);
    btn.addClass('btn btn-default');
    b.type = 'button';
    btn.text(category);
    btn_group.appendChild(b);
  };

  function updateData (category) {
    category = current_sum_category;
    nv.addGraph(function() {
      var chart = nv.models.stackedAreaChart()
      .interpolate('monotone')
      .x(function(d) { return d[0] })
      .y(function(d) { return d[1] })
      .clipEdge(true)
      .useInteractiveGuideline(true)
      ;

      chart.xAxis
      .showMaxMin(false)
      .tickFormat(function(d) { return d3.time.format('%Y')(new Date(d)) });

      chart.yAxis
      .ticks(4)
      .showMaxMin(false)
      .tickFormat(function (d) {
                return format_shorten(d);
            });

      d3.select('#sum-years-chart svg')
      .datum(data[category])
      .transition().duration(500).call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
  };
  updateData();

  $('#sum-years-selector button').click(function() {
    current_sum_category = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    updateData(category=current_sum_category);
  });

});
