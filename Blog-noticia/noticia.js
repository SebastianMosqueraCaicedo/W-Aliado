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
    dropdownMenu.classList.toggle("watch");
  }
}

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