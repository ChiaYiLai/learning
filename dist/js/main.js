const { href } = window.location;
const navs = ['index', 'map', 'support', 'plans', 'faq', 'contact'];
navs.map(nav => {
    if (href.includes(nav)) $(`#${nav}`).addClass('active').siblings().removeClass('active');
});

$('.btn-nav-main').on('click', function() {
    $('body').toggleClass('open-nav-main');
});

$('.box-toggle').on('click', function() {
    $(this).closest('.box-wrap').toggleClass('close');
});

$('.btn-more').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.box-more').addClass('open');
});

if ($('#index-page').hasClass('main-main')) {
    // var newsModal = new bootstrap.Modal(document.getElementById('modal-news'), {
    //     keyboard: false
    // })

    // $('.btn-news').on('click', function(e) {
    //     e.preventDefault();
    //     newsModal.show();
    //     const text = $(this).closest('li').find('p').text();
    //     $('#modal-news-body').text(text);
    // });

    $('.btn-daily').on('click', function(e) {
        e.preventDefault();
        $(this).closest('li').addClass('open');
    });

    $('.btn-show-all').on('click', function(e) {
        e.preventDefault();
        $(this).prev('ul').addClass('show-all');
        $(this).hide();
    });
}

$('.btn-more-info').hover(function() {
    $(this).parent().next('.more-info').slideDown();
});

$('.btn-box-videos').on('click', function(e) {
    e.preventDefault();
    const target = $(this).data('target');
    $('.box-videos').slideUp();
    $(target).slideDown();
});

$('.btn-close-box-videos').on('click', function() {
    $(this).closest('li').slideUp();
});

$('.btn-scroll').on('click', function(e) {
    e.preventDefault();
    const headerH = $('.header-main').outerHeight();
    const { top } = $($.attr(this, 'href')).offset();
    const target = top - headerH - 20;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    $('body').removeClass('open-nav-main');
});
