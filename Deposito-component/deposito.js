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