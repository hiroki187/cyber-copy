$(function () {
    $(".p-top-header-front-nav-content").hover(function() {
        $(".p-top-header-back-nav").removeClass("active");
        const index = $(".p-top-header-front-nav-content").index(this);
        $(".p-top-header-back-nav").eq(index).addClass("active");
        
    }, function() {
        $(".p-top-header-back-nav").hover(function() {
            $(".p-top-header-back-nav").$(this).addClass("active");
        }, function() {
            $(".p-top-header-back-nav").removeClass("active");
            $(".p-top-header-back-nav").removeClass("active");
        });
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
    


    
    const 
    $btn = $(".p-top-switch-news [data-filter]"),
    $list = $(".p-top-news-content-wrap [data-category], .p-top-section-title [data-category]");
    
    // $(".release").hide();

    $btn.on('click', function(e) {
      e.preventDefault();
      
        const $btnText = $(this).attr('data-filter');

        
        $list.fadeOut().promise().done(function() {
        $list.filter(`[data-category = "${$btnText}"]`).fadeIn();
        return false;
        });
        
        // if ($btnText == 'all'){
        //     $list.fadeOut().promise().done(function() {
        //         $list.fadeIn();
        //     });
        // } else {
        //     $list.fadeOut().promise().done(function() {
        //         $list.filter(`[data-category = "${$btnText}"]`).fadeIn();
        //     });
        // }
    });

    
    $(".p-top-switch-news-news").addClass("black");
    $(".p-top-switch-news-release").addClass("white");
    
    $(".p-top-news-btn").on("click", function () {

        $(".p-top-news-btn").addClass("black");

        // if ($(".p-top-switch-news a").hasClass("white")) {
        //     addClass("black");
        // } else {
        //     removeClass("black");
        // }
        
        
        // $(this).css(black),$(!this).css(white);
    });
    // $(".p-top-switch-news a").on("click", function () {
        // const black = {
        //     "background-color": "#000",
        //     "color": "#fff"
        // }
        // const white = {
        //     "background-color": "#fff",
        //     "color": "#000"
        // }

        // $(".p-top-switch-news a").addClass("black");

        // if ($(".p-top-switch-news a").hasClass("white")) {
        //     addClass("black");
        // } else {
        //     removeClass("black");
        // }
        
        
        // $(this).css(black),$(!this).css(white);
    // })




    // $(".p-top-header-sp-menu-content-wrap").hide();
    $(".p-top-header-menu-wrap-wrap").on("click",function () {
        $(".p-top-header-sp-menu-content-wrap").slideToggle();
        return false;
    });
    
    $(".p-top-sp-menu-header-icon").on("click", function () {
        $(".p-top-header-sp-menu-content-wrap").slideToggle();
        return false;
    });
    

    
    $(".p-top-footer-relation-contnet").hide();
    $(".p-top-footer-relation-other-btn").on("click", function (e) {
        e.preventDefault();
        $(".p-top-footer-relation-contnet").slideToggle(350);
        if ($(".p-top-footer-relation-other-btn span").hasClass("changed")) {
            $(".p-top-footer-relation-other-btn span").removeClass("changed")
        } else {
            $(".p-top-footer-relation-other-btn span").addClass("changed")
        }
    });
});

