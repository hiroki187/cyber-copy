$(function () {
    $(".parent-nav-content").hover(function() {
        const index = $(".parent-nav-content").index(this);
        $(".child-nav").eq(index).addClass("active")
        // $(".child-nav").eq(index).removeClass("active").css("left", "240px");
    }, function() {
        const index = $(".parent-nav-content").index(this);
        $(".child-nav").eq(index).removeClass("active");
    });

    $(".slider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:true,
    });

    
    const pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0}, 100);
        return false;
    });


});

