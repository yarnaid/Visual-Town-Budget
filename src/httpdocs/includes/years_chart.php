<style type="text/css">
    #years-chart, #sum-years-chart svg {
      height: 400px;
  }
</style>

<div class="container">
    <div class="row-fluid">
        <div>
            <div class="dropdown" id="university-selector">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <span class="sr-only">Universities</span>
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu">
                </ul>
            </div>
            <div id="year-selector" data-toggle="buttons" class="col-sm-12 btn-group btn-group-justified" role="group" aria-label="...">
            </div>
            <div id="years-chart">
                <svg></svg>
            </div>
        </div>
        <div>
            <div id="sum-years-selector" data-toggle="buttons" class="btn-group btn-group-justified" role="group" aria-label="...">
            </div>
            <div id="sum-years-chart">
                <svg></svg>
            </div>
        </div>
    </div>
</div>