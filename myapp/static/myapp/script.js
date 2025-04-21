$(function () {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');
  
   $('#properties-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
   });
  
   $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
   });
  
   navToggle.on('click', () => {
       navMenu.css('right', '0');
   });
  
   $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
   });
  
   $(document).on('click', (e) => {
       let target = $(e.target);
       if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
           navMenu.css('right', '-100%');
       }
   });
  
   $(document).scroll(() => {
       let scrollTop = $(document).scrollTop();
  
       if (scrollTop > 0) {
           navMenu.addClass('is-sticky');
           logo.css('color', '#000');
           headerElem.css('background', '#fff');
           navToggle.css('border-color', '#000');
           navToggle.find('.strip').css('background-color', '#000');
       } else {
           navMenu.removeClass('is-sticky');
           logo.css('color', '#fff');
           headerElem.css('background', 'transparent');
           navToggle.css('bordre-color', '#fff');
           navToggle.find('.strip').css('background-color', '#fff');
       }
  
       headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
   });
  
   $(document).trigger('scroll');
  // Smooth scrolling for navigation links
//   $('#nav-menu a[href^="#"]').on('click', function(event) {
//     event.preventDefault();

//     var target = $(this.getAttribute('href'));

//     if (target.length) {
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 800); // Adjust the duration (in milliseconds) for the scrolling speed
//     }

// Smooth scrolling for navigation links
$('#nav-menu a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    var target = $(this.getAttribute('href'));

    if (target.length) {
        
        // Get the sticky header height
        var headerHeight = $('header').outerHeight() || 100; // fallback if header not found

        // Scroll instantly to target minus the header height
        var scrollTo = target.offset().top - headerHeight - 10; // extra 10px space
       
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 200,'linear'); // Changed duration from 800 to 500ms for faster scrolling
    }

    // Close the mobile menu after clicking a link (optional)
    if ($(window).width() <= 991) {
        navMenu.css('right', '-100%');
    }
});


    // Close the mobile menu after clicking a link (optional)
    if ($(window).width() <= 991) {
        navMenu.css('right', '-100%');
    }
});
;
