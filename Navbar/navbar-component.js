let cssId = "myCss"; // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)) {
  let head = document.getElementsByTagName("head")[0];
  let link = document.createElement("link");
  link.id = cssId;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
  link.media = "all";
  head.appendChild(link);
}

const header = document.getElementById("header");

// Función para dropdown menu
function toggleDropdown(event) {
  const dropdownTitle = event.target;
  const dropdownMenu = dropdownTitle.nextElementSibling;

  if (dropdownMenu.classList.contains("submenu")) {
    dropdownMenu.classList.toggle("show");
  }
}

function toggleHamburgerMenu() {
  const menu = document.getElementById("hamburgerMenu");
  console.log(menu);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
header.innerHTML = `
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 177, 187, 0.1);
  padding: 10px;
  position: relative;
  z-index: 5;
}

.navbar img {
  padding: 2%;
  width: 40%;
  height: 50%;
}

/* Estilos para el menú hamburguesa */

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
.material-icons {
  color: #00a2af;
}

/* Estilos para el ícono del menú hamburguesa */
.hamburger-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
}

.submenu {
  display: none;
}

.show {
  display: block;
}

.desktop-menu {
  flex-direction: column;
  width: 100%;
  display: none;
}

/* Estilos para el menú hamburguesa desplegado */
.hamburger-menu-container {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #ffffff;
  z-index: 10;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 10px 10px rgba(0, 177, 187, 0.1);
}

/* Estilos para botones naranjas del menú hamburguesa */
.menu-button {
  background-color: #ff8833;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8px 20px;
  border-radius: 5px;
  margin: 5px 0;
}

.menu-button img {
  margin-right: 5px;
  vertical-align: middle;
  width: 40px;
  height: 40px;
}

.top-level-items img {
  display: none;
}

.li-menu-button {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

/* Estilos para titulos naranjas menú hamburguesa */
.dropdown-title {
  position: relative;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-left: 10px;
}

.dropdown-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0px;
  right: 10px;
  border-bottom: 1px solid #ffe1cc;
}

.arrow-down {
  font-size: 0.8em;
  margin-right: 10px;
}

.dropdown-title:hover {
  cursor: pointer;
}

.hamburger-menu-container ul li .dropdown-title {
  color: #ff8833;
}

.hamburger-menu-container ul {
  list-style-type: none;
  padding: 0;
}

.hamburger-menu-container ul li a {
  display: block;
  color: #676767;
  padding: 8px 16px;
  text-decoration: none;
}

.hamburger-menu-container a.menu-button {
  color: white;
}

.hamburger-menu-container ul li .dropdown {
  display: none;
  position: relative;
}

.hamburger-menu-container ul li .dropdown ul {
  position: absolute;
  top: 0;
  left: 100%;
  width: 250px;
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
}

.hamburger-menu-container ul li .dropdown ul li a {
  padding: 5px 16px;
}

.hamburger-menu-container ul li .dropdown ul li a:hover {
  background-color: #666;
}

.hamburger-menu-container ul li a:hover,
.hamburger-menu-container ul li:hover>.dropdown {
  cursor: pointer;
}

/*/ //////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
@media screen and (min-width: 1330px) {

  /* Estilos navbar */
  .hamburger-menu {
    display: none;
  }

  .navbar {
    flex-direction: column;
    padding: 0%;
  }

  .desktop-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .top-level-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    height: 100%;
    padding: 1%;
  }

  .pago-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .contact-preguntas {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;

  }

  .navbar img {
    display: none;
  }

  .top-level-items img {
    display: block;
    padding: 0%;
    width: 100%;
  }

  .contact-preguntas a {
    color: #676767;
  }

  a.menu-button {
    color: #efefef;
    text-decoration: none;
  }

  .dropdown-title2 {
    position: relative;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    margin-left: 10px;
    width: 200px;
    font-size: 20px;
    font-family: "Geomanist Medium", sans-serif;
    color: #676767;
  }

  .dropdown-title2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 10px;
    border-bottom: 0px solid #ffe1cc;
  }

  .arrow-down {
    display: none;
    font-size: 0.8em;
    margin-right: 10px;
  }

  .category-items {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    list-style-type: none;
    padding: 1%;
    background-color: #efefef;
    width: 100%;
    margin-bottom: 0%;

  }

  .dropdown-container {
    margin-right: 150px;
  }
  ul.submenu :hover {
    background-color: #c7c7c7;
    color: white;
    transition: background-color 0.3s ease;
  }
  .pago-login a:hover{
    background-color: #ffa666;
    color: white;
    transition: background-color 0.3s ease;
  }

  .dropdown-container:last-child {
    margin-right: 0;
  }

  .navbar li {
    position: relative;
    display: inline-block;
    transform: translate(0%, 10%);
    font-size: 20px;
  }

  .navbar li>a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #676767;
    align-items: center;
  }

  .navbar .submenu {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    background-color: #ffffff;
    box-shadow: 0px 10px 10px rgba(0, 177, 187, 0.1);
    border-radius: 5px;
    z-index: 10;
    width: auto;
    padding: 10px;
  }

  .navbar li:hover .submenu {
    display: flex;
    flex-direction: column;
    width: 150%;
    background-color: #efefef;
  }
}
</style>
<nav class="navbar">
<a href="/index.html">
<img src="/img/logoW.png" alt="logo">
</a>
    <!-- Ícono del menú hamburguesa -->
    <div class="hamburger-menu" >
      <span class="material-icons" id="toggleHamburgerMenu">menu</span>
    </div>
    <!-- Contenedor del menú hamburguesa desplegado -->
    <div class="hamburger-menu-container" id="hamburgerMenu">
      <ul>
        <li class="li-menu-button">
          <a href="#" class="menu-button">
            <img src="/img/pse.svg" alt="Pagos en línea" width="16" height="16">Pagos en línea</a>
          </a>
        </li>
        <li class="li-menu-button">
          <a href="/Login-y-Registro/index.html" class="menu-button">
            <img src="/img/user.svg" alt="Iniciar sesión" width="16" height="16">Iniciar sesion</a>
          </a>
        </li>
        <li class="dropdown">
          <span class="dropdown-title" id="dropdown-clientes">
            Clientes
            <span class="arrow-down">&#9662;</span>
          </span>
          <ul class="submenu">
            <li><a href="/Personas-con-negocio/pn.html">Personas con negocio</a></li>
            <li><a href="/Ahorradores-e-Inversionistas/ahorradores.html">Ahorradores e inversionistas</a></li>
            <li><a href="#">Pensionados y maestros</a></li>
            <li><a href="#">Colombianos en el exterior</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <span class="dropdown-title" id="dropdown-pys">
            Productos y servicios
            <span class="arrow-down">&#9662;</span>
          </span>
          <ul class="submenu">
            <li><a href="#">Créditos</a></li>
            <li><a href="/Cuenta-de-Ahorro/ahorro2.html">Cuentas de ahorro e inversión</a></li>
            <li><a href="/Envia-Giros/enviarGiro.html">Giros internacionales</a></li>
            <li><a href="#">Seguros</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <span class="dropdown-title" id="dropdown-af">
            Asesoría financiera
            <span class="arrow-down">&#9662;</span>
          </span>
          <ul class="submenu">
          <li><a href="/ABC-cursos/cursos.html">Educación financiera</a></li>
          <li><a href="#">Consumidor financiero</a></li>
            <li><a href="#">Seguridad bancaria</a></li>
            <li><a href="#">Revista</a></li>
            <li><a href="/Comparador-inversion/comparador-inversion.html">Tu mejor opción</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <span class="dropdown-title" id="dropdown-acerca">
            Acerca de nosotros
            <span class="arrow-down">&#9662;</span>
          </span>
          <ul class="submenu">
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#">Opción transaccional</a></li>
            <li><a href="#">Línea telefónica</a></li>
            <li><a href="/Boton-PQRS/pqrs.html">PQRS</a></li>
          </ul>
        </li>
      </ul>
    </div>


    <!-- Contenedor del menú hamburguesa responsive -->
    <div class="desktop-menu">
      <div class="top-level-items" >
      <a href="/index.html">
      <img src="/img/logow.svg" alt="logo">
      </a>
        <a href="#" class="contactanos-button">
        </a>
        <a href="#" class="contactanos-button">
        </a>
        <div class="contact-preguntas">
          <a href="#" class="contactanos-button">Contactanos
          </a>
          <a href="#" class="preguntas-frecuentes-button">Preguntas Frecuentes
          </a>
          <a href="#" class="font-button">
          <img class ="font" src="/img/fontlanding.png">
          </a>
        </div>
        <div class="pago-login">
          <a href="#" class="menu-button">
            <img src="/img/pse.svg" alt="Pagos en línea" width="16" height="16">Pagos en línea
          </a>
          <a href="/Login-y-Registro/index.html" class="menu-button">
            <img src="/img/user.svg" alt="Iniciar sesión" width="16" height="16">Iniciar sesión
          </a>
        </div>
      </div>
      <ul class="category-items">
        <ul>
          <li class="dropdown dropdown-container">
            <span class="dropdown-title2" onclick="toggleDropdown(event)">
              Clientes
              <span class="arrow-down">&#9662;</span>
            </span>
            <ul class="submenu">
            <li><a href="/Personas-con-negocio/pn.html">Personas con negocio</a></li>
              <li><a href="/Ahorradores-e-Inversionistas/ahorradores.html">Ahorradores e inversionistas</a></li>
              <li><a href="#">Pensionados y maestros</a></li>
              <li><a href="#">Colombianos en el exterior</a></li>
            </ul>
          </li>
          <li class="dropdown dropdown-container">
            <span class="dropdown-title2" onclick="toggleDropdown(event)">
              Productos y servicios
              <span class="arrow-down">&#9662;</span>
            </span>
            <ul class="submenu">
              <li><a href="#">Créditos</a></li>
              <li><a href="/Cuenta-de-Ahorro/ahorro2.html">Cuentas de ahorro e inversión</a></li>
              <li><a href="/Envia-Giros/enviarGiro.html">Giros internacionales</a></li>
              <li><a href="#">Seguros</a></li>
            </ul>
          </li>
          <li class="dropdown dropdown-container">
            <span class="dropdown-title2" onclick="toggleDropdown(event)">
              Asesoría financiera
              <span class="arrow-down">&#9662;</span>
            </span>
            <ul class="submenu">
            <li><a href="/ABC-cursos/cursos.html">Educación financiera</a></li>
              <li><a href="#">Consumidor financiero</a></li>
              <li><a href="#">Seguridad bancaria</a></li>
              <li><a href="#">Revista</a></li>
            </ul>
          </li>
          <li class="dropdown dropdown-container">
            <span class="dropdown-title2" onclick="toggleDropdown(event)">
              Acerca de nosotros
              <span class="arrow-down">&#9662;</span>
            </span>
            <ul class="submenu">
              <li><a href="#">Quiénes somos</a></li>
              <li><a href="#">Opción transaccional</a></li>
              <li><a href="#">Línea telefónica</a></li>
              <li><a href="/Boton-PQRS/pqrs.html">PQRS</a></li>
              </ul>
          </li>
        </ul>
      </ul>
    </div>
  </nav>
  `;
const dropdownClientes = document.getElementById("dropdown-clientes");
dropdownClientes.addEventListener("click", toggleDropdown);
const dropdownPyS = document.getElementById("dropdown-pys");
dropdownPyS.addEventListener("click", toggleDropdown);
const dropdownAf = document.getElementById("dropdown-af");
dropdownAf.addEventListener("click", toggleDropdown);
const dropdownAcerca = document.getElementById("dropdown-acerca");
dropdownAcerca.addEventListener("click", toggleDropdown);

const toggleHamburgerMenuV = document.getElementById("toggleHamburgerMenu");
toggleHamburgerMenuV.addEventListener("click", toggleHamburgerMenu);

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
