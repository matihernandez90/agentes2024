document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelector('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 300,
        dist:-30,
        shift: 5,
        padding: -5,
        numVisible: 5,
        indicators: true,
        noWrap: false,

    });

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

});

