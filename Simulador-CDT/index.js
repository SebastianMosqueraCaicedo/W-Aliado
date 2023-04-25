let data = [];
const cdt = document.querySelector("#tipo-de-cdt");
const inputs = document.getElementById("inputs-cdt");
inputs.style.display = "none";

cdt.addEventListener("change", () => {
  tipoDeCdt();
});

console.log(inputs);

function tipoDeCdt() {
  switch (cdt.value) {
    case "Escoge tu CDT":
      inputs.style.display = "none";
      break;
    case "CDT al vencimiento":
      inputs.style.display = "block";
      data[0] = {
        plazo: 60,
        tasa: 1.08,
        retefuente: 0.04,
      };

      data[1] = {
        plazo: 90,
        tasa: 1.09,
        retefuente: 0.04,
      };

      data[2] = {
        plazo: 120,
        tasa: 1.1,
        retefuente: 0.04,
      };

      data[3] = {
        plazo: 180,
        tasa: 1.12,
        retefuente: 0.04,
      };

      data[4] = {
        plazo: 360,
        tasa: 1.15,
        retefuente: 0.04,
      };
      console.log(data);
      break;
    case "CDT al mensual":
      inputs.style.display = "block";
      data[0] = {
        plazo: 60,
        tasa: 1.04,
        retefuente: 0.01,
      };

      data[1] = {
        plazo: 90,
        tasa: 1.05,
        retefuente: 0.01,
      };

      data[2] = {
        plazo: 120,
        tasa: 1.07,
        retefuente: 0.01,
      };

      data[3] = {
        plazo: 180,
        tasa: 1.08,
        retefuente: 0.01,
      };

      data[4] = {
        plazo: 360,
        tasa: 1.1,
        retefuente: 0.01,
      };
      console.log(data);
      break;
  }
}

let información;

const monto = document.querySelector("#monto");
console.log(monto);

let valorCDT = monto.value;

const plazoCDT = document.querySelector("#plazo");
console.log(plazoCDT.value);

const resultado = document.querySelector("#resultado");
const inputsSimulador = document.getElementById("ingresar-datos");

const botonSimular = document.querySelector("#simular");
botonSimular.addEventListener("click", () => {
  simulador();
  inputsSimulador.style.display = "none";
});

function simulador() {
  let plazo;
  let tasaDeInteres;
  let retencionFuente;
  let calculoRetefuente;
  let rendimientos;
  console.log(parseInt(plazoCDT.value));
  switch (parseInt(plazoCDT.value)) {
    case 60:
      plazo = data[0].plazo;
      tasaDeInteres = data[0].tasa * 100 - 100;
      retencionFuente = data[0].retefuente * 100;
      console.log(data[0].retefuente);
      calculoRetefuente = parseInt(monto.value) * data[0].retefuente;
      rendimientos = parseInt(monto.value) * (data[0].tasa - 1);
      break;
    case 90:
      plazo = data[1].plazo;
      tasaDeInteres = data[1].tasa * 100 - 100;
      retencionFuente = data[1].retefuente * 100;
      calculoRetefuente = parseInt(monto.value) * data[1].retefuente;
      rendimientos = parseInt(monto.value) * (data[1].tasa - 1);
      console.log(rendimientos);
      break;
    case 120:
      plazo = data[2].plazo;
      tasaDeInteres = data[2].tasa * 100 - 100;
      retencionFuente = data[2].retefuente * 100;
      calculoRetefuente = parseInt(monto.value) * data[2].retefuente;
      rendimientos = parseInt(monto.value) * (data[2].tasa - 1);
      console.log(rendimientos);
      break;
    case 180:
      plazo = data[3].plazo;
      tasaDeInteres = data[3].tasa * 100 - 100;
      retencionFuente = data[3].retefuente * 100;
      calculoRetefuente = parseInt(monto.value) * data[3].retefuente;
      rendimientos = parseInt(monto.value) * (data[3].tasa - 1);
      console.log(rendimientos);
      break;
    case 360:
      plazo = data[4].plazo;
      tasaDeInteres = data[4].tasa * 100 - 100;
      retencionFuente = data[4].retefuente * 100;
      calculoRetefuente = parseInt(monto.value) * data[4].retefuente;
      rendimientos = parseInt(monto.value) * (data[4].tasa - 1);
      console.log(rendimientos);
      break;
  }

  informacion = {
    plazo: plazo,
    tasaDeInteres: Math.floor(tasaDeInteres),
    retencionFuente: retencionFuente,
    calculoRetefuente: calculoRetefuente,
    rendimientos: rendimientos,
    total: parseInt(monto.value) + rendimientos - calculoRetefuente,
  };
  valorCDT = monto.value.toLocaleString("en-US");

  renderResultado(informacion);
}

function renderResultado(info) {
  if (info.total >= 0) {
    resultado.innerHTML = `
        <section id="mostrar-datos">
            <picture>
                    <source media="(max-width: 700px)" srcset="./assets/resultados-cdt.png" class="images">
                    <source media="(min-width: 701px)" srcset="./assets/web-resultados-cdt.png" class="images">
                    <img src="./assets/resultados-cdt.png" alt="" class="images">
                </picture>
            <div id="monto-cdt">
                <h3> Resultados de la Simulación </h3>
                <div id="valor-monto">
                    <h5>${valorCDT}</h5>
                    <h6>Monto del CDT Solicitado</h6>
                </div>
            </div>
            <section id='resultados-tabla'>
                <div class="datos">
                    <h4>Plazo</h4>
                    <p> ${info.plazo} días</p>
                </div>
                <div class="tabla datos">
                    <h4>Tasa de Interés E.A.%</h4>
                    <p> ${info.tasaDeInteres}%</p>
                </div>
                <div class="datos">
                    <h4>Retención de la fuente(%)</h4>
                    <p> ${info.retencionFuente}%</p>
                </div>
                <div class="tabla datos">
                    <h4>Retención de la fuente</h4>
                    <p> ${-info.calculoRetefuente}</p>
                </div>
                <div class="datos">
                    <h4>Rendimientos</h4>
                    <p> ${info.rendimientos.toLocaleString("en-US")}</p>
                </div>
                <div class="tabla datos">
                    <h4>VTU EN PESOS($) </h4>
                    <p> ${info.total.toLocaleString("en-US")}</p>
                </div>
            </section>
            <div id = "solicitar-cdt">
                <button id="simular">Solicitar CDT</button>
                <button id="regresar">Regresar</button>
            </div>
        </section>

        `;
    console.log(resultado.innerHTML);
    const botonRegresar = document.getElementById("regresar");

    botonRegresar.addEventListener("click", () => {
      resultado.innerHTML = "";
      inputsSimulador.style.display = "block";
    });
  }
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
