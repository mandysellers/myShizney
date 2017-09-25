$(function (){
    var wheight = $(window).height(); //get height of the window using JQuery

    $('.fullheight').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); //get height of the window using JQuery
        $('.fullheight').css('height', wheight);
    })
});