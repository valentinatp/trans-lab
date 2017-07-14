$(document).ready(function(){
	$("#calcularTarifa").click(function(el){
		$("#costo").removeClass("hidden");
		$("#saldito-pasaje").removeClass("hidden");

			$("#costo-final").removeClass("hidden");
			$("#saldito-pasajeFinal").removeClass("hidden");


		var tar = $("#numTarjeta").val();
		var saldo = 0;
		var costPasaje = 0;
		var saldoTotal = 0;


	$.ajax({
           url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + tar,
           type: 'GET',
           dataType: 'json',
       })
		.done(function(){
			$("#calcularTarifa").html("");

			costPasaje = $("#tarifario").val();

			var ctoPjtitulo = $("#costo").append("Costo pasaje");

			var ctpj = $("#saldito-pasaje").append('$' + costPasaje);
		})
		.done(function(el) {
           saldo = el.saldoTarjeta;
           console.log(saldo);
           saldoTotal = parseInt(saldo.substr(1).split(".").join(""))-parseInt(costPasaje);

			$("#costo-final").append("Saldo final");

			$("#saldito-pasajeFinal").append('$' + saldoTotal);
       })
       .fail(function() {
           console.log("error");
       });

	});
});


