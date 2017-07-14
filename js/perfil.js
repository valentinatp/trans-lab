$(document).ready(function(){

	var correoGuardado = $("#email").text(localStorage.getItem("email"));
		$("#email").append(correoGuardado);


	$("#tarjeta").click(function(el){
		el.preventDefault();

		var ingTarjeta = $("#numTarjeta").val();
		if (ingTarjeta == ""){
			var span = document.createElement("span");
			var ident = document.getElementById("email");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar un número de tarjeta ");
			span.appendChild(contenido);
		return span;

		}else{
			$(".tarjetas-guardadas").append("<a href='#' class='tarjetasIngresadas'>" + ingTarjeta + "</a> " + "<br>");
			$("#numTarjeta").val("");
		}
	})

});