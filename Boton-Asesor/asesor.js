const llamadaDiv = document.getElementById('llamada');
const llamandoDiv = document.getElementById('llamando');
const menuDiv = document.getElementById('asesor-menu');

const footer = document.getElementById('asesor-footer');
footer.style.display = "none";

const cancelaBoton = document.getElementById('cancel');
const cuelgaBoton = document.getElementById('cuelga');

// menu
const botonChat = document.getElementById('boton-chat-ex');
const botonChatAsesor = document.getElementById('chatea');
const botonHorarios = document.getElementById('horarios');
const botonTutorial = document.getElementById('tutorial');
const botonRegresa = document.getElementById('regresa');

// agenda
const agendaCita1 = document.getElementById('agenda1');
const atras1 = document.getElementById('atras1');

let isMenu = false;
let time = 0;

function cuelga() {
	window.location = "/index.html";
}

function llama() {
	if (!isMenu && time===1) {
		llamandoDiv.style.display = "none";
		llamadaDiv.style.display = "flex";
	}
	time++;
}

function cancela() {
	isMenu = true;
	llamandoDiv.style.display = "none";
	menuDiv.style.display = "flex";
	footer.style.display = "block";
}

function openChat(){
	botonChat.style.display = "block";
}

function openHorarios(){
	agendaCita1.style.display = "block";
	menuDiv.style.display = "none";
}

function atrasHor1(){
	agendaCita1.style.display = "none";
	menuDiv.style.display = "flex";
}

function openTutorial(){
}

setInterval(llama, 1500);

cancelaBoton.addEventListener('click', cancela);
cuelgaBoton.addEventListener('click', cuelga);

// menu
botonChatAsesor.addEventListener('click', openChat);
botonHorarios.addEventListener('click', openHorarios);
botonTutorial.addEventListener('click', openTutorial);
botonRegresa.addEventListener('click', cuelga);

// agenda
atras1.addEventListener('click', atrasHor1);
