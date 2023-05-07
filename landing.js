// Función para navegar hacia atrás
function goBack() {
  // Ocultar la sección de resultados y mostrar la sección de entrada de datos
  document.querySelector(".results-section").style.display = "none";
  document.querySelector(".input-section").style.display = "block";
}
// // Función para mostrar u ocultar el menú hamburguesa
// function toggleHamburgerMenu() {
//   const menu = document.querySelector(".hamburger-menu-container");
//   if (menu.style.display === "block") {
//     menu.style.display = "none";
//   } else {
//     menu.style.display = "block";
//   }
// }

// // Función para cerrar el menú hamburguesa al hacer clic fuera de él
// document.addEventListener("click", function (event) {
//   const menu = document.querySelector(".hamburger-menu-container");
//   const target = event.target;
//   if (
//     !target.closest(".hamburger-menu") &&
//     !target.closest(".hamburger-menu-container")
//   ) {
//     menu.style.display = "none";
//   }
// });
// // Función para dropdown menu
// function toggleDropdown(event) {
//   const dropdownTitle = event.target;
//   const dropdownMenu = dropdownTitle.nextElementSibling;

//   if (dropdownMenu.classList.contains("submenu")) {
//     dropdownMenu.classList.toggle("show");
//   }
// }
// Card slider funciones

const slider = document.querySelector(".slider");
const sliderTrack = document.querySelector(".slider-track");
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;

function touchHandler(e) {
  e.preventDefault();
}
slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPos = getPositionX(e);
  animationID = requestAnimationFrame(animation);
  sliderTrack.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  cancelAnimationFrame(animationID);
  sliderTrack.style.cursor = "grab";

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < 2) {
    currentIndex += 1;
  } else if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();

  prevTranslate = currentTranslate;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const currentPosition = getPositionX(e);
  currentTranslate = prevTranslate + currentPosition - startPos;
});

slider.addEventListener("touchstart", (e) => {
  isDragging = true;
  startPos = getPositionX(e);
  animationID = requestAnimationFrame(animation);
  slider.addEventListener("touchmove", touchHandler, { passive: false });
});

slider.addEventListener("touchend", () => {
  isDragging = false;
  cancelAnimationFrame(animationID);
  slider.removeEventListener("touchmove", touchHandler, { passive: false });

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < 2) {
    currentIndex += 1;
  } else if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();

  prevTranslate = currentTranslate;
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const currentPosition = getPositionX(e);
  currentTranslate = prevTranslate + currentPosition - startPos;
});

function getPositionX(e) {
  return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -(window.innerWidth - 35);
  prevTranslate = currentTranslate;
  setSliderPosition();
}

///////////⬇️ Código del footer

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

////// logica landing-user //////

document
  .getElementById("mis-productos-btn")
  .addEventListener("click", function () {
    showDiv("mis-productos");
  });

document
  .getElementById("estado-tramites-btn")
  .addEventListener("click", function () {
    showDiv("estado-tramite");
  });

document
  .getElementById("acciones-rapidas-btn")
  .addEventListener("click", function () {
    showDiv("acciones-rapidas");
  });

function showDiv(divId) {
  var divs = ["mis-productos", "estado-tramite", "acciones-rapidas"];
  divs.forEach(function (id) {
    document.querySelector("." + id).classList.toggle("hidden", id !== divId);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const userSelectors = document.querySelectorAll(".user-selector");

  userSelectors.forEach((button) => {
    button.addEventListener("click", (event) => {
      userSelectors.forEach((btn) => {
        btn.style.backgroundColor = "#f3f3f3";
        btn.style.color = "#676767";
      });

      event.target.style.backgroundColor = "#DFCCF3";
      event.target.style.color = "#5F259F";
    });
  });

  // Seleccionar "Mis productos" al cargar la página
  showDiv("mis-productos");
  document.getElementById("mis-productos-btn").style.backgroundColor =
    "#DFCCF3";
  document.getElementById("mis-productos-btn").style.color = "#5F259F";
});
