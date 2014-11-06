"use strict";
var theme = function () {

    // -------------------------------------------------------------------------------------------
    // init default skin
    $(document).ready(function() {
        
        if(!$(".style-switcher").length) {
            
            var color = 'blue'; //  black, blue, green, grey, lime, orange, pink, purple, red, river, yellow
            var layout = 'wide'; // wide, boxed
            var pattern = 'square_bg';
            var direction = 'ltr';

            /*
                Patterns:
                cardboard_flat, crissXcross, cross_scratches, diamond_upholstery, egg_shell, sneaker_mesh_fabric,
                square_bg, struckaxiom, subtle_grunge, subtle_stripes, subtle_white_feathers, textured_stripes,
                tiny_grid, white_bed_sheet, whitediamond, worn_dots
            */

            var css = jQuery('#css-switcher-link');
            css.attr('href', 'assets/css/theme-' + color + '.css');

            $('body').removeClass('wide');
            $('body').addClass(layout);
            if(layout == 'boxed') {
                $('body.boxed').css({"background-image": 'url("assets/img/patterns/' + pattern + '_' + color + '.png")'});
            }

        }

        //mailchimp subscribe form processing
        jQuery('#subscribe').on('submit', function( e ) {
            e.preventDefault();
            // update user interface
            jQuery('#email1_error').html('Adding email address...');

            // Prepare query string and send AJAX request
            jQuery.ajax({
                url: 'assets/php/mailchimp/subscribe.php',
                data: 'ajax=true&email=' + encodeURI(jQuery('#mc-email').val()),
                success: function(msg) {
                    var className = '';
                    if(msg.substring(0, 6) == 'Error:') {
                        className = 'subscribe-error';
                    } else {
                        className = 'subscribe-ok';
                    }
                    jQuery('#email1_error').html(msg).removeClass('subscribe-error').removeClass('subscribe-ok').addClass(className);
                }
            });
        });
    });

    // ---------------------------------------------------------------------------------------
    // prevent empty links
    function handlePreventEmptyLinks() {
        $('a[href=#]').click(function (event) {
            event.preventDefault();
        });
    }

    // ---------------------------------------------------------------------------------------
    // fix html5 placeholder attribute for ie7 & ie8
    function handlePlaceholder() {
        if ($.browser.msie && $.browser.version.substr(0, 1) < 9) { // ie7&ie8
            $('input[placeholder], textarea[placeholder]').each(function () {
                var input = $(this);

                $(input).val(input.attr('placeholder'));

                $(input).focus(function () {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                $(input).blur(function () {
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    }

    // ---------------------------------------------------------------------------------------
    // Placeholdem
    function handlePlaceholdem() {
        Placeholdem(document.querySelectorAll('[placeholder]'));
    }

    // ---------------------------------------------------------------------------------------
    // add hover class for correct view on mobile devices
    function handleHoverClass() {
        var hover = $('.thumbnail');
        hover.hover(
            function () {
                $(this).addClass('hover');
            },
            function () {
                $(this).removeClass('hover');
            }
        );
    }

    // ---------------------------------------------------------------------------------------
    // superfish menu
    function handleSuperFish() {
        $('ul.sf-menu').superfish();
        $('ul.sf-menu a').click(function() {
            $('body').scrollspy('refresh');
        });
    }

    // ---------------------------------------------------------------------------------------
    // create mobile menu from exist superfish menu
    function handleMobileMenu() {
        var $menu = $('.navigation > ul'),
            optionsList = '<option value="" selected> - - Main Navigation - - </option>';

        $menu.find('li').each(function () {
            var $this = $(this),
                $anchor = $this.children('a'),
                depth = $this.parents('ul').length - 1,
                indent = '';

            if (depth) {
                while (depth > 0) {
                    indent += ' ::: ';
                    depth--;
                }
            }

            optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
        }).end().parent().parent().find('#mobile-menu').append('<select class="mobile-menu">' + optionsList + '</select><div class="mobile-menu-title"><i class="fa fa-bars"></i></div>');

        $('.mobile-menu').on('change', function () {
            window.location = $(this).val();
        });
    }

    // ---------------------------------------------------------------------------------------
    // Sticky Menu
    function handleStickyMenu() {

        function addStickyClass() {
            if ($(window).scrollTop() > 50) {
                $('header.header').addClass('sticky-header');
            }
            else {
                $('header.header').removeClass('sticky-header');
            }
        }

        addStickyClass();

        $(window).scroll(function () {
            addStickyClass();

        });
    }

    // Smooth scrolling
    // ---------------------------------------------------------------------------------------
    function handleSmoothScroll(){
        $(".sf-menu a, .scroll-to").click(function () {

            var headerH = $('header').outerHeight();
            $(".sf-menu a").removeClass('active');
            $(this).addClass('active');
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top - 44 + "px"
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
            return false;
        });
        $(".scroll-three").click(function () {

            var headerH = $('header').outerHeight();
            $(".sf-menu a").removeClass('active');
            //$(this).addClass('active');
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top - 44 + "px"
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
            return false;
        });        

    }

    // ---------------------------------------------------------------------------------------
    // prettyPhoto
    function handlePrettyPhoto() {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }

    // ---------------------------------------------------------------------------------------
    // Scroll totop button
    function handleToTopButton() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.totop').css({bottom: "25px"});
            } else {
                $('.totop').css({bottom: "-100px"});
            }
        });
        $('.totop').click(function () {
            $('html, body').animate({scrollTop: '0px'}, 800);
            return false;
        });
    }

    // ---------------------------------------------------------------------------------------
    // Tabs
    function handleTabs() {
        $('#tabs a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
    }

    // ---------------------------------------------------------------------------------------
    // CountDown
    function handleCountDown() {
        //
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultCountdown').countdown({until: austDay});
        $('#year').text(austDay.getFullYear());

        $('#defaultCountdown2').countdown({until: austDay});
    }

    function handleWeather() {
        // Docs at http://simpleweatherjs.com
          $.simpleWeather({
            zipcode: '',
            woeid: '12772142',
            location: '',
            unit: 'f',
            success: function(weather) {
              var html = weather.temp+'&deg;'+weather.units.temp;
              $("#weather-span").show();
              $("#weather").html(html);
            },
            error: function(error) {
              //$("#weather").html('<p>'+error+'</p>');
            }
          });
    }

    // ---------------------------------------------------------------------------------------
    // adopt testimonials owl carousel to design
    function testimonialsFix() {
        var count = $('#testimonials').find('.owl-pagination .owl-page').length;
        count = (count / 2) - 1;
        $('#testimonials').find('.owl-pagination .owl-page').eq(Math.ceil(count)).addClass('nth');
        if (count < Math.ceil(count)) {
            $('#testimonials').find('.owl-pagination').addClass('odd');
        }
    }
    $(window).load(function(){ testimonialsFix() });
    $(window).resize(function(){ testimonialsFix() });

    // ---------------------------------------------------------------------------------------
    // Resize main slider // Responsive fixs
    function resizeSlider() {

        var wh = $(window).height();
        var ih = 0;
        var mh = 0;
        var nh = 0;

        $("#event-slider").find('.owl-item').each(function(){
            if(ih < $(this).find('.slide-caption-inner').outerHeight()){
                ih = $(this).find('.slide-caption-inner').outerHeight();
                ih = ih + 140;
            }
        });

        if (wh < ih ) {
            nh = ih;
        } else {
            nh = wh;
        }

        $('.main-slider').css("height", nh);

        // boxed

        if($('body').hasClass('boxed')) {
            $("#event-slider").find('.owl-item').each(function(){

                $(this).find('.slide-caption-inner').removeAttr('style');

                if(mh < $(this).find('.slide-caption-inner').outerHeight()){
                    mh = $(this).find('.slide-caption-inner').outerHeight();
                }
            });
            $("#event-slider").find('.owl-item').each(function(){
                $(this).find('.slide-caption-inner').css("min-height", mh);
            });
        }
        mh = 0;

    }
    // $(window).load(function(){ resizeSlider() });
    // $(window).resize(function(){ resizeSlider() });

    // ---------------------------------------------------------------------------------------
    // preloader
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

    // ---------------------------------------------------------------------------------------
    //

    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        onResize: function() {
            resizeSlider();
        },
        init: function () {
            handlePreventEmptyLinks();
            handlePlaceholder();
            handlePlaceholdem();
            handleHoverClass();
            handleSuperFish();
            handleMobileMenu();
            handleStickyMenu();
            handleSmoothScroll();
            //handleCountDown();
            handleWeather();
            handlePrettyPhoto();
            handleToTopButton();
            handleTabs();
        },
        // Isotope
        initIsotope: function () {

			
        },
        // EventSlider
        initEventSlider: function () {
            /*$("#event-slider").owlCarousel({
                //autoPlay: true,
                singleItem:true,
                pagination: false,
                navigation : false
            });*/
        },
        // Testimonials
        initTestimonials: function () {
            $("#testimonials").owlCarousel({
                //mouseDrag: false,
                items: 1,
                itemsDesktop: false,
                itemsDesktopSmall: [991, 1],
                itemsTablet: [768, 1],
                itemsMobile: [479, 1],
                autoPlay: true,
                pagination: true,
                afterUpdate: function(){
                    testimonialsFix();
                }
            });
        },        // Partners Slider
        initOrganizerSlider: function () {
            $("#organizers").owlCarousel({
                items: 4,
                itemsDesktop: false,
                itemsDesktopSmall: [991, 4],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
                autoPlay: true,
                pagination: false
            });
        },
        // Partners Slider
        initPartnerSlider: function () {
            $("#partners").owlCarousel({
                items: 4,
                itemsDesktop: false,
                itemsDesktopSmall: [991, 4],
                itemsTablet: [768, 3],
                itemsMobile: [479, 2],
                autoPlay: true,
                pagination: false
            });
        },
        // Twitter / Last Tweet Carousel
        initLastTweet: function () {
            $("#last-tweets").owlCarousel({singleItem: true, autoPlay: true, pagination: false });
            $("#next-tweet").click(function () {
                $("#last-tweets").trigger('owl.next');
                return false;
            });
            $("#prev-tweet").click(function () {
                $("#last-tweets").trigger('owl.prev');
                return false;
            });
        },
        // Animation on Scroll
        initAnimation: function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + " visible");
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + " visible");
                        }
                    }
                }, {
                    offset: $.waypoints('viewportHeight')
                    //offset: 'bottom-in-view'
                    //offset: '95%'
                });
            }
        }
    };
}();
