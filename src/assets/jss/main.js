/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        var previousScroll = $(window).scrollTop(),
            fromTop = true;

        function checkNav() {
          var currentScroll = $(window).scrollTop();
          if(currentScroll > 180) {

            if (!$('header.banner').hasClass('is-fixed')) {
              $('.banner').addClass('is-fixed');
            }
          }else {
            if ($('header.banner').hasClass('is-fixed')) {
              $('.banner').removeClass('is-fixed');
            }
          }
          if (currentScroll > 20 && currentScroll < $(document).height() - $(window).height()){
            if (currentScroll > previousScroll){ //scrolling down the page
              //window.setTimeout(hideNav, 300);
              hideNav();
            } else { //scrolling up
              if($('.banner').hasClass('is-hidden')) {
                window.setTimeout(showNav, 300);
              }

            }
          }
          previousScroll = currentScroll;
        }
        if( $(window).scrollTop() > 20 ) { //if page is loaded scrolled (because of browser back button or anchor link)
          $('.banner').addClass('is-fixed');
          showNav();
        }
        $(window).scroll(function(){
          checkNav();
        });

        function hideNav() {
          //$("[data-nav-status='toggle']")
          $("header.banner").removeClass("is-visible").addClass("is-hidden");
          //$('header.banner').removeClass('show');
        }
        function showNav() {
          $("header.banner").removeClass("is-hidden").addClass("is-visible");
          //$('header.banner').addClass('show');
        }
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        $('.btn.email-updates').on('click', function(event) {
          event.preventDefault();
          $(this).prop('hidden',true);
          $('#mc_embed_signup').prop('hidden',false);
          $('#mc_embed_signup input.email').focus();
        });
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'faq': {
      init: function() {
        function getAnswerHeights () {
          $('dd').each(function(index, el) { //Store the content height for each answer (Workaround for lack of transition support with CSS height auto)
            var contentHeight = $(this).find('> div').height();
            $(this).data('height', contentHeight);
          });
        }
        getAnswerHeights();
        $('dt').on('click', function(event) {
          event.preventDefault();
          //close all open answers
          var selectedIndex = $('dt').index($(this));
          $('dt').removeClass('active');
          $('dd').each(function(index, el) {
            if(index !== selectedIndex) {
              $(this).removeClass('show').css('height', '');
            }
          });

          //toggle the selected answer
          var $answer = $(this).next();
          $answer.toggleClass('show');
          if($answer.hasClass('show')) {
            $answer.css('height', $answer.data('height')+'px');
            $(this).addClass('active');
          }else {
            $answer.css('height', '');
          }

        });
        //if browser resized, recalculate answer heights, but debounce it
        var resizeTimer;
        $(window).on('resize', function(e) {

          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {

            getAnswerHeights();

          }, 250);

        });
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.

