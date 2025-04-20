document.addEventListener("DOMContentLoaded", () => {
  const load = (id, url) => {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      });
  };

  load("nav", "sections/nav.html");
  load("header", "sections/header.html");
  load("footer", "sections/footer.html");

  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");

  switch (view) {
    case "fonasa":
      load("content", "sections/fonasa.html");
      break;
    case "bi":
      load("content", "sections/bi.html");
      break;
    case "cloud":
      load("content", "sections/cloud.html");
      break;
    default:
      load("content", "sections/inicio.html");
  }
});