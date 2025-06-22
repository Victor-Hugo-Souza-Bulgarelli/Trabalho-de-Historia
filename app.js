document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector('.btn-final');
  const navbar = document.querySelector('.navbar');
  const logo = document.getElementById('navbar-logo');
  const favicon = document.querySelector('link[rel="shortcut icon"]');
  btn.addEventListener('click', function() {
    if(navbar.classList.contains("tema-israel")){
      navbar.classList.remove('tema-israel');
      navbar.classList.add('tema-palestina');
      logo.src = "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"; // imagem para tema palestina
      favicon.href = "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg";
    } else {
      navbar.classList.remove('tema-palestina');
      navbar.classList.add('tema-israel');
      logo.src = "https://img.icons8.com/?size=100&id=1986&format=png&color=FFFFFF"; // imagem para tema israel
      favicon.href = "https://img.icons8.com/?size=100&id=1986&format=png&color=FFFFFF";
    }
  });
});