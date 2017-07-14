/*var botonMenu = document.getElementById("openMenu");

	botonMenu.addEventListener("click", function(){
		document.getElementById("myMenu").style.width = "70%";
	});

var botonCerrar = document.getElementById("close");
	
	botonCerrar.addEventListener("click", function(){
		document.getElementById("myMenu").style.width = "0";
	});
*/


var btn = document.getElementById("boton");

	btn.addEventListener("click", function(e){
		e.preventDefault();
		validarCorreo();
		validarContrasena();

		if(validarCorreo() && validarContrasena()){
			var correo = $("#email").val();
			localStorage.setItem("email", correo);
			window.open("opciones.html", "_self", false)
		}
});


function validarCorreo(){

	var correo = $("#email").val(); //document.getElementById("email").value;
	

	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo))){
			var span = document.createElement("span");
			var ident = document.getElementById("email");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar su correo");
			span.appendChild(contenido);
		return false;
	} else {
		return true;
	}
}

function validarContrasena(){
	var contrasena = $("#pwd").val(); // document.getElementById("pwd").value;

	if( contrasena.length < 2 || contrasena.length > 8 || isNaN(contrasena) || contrasena == ""){
			var span = document.createElement("span");
			var ident = document.getElementById("pwd");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar una contraseña");
			span.appendChild(contenido);
		return false;
	} else {
		return true;
	}
}


/*
$(document).ready(function(){
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
			$(".tarjetas-guardadas").append("<a href='#'>" + ingTarjeta + "</a> " + "<br>");
			$("#numTarjeta").val("");
		}
	})

});
*/
/*
var boton = document.getElementById("sangurucho");

	boton.addEventListener("click", function(){
		document.getElementById("contenedor").classList.remove("hidden");
	});
*/


/*
	var btn = document.getElementById("close");
btn.addEventListener("click", function(){
	document.getElementById("contenedor").classList.add("hidden");
})

$( document ).ready(function() {
    console.log( "ready!" );

	$("#btn").click(function(){
		$(".menu").remove('hidden');
	});
});*/