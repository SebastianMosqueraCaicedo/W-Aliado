// Función para navegar hacia atrás
function goBack() {
  // Ocultar la sección de resultados y mostrar la sección de entrada de datos
  document.querySelector(".results-section").style.display = "none";
  document.querySelector(".input-section").style.display = "block";
}
// Función para mostrar u ocultar el menú hamburguesa
function toggleHamburgerMenu() {
  const menu = document.querySelector(".hamburger-menu-container");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Función para cerrar el menú hamburguesa al hacer clic fuera de él
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".hamburger-menu-container");
  const target = event.target;
  if (
    !target.closest(".hamburger-menu") &&
    !target.closest(".hamburger-menu-container")
  ) {
    menu.style.display = "none";
  }
});
// Función para dropdown menu

function toggleDropdown(event) {
  const dropdownTitle = event.target;
  const dropdownMenu = dropdownTitle.nextElementSibling;

  if (dropdownMenu.classList.contains("submenu")) {
    dropdownMenu.classList.toggle("show");
  }
}

// Función para mostrar y ocultar las secciones

function toggleInputs(checkboxId) {
  const tipoCredito = document.getElementById("tipo-credito");
  const datosPersonalesGotahorro = document.getElementById(
    "datos-personales-gotahorro"
  );
  const datosPersonalesYoConstruyo = document.getElementById(
    "datos-personales-yoconstruyo"
  );
  const creditoFinalizado = document.getElementById("credito-finalizado");

  if (checkboxId === "checkbox1") {
    tipoCredito.style.display = "none";
    datosPersonalesGotahorro.style.display = "block";
    datosPersonalesYoConstruyo.style.display = "none";
    creditoFinalizado.style.display = "none";
  } else if (checkboxId === "checkbox2") {
    tipoCredito.style.display = "none";
    datosPersonalesGotahorro.style.display = "none";
    datosPersonalesYoConstruyo.style.display = "block";
    creditoFinalizado.style.display = "none";
  }
  if (checkboxId === "siguiente2" || checkboxId === "siguiente3") {
    tipoCredito.style.display = "none";
    datosPersonalesGotahorro.style.display = "none";
    datosPersonalesYoConstruyo.style.display = "none";
    creditoFinalizado.style.display = "block";
  }
  if (checkboxId === "terminar") {
    tipoCredito.style.display = "block";
    datosPersonalesGotahorro.style.display = "none";
    datosPersonalesYoConstruyo.style.display = "none";
    creditoFinalizado.style.display = "none";
  }
}
document.getElementById("checkbox1").addEventListener("change", function () {
  toggleInputs("checkbox1");
});

document.getElementById("checkbox2").addEventListener("change", function () {
  toggleInputs("checkbox2");
});

document.getElementById("siguiente2").addEventListener("click", function () {
  toggleInputs("siguiente2");
});
document.getElementById("siguiente3").addEventListener("click", function () {
  toggleInputs("siguiente3");
});
document.getElementById("terminar").addEventListener("click", function () {
  toggleInputs("terminar");
});

/////////////////////////⬇️Footer

var dropdownButtonFooter = document.getElementById("dropdown-button-footer");
var dropdownFooter = document.getElementById("dropdown-footer");

dropdownButtonFooter.addEventListener("click", function () {
  dropdownFooter.classList.toggle("vision");
});

var dropdownButtonFooter2 = document.getElementById("dropdown-button-footer2");
var dropdownFooter2 = document.getElementById("dropdown-footer2");

dropdownButtonFooter2.addEventListener("click", function () {
  dropdownFooter2.classList.toggle("vision");
});

var dropdownButtonFooter3 = document.getElementById("dropdown-button-footer3");
var dropdownFooter3 = document.getElementById("dropdown-footer3");

dropdownButtonFooter3.addEventListener("click", function () {
  dropdownFooter3.classList.toggle("vision");
});

var dropdownButtonFooter4 = document.getElementById("dropdown-button-footer4");
var dropdownFooter4 = document.getElementById("dropdown-footer4");

dropdownButtonFooter4.addEventListener("click", function () {
  dropdownFooter4.classList.toggle("vision");
});
