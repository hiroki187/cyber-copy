$(function () {

    const 
    content = $(".p-top-header-front-nav-content"),
    nav = $(".p-top-header-back-nav");
    
    nav.removeClass("active");
    content.hover(
    (e) => {
      nav.removeClass("active");
      const index = content.index(event.currentTarget);
      nav.eq(index).addClass("active");
    },
    () => {
      nav.hover(
        () => {},
        () => {
          nav.removeClass("active");
        }
      );
    }
  );



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
    

    
    const
    $news_btn = $(".p-top-news-btn"),
    $news_subtitle = $(".p-top-news-subtitle"),
    $news_content = $(".p-top-news-content-wrap"),
    // news_all = $(".p-top-news-btn", ".p-top-news-subtitle", ".p-top-news-content-wrap"),
    btn_active = "news-btn-active",
    subtitle_active = "news-subtitle-active",
    content_active = "news-content-active";
    // news_active_all = "news-btn-active", "news-subtitle-active","news-content-active";
    
    $(".p-top-switch-news-news").addClass(btn_active);
    $(".subtitle-info").addClass(subtitle_active);
    $(".content-info").addClass(content_active);

    
    $news_btn.on("click", function (e) {
        e.preventDefault();
        // news_all.removeClass(btn_active, subtitle_active, content_active);
        $news_btn.removeClass(btn_active);
        $news_subtitle.removeClass(subtitle_active);
        $news_content.removeClass(content_active);

        $(this).addClass(btn_active);

        const index = $news_btn.index(this);

        $news_subtitle.eq(index).addClass(subtitle_active);
        $news_content.eq(index).addClass(content_active);

    });


    // $('html *').css('overflow','hidden');
    // $(window).on('touchmove.noScroll', function(e) {
    // e.preventDefault();
    // });

    const
    $sp_haeder = $(".p-top-header-sp-menu-content-wrap"),
    $body = $(".l-main, .l-footer");

    $(".p-top-header-menu-wrap-wrap").on("click",function () {
        $body.addClass("main-active");
        $sp_haeder.slideToggle();
        return false;
    });
    
    $(".p-top-sp-menu-header-icon").on("click", function () {
        $body.removeClass("main-active");
        $sp_haeder.slideToggle();
        return false;
    });
    

    const
    $f_r_c = $(".p-top-footer-relation-contnet"),
    $f_r_o_b = $(".p-top-footer-relation-other-btn"),
    $f_r_o_b_s = $(".p-top-footer-relation-other-btn span");

    if (window.matchMedia( "(max-width: 765px)" ).matches) {
        $f_r_c.hide();
        $f_r_o_b.on("click", function (e) {
            e.preventDefault();
            $f_r_c.slideToggle(350);
            if ($f_r_o_b_s.hasClass("changed")) {
                $f_r_o_b_s.removeClass("changed")
            } else {
                $f_r_o_b_s.addClass("changed")
            }
        });
    } else {
        $f_r_c.show();
    }
});

