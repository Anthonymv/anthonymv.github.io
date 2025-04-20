const loadSection = (id, path) => {
  fetch(path)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
};

window.onload = () => {
  loadSection("bi", "/sections/bi.html");
  loadSection("cloud", "/sections/cloud.html");
  loadSection("modelado", "/sections/modelado.html");
  loadSection("etl", "/sections/etl.html");
  loadSection("analisis", "/sections/analisis.html");
  loadSection("contacto", "/sections/contacto.html");
};