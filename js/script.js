$(function () {
    $(".parent-nav-content").hover(function() {
        const index = $(".parent-nav-content").index(this);
        $(".child-nav").eq(index).removeClass("active");
    }, function() {
        const index = $(".parent-nav-content").index(this);
        $(".child-nav").eq(index).addClass("active");
    });

    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:true,
    });

    $(window).scroll(function () {
        $('.fadein').each(function() {
            const elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            } else {
                $(this).removeClass('scrollin');
            }
        });
    });

});

