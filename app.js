$(document).ready(() => {
    const hamburgerMenu = $('#hamburger-menu');
    const navMenu = $('#nav-menu');

    if (hamburgerMenu.length && navMenu.length) {
        hamburgerMenu.on('click', () => {
            hamburgerMenu.toggleClass('active');
            navMenu.toggleClass('active');
        });
    }

    const navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"];

    if ($('#hero-carousel').length) {
        $('#hero-carousel').owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: navText,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 700
        });
    }

    if ($('#top-movies-slide').length) {
        $('#top-movies-slide').owlCarousel({
            items: 2,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            nav: true,
            navText: navText,
            margin: 15,
            responsive: {
                500: {
                    items: 3
                },
                1280: {
                    items: 4
                },
                1600: {
                    items: 6
                }
            }
        });
    }

    if ($('.movies-slide').length) {
        $('.movies-slide').owlCarousel({
            items: 2,
            dots: false,
            nav: true,
            navText: navText,
            margin: 15,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                500: {
                    items: 2
                },
                1280: {
                    items: 4
                },
                1600: {
                    items: 6
                }
            }
        });
    }
});
