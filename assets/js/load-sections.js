document.addEventListener("DOMContentLoaded", () => {
  const load = (id, url) => {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
      });
  };

  // Carga fija de layout
  load("nav", "sections/nav.html");
  load("header", "sections/header.html");
  load("footer", "sections/footer.html");

  // Lógica dinámica de secciones
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");

  switch (view) {
    case "bi":
      load("content", "sections/bi.html");
      break;
    case "fonasa":
      load("content", "sections/fonasa.html");
      break;
    case "usuarios-activos":
      load("content", "sections/usuarios-activos.html");
      break;
    case "cloud":
      load("content", "sections/cloud.html");
      break;
    case "etl":
      load("content", "sections/etl.html");
      break;
    case "analisis":
      load("content", "sections/analisis.html");
      break;
    case "modelado":
      load("content", "sections/modelado.html");
      break;
    case "contacto":
      load("content", "sections/contacto.html");
      break;
    default:
      load("content", "sections/inicio.html");
  }
});