

//Funcion para hacer el video pequeño y que salgan las imagenes
function animatePequeño()
{
	$("#video").animate({
		"width": "700px",
		"height": "600px",
		"zIndex":-1000
	}, 1000);
	$("#videoAbs").css("z-index","-1");
	$("img").animate({
		"width": "300px",
		"height": "200px"
	}, 1000);
	$("#preguntas").animate({
		"width": "400px",
		"height": "300px",
		"opacity":1
	}, 1000);
};

//Funcion para hacer el video grande y que se quiten las imagenes
function animateGrande()
{
	$("#video").animate({
		"width": "1000px",
		"height": "720px"
	}, 1000);
	$("#videoAbs").css("z-index","3");
	$("img").animate({
		"width": "0px",
		"height": "0px"
	}, 1000);
	$("#preguntas").animate({
		"width": "0px",
		"height": "0px",
		"opacity":0
	}, 1000);
};

function comprobarTiempo(tiempo){
	if( tiempo >= escenaNow.fin ){
		return true;
	}
	else{
		return false;
	}
};

function mostrarPregunta(){
	$("#der").html("<button id='" + escenaNow.pregunta.respuestas[0].id_escena + "'>"+ escenaNow.pregunta.respuestas[0].enunciado+"</button>");
	$("#izq").html("<button id='" + escenaNow.pregunta.respuestas[1].id_escena + "'>"+ escenaNow.pregunta.respuestas[1].enunciado+"</button>");
	$("#cent").html("<div id='div_pregunta'>"+escenaNow.pregunta.pregunta+"</div>");
};
function respuesta_Click(){
	$("button").click(function(){
		id = $(this).attr("id");
		escenaActual = id;
		escenaNow = encontrarEscena(parseInt(escenaActual));
		animateGrande();
		video.currentTime = escenaNow.inicio;
		rePlay();
	});
};
function rePlay() {
	setTimeout(function () {
	    video.play();
	}, 1000);
};
function encontrarEscena(id){
	var escenaR;
	for(y=0;y<= info.escenas.length - 1; y++){
		
		id2 = info.escenas[y].id;
		
		if(id2 === id){
			escenaR = info.escenas[y]; 
		}
	} 
	return escenaR;
};
jQuery(document).ready(function($) {
	escenaNow= encontrarEscena(escenaActual);
	var video = document.getElementById("video");
	//video.play();
	video.addEventListener("timeupdate", function () {
		var tiempo = video.currentTime;
		if(comprobarTiempo(tiempo) == true && escenaNow.pregunta.pregunta != null ){
			video.pause();
			animatePequeño();
			mostrarPregunta();
			respuesta_Click();
		}
		else if (comprobarTiempo(tiempo) == true && escenaNow.pregunta.respuestas[0].id_escena != null){
			escenaNow = encontrarEscena(parseInt(escenaNow.pregunta.respuestas[0].id_escena));
			video.currentTime = escenaNow.inicio;
		}
		else if(escenaNow.pregunta.respuestas[0].id_escena == null && comprobarTiempo(tiempo) == true){
			video.currentTime = 0;
			video.pause();
			escenaNow = null;
			escenaActual = 1;
			escenaNow= encontrarEscena(escenaActual);
		}
			
			/*setTimeout(function(){
				animateGrande();
			},2000);*/
		
	}, false);
});