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
    }, 3000); // Cambia la imagen cada 3 segundos

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    var sidenavElems = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenavElems);
});
