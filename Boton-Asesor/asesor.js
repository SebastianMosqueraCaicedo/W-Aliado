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
const sgte1 = document.getElementById('sgte1');

const agendaCita2 = document.getElementById('agenda2');
const atras2 = document.getElementById('atras2');
const sgte2 = document.getElementById('sgte2');

const agendaCita3 = document.getElementById('agenda3');
const botonRegresa2 = document.getElementById('regresa2');

let isMenu = false;
let time = 0;

function cuelga() {
	window.location = "/index.html";
}

function openTutorial() {
	window.location = "/Boton-Tutoriales/tutoriales.html";
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

function openHorarios2(){
	agendaCita2.style.display = "block";
	agendaCita1.style.display = "none";
	window.scrollTo(0,0);
}

function openHorarios3() {
	agendaCita2.style.display = "none";
	agendaCita3.style.display = "flex";
}

function atrasHor1(){
	agendaCita1.style.display = "none";
	menuDiv.style.display = "flex";
}

function atrasHor2(){
	agendaCita2.style.display = "none";
	agendaCita1.style.display = "block";
	window.scrollTo(0,0);
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
sgte1.addEventListener('click', openHorarios2);

atras2.addEventListener('click', atrasHor2);
sgte2.addEventListener('click', openHorarios3);

botonRegresa2.addEventListener('click', cuelga);
