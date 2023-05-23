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

