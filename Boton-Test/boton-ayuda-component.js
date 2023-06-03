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
		toggleExtraButtons();
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
	box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.2);
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
	right: 185px;
	z-index: 199;
	box-shadow: 0px 8px 15px 15px rgba(0,0,0,0.2);
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
		box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.2);
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
		right: 375px;
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
		width: 450px;
		height: 500px;
	}

	@media (max-width: 822px){

		.boton-chat-ex {
			width: 76%;
			height: 100%;
			right: 24%;
		}

		.chat-send-div {
			margin: 2px;
		}
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
			  <!--<a href="/Boton-Tutoriales/tutoriales.html">-->

			  <a href="#">
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
		height: 82%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.chat-body p {
		color: white;
	}

	.chat-msg {
		background-color: #acacac;
		width: fit-content;
		padding: 10px;
		border-radius: 15px;
		margin-bottom: 20px;
		align-self: end;
		width: 200px;
	}

	.chat-msg p {
		max-width: 200px;
	}

	.chat-rsp {
		background-color: #00a2af;
		width: fit-content;
		padding: 10px;
		border-radius: 15px;
		margin-bottom: 20px;
		width: 200px;
	}

	.chat-bar input {
		width: 80%;
		height: 40px;
		border-width: 0;
		border-radius: 30px;
		padding: 10px;
	}

	.chat-bar {
		display: flex;
		align-content: center;
		justify-content: space-between;
	}

	.chat-send-div {
		margin-left: 20px;
		cursor:pointer;
	}

	.chat-send-div:hover > svg path{
		fill: #ff8833;
	}

	#close-chat {
		cursor:pointer;
	}

	#close-chat:hover > svg path{
		fill: red;
	}

</style>
<div class="chat-header">
	<h3>Chat de soporte</h3>
	<div id="close-chat">
		<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z" fill="white"/>
</svg>
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
		<div class="chat-send-div">

			<svg width="40" height="40" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5034 14.0359C12.5034 12.7461 13.623 11.7003 15.0045 11.7003C16.386 11.7003 17.5062 12.7461 17.5062 14.0359C17.5062 15.3256 16.386 16.3715 15.0045 16.3715C13.623 16.3715 12.5034 15.3256 12.5034 14.0359ZM11.151 14.0359C11.151 16.0228 12.8762 17.6335 15.0045 17.6335C17.1328 17.6335 18.858 16.0228 18.858 14.0359C18.858 12.0489 17.1328 10.4383 15.0045 10.4383C12.8762 10.4383 11.151 12.0489 11.151 14.0359ZM18.11 10.2956C18.1099 10.4619 18.1627 10.6245 18.2616 10.7628C18.3604 10.9011 18.501 11.0089 18.6656 11.0726C18.8301 11.1363 19.0112 11.153 19.1859 11.1206C19.3606 11.0882 19.5211 11.0082 19.647 10.8907C19.773 10.7732 19.8589 10.6234 19.8937 10.4603C19.9285 10.2972 19.9107 10.1282 19.8427 9.97452C19.7746 9.82087 19.6592 9.68952 19.5111 9.59708C19.3631 9.50464 19.189 9.45527 19.0109 9.4552H19.0105C18.7718 9.45531 18.5428 9.54387 18.374 9.70145C18.2051 9.85902 18.1102 10.0727 18.11 10.2956ZM11.9727 19.7388C11.241 19.7077 10.8433 19.5939 10.5791 19.4978C10.2287 19.3704 9.97871 19.2187 9.71587 18.9737C9.45303 18.7286 9.29033 18.4955 9.15453 18.1684C9.05151 17.9217 8.92964 17.5504 8.89638 16.8673C8.86 16.1288 8.85273 15.9069 8.85273 14.0359C8.85273 12.1649 8.8606 11.9437 8.89638 11.2046C8.9297 10.5215 9.05247 10.1508 9.15453 9.90349C9.29093 9.57638 9.45339 9.34299 9.71587 9.0976C9.97835 8.85222 10.2281 8.70032 10.5791 8.57354C10.8432 8.47736 11.241 8.36358 11.9727 8.33252C12.7637 8.29856 13.0013 8.29178 15.0045 8.29178C17.0077 8.29178 17.2455 8.29912 18.0372 8.33252C18.7689 8.36363 19.1659 8.47825 19.4308 8.57354C19.7812 8.70032 20.0312 8.85255 20.294 9.0976C20.5569 9.34265 20.719 9.57638 20.8554 9.90349C20.9584 10.1501 21.0803 10.5215 21.1135 11.2046C21.1499 11.9437 21.1572 12.1649 21.1572 14.0359C21.1572 15.9069 21.1499 16.1282 21.1135 16.8673C21.0802 17.5504 20.9577 17.9216 20.8554 18.1684C20.719 18.4955 20.5565 18.7289 20.294 18.9737C20.0316 19.2185 19.7812 19.3704 19.4308 19.4978C19.1667 19.5939 18.7689 19.7077 18.0372 19.7388C17.2462 19.7727 17.0086 19.7795 15.0045 19.7795C13.0004 19.7795 12.7635 19.7727 11.9727 19.7388ZM11.9105 7.07208C11.1116 7.10604 10.5657 7.22431 10.089 7.3975C9.59526 7.57636 9.17729 7.81631 8.75962 8.20563C8.34194 8.59495 8.08559 8.98579 7.89402 9.44674C7.70851 9.89211 7.58183 10.4015 7.54545 11.1473C7.50847 11.8944 7.5 12.1332 7.5 14.0359C7.5 15.9385 7.50847 16.1774 7.54545 16.9244C7.58183 17.6703 7.70851 18.1796 7.89402 18.625C8.08559 19.0857 8.342 19.477 8.75962 19.8661C9.17723 20.2553 9.59526 20.4949 10.089 20.6742C10.5666 20.8474 11.1116 20.9657 11.9105 20.9997C12.7111 21.0336 12.9665 21.0421 15.0045 21.0421C17.0425 21.0421 17.2983 21.0342 18.0985 20.9997C18.8974 20.9657 19.443 20.8474 19.92 20.6742C20.4134 20.4949 20.8317 20.2554 21.2494 19.8661C21.6671 19.4768 21.9229 19.0857 22.115 18.625C22.3005 18.1796 22.4278 17.6702 22.4636 16.9244C22.4999 16.1768 22.5084 15.9385 22.5084 14.0359C22.5084 12.1332 22.4999 11.8944 22.4636 11.1473C22.4272 10.4014 22.3005 9.89183 22.115 9.44674C21.9229 8.98607 21.6664 8.59557 21.2494 8.20563C20.8324 7.81569 20.4134 7.57636 19.9206 7.3975C19.443 7.22431 18.8974 7.10548 18.0991 7.07208C17.2989 7.03811 17.0431 7.02965 15.0051 7.02965C12.9671 7.02965 12.7111 7.03755 11.9105 7.07208Z" fill="#00a2af"/>
<path d="M12.5034 14.0359C12.5034 12.7461 13.623 11.7003 15.0045 11.7003C16.386 11.7003 17.5062 12.7461 17.5062 14.0359C17.5062 15.3256 16.386 16.3715 15.0045 16.3715C13.623 16.3715 12.5034 15.3256 12.5034 14.0359ZM11.151 14.0359C11.151 16.0228 12.8762 17.6335 15.0045 17.6335C17.1328 17.6335 18.858 16.0228 18.858 14.0359C18.858 12.0489 17.1328 10.4383 15.0045 10.4383C12.8762 10.4383 11.151 12.0489 11.151 14.0359ZM18.11 10.2956C18.1099 10.4619 18.1627 10.6245 18.2616 10.7628C18.3604 10.9011 18.501 11.0089 18.6656 11.0726C18.8301 11.1363 19.0112 11.153 19.1859 11.1206C19.3606 11.0882 19.5211 11.0082 19.647 10.8907C19.773 10.7732 19.8589 10.6234 19.8937 10.4603C19.9285 10.2972 19.9107 10.1282 19.8427 9.97452C19.7746 9.82087 19.6592 9.68952 19.5111 9.59708C19.3631 9.50464 19.189 9.45527 19.0109 9.4552H19.0105C18.7718 9.45531 18.5428 9.54387 18.374 9.70145C18.2051 9.85902 18.1102 10.0727 18.11 10.2956ZM11.9727 19.7388C11.241 19.7077 10.8433 19.5939 10.5791 19.4978C10.2287 19.3704 9.97871 19.2187 9.71587 18.9737C9.45303 18.7286 9.29033 18.4955 9.15453 18.1684C9.05151 17.9217 8.92964 17.5504 8.89638 16.8673C8.86 16.1288 8.85273 15.9069 8.85273 14.0359C8.85273 12.1649 8.8606 11.9437 8.89638 11.2046C8.9297 10.5215 9.05247 10.1508 9.15453 9.90349C9.29093 9.57638 9.45339 9.34299 9.71587 9.0976C9.97835 8.85222 10.2281 8.70032 10.5791 8.57354C10.8432 8.47736 11.241 8.36358 11.9727 8.33252C12.7637 8.29856 13.0013 8.29178 15.0045 8.29178C17.0077 8.29178 17.2455 8.29912 18.0372 8.33252C18.7689 8.36363 19.1659 8.47825 19.4308 8.57354C19.7812 8.70032 20.0312 8.85255 20.294 9.0976C20.5569 9.34265 20.719 9.57638 20.8554 9.90349C20.9584 10.1501 21.0803 10.5215 21.1135 11.2046C21.1499 11.9437 21.1572 12.1649 21.1572 14.0359C21.1572 15.9069 21.1499 16.1282 21.1135 16.8673C21.0802 17.5504 20.9577 17.9216 20.8554 18.1684C20.719 18.4955 20.5565 18.7289 20.294 18.9737C20.0316 19.2185 19.7812 19.3704 19.4308 19.4978C19.1667 19.5939 18.7689 19.7077 18.0372 19.7388C17.2462 19.7727 17.0086 19.7795 15.0045 19.7795C13.0004 19.7795 12.7635 19.7727 11.9727 19.7388ZM11.9105 7.07208C11.1116 7.10604 10.5657 7.22431 10.089 7.3975C9.59526 7.57636 9.17729 7.81631 8.75962 8.20563C8.34194 8.59495 8.08559 8.98579 7.89402 9.44674C7.70851 9.89211 7.58183 10.4015 7.54545 11.1473C7.50847 11.8944 7.5 12.1332 7.5 14.0359C7.5 15.9385 7.50847 16.1774 7.54545 16.9244C7.58183 17.6703 7.70851 18.1796 7.89402 18.625C8.08559 19.0857 8.342 19.477 8.75962 19.8661C9.17723 20.2553 9.59526 20.4949 10.089 20.6742C10.5666 20.8474 11.1116 20.9657 11.9105 20.9997C12.7111 21.0336 12.9665 21.0421 15.0045 21.0421C17.0425 21.0421 17.2983 21.0342 18.0985 20.9997C18.8974 20.9657 19.443 20.8474 19.92 20.6742C20.4134 20.4949 20.8317 20.2554 21.2494 19.8661C21.6671 19.4768 21.9229 19.0857 22.115 18.625C22.3005 18.1796 22.4278 17.6702 22.4636 16.9244C22.4999 16.1768 22.5084 15.9385 22.5084 14.0359C22.5084 12.1332 22.4999 11.8944 22.4636 11.1473C22.4272 10.4014 22.3005 9.89183 22.115 9.44674C21.9229 8.98607 21.6664 8.59557 21.2494 8.20563C20.8324 7.81569 20.4134 7.57636 19.9206 7.3975C19.443 7.22431 18.8974 7.10548 18.0991 7.07208C17.2989 7.03811 17.0431 7.02965 15.0051 7.02965C12.9671 7.02965 12.7111 7.03755 11.9105 7.07208Z" fill="#00a2af"/>
</svg>
		</div>
		<div class="chat-send-div">
			<svg width="40" height="40" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99995 3.66401L2.49524 0.911654C2.27799 0.80353 2.03269 0.765037 1.79277 0.801423C1.55285 0.83781 1.32999 0.947305 1.15458 1.11498C0.979162 1.28266 0.859729 1.50035 0.812561 1.73839C0.765394 1.97642 0.792787 2.22321 0.891006 2.44511L1.83467 4.55656C1.85608 4.60761 1.86711 4.66241 1.86711 4.71777C1.86711 4.77313 1.85608 4.82793 1.83467 4.87898L0.891006 6.99043C0.81107 7.17 0.777277 7.36671 0.792699 7.56267C0.80812 7.75863 0.872267 7.94762 0.97931 8.11249C1.08635 8.27735 1.2329 8.41285 1.40563 8.50667C1.57836 8.60049 1.77179 8.64966 1.96836 8.6497C2.15246 8.64787 2.33383 8.60488 2.49917 8.52388L8.00388 5.77153C8.19914 5.6733 8.36326 5.52276 8.47795 5.33669C8.59263 5.15062 8.65336 4.93634 8.65336 4.71777C8.65336 4.4992 8.59263 4.28492 8.47795 4.09885C8.36326 3.91278 8.19914 3.76223 8.00388 3.66401H7.99995ZM7.65 5.06771L2.14529 7.82007C2.07301 7.85477 1.99184 7.86655 1.91268 7.85382C1.83351 7.84109 1.76012 7.80446 1.70237 7.74884C1.64461 7.69322 1.60523 7.62127 1.58953 7.54264C1.57382 7.46401 1.58253 7.38246 1.61448 7.30891L2.55422 5.19746C2.56638 5.16927 2.57688 5.14039 2.58567 5.11096H5.29477C5.39906 5.11096 5.49907 5.06954 5.5728 4.9958C5.64654 4.92206 5.68797 4.82205 5.68797 4.71777C5.68797 4.61349 5.64654 4.51348 5.5728 4.43974C5.49907 4.366 5.39906 4.32457 5.29477 4.32457H2.58567C2.57688 4.29515 2.56638 4.26627 2.55422 4.23807L1.61448 2.12662C1.58253 2.05308 1.57382 1.97153 1.58953 1.8929C1.60523 1.81427 1.64461 1.74232 1.70237 1.6867C1.76012 1.63108 1.83351 1.59445 1.91268 1.58172C1.99184 1.56899 2.07301 1.58076 2.14529 1.61547L7.65 4.36783C7.71441 4.40082 7.76846 4.45095 7.8062 4.5127C7.84395 4.57444 7.86392 4.6454 7.86392 4.71777C7.86392 4.79013 7.84395 4.8611 7.8062 4.92284C7.76846 4.98458 7.71441 5.03471 7.65 5.06771V5.06771Z" fill="#00a2af"/>
</svg>
		</div>
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

const chatClose = document.getElementById('close-chat');
chatClose.addEventListener('click', toggleBotonChat);

// hovers
buttsExtra[0].setAttribute('onmouseenter', 'ayudaOn(this)');
buttsExtra[2].setAttribute('onmouseenter', 'pqrsOn(this)');
buttsExtra[3].setAttribute('onmouseenter', 'tutoOn(this)');
buttsExtra[1].setAttribute('onmouseenter', 'chatOn(this)');

buttsExtra[0].setAttribute('onmouseleave', 'ayudaOff(this)');
buttsExtra[2].setAttribute('onmouseleave', 'pqrsOff(this)');
buttsExtra[3].setAttribute('onmouseleave', 'tutoOff(this)');
buttsExtra[1].setAttribute('onmouseleave', 'chatOff(this)');
