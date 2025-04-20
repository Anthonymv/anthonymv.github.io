const loadSection = (id, path) => {
  fetch(path)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data);
};

window.onload = () => {
  loadSection("header", "/sections/header.html");
  loadSection("nav", "/sections/nav.html");
  loadSection("home", "/sections/inicio.html");
  loadSection("bi", "/sections/bi.html");
  loadSection("cloud", "/sections/cloud.html");
  loadSection("modelado", "/sections/modelado.html");
  loadSection("etl", "/sections/etl.html");
  loadSection("analisis", "/sections/analisis.html");
  loadSection("contacto", "/sections/contacto.html");
  loadSection("footer", "/sections/footer.html");
};