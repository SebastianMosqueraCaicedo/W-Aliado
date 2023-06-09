// Hide all sections except "all" on page load
window.onload = function () {
  boxes.forEach((box) => {
    if (!box.classList.contains("all")) {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
  });
};

const anchors = document.querySelectorAll("ul li");
const boxes = document.querySelectorAll(".card-template");

anchors.forEach((a) => {
  a.addEventListener("click", () => {
    const filter = a.getAttribute("data-filter");

    boxes.forEach((box) => {
      if (filter === "all" && box.classList.contains("card-saving1")) {
        box.style.display = "block";
      } else if (filter !== "all" && box.classList.contains(filter)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });

    anchors.forEach((a) => {
      a.classList.remove("active");
    });
    a.classList.add("active");
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

var marker = document.querySelector("#marker");
var items = document.querySelectorAll("#page-switcher li");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach((item) => {
  item.addEventListener("click", (e) => {
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

//funcion para cambiar de color el svg

function changeColor(event) {
  var svgList = document.getElementsByTagName("path");
  for (var i = 0; i < svgList.length; i++) {
    svgList[i].setAttribute("fill", "#9F66DB");
  }
  var target = event.target;
  var svg = target.querySelector("path");
  svg.setAttribute("fill", "white");
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
document.getElementById("siguiente2").addEventListener("click", function () {
  document.querySelector(".data1").style.display = "none";
  document.querySelector(".data2").style.display = "block";
});
document.getElementById("terminar").addEventListener("click", function () {
  document.querySelector(".card-saving1").style.display = "block";
  document.querySelector(".card-saving2").style.display = "none";
  document.querySelector(".card-cdt").style.display = "none";
  document.querySelector(".card-spin").style.display = "none";
});
