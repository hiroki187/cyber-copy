$(function () {
    $(".p-top-parent-nav-content").hover(function() {
        const index = $(".p-top-parent-nav-content").index(this);
        $(".p-top-child-nav").eq(index).addClass("active")
        
        // $(".child-nav").eq(index).removeClass("active").css("left", "240px");
    }, function() {
        const index = $(".p-top-parent-nav-content").index(this);
        $(".p-top-child-nav").eq(index).removeClass("active");
    });

    $(".p-top-top-slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrow: false,
    });
    $(".p-top-pickup-slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        dots: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px',
                }
            }
        
        ]
    });

    
    const pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.on('click', function () {
        $('body,html').animate({
            scrollTop: 0}, 100);
        return false;
    });


    // $(document).on('ready', function() {
    // // });
    // $(".regular_3").slick({
    //   dots: true, // ドットインジケーターの表示
    //   infinite: true, // スライドのループを有効にするか
    //   slidesToShow: 3, // 表示するスライド数を設定
    //   slidesToScroll: 3, // スクロールするスライド数を設定
    // });



    // $('.p-top-pickup-slider').bxSlider({
    //     auto: true,
    //     slideWidth: 640,
    //     minSlides: 3
    // });

});

