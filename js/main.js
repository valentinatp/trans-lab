	$("#openMenu").click(function(){
		document.getElementById("myMenu").style.width = "70%";
	});

	
	$("#close").click(function(){
		document.getElementById("myMenu").style.width = "0";
	});



		$("#boton").click(function(e){
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
