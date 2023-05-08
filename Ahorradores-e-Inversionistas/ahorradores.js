const anchors = document.querySelectorAll('ul li');
const boxes = document.querySelectorAll('.card-template');
anchors.forEach((a) => {
    a.addEventListener('click', () => {
        const filter = a.getAttribute('data-filter');

        boxes.forEach((box) => {
            if (filter === 'all' || box.classList.contains(filter)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });

        anchors.forEach((a) => {
            a.classList.remove('active');
        });
        a.classList.add('active');
    });
});

//Footer

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

//Función para cambiar de color la letra

const lista = document.getElementById("page-switcher");
const elementos = lista.getElementsByTagName("li");

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function() {
    const seleccionado = lista.getElementsByClassName("select");
    if (seleccionado.length > 0) {
      seleccionado[0].className = seleccionado[0].className.replace(" select", "");
    }
    this.className += " select";
  });
}

//funcion para cambiar de color el svg

function changeColor(event) {
  var svgList = document.getElementsByTagName('path');
  for (var i = 0; i < svgList.length; i++) {
    svgList[i].setAttribute('fill', '#9F66DB');
  }
  var target = event.target;
  var svg = target.querySelector('path');
  svg.setAttribute('fill', 'white');
}


