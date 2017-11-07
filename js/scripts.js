/*
   
   Table Of Content
   
  01. Smooth Scroll
  02. Scroll Naviagation Background Change with Sticky Navigation
  03. Mobile Navigation Hide or Collapse on Click
  04. Scroll To Top
  05. Parallax Background
  06. Portfolio Filtering
  07. Magnific Popup
  08. Testimonial Carousel/Slider
  09. Google Map
  10. Lazy Load
  11. Google Analytics

*/


(function($) {
    'use strict';

    jQuery(document).ready(function() {

        /* 1. Smooth Scroll */
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


        /* 2. Scroll Naviagation Background Change with Sticky Navigation */
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });




        /* 3. Mobile Navigation Hide or Collapse on Click */
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });


        /* 4. Scroll To Top */
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });
        $('.scroll-to-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


        /* 5. Parallax Background */
        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });


        /* 6. Portfolio Filtering */
        $('.portfolio-inner').mixItUp({
            selectors: {
                filter: '.filter-portfolio'
            }
        });
        $('.tourisme-inner').mixItUp({
            selectors: {
                filter: '.filter-tourisme'
            }
        });


        /* 7. Magnific Popup */
        $('.portfolio-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                preload: 0,
            },
            zoom: {
                enabled: true,
                duration: 500,
            },
            image: {
                markup: `
                    <div class="mfp-figure tourisme-pop-up">
                        <div class="mfp-close"></div>
                        <div class="mfp-img"></div>
                        <div class="mfp-bottom-bar tourisme_title">
                            <div class="mfp-title"></div>
                            <div class="mfp-counter"></div>
                        </div>
                    </div>
                `,
                titleSrc: function(item) {
                    return item.el.attr('title');
                },
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            },
        });

        $('.tourisme-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                preload: 0,
            },
            zoom: {
                enabled: true,
                duration: 500
            },
            image: {
                markup:
                `
                    <div class="mfp-figure tourisme-pop-up">
                        <div class="mfp-close"></div>
                        <div class="mfp-img"></div>
                        <div class="mfp-bottom-bar tourisme_title">
                            <div class="mfp-title"></div>
                            <div class="mfp-counter"></div>
                        </div>
                    </div>
                `,
                titleSrc: function(item) {
                    return item.el.attr('title');
                },
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            },
        });


        /* 8. Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            lazyLoad: true,
            loop: true,
            items: 1,
            autoPlay: true,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle: "backSlide"
        });


        /* 9. Google Map */

        $('#my-address').gMap({
            zoom: 8,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers: [{
                address: "48 La Touche Pichard, 35720 Plesder",
                html: "<b>Adresse</b>: <br> 48 La Touche Pichard, 35720 Plesder, France",
                popup: true
            }]
        });

        /* 10. Lazy Load */
        $('img.img-responsive').lazyload();


        /* 11. Google Analytics */
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-XXXXXXXX-X', 'auto');
        ga('send', 'pageview');


    });

})(jQuery);
