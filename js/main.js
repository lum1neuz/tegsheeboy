'use strict';
$(window).on('load', function() {
    $("body").imagesLoaded(function() {
        $(".tb-preloader-wave").fadeOut();
        $("#tb-preloader").delay(200).fadeOut("slow").remove();
    });
});

$(document).ready( function() {
    $('.program').addClass('revealed');
});
