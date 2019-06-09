(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    
        
$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15, defaultScale: 0.1,
 }); 
//================================
/// News Home page Filter JS
//================================
    $(".news-homepage-filtermenu li").on('click', function(){
        $(".news-homepage-filtermenu li").removeClass("active");
        $(this).addClass("active");
    });        
    // init Isotope
    var $grid = $('.news-homepage-itms').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });
    // filter items on button click
    $('.news-homepage-filtermenu').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

//================================
/// Stadium Bottom Slider
//================================
        $(".stadium-slider").owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            autoplay: true,
            nav: true,
            margin: 30,
            navText: ["<img src='assets/img/slider-left-icon.png'>","<img src='assets/img/slider-right-icon.png'>"],
            responsiveClass: true,
            responsive: {
                300: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1170: {
                    items: 4
                }
            }
            
        });
        
//================================
/// Isotop Active JS
//================================        
        
        $(".news-homepage-itms").isotope();
   
//================================
/// Mobile Menu JS
//================================         
    $(".nav-menu").slicknav({
        prependTo: ".responsive-menu"
    });
        



    });


    jQuery(window).load(function(){
    

        
    });


}(jQuery));	