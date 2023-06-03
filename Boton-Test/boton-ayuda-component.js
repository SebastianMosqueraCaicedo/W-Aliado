// crear elementos basicos
const botonFull = document.createElement('div');
const opacador = document.createElement('div');
const botonChatFull = document.createElement('div');

// funciones circumstanciales
// opaca el fondo y abre los botones. Cierra el chat si esta abierto
function toggleExtraButtons(){
	for (let j = 0; j < buttsExtra.length; j++){
		if(buttsExtra[j].style.display === "flex"){
			buttsExtra[j].style.display = "none";
			mobilePipe.style.display = "none";
			botonOpac.style.display = "none";
			botonChat.style.display = "none";
		} else {
			buttsExtra[j].style.display = "flex";
			botonOpac.style.display = "block";
			mobilePipe.style.display = "block";
		}
	}
}

// agrega una funcion a todo el documento. Si se clickea fuera del boton, sale
// basado en: https://www.w3docs.com/snippets/javascript/how-to-detect-a-click-outside-an-element.html
document.addEventListener("click", function(evt) {
	  targetEl = evt.target; // clicked element
	do {
	  if(targetEl == botonFull) {
		  console.log(targetEl);
	    return;
	  }
	  targetEl = targetEl.parentNode;
	} while (targetEl);
	for (let j = 0; j < buttsExtra.length; j++){
		buttsExtra[j].style.display = "none";
		mobilePipe.style.display = "none";
		botonOpac.style.display = "none";
		botonChat.style.display = "none";
	}
});
// cuando entra el mouse al div, cambia el icono de la imagen
function chatOff(div){
	div.children[0].src="/icons/chat-boton.svg";
}
function chatOn(div){
	div.children[0].src="/icons/chat-boton-act.svg";
}

function tutoOff(div){
	div.children[0].children[0].src="/icons/tutoriales-boton.svg";
}
function tutoOn(div){
	div.children[0].children[0].src="/icons/tutoriales-boton-act.svg";
}

function ayudaOff(div){
	div.children[0].children[0].src="/icons/asesoria-boton.svg";
}
function ayudaOn(div){
	div.children[0].children[0].src="/icons/asesoria-boton-act.svg";
}

function pqrsOff(div){
	div.children[0].children[0].src="/icons/pqrs-boton.svg";
}
function pqrsOn(div){
	div.children[0].children[0].src="/icons/pqrs-boton-act.svg";
}

// muestra el chat
function toggleBotonChat(){
	if(botonChat.style.display === "block"){
		botonChat.style.display = "none";
	} else {
		botonChat.style.display = "block";
	}
}

// cuerpo de codigo (html + css)

opacador.setAttribute('id','boton-opacar')
document.body.appendChild(opacador);

botonFull.setAttribute('class','boton-div');
botonFull.innerHTML = `
<style>

.boton-div {
	position: fixed;
	bottom: 90px;
	right: 40px;
	z-index: 200;
}

/* Modo estandar */

.boton-asesoria {
	cursor: pointer;
	right: 85px;
	top: -65px;
}

.boton-chat {
	cursor: pointer;
	right: -5px;
	top: -80px;
}

.boton-pqrs {
	cursor: pointer;
	right: 100px;
	top: 100px;
}

.boton-tutoriales {
	cursor: pointer;
	right: 125px;
	top: 12px;
}

.boton-ayuda {
	cursor: pointer;
	width: 100px;
	height: 100px;
	padding: 10px;
	background-color: #FF8833 ;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.botones-all {
	width: 60px;
	height: 60px;
	background-color: #FFFFFF;
	border-radius: 100%;
	box-shadow: 0px 0px 9px 10px rgba(25,100,50,0.04);
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	display: none;
}

.botones-all:hover {
	background-color: #FF8833;
}

/* responsive */

.react-botones {
	height: 30px;
	background-color: #FF8833;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 75px;
	top: 15px;
	padding: 0 20px;
}

.react-chat {
	right: 55px;
	top: -30px;
}

.react-botones p{
	color: #FFFFFF;
}

/* chat */

.boton-chat-ex {
	display: none;
	position: fixed;
	bottom: -5px;
	right: 200px;
}

/* opacar */

#boton-opacar {
	display: none;
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.3));
}

.mobile-pipe {
	display: none;
}

@media (max-width: 1008px){

	.boton-div {
		position: fixed;
		bottom: 50px;
		right: 20px;
	}

	/* Modo estandar */

	.mobile-pipe {
		position: absolute;
		width: 50px;
		height: 195px;
		background-color: white;
		border-radius: 30px;
		top: -205px;
		right: 5px;
	}
		
	.boton-asesoria {
		right: 10px;
		top: -195px;
	}

	.boton-chat {
		cursor: pointer;
		right: 10px;
		top: -105px;
	}

	.boton-pqrs {
		right: 10px;
		top: -60px;
	}

	.boton-tutoriales {
		right: 10px;
		top: -150px;
	}

	.boton-ayuda {
		cursor: pointer;
		width: 60px;
		height: 60px;
		padding: 10px;
		background-color: #FF8833 ;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.botones-all {
		width: 40px;
		height: 40px;
		background-color: #FFFFFF;
		border-radius: 30px;
		box-shadow: 0px 0px 9px 10px rgba(25,100,50,0.04);
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		display: none;
	}

	/* responsive */

	.react-botones {
		height: 30px;
		background-color: unset;
		border-radius: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 60px;
		top: 0px;
		padding: 0 20px;
	}

	.react-chat {
		right: 60px;
		top: 0px;
	}

	/* chat */

	.boton-chat-ex {
		display: none;
		position: fixed;
		bottom: -5px;
		right: 200px;
	}

	/* opacar */

	#boton-opacar {
		display: none;
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4));
	}


}

/* boton */
	.boton-chat-ex {
		width: 600px;
		height: 550px;
	}

</style>
	  <img src="../icons/boton-ayuda.svg" alt="" class="boton-ayuda" id="boton-ayuda">

	  	<div class="mobile-pipe" id="mobile-pipe"></div>

		  <div class="boton-asesoria botones-all" id="boton-asesoria">
			  <a href="/Boton-Asesor/asesor.html">
				  <img src="/icons/asesoria-boton.svg" alt=""
				  id="img-asesoria"></img>
			  </a>
			  <div class="react-asesoria react-botones" id="react-asesoria">
				<p>Asesorias</p>
			  </div>
		  </div>
		  <div class="boton-chat botones-all" id="boton-chat">
			  <img src="/icons/chat-boton.svg" alt=""
			  id="img-chat"></img>
			  <div class="react-chat react-botones" id="react-chat">
				<p>Chat</p>
			  </div>
		  </div>
		  <div class="boton-pqrs botones-all" id="boton-pqrs">
			  <a href="/Boton-PQRS/pqrs.html">
				  <img src="/icons/pqrs-boton.svg" alt=""
				  id="img-pqrs"></img>
			  </a>
			  <div class="react-PQRS react-botones" id="react-PQRS">
				<p>PQRS</p>
			  </div>
		  </div>
		  <div class="boton-tutoriales botones-all" id="boton-tutoriales">
			  <a href="/Boton-Tutoriales/tutoriales.html">
				  <img src="/icons/tutoriales-boton.svg" alt=""
				  id="img-tutoriales"></img>
			  </a>
			  <div class="react-tutoriales react-botones" id="react-tutoriales">
				<p>Tutoriales</p>
			  </div>
		  </div>
	  </img>
`
document.body.appendChild(botonFull);

botonChatFull.setAttribute('class','boton-chat-ex');
botonChatFull.setAttribute('id','boton-chat-ex');
botonChatFull.innerHTML = `
<style>

	.chat-header {
		background-color: #00b1bb;
		padding: 30px;
		display: flex;
		justify-content: space-between;
	}

	.chat-header h3 {
		color: white;
		margin: 0;
		padding: 0;
	}

	.chat-header p {
		height: fit-content;
		color: white;
		font-size: 30px;
	}

	.chat-body {
		background-color: #f3f3f3;
		padding: 30px;
	}

	.chat-body p {
		color: white;
	}

	.chat-msg {
		background-color: #acacac;
		width: fit-content;
		padding: 5px;
		border-radius: 10px;
		margin-bottom: 20px;
	}

	.chat-rsp {
		background-color: #00a2af;
		width: fit-content;
		padding: 5px;
		border-radius: 10px;
		margin-bottom: 20px;
	}
</style>
<div class="chat-header">
	<h3>Chat de soporte</h3>
	<div id="close-chat">
		<p>X</p>
	</div>
</div>

<div class="chat-body">
	<div class="chat-msg">
		<p>Tengo una pregunta sobre los creditos para emprendedores</p>
	</div>
	<div class="chat-rsp">
		<p>Claro, con gusto</p>
	</div>
	<div class="chat-bar">
		<input type="textInput" id="chat-bar" placeholder="..." />
	<div>
</div>
`
document.body.appendChild(botonChatFull);

// coger elementos del cuerpo

const buttsExtra = [
	document.getElementById('boton-asesoria'),
	document.getElementById('boton-chat'),
	document.getElementById('boton-pqrs'),
	document.getElementById('boton-tutoriales')
];

const mobilePipe = document.getElementById('mobile-pipe');

const botonAyuda = document.getElementById('boton-ayuda');
const botonChat = document.getElementById('boton-chat-ex');
const botonOpac = document.getElementById('boton-opacar');

// listeners
botonAyuda.addEventListener('click', toggleExtraButtons);

buttsExtra[1].addEventListener('click', toggleBotonChat);

// hovers
buttsExtra[0].setAttribute('onmouseenter', 'ayudaOn(this)');
buttsExtra[2].setAttribute('onmouseenter', 'pqrsOn(this)');
buttsExtra[3].setAttribute('onmouseenter', 'tutoOn(this)');
buttsExtra[1].setAttribute('onmouseenter', 'chatOn(this)');

buttsExtra[0].setAttribute('onmouseleave', 'ayudaOff(this)');
buttsExtra[2].setAttribute('onmouseleave', 'pqrsOff(this)');
buttsExtra[3].setAttribute('onmouseleave', 'tutoOff(this)');
buttsExtra[1].setAttribute('onmouseleave', 'chatOff(this)');
