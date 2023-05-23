// crear elementos basicos
const botonFull = document.createElement('div');
const opacador = document.createElement('div');
const botonChatFull = document.createElement('div');

// funciones circumstanciales
// opaca el fondo y abre los botones. Cierra el chat si esta abierto
function toggleExtraButtons(){
	let wW = window.innerWidth;
	console.log(wW);
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
}

/* Modo estandar */

.boton-asesoria {
	right: 85px;
	top: -65px;
}

.boton-chat {
	cursor: pointer;
	right: -5px;
	top: -80px;
}

.boton-pqrs {
	right: 100px;
	top: 100px;
}

.boton-tutoriales {
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

@media (max-width: 1200px){

	.boton-div {
		position: fixed;
		bottom: 50px;
		right: 20px;
	}

	/* Modo estandar */

	.mobile-pipe {
		position: absolute;
		width: 50px;
		height: 170px;
		background-color: white;
		border-radius: 20%;
		top: -180px;
		right: 5px;
	}
		
	.boton-asesoria {
		right: 15px;
		top: -170px;
	}

	.boton-chat {
		cursor: pointer;
		right: 15px;
		top: -90px;
	}

	.boton-pqrs {
		right: 15px;
		top: -50px;
	}

	.boton-tutoriales {
		right: 15px;
		top: -130px;
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
		width: 30px;
		height: 30px;
		background-color: #FFFFFF;
		border-radius: 100%;
		box-shadow: 0px 0px 9px 10px rgba(25,100,50,0.04);
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		display: none;
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


}

</style>
	  <img src="../icons/boton-ayuda.svg" alt="" class="boton-ayuda" id="boton-ayuda">

	  	<div class="mobile-pipe" id="mobile-pipe"></div>

		  <div class="boton-asesoria botones-all" id="boton-asesoria">
			  <a href="/Boton-Asesor/asesor.html">
				  <img src="/icons/asesoria-boton.svg" alt=""></img>
			  </a>
		  </div>
		  <div class="boton-chat botones-all" id="boton-chat">
			  <img src="/icons/chat-boton.svg" alt=""></img>
		  </div>
		  <div class="boton-pqrs botones-all" id="boton-pqrs">
			  <a href="/Boton-PQRS/pqrs.html">
				  <img src="/icons/pqrs-boton.svg" alt=""></img>
			  </a>
		  </div>
		  <div class="boton-tutoriales botones-all" id="boton-tutoriales">
			  <a href="/Boton-Tutoriales/tutoriales.html">
				  <img src="/icons/tutoriales-boton.svg" alt=""></img>
			  </a>
		  </div>
	  </img>
`
document.body.appendChild(botonFull);

botonChatFull.setAttribute('class','boton-chat-ex');
botonChatFull.setAttribute('id','boton-chat-ex');
botonChatFull.innerHTML = `
<img src="/icons/chat-boton-soporte.svg" alt="" class="boton-chatex" id="boton-chat-ex"></img>
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
