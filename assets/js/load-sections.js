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

  const path = window.location.pathname;

  if (path.includes("fonasa.html")) {
    load("content", "sections/fonasa.html");
  } else if (path.includes("bi.html")) {
    load("content", "sections/bi.html");
  } else {
    load("content", "sections/inicio.html");
  }
});