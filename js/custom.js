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
	
	
	
	// -------------
	// qas 1
	
	$(".qas .qa1").click(function() {
		$(".resultados_qa1").toggleClass("open");
		$(".qas .qa1").toggleClass("open");
	});
	
	$(".resultados_qa1 .close-button").click(function() {
		$(".resultados_qa1").toggleClass("open");
		$(".qas .qa1").toggleClass("open");
	});
	
	
	// -------------
	// qas 2
	
	$(".qas .qa2").click(function() {
		$(".resultados_qa2").toggleClass("open");
		$(".qas .qa2").toggleClass("open");
	});
	
	$(".resultados_qa2 .close-button").click(function() {
		$(".resultados_qa2").toggleClass("open");
		$(".qas .qa2").toggleClass("open");
	});
	
	
	// -------------
	// qas 3
	
	$(".qas .qa3").click(function() {
		$(".resultados_qa3").toggleClass("open");
		$(".qas .qa3").toggleClass("open");
	});
	
	$(".resultados_qa3 .close-button").click(function() {
		$(".resultados_qa3").toggleClass("open");
		$(".qas .qa3").toggleClass("open");
	});
	
	
	
	// -------------
	// qas 4
	
	$(".qas .qa4").click(function() {
		$(".resultados_qa4").toggleClass("open");
		$(".qas .qa4").toggleClass("open");
	});
	
	$(".resultados_qa4 .close-button").click(function() {
		$(".resultados_qa4").toggleClass("open");
		$(".qas .qa4").toggleClass("open");
	});
	
	
	// -------------
	// qas 5
	
	$(".qas .qa5").click(function() {
		$(".resultados_qa5").toggleClass("open");
		$(".qas .qa5").toggleClass("open");
	});
	
	$(".resultados_qa5 .close-button").click(function() {
		$(".resultados_qa5").toggleClass("open");
		$(".qas .qa5").toggleClass("open");
	});
	
	
	// -------------
	// qas 6
	
	$(".qas .qa6").click(function() {
		$(".resultados_qa6").toggleClass("open");
		$(".qas .qa6").toggleClass("open");
	});
	
	$(".resultados_qa6 .close-button").click(function() {
		$(".resultados_qa6").toggleClass("open");
		$(".qas .qa6").toggleClass("open");
	});
	
	
	// -------------
	// qas 7
	
	$(".qas .qa7").click(function() {
		$(".resultados_qa7").toggleClass("open");
		$(".qas .qa7").toggleClass("open");
	});
	
	$(".resultados_qa7 .close-button").click(function() {
		$(".resultados_qa7").toggleClass("open");
		$(".qas .qa7").toggleClass("open");
	});
	
	
	// -------------
	// qas 8
	
	$(".qas .qa8").click(function() {
		$(".resultados_qa8").toggleClass("open");
		$(".qas .qa8").toggleClass("open");
	});
	
	$(".resultados_qa8 .close-button").click(function() {
		$(".resultados_qa8").toggleClass("open");
		$(".qas .qa8").toggleClass("open");
	});
	
	
	// -------------
	// qas 9
	
	$(".qas .qa9").click(function() {
		$(".resultados_qa9").toggleClass("open");
		$(".qas .qa9").toggleClass("open");
	});
	
	$(".resultados_qa9 .close-button").click(function() {
		$(".resultados_qa9").toggleClass("open");
		$(".qas .qa9").toggleClass("open");
	});
	
	
	// -------------
	// qas 10
	
	$(".qas .qa10").click(function() {
		$(".resultados_qa10").toggleClass("open");
		$(".qas .qa10").toggleClass("open");
	});
	
	$(".resultados_qa10 .close-button").click(function() {
		$(".resultados_qa10").toggleClass("open");
		$(".qas .qa10").toggleClass("open");
	});
	
	
	// -------------
	// qas 11
	
	$(".qas .qa11").click(function() {
		$(".resultados_qa11").toggleClass("open");
		$(".qas .qa11").toggleClass("open");
	});
	
	$(".resultados_qa11 .close-button").click(function() {
		$(".resultados_qa11").toggleClass("open");
		$(".qas .qa11").toggleClass("open");
	});
	
	
	// -------------
	// qas 12
	
	$(".qas .qa12").click(function() {
		$(".resultados_qa12").toggleClass("open");
		$(".qas .qa12").toggleClass("open");
	});
	
	$(".resultados_qa12 .close-button").click(function() {
		$(".resultados_qa12").toggleClass("open");
		$(".qas .qa12").toggleClass("open");
	});
	
	
	// -------------
	// qas 13
	
	$(".qas .qa13").click(function() {
		$(".resultados_qa13").toggleClass("open");
		$(".qas .qa13").toggleClass("open");
	});
	
	$(".resultados_qa13 .close-button").click(function() {
		$(".resultados_qa13").toggleClass("open");
		$(".qas .qa13").toggleClass("open");
	});
	
	// -------------
	// qas 14
	
	$(".qas .qa14").click(function() {
		$(".resultados_qa14").toggleClass("open");
		$(".qas .qa14").toggleClass("open");
	});
	
	$(".resultados_qa14 .close-button").click(function() {
		$(".resultados_qa14").toggleClass("open");
		$(".qas .qa14").toggleClass("open");
	});
	
	
	// -------------
	// donar
	
	$(".btn_donar a").click(function() {
		$(".btn_donar a").toggleClass("open");
		$(".donar .resultados_donar").toggleClass("open");
	});
	
	$(".resultados_donar .close-button").click(function() {
		$(".btn_donar a").toggleClass("open");
		$(".donar .resultados_donar").toggleClass("open");
	});
	
	// -------------
	// donar header
	
	$(".btn_donar a").click(function() {
		$(".btn_donar a").toggleClass("open");
		$(".btn_donacion .resultados_donar").toggleClass("open");
	});
	
	$(".resultados_donar .close-button").click(function() {
		$(".btn_donar a").toggleClass("open");
		$(".btn_donacion .resultados_donar").toggleClass("open");
	});
	
	// -------------
	// educacion calidad
	
	$(".btn_ODS .logo_ODS").click(function() {
		$(".btn_ODS .logo_ODS").toggleClass("open");
		$(".aliados .resultados_ODS").toggleClass("open");
	});
	
	$(".resultados_ODS .close-button").click(function() {
		$(".btn_ODS .logo_ODS").toggleClass("open");
		$(".aliados .resultados_ODS").toggleClass("open");
	});
	
	// -------------
	// aliados
	
	$(".btn_aliados a").click(function() {
		$(".btn_aliados a").toggleClass("open");
		$(".aliados .resultados_aliados").toggleClass("open");
	});
	
	$(".resultados_aliados .close-button").click(function() {
		$(".btn_aliados a").toggleClass("open");
		$(".aliados .resultados_aliados").toggleClass("open");
	});
	
	
	// -------------
	// pop up inicial
	
	$(".popup-enter .close-button").click(function() {
		$(".popup-enter").toggleClass("close");
	});
	
	
	// -------------
	// resultados entidades aliadas
	
	$(".acordion7 a").click(function() {
		$(".content_accordion_7").toggleClass("open");
		$(".acordion7 a").toggleClass("open");
	});
	
	$(".content_accordion_7 .close-button").click(function() {
		$(".content_accordion_7").toggleClass("open");
		$(".acordion7 a").toggleClass("open");
	});
	
	
	$(document).ready(function(){
		$('.slider-becas').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: false,
			arrows:true,
			infinite: true,
			cssEase: 'linear',
			swipe: false,
			pauseOnHover:true,
			prevArrow: $('.next'),
			nextArrow: $('.prev'),
			// the magic
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					infinite: true,
					settings: 'unslick'
				}
			
			}, 
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: true,
					settings: 'unslick'
				}
			
			}]
		});
	});
	
	$(document).ready(function(){
		$('.slider-videos').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: true,
			arrows:true,
			infinite: true,
			cssEase: 'linear',
			swipe: false,
			pauseOnHover:true,
			prevArrow: $('.next1'),
			nextArrow: $('.prev1'),
		});
	});
	
	$(document).ready(function(){
		$('.slider-becas-2').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: true,
			arrows:true,
			infinite: true,
			cssEase: 'linear',
			swipe: false,
			pauseOnHover:true,
			prevArrow: $('.next2'),
			nextArrow: $('.prev2'),
			// the magic
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					infinite: true,
					settings: 'unslick'
				}
			
			}, 
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: true,
					settings: 'unslick'
				}
			
			}]
		});
	});
	
	$(document).ready(function(){
		$('.slider-aliados').slick({
			dots: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: false,
			arrows:false,
			infinite: true,
			cssEase: 'linear',
			swipe: false,
			pauseOnHover:true,
			// the magic
			responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					infinite: true,
					settings: 'unslick'
				}
			
			}, 
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: true,
					settings: 'unslick'
				}
			
			}]
		});
	});
	
	
})(jQuery);

