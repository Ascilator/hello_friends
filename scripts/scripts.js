jQuery(function () {

    if ($('html').width() > 700) {
        $('.catalog_slider_body').slick({
            infinite: false,
            rows: 0,
            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: $('.catalog_arrow_next'),
            prevArrow: $('.catalog_arrow_prev'),




            /*responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesPerRow: 4,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        rows: 4,
                        slidesPerRow: 1,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        rows: 2,
                        slidesPerRow: 1,
                    },
                },


            ],*/
        });
    }

    $('.slider_blog_body').slick({
        infinite: true,

        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: true,
        touchMove: true,
        touchTreshhold: 50,
        variableWidth: true,
        //slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.blog_next_arrow'),
        prevArrow: $('.blog_arrow_prev'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    prevArrow: $('.blog_arrow_prev'),
                    nextArrow: $('.blog_arrow_next'),
                },
            },
        ]



    });
    $('.slider_insta_body').slick({
        infinite: true,

        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: true,
        touchMove: true,
        touchTreshhold: 50,
        variableWidth: true,
        //slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.insta_arrow_next'),
        prevArrow: $('.blog_arrow_prev'),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    prevArrow: $('.insta_arrow_prev'),
                    nextArrow: $('.insta_arrow_next'),
                },
            },
        ]
    });


    $('.burger').click(function () {
        $('.menu').addClass('_active');
    });

    $('.menu_item').click(function () {

        $('html, body').animate({
            scrollTop: $(`#to_scroll_${$(this).index()}`).offset().top - 30
        }, 1000);
        $('.menu').removeClass('_active');
    });

});

