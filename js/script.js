$(function () {
    $("#nav").children("li").hover(function() {
        $(this).children("ul").stop().slideToggle();
    });


});