const statIz = document.getElementById("stat-iz");
const statDe = document.getElementById("stat-der");

const statIzP = document.getElementById("statIz-p");
const statDeP = document.getElementById("statDe-p");

const bgIz = document.getElementById("bg-iz");
const bgDe = document.getElementById("bg-der");

const botonSig = document.getElementById("siguiente")
const botonEnd = document.getElementById("terminar")

const divFrst = document.getElementById("datos-personales-gotahorro")
const divScnd = document.getElementById("2nd-pqrs")

function siguientePag(){
	divFrst.style.display = "none";
	divScnd.style.display = "block";

	statIz.style.fill = "#1ba9b1";
	statDe.style.fill = "white";

	statIzP.style.color = "#1ba9b1";
	statDeP.style.color = "white";

	bgIz.style.background = "white";
	bgDe.style.background = "#1ba9b1";
}

function volver(){
	window.location = "/index.html";
}

botonSig.addEventListener("click", siguientePag);
botonEnd.addEventListener("click", volver);
