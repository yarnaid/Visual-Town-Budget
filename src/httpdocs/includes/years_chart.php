<style type="text/css">
    #years-chart svg {
      height: 400px;
  }
</style>

<div class="container">
    <div class="row-fluid">
        <div class="dropdown" id="university-selector">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <span class="sr-only">Universities</span>
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <!-- <li role="presentation"><a role="menuitem">CMU</a></li> -->
                <!-- <li role="presentation"><a role="menuitem">EMU</a></li> -->
                <!-- <li role="presentation"><a role="menuitem">GVSU</a></li> -->
            </ul>
        </div>
        <div id="year-selector" data-toggle="buttons" class="btn-group" role="group" aria-label="...">
            <!-- <button type="button" class="btn btn-default activ">Revenues</button> -->
            <!-- <button type="button" class="btn btn-default">Expenditures</button> -->
            <!-- <button type="button" class="btn btn-default">FacultyStaffComp</button> -->
            <!-- <button type="button" class="btn btn-default">Enrollment</button> -->
            <!-- <button type="button" class="btn btn-default">Size</button> -->
        </div>
        <div id="years-chart">
            <svg></svg>
        </div>
    </div>
</div>