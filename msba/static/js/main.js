"use strict";!function(i){function e(){100<o.scrollTop()?(l.addClass("header_fixed"),i(".wrapper").addClass("header_pt60"),i("header .nav").addClass("nav_scroll")):(l.removeClass("header_fixed"),i(".wrapper").removeClass("header_pt60"),i(".nav").removeClass("nav_scroll nav_active"),i("#nav-icon3").removeClass("open"))}i(document).ready(function(){i("a[href*='#']").mPageScroll2id({autoScrollSpeed:!0}),svg4everybody({}),i("#modal").iziModal()}),i(".tel").mask("+7 000-000-00-00");var a=new Swiper(".why_me .swiper-container",{speed:1e3,loop:!0,spaceBetween:30,parallax:!0,grabCursor:!1,paginationClickable:!0,simulateTouch:!1,autoplay:{delay:5e3},navigation:{nextEl:".btn_next",prevEl:".btn_prev"}}),t=i(".why_me .swiper-container");t.on("mouseenter",function(){a.autoplay.stop()}),t.on("mouseleave",function(){a.autoplay.start()});var n=new Swiper(".education .swiper-container",{speed:1e3,loop:!1,spaceBetween:30,parallax:!0,pagination:".nav_slider__item button",paginationClickable:!0,simulateTouch:!1,grabCursor:!1,navigation:{nextEl:".btn_next",prevEl:".btn_prev"}}),r=i(".nav_slider");n.on("slideChange",function(){var e=n.realIndex;r.find(".active_btn").removeClass("active_btn"),r.children().children().eq(e).addClass("active_btn")}),r.on("click",".nav_slider__item",function(){n.slideTo(i(this).index(),500)}),new Swiper(".teachers_wrap .swiper-container",{speed:1e3,loop:!1,slidesPerView:3,spaceBetween:75,paginationClickable:!0,simulateTouch:!1,grabCursor:!1,navigation:{nextEl:".teachers_next",prevEl:".teachers_prev"},breakpoints:{992:{slidesPerView:1,spaceBetween:30}}}),new Swiper(".sponsor .swiper-container",{speed:500,loop:!0,slidesPerView:5,spaceBetween:30,autoplay:!0,grabCursor:!1,paginationClickable:!0,simulateTouch:!1,navigation:{nextEl:".sponsor_next",prevEl:".sponsor_prev"},breakpoints:{1401:{slidesPerView:4,spaceBetween:30},992:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:30}}}),new Swiper(".reviews_sponsor .swiper-container",{speed:1e3,loop:!1,slidesPerView:2,spaceBetween:130,paginationClickable:!0,simulateTouch:!1,grabCursor:!1,navigation:{nextEl:".reviews_next",prevEl:".reviews_prev"},breakpoints:{992:{slidesPerView:1,spaceBetween:200}}}),i(".lux").tilt({scale:1.15,speed:800,easing:"cubic-bezier(.03,.98,.52,.99)",maxTilt:20}),i(".lux_long").tilt({scale:1.05,speed:800,easing:"cubic-bezier(.03,.98,.52,.99)",maxTilt:10}),i(document).ready(function(){i.validator.addMethod("regex",function(e,a,t){var i=new RegExp(t);return this.optional(a)||i.test(e)}),i("#form").validate({rules:{address:{required:!0},myTextarea:{required:!0,minlength:50},phone:{required:!0,minlength:11},myEmail:{required:!0,regex:"^(([^<>()[\\]\\\\.,;:\\s@\\“]+(\\.[^<>()[\\]\\\\.,;:\\s@\\“]+)*)|(\\“.+\\“))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"}},messages:{address:{required:"Введите ваш адрес"},myEmail:{regex:"Пожалуйста, введите корректный адрес эл. почты",required:"Введите ваш адрес эл. почты"},phone:{required:"Введите ваш телефон",minlength:"Пожалуйста, введите не менее 11 символов"}},errorElement:"b",errorPlacement:function(e,a){var t=i(a).data("error");t?i(t).append(e):e.insertAfter(a)}}),i("form[id^=form-record]").validate({rules:{phone:{required:!0,minlength:11},name:{required:!0},lastName:{required:!0},myEmail:{required:!0,regex:"^(([^<>()[\\]\\\\.,;:\\s@\\“]+(\\.[^<>()[\\]\\\\.,;:\\s@\\“]+)*)|(\\“.+\\“))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"},checkbox:{required:!0}},messages:{name:{required:"Ввведите ваше имя"},lastName:{required:"Ввведите вашу фамилию"},myEmail:{regex:"Пожалуйста, введите корректный адрес эл. почты",required:"Введите ваш адрес эл. почты"},phone:{required:"Введите ваш телефон",minlength:"Пожалуйста, введите не менее 11 символов"}},errorElement:"b",errorPlacement:function(e,a){var t=i(a).data("error");t?i(t).append(e):"checkbox"==a.attr("type")?e.hide():e.insertAfter(a)}});var e=i(".contacts_submit"),a=i(".record_submit");e.click(function(){for(var e=i(this).closest(".contacts_form").find("input, textarea"),a=0;a<e.length;a++)0==i(e[a]).valid()&&(submit=!1),i(e[a]).valid();submit&&i(this).parents("form").submit()}),a.click(function(){for(var e=!0,a=i(this).closest(".contacts_form").find("input"),t=0;t<a.length;t++)0==i(a[t]).valid()&&(e=!1),i(a[t]).valid();e&&i(this).parents("form").submit()}),i("form[id^=form-record]").on("submit",function(e){e.preventDefault(),$.ajax({url:"send_mail.php",data:i(this).serialize(),dataType:"json",method:"post",success:function(e){e&&(i("#modal").iziModal("close"),i("#payment_modal").fadeIn(300))}})}),i(".popup_payment__exit").on("click",function(){i("#payment_modal").fadeOut(300)})}),new Rellax(".rellax",{center:!0}),i(document).on("click",".write",function(e){null!=i(this).attr("data-title")&&i("#modal .courses__title").text(i(this).attr("data-title")),null!=i(this).attr("data-course")&&i('input[name="course"]').val(i(this).attr("data-course")),e.preventDefault(),i("#modal").iziModal("open"),i(".lux").tilt({scale:1.15,speed:800,easing:"cubic-bezier(.03,.98,.52,.99)",maxTilt:20}),i(".contacts_form__label .tel").mask("+7 000-000-00-00")}),i("#nav-icon3").on("click",function(){i(this).toggleClass("open"),i("header .nav").toggleClass("nav_active")}),i(".nav__link").on("click",function(){i(this).parent().parent().removeClass("nav_active"),i("#nav-icon3").removeClass("open")});var o=i(window);o.bind("scroll",function(){500<o.scrollTop()?i(".btn_up").fadeIn(300):i(".btn_up").fadeOut(300)});i(".header");var l=i("header");o.bind("scroll",e),o.bind("resize load orientationchange",e);var s=37.652,d=55.7729;mapboxgl.accessToken="pk.eyJ1Ijoib3p6aWU4NCIsImEiOiJjam1iMGo1aGMxZGxtM2tsa2Y2MWl6c2tvIn0.vpEEbv2lCbW1dPCxjY3nEA";var c=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/dark-v9",center:[s,d],zoom:15.5,pitch:45,interactive:!1,bearing:-17.6}),p=new MapboxLanguage;c.addControl(p),c.scrollZoom.disable(),c.addControl(new mapboxgl.NavigationControl),(new mapboxgl.Marker).setLngLat([s,d]).addTo(c),c.on("load",function(){for(var e,a=c.getStyle().layers,t=0;t<a.length;t++)if("symbol"===a[t].type&&a[t].layout["text-field"]){e=a[t].id;break}c.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#aaa","fill-extrusion-height":["interpolate",["linear"],["zoom"],15,0,15.05,["get","height"]],"fill-extrusion-base":["interpolate",["linear"],["zoom"],15,0,15.05,["get","min_height"]],"fill-extrusion-opacity":.6}},e)}),new mapboxgl.Popup({closeOnClick:!1}).setLngLat([s,d]).setHTML('<span>Каланчевская ул., д.17, стр.1</span><br><a href="tel:+74950881526">+7 (495) 088-15-26</a><br><a href="mailto:info@msba.education">info@msba.education</a>').addTo(c)}(jQuery);