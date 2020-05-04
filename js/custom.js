(function ($) {
	
	// -------------
	// Accordion excelencia academica
	
	$(".acordion1 a").click(function() {
		$(".content_accordion_1").toggleClass("open");
		$(".acordion1 a").toggleClass("open");
		$('.content_accordion_2').removeClass('open');
		$('.acordion2 a').removeClass('open');
		$('.content_accordion_3').removeClass('open');
		$('.acordion3 a').removeClass('open');
		$('.content_accordion_4').removeClass('open');
		$('.acordion4 a').removeClass('open');
		$('.content_accordion_5').removeClass('open');
		$('.acordion5 a').removeClass('open');
		$('.content_accordion_6').removeClass('open');
		$('.acordion6 a').removeClass('open');
	});
	
	$(".content_accordion_1 .close-button").click(function() {
		$(".content_accordion_1").toggleClass("open");
		$(".acordion1 a").toggleClass("open");
	});
	
	
	
	
	// -------------
	// Accordion grupos especiales
	
	$(".acordion2 a").click(function() {
		$(".content_accordion_2").toggleClass("open");
		$(".acordion2 a").toggleClass("open");
		$('.content_accordion_1').removeClass('open');
		$('.acordion1 a').removeClass('open');
		$('.content_accordion_3').removeClass('open');
		$('.acordion3 a').removeClass('open');
		$('.content_accordion_4').removeClass('open');
		$('.acordion4 a').removeClass('open');
		$('.content_accordion_5').removeClass('open');
		$('.acordion5 a').removeClass('open');
		$('.content_accordion_6').removeClass('open');
		$('.acordion6 a').removeClass('open');
	});
	
	$(".content_accordion_2 .close-button").click(function() {
		$(".content_accordion_2").toggleClass("open");
		$(".acordion2 a").toggleClass("open");
	});
	
	
	
	
	
	// -------------
	// Accordion merito academico
	
	$(".acordion3 a").click(function() {
		$(".content_accordion_3").toggleClass("open");
		$(".acordion3 a").toggleClass("open");
		$('.content_accordion_1').removeClass('open');
		$('.acordion1 a').removeClass('open');
		$('.content_accordion_2').removeClass('open');
		$('.acordion2 a').removeClass('open');
		$('.content_accordion_4').removeClass('open');
		$('.acordion4 a').removeClass('open');
		$('.content_accordion_5').removeClass('open');
		$('.acordion5 a').removeClass('open');
		$('.content_accordion_6').removeClass('open');
		$('.acordion6 a').removeClass('open');
	});
	
	$(".content_accordion_3 .close-button").click(function() {
		$(".content_accordion_3").toggleClass("open");
		$(".acordion3 a").toggleClass("open");
	});
	
	
	// -------------
	// Programa semillas
	
	$(".acordion4 a").click(function() {
		$(".content_accordion_4").toggleClass("open");
		$(".acordion4 a").toggleClass("open");
		$('.content_accordion_1').removeClass('open');
		$('.acordion1 a').removeClass('open');
		$('.content_accordion_2').removeClass('open');
		$('.acordion2 a').removeClass('open');
		$('.content_accordion_3').removeClass('open');
		$('.acordion3 a').removeClass('open');
		$('.content_accordion_5').removeClass('open');
		$('.acordion5 a').removeClass('open');
		$('.content_accordion_6').removeClass('open');
		$('.acordion6 a').removeClass('open');
	});
	
	$(".content_accordion_4 .close-button").click(function() {
		$(".content_accordion_4").toggleClass("open");
		$(".acordion4 a").toggleClass("open");
	});
	
	
	// -------------
	// Economia naranja
	
	$(".acordion5 a").click(function() {
		$(".content_accordion_5").toggleClass("open");
		$(".acordion5 a").toggleClass("open");
		$('.content_accordion_1').removeClass('open');
		$('.acordion1 a').removeClass('open');
		$('.content_accordion_2').removeClass('open');
		$('.acordion2 a').removeClass('open');
		$('.content_accordion_3').removeClass('open');
		$('.acordion3 a').removeClass('open');
		$('.content_accordion_4').removeClass('open');
		$('.acordion4 a').removeClass('open');
		$('.content_accordion_6').removeClass('open');
		$('.acordion6 a').removeClass('open');
	});
	
	$(".content_accordion_5 .close-button").click(function() {
		$(".content_accordion_5").toggleClass("open");
		$(".acordion5 a").toggleClass("open");
	});
	
	
	// -------------
	// fundacion bolivar
	
	$(".acordion6 a").click(function() {
		$(".content_accordion_6").toggleClass("open");
		$(".acordion6 a").toggleClass("open");
		$('.content_accordion_1').removeClass('open');
		$('.acordion1 a').removeClass('open');
		$('.content_accordion_2').removeClass('open');
		$('.acordion2 a').removeClass('open');
		$('.content_accordion_3').removeClass('open');
		$('.acordion3 a').removeClass('open');
		$('.content_accordion_4').removeClass('open');
		$('.acordion4 a').removeClass('open');
		$('.content_accordion_5').removeClass('open');
		$('.acordion5 a').removeClass('open');
	});
	
	$(".content_accordion_6 .close-button").click(function() {
		$(".content_accordion_6").toggleClass("open");
		$(".acordion6 a").toggleClass("open");
	});
	
	
	
	// -------------
	// resultados consultar
	
	$(".resultados_convocatoria a").click(function() {
		$(".resultados_consultar").toggleClass("open");
		$(".resultados_convocatoria a").toggleClass("open");
	});
	
	$(".resultados_convocatoria .close-button").click(function() {
		$(".resultados_consultar").toggleClass("open");
		$(".resultados_convocatoria a").toggleClass("open");
	});
	
})(jQuery);