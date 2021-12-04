$(document).ready(function () {

         // 모달창 기능

    // 1 : .modal을 찾아서 웹브라우저에 보관한다.
    let modal = $('.modal');

    // 2 : .modal-cont를 찾아서 웹브라우저에 보관한다.
    let modal_cont = $('.modal-cont');

    // 3 : .modal-close를 찾아서 웹브라우저에 보관한다.
    let modal_close = $('.modal-close');

    // 3-1 : .modal-show를 찾아서 웹브라우저에 보관한다.
    let modal_show = $('.modal-show');

    // 4 : .modal을 display:none 안 보여요.
    // modal.fadeIn();

    // 5 : .modal_close를 마우스로 클릭하면 사라진다.
    modal_close.click(function () {
        modal.fadeOut();
    });

    // 6 : .modal을 마우스로 클릭하면 사라진다.
    modal.click(function () {
        modal.fadeOut();
    });

    // 7 : .modal-cont를 마우스로 클릭하면 그냥 있어라.
    modal_cont.click(function (e) {
        e.stopPropagation();
    });

    // 8 : .modal=show를 마우스로 클릭하면 보인다.
    // 8-1 : 아주 중요합니다. a 태그라면 주의합니다!!!
    modal_show.click(function (e) {
        // href를 막아야 합니다.
        e.preventDefault();
        modal.fadeIn();
    });

    let header_menu_list = $('.header-menu-list')
    let header_menu_list_li = $('.header-menu-list>li');
    let gnb_bg = $('.gnb-bg');
    let sub_menu = $('.sub-menu');

    $.each(header_menu_list_li, function (index, item) {
        $(this).mouseenter(function () {
            $(this).find('.sub-menu').show();
            // gnb_bg.stop().slideDown('fast');   
            gnb_bg.addClass('gnb-bg-active');
        });

        $(this).mouseleave(function () {
            $(this).find('.sub-menu').hide();
            gnb_bg.removeClass('gnb-bg-active');
        });
    });

    let family_bt = $('.family-bt');
    let family_site_box = $('.family-site-box');

    family_bt.click(function () {
        family_site_box.stop().slideToggle();
    });

    // all menu
    let all_bt = $('.all-bt');
    let all_close = $('.all-close');
    let depth_1 = $('.depth1');

    all_bt.click(function (event) {
        $('html').css('overflow-y', 'hidden');
        event.preventDefault();
        depth_1.show();
        all_bt.hide();
        all_close.show();
    });

    all_close.click(function (event) {
        $('html').css('overflow-y', 'scroll');
        event.preventDefault();
        depth_1.hide();
        all_bt.show();
        all_close.hide();
    });
});