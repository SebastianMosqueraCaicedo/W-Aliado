const switcher = document.getElementById("page-switcher");
const pages = document.getElementById("pages").children;

switcher.addEventListener("click", (event) => {
  const target = event.target.dataset.target;
  if (target) {
    for (let page of pages) {
      if (page.id === target) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    }
  }
});

var dropdownButtonFooter = document.getElementById('dropdown-button-footer');
var dropdownFooter = document.getElementById('dropdown-footer');

dropdownButtonFooter.addEventListener('click', function() {
  dropdownFooter.classList.toggle('vision');
});

var dropdownButtonFooter2 = document.getElementById('dropdown-button-footer2');
var dropdownFooter2 = document.getElementById('dropdown-footer2');

dropdownButtonFooter2.addEventListener('click', function() {
  dropdownFooter2.classList.toggle('vision');
});

var dropdownButtonFooter3 = document.getElementById('dropdown-button-footer3');
var dropdownFooter3 = document.getElementById('dropdown-footer3');

dropdownButtonFooter3.addEventListener('click', function() {
  dropdownFooter3.classList.toggle('vision');
});

var dropdownButtonFooter4 = document.getElementById('dropdown-button-footer4');
var dropdownFooter4 = document.getElementById('dropdown-footer4');

dropdownButtonFooter4.addEventListener('click', function() {
  dropdownFooter4.classList.toggle('vision');
});


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