$(document).ready(function () {

    $('.fade').slick({
        // dots: true,
        // infinite: true,
        arrows: false,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false

    });

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Previous</button>',


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


});


