!function (e) {
    function o() {
        var e = t.realIndex;
        a.find(".active_slider").removeClass("active_slider"), a.children().eq(e).addClass("active_slider")
    }

    function i() {
        e(window).outerWidth() >= "768" ? smoothy.init({
            easing: "easeInOutQuad",
            offset: 0,
            speed: 3e3
        }) : smoothy.init({easing: "easeInOutQuad", offset: 0, speed: 5e3})
    }

    e(document).ready(function () {
        svg4everybody({})
    }), e(".phone_mask").mask("+70 (000) 000-00-00"), e(".add_project").on("click", function () {
        e(".product_hidden").slideToggle(300)
    });
    var a = e(".swiper_tabs"), t = new Swiper(".welcome_container", {
        loop: !0,
        speed: 1e3,
        autoplay: {delay: 5e3, disableOnInteraction: !1},
        pagination: {el: ".swiper-pagination", clickable: !0}
    });
    t.on("slideChange", o);
    new Swiper(".recall_container", {
        effect: "slide",
        simulateTouch: !1,
        speed: 1e3,
        pagination: {el: ".swiper-pagination", type: "fraction"},
        navigation: {nextEl: ".swiper-btn-next", prevEl: ".swiper-btn-prev"}
    }), new Swiper(".mobile_up .mobile_container", {
        effect: "fade",
        grabCursor: !0,
        loop: !0,
        navigation: {nextEl: ".control_right", prevEl: ".control_left"}
    }), new Swiper(".mobile_down .mobile_container", {
        effect: "fade",
        grabCursor: !0,
        loop: !0,
        navigation: {nextEl: ".control_right1", prevEl: ".control_left1"}
    }), new Swiper(".services_container", {
        loop: 0,
        effect: "slide",
        simulateTouch: !1,
        speed: 1e3,
        pagination: {el: ".swiper-pagination", type: "fraction"},
        navigation: {nextEl: ".swiper-btn-right", prevEl: ".swiper-btn-left"}
    }), new Swiper(".sale_container", {
        loop: !0,
        effect: "flip",
        grabCursor: !0,
        simulateTouch: !0,
        speed: 500,
        navigation: {nextEl: ".swiper-btn-right", prevEl: ".swiper-btn-left"}
    }), new Swiper('.swiper-container-politic', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });

    e("#myTab li a").on("click touchstart", function (o) {
        o.preventDefault(), e(this).tab("show"), n(e(this).attr("href"))
    }), i(), e(window).on("scroll", function () {
        e(window).scrollTop() > 1e3 ? e(".button_up_wrap").fadeIn(400) : e(".button_up_wrap").fadeOut(400)
    }), e(window).scroll(function () {
        var o = e(this).scrollTop();
        e(".rules__item").each(function () {
            o > e(this).offset().top - e(window).height() / 1.9 ? e(this).addClass("animate") : e(this).removeClass("animate")
        })
    }), e(window).scroll(function () {
        var o = e(window).scrollTop() - $('#slider').height() + $(window).height() / 2.5, n = "translateY(" + (o - 30) + "px)";
        e(".scroll_this").css({transform: n}),
        e(".scroll_border").css({height: o + "px"})
    }), e(".popup_thanksUp").on("click", function () {
        e(".modal_wrap_close").fadeIn(300), e(".modal_thanks").fadeIn(300), e("body").addClass("overflowBody")
    }), e(".modals_back, .modal_wrap_close, .button_wrap_closed").on("click", function () {
        e(".modal_wrap_close").fadeOut(300), e(".modal_wrap").fadeOut(300), e("body").removeClass("overflowBody")
    }), e(".popup_foto1").on("click", function () {
        e(".modal_wrap_close").fadeIn(300), e(".modal_gallery1").fadeIn(300), e("body").addClass("overflowBody");
    }), e(".popup_foto2").on("click", function () {
        e(".modal_wrap_close").fadeIn(300), e(".modal_gallery2").fadeIn(300), e("body").addClass("overflowBody");
    }), e(".header_logo__recall").on("click", function () {
        e(".modal_wrap_close").fadeIn(300), e(".modal_send").fadeIn(300), e("body").addClass("overflowBody")
    }), e(".footer_phone__recall").on("click", function () {
        e(".modal_wrap_close").fadeIn(300), e(".modal_send").fadeIn(300), e("body").addClass("overflowBody")
    }), e(".popup_sendUp").on("click", function () {
        e(".modal_wrap_close").fadeIn(300), e(".modal_send").fadeIn(300), e("body").addClass("overflowBody")
    }), e(".political_conf").on("click", function () {
        e(".modal_wrap_close").fadeIn(300), e(".modal_politic").fadeIn(300), e("body").addClass("overflowBody")
    })

    /* ajax_send */
    $('.send_ajax').on('click', function () {
        $('.modal_wrap.modal_send').remove();
        $('.modal_thanks').fadeIn(300).addClass('modal_send');
        $('.answer_wrap').html($('.modal_thanks').html());
        $('.answer_wrap .button_wrap_closed').css('opacity', 0);
        $('.recall_wrap').html($('.modal_thanks').html());
        $('.recall_wrap .button_wrap_closed').css('opacity', 0);
    });

    $(document).ready(function () {
        $(".slider_btn").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
        $(".tabs").lightTabs();
    });
    $('.scroll_this .icon-menu').on('mouseenter', function (e) {
        console.log(e);
    });
    /* new nav_tabs_video */
    jQuery.fn.lightTabs = function(options){
        var createTabs = function(){
            tabs = this;
            i = 0;
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).fadeIn(300);
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            showPage(0);
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };

    /* new popup_slider */
    var slideNow = 1;
    var slideCount = $('div[id^=slidewrapper]').children().length;
    var navBtnId = 0;
    var translateWidth = 0;

    $(document).ready(function() {
        $('div[id^=next-btn]').on('click', function(e) {
            nextSlide($(this), $(this).parents('div[id^=viewport]').attr('data-current'), $(this).parents('div[id^=viewport]').attr('data-numslider'));
        });

        $('div[id^=prev-btn]').on('click', function(e) {
            prevSlide($(this), $(this).parents('div[id^=viewport]').attr('data-current'), $(this).parents('div[id^=viewport]').attr('data-numslider'));
        });
    });
    function nextSlide(el, slideNow, slideCount) {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            el.parents('div[id^=viewport]').find('ul[id^=slidewrapper]').css('transform', 'translate(0, 0)');
            el.parents('div[id^=viewport]').attr('data-current', 1);
        } else {
            translateWidth = -el.parents('div[id^=viewport]').width() * (slideNow);
            el.parents('div[id^=viewport]').find('ul[id^=slidewrapper]').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
            el.parents('div[id^=viewport]').attr('data-current', slideNow);
        }
    }
    function prevSlide(el, slideNow, slideCount) {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = -el.parents('div[id^=viewport]').width() * (slideCount - 1);
            el.parents('div[id^=viewport]').find('ul[id^=slidewrapper]').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            el.parents('div[id^=viewport]').attr('data-current', slideCount);
        } else {
            translateWidth = -el.parents('div[id^=viewport]').width() * (slideNow - 2);
            el.parents('div[id^=viewport]').find('ul[id^=slidewrapper]').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
            el.parents('div[id^=viewport]').attr('data-current', slideNow);
        }
    }
}(jQuery);