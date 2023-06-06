const thumb = document.getElementById('tuto-thumb');
const pag1 = document.getElementById('tut-main');
const pag2 = document.getElementById('tut-vid-ej');

function toEj() {
	pag1.style.display = "none";
	pag2.style.display = "flex";
}

thumb.addEventListener('click', toEj);
