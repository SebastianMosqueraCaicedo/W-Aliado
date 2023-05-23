var dropdownButton = document.getElementById('dropdown-button');
var dropdownMenu = document.getElementById('dropdown-menu');

dropdownButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

function toggleFilter() {
  var div = document.getElementById("menu");
  if (div.style.display === "none") {
    div.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    div.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

