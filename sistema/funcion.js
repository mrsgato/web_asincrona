function obtenerValores(parametro){
	//creo objeto que contendra los parametros 
	var objeto = new Object();
	//action es la función que se esta solicitando
	objeto.action = "get_value";
	
	objeto.parametro = parametro;
	//convierto el objeto a un JSON
	var objetoJson = JSON.stringify(objeto);
	
	$.ajax({
		type: "POST",
		url:   'web_controller.php',
		data: objeto,
		dataType: "JSON",
		async: true,
		success: function(data){
		   //ver Json retornado de la operacion correcta
			console.log(data);
	});
}
