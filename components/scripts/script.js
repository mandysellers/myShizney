$(function (){
    var topoffset = 43;

    var isTouch = 'ontouchstart' in document.documentElement;

    //window height
    var wheight = $(window).height(); //get height of the window using JQuery

    $('.fullheight').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); //get height of the window using JQuery
        $('.fullheight').css('height', wheight);
    })// on resize



//animated scrolling

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



//highlight navigation
  $(window).scroll(function(){
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#hotelinfo').offset().top){
        $('nav li a').removeClass('active');
        $('a[href$="#hotelinfo"]').addClass('active');
    }//windowpos

    if (windowpos > $('#rooms').offset().top){
        $('nav li a').removeClass('active');
        $('a[href$="#rooms"]').addClass('active');
    }//windowpos

    if (windowpos > $('#dining').offset().top){
        $('nav li a').removeClass('active');
        $('a[href$="#dining"]').addClass('active');
    }//windowpos

    if (windowpos > $('#events').offset().top){
        $('nav li a').removeClass('active');
        $('a[href$="#events"]').addClass('active');
    }//windowpos

    if (windowpos > $('#attractions').offset().top){
        $('nav li a').removeClass('active');
        $('a[href$="#attractions"]').addClass('active');
    }//windowpos
  });//window scroll




//setup scrollmagic

var controller = new ScrollMagic ({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
});


//pin navigations
var pin = new ScrollScene({
    triggerElement: '#nav',
    }).setPin('#nav').addTo(controller)

if(!isTouch){
    //room animations
    var roomOrigin = {
        bottom: -700, 
        opacity: 0,
        scale:0
    }

    var roomDest = {
        repeat: 1,
        yoyo: true,
        bottom: 0,
        opacity: 1,
        scale: 1,
        ease: Back.easeOut
    }

    var roomtween = TweenMax.staggerFromTo(
        '#westminster .content', 
        1, roomOrigin, roomDest);

    var pin = new ScrollScene({
        triggerElement: '#westminster',
        offset: -topoffset,
        duration: 500
    }).setPin('#westminster')
    .setTween(roomtween)
    .addTo(controller);


    var roomtween = TweenMax.staggerFromTo(
        '#oxford .content', 
        1, roomOrigin, roomDest);

    var pin = new ScrollScene({
        triggerElement: '#oxford',
        offset: -topoffset,
        duration: 500
    }).setPin('#oxford')
    .setTween(roomtween)
    .addTo(controller);


    var roomtween = TweenMax.staggerFromTo(
        '#victoria .content', 
        1, roomOrigin, roomDest);

    var pin = new ScrollScene({
        triggerElement: '#victoria',
        offset: -topoffset,
        duration: 500
    }).setPin('#victoria')
    .setTween(roomtween)
    .addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
        '#cambridge .content', 
        1, roomOrigin, roomDest);

    var pin = new ScrollScene({
        triggerElement: '#cambridge',
        offset: -topoffset,
        duration: 500
    }).setPin('#cambridge')
    .setTween(roomtween)
    .addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
        '#manchester .content', 
        1, roomOrigin, roomDest);

    var pin = new ScrollScene({
        triggerElement: '#manchester',
        offset: -topoffset,
        duration: 500
    }).setPin('#manchester')
    .setTween(roomtween)
    .addTo(controller);


    var roomtween = TweenMax.staggerFromTo(
        '#piccadilly .content', 
        1, roomOrigin, roomDest);

    var pin = new ScrollScene({
        triggerElement: '#piccadilly',
        offset: -topoffset,
        duration: 500
    }).setPin('#piccadilly')
    .setTween(roomtween)
    .addTo(controller);
} //not a touch device



//attractions animation
var attractionstween = TweenMax.staggerFromTo('#attractions article', 1, 
        { opacity: 0, scale: 0 },
        {delay: 1, opacity: 1, scale: 1, ease: Back.easeOut});

var scene = new ScrollScene({
    triggerElement: '#attractions',
    offset: -topoffset
}).setTween(attractionstween).addTo(controller);
}); //onload