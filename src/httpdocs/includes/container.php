<div class="container" id="avb-body">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 class="text-center"><a class="link" style="text-decoration: none" href="#avb-wrap">Detailed Budget</a></h1>
    </div>
	<div class="row-fluid" id="avb-wrap" style="width:auto;">
		<?php
			$pages = array("opendata" => "opendata.php", "glossary" => "glossary.php");
			// add related pages content if needed
			if(array_key_exists($_GET["page"], $pages)) {
			require_once 'includes/'.$pages[$_GET["page"]];
			}
		?>
	</div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 class="text-center"><a class="link" style="text-decoration: none" href="#overview">Budget Overview</a></h1>
    </div>
    <div id="overview" class="row-fluid chart-wrap" style="width:auto;">
        <?php
            require_once 'includes/years_chart.php'
        ?>
    </div>
</div>