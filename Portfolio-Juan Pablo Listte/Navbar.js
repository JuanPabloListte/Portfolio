var navbar = document.getElementById('navbar');
var nav = document.querySelector('nav');
var shouldExecuteScrollFunction = true;

function toggleNavbarBackground() {
  if (window.innerWidth <= 768) {
    navbar.classList.add('bg-dark');
  } else {
    navbar.classList.remove('bg-dark');
  }
}

toggleNavbarBackground();

window.addEventListener('resize', toggleNavbarBackground);
window.addEventListener('scroll', function() {
  if (shouldExecuteScrollFunction) {
    if (window.innerWidth > 768) {
      if (this.window.scrollY > 550) {
        nav.classList.add('bg-dark', 'shadow');
      } else {
        nav.classList.remove('bg-dark', 'shadow');
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
