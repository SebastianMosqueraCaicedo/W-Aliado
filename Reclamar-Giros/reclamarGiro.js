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


