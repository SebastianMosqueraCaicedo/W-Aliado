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

//Filtro

function toggleFilter() {
  var div = document.getElementById("clasifieds");
  if (div.style.display === "none") {
    div.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    div.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

/////////////Modal

const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn2 = document.getElementById('openModalBtn2');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementsByClassName('closed')[0];
const openPopUp = document.querySelector('.pop')
const openPopUp2 = document.querySelector('.pop2')

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
});

openModalBtn2.addEventListener('click', function() {
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

openPopUp.addEventListener('click' , function() {
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
})

openPopUp2.addEventListener('click' , function() {
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
})

