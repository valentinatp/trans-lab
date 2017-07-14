$(document).ready(function(){
	$("#btn-saldo").click(function(el){
		$("#titulo").removeClass("hidden");
		$("#saldito-total").removeClass("hidden");

		var tar = $("#numTarjeta").val();
		var saldo = 0;


	$.ajax({
           url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + tar,
           type: 'GET',
           dataType: 'json',
       })
       .done(function(e) {
           saldo = e.saldoTarjeta;
           console.log(saldo);

           var tituloSaldo = $("#titulo").append("saldo total");
           
           var html_saldo = $("#saldito-total").append(saldo);

           $("#saldo").html("");
           $("#saldo").append(tituloSaldo);
           $("#saldo").append(html_saldo);
       })
       .fail(function() {
           console.log("error");
       });
   });

});

