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
  load("content", "sections/inicio.html");
  load("footer", "sections/footer.html");
});