<?php 
	$mensaje=$_POST['postmensaje'];
	$asunto=$_POST['asunto'];

	    mail("contact@luxuryandsafecars.com",$asunto,  $mensaje); 
	    echo "Mensaje enviado";
 ?>