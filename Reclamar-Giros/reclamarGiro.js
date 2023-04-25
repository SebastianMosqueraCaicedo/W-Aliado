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

var dropdownButton = document.getElementById('dropdown-button');
var dropdownMenu = document.getElementById('dropdown-menu');

dropdownButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

var dropdownButton2 = document.getElementById('dropdown-button2');
var dropdownMenu2 = document.getElementById('dropdown-menu2');

dropdownButton2.addEventListener('click', function() {
  dropdownMenu2.classList.toggle('view');
});


// Foooter

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

//// Menu slider

var marker = document.querySelector('#marker');
var items = document.querySelectorAll('#page-switcher li');

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    indicator(e.target);
  });
});