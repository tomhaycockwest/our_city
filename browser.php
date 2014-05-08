<?php
$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");
$ipad = strpos($_SERVER['HTTP_USER_AGENT'],"iPad");

if ($iphone || $android || $palmpre || $ipod || $berry == true) 
{ 
header('http://ourcityldn.com/index-mobile.php');
//OR
echo "<script>window.location='http://ourcityldn.com/index-mobile.php'</script>";
}
?>