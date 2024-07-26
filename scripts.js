document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelector('.carousel');
    const carouselInstance = M.Carousel.init(elementosCarousel, {
        duration: 300,
        dist: -30,
        shift: 5,
        padding: -5,
        numVisible: 5,
        indicators: true,
        noWrap: false,
    });

    setInterval(() => {
        const instance = M.Carousel.getInstance(elementosCarousel);
        instance.next();
    }, 6000); // Cambia la imagen cada 3 segundos

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenavElems);
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
  
    mobileMenuButton.addEventListener('click', function() {
      if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
      } else {
        mobileMenu.style.display = 'block';
      }
    });
  
    // Inicializar componentes de Materialize
    M.FormSelect.init(document.querySelectorAll('select'));
  
    // Mostrar/ocultar campos adicionales según selección de licencia de conducir
    document.getElementById('licencia_conducir').addEventListener('change', function() {
      const licenciaInfo = document.getElementById('licencia_info');
      if (this.value === 'Si') {
        licenciaInfo.style.display = 'block';
      } else {
        licenciaInfo.style.display = 'none';
      }
    });
  });
  
