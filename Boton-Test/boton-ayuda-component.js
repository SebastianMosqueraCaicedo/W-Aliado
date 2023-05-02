// funciones onclick
const buttsExtra = [
	document.getElementById("boton-asesoria"),
	document.getElementById("boton-chat"),
	document.getElementById("boton-pqrs"),
	document.getElementById("boton-tutoriales")
];

console.log(buttsExtra[1]);
function toggleExtraButtons(){
	for (let j = 0; j < buttsExtra.length; j++){
		if(buttsExtra[j].style.display === "block"){
			buttsExtra[j].style.display === "none";
		} else {
			buttsExtra[j].style.display === "block";
		}
	}
}
