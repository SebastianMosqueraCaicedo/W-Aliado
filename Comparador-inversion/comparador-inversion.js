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

// Lógica Comparador

const savingsButton = document.getElementById("savings-button");
const creditButton = document.getElementById("credit-button");

const coverPage = document.getElementById("cover-page");
const comparator = document.getElementById("comparador");

const bgImage = document.getElementById("cover-image");

const filterContainer = document.getElementById("filter-container");
const savingSection = document.getElementById("savings-section");
const creditSection = document.getElementById("credit-section");

console.log(bgImage);
savingsButton.addEventListener("click", () => {
  coverPage.style.display = "none";
  bgImage.src = "./assets/ahorro._4x.webp";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  savingSection.style.display = "block";
});

creditButton.addEventListener("click", () => {
  coverPage.style.display = "none";
  bgImage.src = "./assets/credito_4x.webp";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  creditSection.style.display = "block";
});

const comparedButton = document.getElementById("compared");
console.log(comparedButton);
const comparison = document.getElementById("comparison");

comparedButton.addEventListener("click", () => {
  if (creditSection.style.display === "block") {
    comparison.src = "./assets/compared-credito_4x.webp";
  } else {
    comparison.src = "./assets/compared-ahorro_4x.webp";
  }
  comparison.style.display = "block";
  filterContainer.style.display = "none";
  console.log("click");
});

const ahorroButton = document.getElementsByClassName('characters');
const creditoButton = document.getElementsByClassName('requirements');

ahorroButton[0].addEventListener("click", () => {
  coverPage.style.display = "none";
  bgImage.src = "./assets/ahorro_4x.webp";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  savingSection.style.display = "block";
  creditSection.style.display = "none";
  comparison.style.display = "none";
});

creditoButton[0].addEventListener("click", () => {
  coverPage.style.display = "none";
  bgImage.src = "./assets/credito_4x.webp";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  savingSection.style.display = "none";
  creditSection.style.display = "block";
  comparison.style.display = "none";
});
/*
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
});*/

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

//Función para cambiar de color la letra

const lista = document.getElementById("page-switcher");
const elementos = lista.getElementsByTagName("li");

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function () {
    const seleccionado = lista.getElementsByClassName("select");
    if (seleccionado.length > 0) {
      seleccionado[0].className = seleccionado[0].className.replace(
        " select",
        ""
      );
    }
    this.className += " select";
  });
}