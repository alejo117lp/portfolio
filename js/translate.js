document.getElementById('botonTraducir').addEventListener('click', function() {
    var elemento = document.getElementById('prueba');
    var estiloDisplay = window.getComputedStyle(elemento).getPropertyValue('display');
  
    if (estiloDisplay === 'block') {
        elemento.style.display = 'none';
    } else {
        elemento.style.display = 'block';
    }
  });