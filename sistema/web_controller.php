<?php 
require_once('web_model.php');

//instancio clase 
$filas = new Programas();

//validacion en caso de un post sin action
if(!isset($_POST['action'])) {
	print json_encode(0);
	return;
}

//valido la funcion que se desea realizar
switch($_POST['action']) {
	
	case 'get_value':
		//recibo parametro enviado
		$parametro = $_POST['parametro'];

		//se imprime json del resultado del metodo
		print $filas->get_values($parametro);
		break;

}
?>