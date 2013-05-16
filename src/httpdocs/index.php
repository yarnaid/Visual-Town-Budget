<!DOCTYPE HTML>
<meta charset="utf-8">

<html>
<head>


  <?php
  //$includePath = ( '/includes');
  ?>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <base href="/" />
  <title>Arlington Visual Budget</title>

  <link href="css/lib/bootstrap/bootstrap.css" rel="stylesheet">
    <link href="css/lib/checkbox/checkbox.css" rel="stylesheet">
  <script src="js/lib/mustache/mustache.js"></script>
  <link rel="stylesheet" type="text/css" href="css/global.css">
  <link rel="stylesheet" media="print" type="text/css" href="css/print.css">
  <script src ="js/lib/d3/d3.v3.min.js"></script>
  <script src ="js/lib/jquery/jquery-1.9.1.min.js"></script>
  <script src ="js/lib/bootstrap.min.js"></script>
  <script src ="js/lib/detectmobilebrowser.js"></script>
  <script src ="js/navigation.js"></script>
  <script src ="js/chart.js"></script>
  <script src ="js/cards.js"></script>
  <script src ="js/avb.js"></script>
  <script src ="js/navbar.js"></script>

  <!-- change this -->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>  

  <script>
  $(document).ready(function(){

    avb.navbar.initialize();

    // direct url load
    <?php
    $allpages = array("revenues" => "content.php", "funds" => "content.php",
      "funds" => "content.php", "opendata" => "opendata.php");
    $sections = array("revenues", "expenses", "funds");
    $params = array();
    if(isset($_GET["page"])) {
      if(in_array($_GET["page"], $sections)) {
        $params['section'] = $_GET["page"];
        if(isset($_GET["year"])){
          $params['year'] = $_GET["year"];
        };
        if(isset($_GET["node"])){
          $params['node'] = $_GET["node"];
        };
        echo 'initialize('.json_encode($params).')';
      } 
    }
    ?>
  });

  </script>



  <body>



    <?php
    require_once 'includes/navbar.php';

    if(isset($_GET["page"])) {
      if(array_key_exists($_GET["page"], $allpages)) {
         require_once 'includes/'.$allpages[$_GET["page"]];
      }
    } else {
      require_once 'includes/homescreen.php';
    }
    
    ?>

    <div id="footer">
      <a class="link" href="http://www.town.arlington.ma.us/">Town of Arlington</a> - 
      <a class="link" href="http://www.goinvo.com">by Involution Studios</a> -
      <a class="link" href="opendata"> Open Data + Code </a> -
      <a class="link" href="javascript:;" onclick="fby.push(['showForm', '4389']);return false;" >Feedback</a>
  </div>

  </body>

  </html>