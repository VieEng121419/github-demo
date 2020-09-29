$(document).ready(function() {
    $(".user").hover(function() {
        $(".arrowdown").css({
            'display': 'inline-block',
            'padding-left': '7px',
            'transition': '0.5s'
        });
    }, function() {
        $(".arrowdown").css("display", "none");
    });
