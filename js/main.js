window.onload = function () {
  const menu_h = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile_nav');

  menu_h.addEventListener('click', function(){
    menu_h.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

  function cambiarTema() {
    var hojaEstilos = document.getElementById('hoja-estilos');

    if (hojaEstilos.getAttribute('href') === 'css/main.css') {
      hojaEstilos.setAttribute('href', 'css/mainLight.css');
    } else {
      hojaEstilos.setAttribute('href', 'css/main.css');
    }
  }

  document.getElementById('botonCambiarTema').addEventListener('click', function() {
    cambiarTema();
  });

  document.getElementById('botonTraducir').addEventListener('click', function() {
    toggleDisplay();
  });

  function toggleDisplay() {
    const espDivs = document.querySelectorAll('.ESP');
    const engDivs = document.querySelectorAll('.ENG');
  
    // Cambiar el estado de display para las clases .ESP
    espDivs.forEach(function(div) {
      div.style.display = (div.style.display === 'none') ? 'block' : 'none';
    });
  
    // Cambiar el estado de display para las clases .ENG
    engDivs.forEach(function(div) {
      div.style.display = (div.style.display === 'block') ? 'none' : 'block';
    });
  }
  
};



