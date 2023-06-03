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


const filterContainer = document.getElementById("filter-container");
const savingCover = document.getElementById('comparador-ahorro')
const creditCover = document.getElementById('comparador-credito')
const savingSection = document.getElementById("savings-section");
const creditSection = document.getElementById("credit-section");


savingsButton.addEventListener("click", () => {
  coverPage.style.display = "none";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  savingSection.style.display = "block";
  savingCover.style.display = 'block'
  creditCover.style.display = 'none'
});

creditButton.addEventListener("click", () => {
  coverPage.style.display = "none";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  creditSection.style.display = "block";
  savingCover.style.display = 'none'
  creditCover.style.display = 'block'
});

const comparedButton = document.getElementById("compared");
console.log(comparedButton);
const comparedSection = document.getElementById('compared-section')
const comparison = document.getElementById("comparison");
console.log(comparison)

comparedButton.addEventListener("click", () => {
  if (savingSection.style.display === 'block') {
    if (window.innerWidth <= 700) {
      comparison.src = './assets/compared-ahorro_4x.webp'
    } else {
      comparison.src = './assets/web-ahorro_4x.webp'
    }
  }
  if (creditSection.style.display === 'block') {
    if (window.innerWidth <= 700) {
      comparison.src = './assets/compared-credito_4x.webp'
    } else {
      comparison.src = './assets/web-credito_4x.webp'
    }
  }
  comparedSection.style.display = "flex";
  filterContainer.style.display = "none";
  console.log("click");
});

const ahorroButton = document.getElementsByClassName('characters');
const creditoButton = document.getElementsByClassName('requirements');

ahorroButton[0].addEventListener("click", () => {
  coverPage.style.display = "none";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  savingSection.style.display = "block";
  creditSection.style.display = "none";
  comparedSection.style.display = "none";
  savingCover.style.display = 'block'
  creditCover.style.display = 'none'
});

creditoButton[0].addEventListener("click", () => {
  coverPage.style.display = "none";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  savingSection.style.display = "none";
  creditSection.style.display = "block";
  comparedSection.style.display = "none";
  savingCover.style.display = 'none'
  creditCover.style.display = 'block'
});

const compararOtro = document.getElementById('comparar-otro')

compararOtro.addEventListener('click', () => {
  coverPage.style.display = "none";
  comparator.style.display = "block";
  filterContainer.style.display = "flex";
  savingSection.style.display = "none";
  creditSection.style.display = "block";
  comparedSection.style.display = "none";
  savingCover.style.display = 'block'
  creditCover.style.display = 'none'
})
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