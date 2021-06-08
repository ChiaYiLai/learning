const { href } = window.location;
const navs = ['index', 'school', 'colleges', 'plans', 'faq'];
navs.map(nav => {
    if (href.includes(nav)) $(`#${nav}`).addClass('active');
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

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    const headerH = $('.header-main').outerHeight();
    const { top } = $($.attr(this, 'href')).offset();
    const target = top - headerH - 20;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    $('body').removeClass('open-nav-main');
});

if ($('#index-page').hasClass('main-main')) {
    var newsModal = new bootstrap.Modal(document.getElementById('modal-news'), {
        keyboard: false
    })

    $('.btn-news').on('click', function(e) {
        e.preventDefault();
        newsModal.show();
        const text = $(this).closest('li').find('p').text();
        $('#modal-news-body').text(text);
    });

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





