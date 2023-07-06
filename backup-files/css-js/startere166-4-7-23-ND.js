// Split text
Splitting();

// Page transitions
$(document).ready(function() {
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 800,
        outDuration: 800,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not([data-target]):not(.disable-animsition):not(.cc-dismiss):not(.site-menu-nav-dropdown-toggle):not(.added_to_cart_button):not(.woocommerce-MyAccount-downloads-file)',
        loading: false,
        timeout: true,
        timeoutCountdown: 300,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay : false,
    });

    // Fire events after animsition finished
    $('.animsition').on('animsition.inEnd', function() {

        // Text animation
        $(".animate-text").each(function() {
            var text = $(this);
            var characters = text.find(".char");

            const textTimeline = gsap.timeline( {

                scrollTrigger: {
                    trigger: text,
                    start: "top 75%",
                    // markers: true,
                },
            });

            textTimeline.to(characters, {duration: 1.2, stagger: 0.01, ease: Expo.easeOut, transform: 'translateY(0)'});
        });

        // Body text animation
        $(".animate-text-body").each(function() {
            var text = $(this);
            var characters = text.find(".char");

            const textTimeline = gsap.timeline( {

                scrollTrigger: {
                    trigger: text,
                    start: "top 50%",
                    // markers: true,
                },
            });

            textTimeline.to(characters, {duration: 1.2, stagger: 0.005, ease: Expo.easeOut, transform: 'translateY(0)'});
        });
    });
});

// WWD counter
$('.collapse-wwd:first').addClass('show');

// Scrollreveal
var staggerUp = {
    duration: 600,
    interval: 100,
    distance: '50px',
    viewFactor: 0.75,
    easing: 'ease',
    delay: 200,
};
ScrollReveal().reveal('.sectors-listings-item', staggerUp);
ScrollReveal().reveal('.news-listings > li', staggerUp);
ScrollReveal().reveal('.home-services-listings-item', staggerUp);
ScrollReveal().reveal('.home-clients-logos-item', staggerUp);
ScrollReveal().reveal('.certification-listings-item', staggerUp);
ScrollReveal().reveal('.link-listings-item-fadein', staggerUp);
ScrollReveal().reveal('.accordion-item', staggerUp);
ScrollReveal().reveal('.richtext-fade-in > *', staggerUp);
ScrollReveal().reveal('.ticklist > li', staggerUp);
ScrollReveal().reveal('.fade-in-item', staggerUp);

// Add class to header on scroll
$(document).ready(function () {
    'use strict';
    var navbar = $(".site-header");

    $(window).scroll(function () {
        var a = $(window).scrollTop();

        if (a > 60) {
            navbar.addClass("site-scrolled");
        } else {
            navbar.removeClass("site-scrolled");
        }
    });
});

// Header nav dropdowns
$(".site-header-nav-dropdown-item").each(function() {
    var parent = $(this);
    var link = parent.find(".site-header-nav-dropdown-toggle");
    var menu = parent.find(".site-header-nav-dropdown-menu");

    link.on({
        mouseenter: function() {
            parent.addClass("dropdown-is-open");
        },
        mouseleave: function() {
            parent.removeClass("dropdown-is-open");
        },
    });

    menu.on({
        mouseenter: function() {
            parent.addClass("dropdown-is-open");
        },
        mouseleave: function() {
            parent.removeClass("dropdown-is-open");
        },
    });
});

// Toggle mobile menu
$(".site-menu-toggle").on("click", function() {
    $(".site-menu, .site-menu-toggle").toggleClass("site-menu-is-open");
    $("body").toggleClass("no-scroll");
})

// Mobile menu dropdowns
$(".site-menu-nav-dropdown-item").each(function() {
    var toggle = $(this).find(".site-menu-nav-dropdown-toggle");
    var menu = $(this).find(".site-menu-nav-dropdown-menu");

    toggle.on("click", function() {

        if (!menu.hasClass("menu-active")) {
            $(".site-menu-nav-dropdown-toggle").removeClass("menu-active");
            $(".site-menu-nav-dropdown-menu").slideUp().removeClass("menu-active");
            toggle.addClass("menu-active");
            menu.slideDown().addClass("menu-active");
        } else {
            toggle.removeClass("menu-active");
            menu.slideUp().removeClass("menu-active");
        }

        // $(".site-menu-nav-dropdown-menu.active").slideUp().removeClass("active");
        // menu.slideToggle().addClass("active");
    });
});

// Hero scroll button
$(document).ready(function() {
    $(".hero-scroll-btn, .home-hero-scroll, .contact-hero-scroll").on("click", function(e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $("html, body").stop().animate({
            scrollTop: $(target).offset().top - 64
        }, 600);

        return false;
    });
});

// Homepage clouds
$(".home-clouds").each(function () {
    var container = $(".home-intro");
    var target = $(this);

    const tl = gsap.timeline( {

        scrollTrigger: {
            trigger: container,
            start: "top 50%",
            end: "bottom top",
            scrub: true,
            // markers: true,
        },
    });

    tl.to(target, { opacity: 1, xPercent: -5, yPercent: -25, ease: 'none', duration: 0.5 })
        .to(target, { opacity: 0, xPercent: -10, yPercent: -50, ease: 'none', duration: 0.5 }, 0.5);
});

// News carousel
const homeNewsCarousel = new Swiper('.home-news-carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        prevEl: '.home-news-carousel-prev',
        nextEl: '.home-news-carousel-next',
    },
    scrollbar: {
        el: '.home-news-carousel-scrollbar',
        draggable: true,
    },
});

// Testimonials carousel
const testimonialsCarousel = new Swiper('.testimonials-carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
    },
    navigation: {
        prevEl: '.testimonials-carousel-prev',
        nextEl: '.testimonials-carousel-next',
    },
    scrollbar: {
        el: '.testimonials-carousel-scrollbar',
        draggable: true,
    },
});

// Other services carousel
const otherServices = new Swiper('.other-services-listings', {
    slidesPerView: 1.1,
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 1.25,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    navigation: {
        prevEl: '.other-services-prev',
        nextEl: '.other-services-next',
    },
    scrollbar: {
        el: '.other-services-scrollbar',
        draggable: true,
    },
});

// Article gallery
const articleGallery = new Swiper('.article-gallery', {
    autoHeight: true,
    loop: true,
    pagination: {
        el: '.article-gallery-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.article-gallery-prev',
        nextEl: '.article-gallery-next',
    },
});

// Page nav carousel
const pageNav = new Swiper('.page-nav-carousel', {
    slidesPerView: 'auto',
    navigation: {
        prevEl: '.page-nav-prev',
        nextEl: '.page-nav-next',
    },
});

// Show/hide other services carousel nav
$(".other-services-listings").each(function() {
    var slides = $(this).find(".swiper-slide");
    var container = $(this).find(".swiper-wrapper");
    var nav = $(this).find(".other-services-footer");
    var numberOfSlides = slides.length;
    var slidesWidth = slides.outerWidth();
    var containerWidth = container.outerWidth();
    var totalSlidesWidth = numberOfSlides * slidesWidth;

    function toggleNav() {

        if (containerWidth >= totalSlidesWidth) {
            nav.addClass("not-active");
        } else {
            nav.removeClass("not-active");
        }
    }

    $(document).ready(function() {
        toggleNav();
    });

    $(window).resize(function() {
        slidesWidth = slides.outerWidth();
        containerWidth = container.outerWidth();
        totalSlidesWidth = numberOfSlides * slidesWidth;
        toggleNav();
    });
});

// Page nav
$(document).ready(function() {
    $(".page-nav-item").on("click", function(e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $("html, body").stop().animate({
            scrollTop: $(target).offset().top - 128
        }, 600);

        return false;
    });
});

$(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();

    $(".page-nav-target").each(function() {
        var topDistance = $(this).offset().top;
        var id = $(this).attr("id");
        var navItem = $(".page-nav-item[href='#" + id + "']");

        if ( (topDistance - 129) < scrollTop ) {
            $(".page-nav-item").removeClass("active");
            navItem.addClass("active");
        }
    });
}).scroll();

// Custom Vimeo play/pause buttons
$(".vimeo-screen").each(function() {
    var screen = $(this).find(".vimeo-video-screen");
    var iframe = $(this).find(".vimeo-video");

    screen.on("click", function(){
        iframe.attr('src', iframe.attr('src')+'?autoplay=1');
        screen.addClass("vimeo-video-screen-hidden");
    });
});

// Custom YouTube play/pause buttons
$(".youtube-screen").each(function() {
    var screen = $(this).find(".youtube-video-screen");
    var iframe = $(this).find(".youtube-video");

    screen.on('click', function(e) {
        e.preventDefault();
        iframe[0].src += "?autoplay=1";
        iframe.show();
        screen.addClass("youtube-video-screen-hidden");
    });
});