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

// Función para simular el ahorro
function simulate() {
  // Obtener valores de los campos
  const exemptOptions = document.getElementsByName("exempt");
  let exemptValue;
  for (const option of exemptOptions) {
    if (option.checked) {
      exemptValue = option.value;
      break;
    }
  }

  const amount = document.getElementById("amount").value;

  // Validación de campos
  if (!exemptValue) {
    alert("Por favor, selecciona si está exenta a impuesto.");
    return;
  }

  if (!amount) {
    alert("Por favor, digita el monto.");
    return;
  }

  // Aquí puedes realizar tus cálculos y presentar los resultados
  // A continuación se muestran ejemplos de cálculos y cómo actualizar la tabla de resultados
  const interestRate = 2.5; // Ejemplo de tasa de interés
  const retention = 0.4; // Ejemplo de retención
  const savingsYield = 25000; // Ejemplo de rendimiento de ahorro
  const gfm = -4.1; // Ejemplo de GFM
  const vtupPercentage = 2.09; // Ejemplo de VTUP%
  const vtupAmount = 20900; // Ejemplo de VTUP en pesos

  // Actualizar la sección de resultados con los nuevos valores
  document.getElementById("creditAmount").textContent = amount;
  document.getElementById("interestRate").textContent = interestRate + "%";
  document.getElementById("retention").textContent = retention + "%";
  document.getElementById("savingsYield").textContent = savingsYield;
  document.getElementById("gfm").textContent = gfm;
  document.getElementById("vtupPercentage").textContent = vtupPercentage + "%";
  document.getElementById("vtupAmount").textContent = vtupAmount;

  // Ocultar la sección de entrada de datos y mostrar la sección de resultados
  document.querySelector(".input-section").style.display = "none";
  document.querySelector(".results-section").style.display = "block";
}
