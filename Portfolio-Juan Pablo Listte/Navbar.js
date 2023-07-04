var navbar = document.getElementById('navbar');
var nav = document.querySelector('nav');
var shouldExecuteScrollFunction = true;

function toggleNavbarBackground() {
  if (window.innerWidth <= 990) {
    navbar.classList.add('bgColor');
  } else {
    navbar.classList.remove('bgColor');
  }
}

toggleNavbarBackground();

window.addEventListener('resize', toggleNavbarBackground);
window.addEventListener('scroll', function() {
  if (shouldExecuteScrollFunction) {
    if (window.innerWidth > 990) {
      if (this.window.scrollY > 550) {
        nav.classList.add('bgColor');
      } else {
        nav.classList.remove('bgColor');
      }
    }
  }
});

// Para desactivar la ejecución de la función en el evento scroll
function deactivateScrollFunction() {
  shouldExecuteScrollFunction = false;
}

// Para activar nuevamente la ejecución de la función en el evento scroll
function activateScrollFunction() {
  shouldExecuteScrollFunction = true;
}
