$(document).ready(function(){
    let options = {
        items:1,
        margin: 100,
        loop: false,
        mouseDrag: false,
        touchDrag: true,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1,
            }
        }
    }

    $(".main-page-carousel").owlCarousel(options);

    options.mouseDrag = true;
    options.nav = false;
    options.margin = 40;
    $(".agent-card-testimonials-carousel").owlCarousel(options);
});