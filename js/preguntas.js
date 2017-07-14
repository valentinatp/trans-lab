var boton = document.getElementById("sangurucho");

	boton.addEventListener("click", function(){
		document.getElementById("contenedor").classList.remove("hidden");
	});

	var btn = document.getElementById("closePreguntas");
	btn.addEventListener("click", function(){
	document.getElementById("contenedor").classList.add("hidden");
})