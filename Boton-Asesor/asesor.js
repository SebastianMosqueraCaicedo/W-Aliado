const llamadaDiv = document.getElementById('llamada');
const llamandoDiv = document.getElementById('llamando');

const cancelaBoton = document.getElementById('cancel');
const cuelgaBoton = document.getElementById('cuelga');

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
}

setInterval(llama, 1500);

cancelaBoton.addEventListener('click', cancela);
cuelgaBoton.addEventListener('click', cuelga);
