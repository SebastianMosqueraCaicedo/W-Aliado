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


